import { useTranslation } from '@pancakeswap/localization'
import { Currency, CurrencyAmount } from '@pancakeswap/sdk'
import { Button, CurrencyInput, Flex, ModalV2, RowBetween, Text, useToast } from '@pancakeswap/uikit'
import tryParseAmount from '@pancakeswap/utils/tryParseAmount'
import { FeeAmount } from '@pancakeswap/v3-sdk'
import { ToastDescriptionWithTx } from 'components/Toast'
import { ApprovalState, useApproveCallback } from 'hooks/useApproveCallback'
import useCatchTxError from 'hooks/useCatchTxError'
import { usePositionManagerWrapperContract } from 'hooks/useContract'
import { memo, useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'

import { StyledModal } from './StyledModal'
import { FeeTag } from './Tags'

interface Props {
  isOpen?: boolean
  onDismiss?: () => void

  vaultName: string
  feeTier: FeeAmount
  currencyA: Currency
  currencyB: Currency
  ratio: number
  allowDepositToken0: boolean
  allowDepositToken1: boolean
  onAmountChange?: (info: { value: string; currency: Currency; otherAmount: CurrencyAmount<Currency> }) => {
    otherAmount: CurrencyAmount<Currency>
  }
  contractAddress: `0x${string}`
  // TODO: return data
  onAdd?: (params: { amountA: CurrencyAmount<Currency>; amountB: CurrencyAmount<Currency> }) => Promise<void>
}

const StyledCurrencyInput = styled(CurrencyInput)`
  flex: 1;
`

export const AddLiquidity = memo(function AddLiquidity({
  isOpen,
  vaultName,
  onDismiss,
  currencyA,
  currencyB,
  feeTier,
  onAmountChange,
  allowDepositToken1,
  allowDepositToken0,
  contractAddress,
  ratio,
}: Props) {
  const [valueA, setValueA] = useState('')
  const [valueB, setValueB] = useState('')
  const { t } = useTranslation()
  const tokenPairName = useMemo(() => `${currencyA.symbol}-${currencyB.symbol}`, [currencyA, currencyB])

  const onInputChange = useCallback(
    ({
      value,
      currency,
      otherValue,
      otherCurrency,
      setValue,
      setOtherValue,
      isToken0,
    }: {
      value: string
      currency: Currency
      otherValue: string
      otherCurrency: Currency
      setValue: (value: string) => void
      setOtherValue: (value: string) => void
      isToken0: boolean
    }) => {
      setValue(value)
      setOtherValue((Number(value) * (isToken0 ? ratio : 1 / ratio)).toString())
    },
    [ratio],
  )

  const onCurrencyAChange = useCallback(
    (value: string) =>
      onInputChange({
        value,
        currency: currencyA,
        otherValue: valueB,
        otherCurrency: currencyB,
        setValue: setValueA,
        setOtherValue: setValueB,
        isToken0: true,
      }),
    [currencyA, currencyB, valueB, onInputChange],
  )

  const onCurrencyBChange = useCallback(
    (value: string) =>
      onInputChange({
        value,
        currency: currencyB,
        otherValue: valueA,
        otherCurrency: currencyA,
        setValue: setValueB,
        setOtherValue: setValueA,
        isToken0: false,
      }),
    [currencyA, currencyB, valueA, onInputChange],
  )

  const amountA = useMemo(
    () => tryParseAmount(valueA, currencyA) || CurrencyAmount.fromRawAmount(currencyA, '0'),
    [valueA, currencyA],
  )
  const amountB = useMemo(
    () => tryParseAmount(valueB, currencyB) || CurrencyAmount.fromRawAmount(currencyB, '0'),
    [valueB, currencyB],
  )
  // TODO: mock
  // const share = new Percent(158, 10000)
  // const apr = new Percent(4366, 10000)

  return (
    <ModalV2 onDismiss={onDismiss} isOpen={isOpen}>
      <StyledModal title={t('Add Liquidity')}>
        <RowBetween>
          <Text color="textSubtle">{t('Adding')}:</Text>
          <Flex flexDirection="row" justifyContent="flex-end" alignItems="center">
            <Text color="text" bold>
              {tokenPairName}
            </Text>
            <Text color="text" ml="0.25em">
              {vaultName}
            </Text>
            <FeeTag feeAmount={feeTier} ml="0.25em" />
          </Flex>
        </RowBetween>
        {allowDepositToken0 && (
          <Flex mt="1em">
            <StyledCurrencyInput currency={currencyA} balance={amountA} value={valueA} onChange={onCurrencyAChange} />
          </Flex>
        )}
        {allowDepositToken1 && (
          <Flex mt="1em">
            <StyledCurrencyInput currency={currencyB} balance={amountA} value={valueB} onChange={onCurrencyBChange} />
          </Flex>
        )}
        <Flex mt="1.5em" flexDirection="column">
          <RowBetween>
            <Text color="text">{t('Your share in the vault')}:</Text>
            <Text color="text">-%</Text>
            {/* <Text color="text">{formatPercent(share)}%</Text> */}
          </RowBetween>
          <RowBetween>
            <Text color="text">{t('APR')}:</Text>
            <Text color="text">-%</Text>
            {/* <Text color="text">{formatPercent(apr)}%</Text> */}
          </RowBetween>
        </Flex>
        <Flex mt="1.5em" flexDirection="column">
          <AddLiquidityButton
            amountA={allowDepositToken0 ? amountA : null}
            amountB={allowDepositToken1 ? amountB : null}
            contractAddress={contractAddress}
          />
        </Flex>
      </StyledModal>
    </ModalV2>
  )
})

interface AddLiquidityButtonProps {
  amountA: CurrencyAmount<Currency>
  amountB: CurrencyAmount<Currency>
  contractAddress: `0x${string}`
}

export const AddLiquidityButton = memo(function AddLiquidityButton({
  amountA,
  amountB,
  contractAddress,
}: AddLiquidityButtonProps) {
  const { t } = useTranslation()
  const { approvalState: approvalStateToken0, approveCallback: approveCallbackToken0 } = useApproveCallback(
    amountA,
    contractAddress,
  )
  const { approvalState: approvalStateToken1, approveCallback: approveCallbackToken1 } = useApproveCallback(
    amountB,
    contractAddress,
  )
  const posisitonManagerWrapperContract = usePositionManagerWrapperContract(contractAddress)
  const { fetchWithCatchTxError, loading: pendingTx } = useCatchTxError()
  const { toastSuccess } = useToast()

  const mintThenDeposit = useCallback(async () => {
    const receipt = await fetchWithCatchTxError(() =>
      posisitonManagerWrapperContract.write.mintThenDeposit(
        [amountA?.numerator ?? 0n, amountB?.numerator ?? 0n, '0x'],
        {},
      ),
    )
    if (receipt?.status) {
      toastSuccess(
        `${t('Staked')}!`,
        <ToastDescriptionWithTx txHash={receipt.transactionHash}>
          {t('Your %symbol% earnings have been sent to your wallet!', { symbol: 'CAKE' })}
        </ToastDescriptionWithTx>,
      )
    }
  }, [amountA, amountB, posisitonManagerWrapperContract, t, toastSuccess, fetchWithCatchTxError])
  return (
    <>
      {amountA && approvalStateToken0 === ApprovalState.NOT_APPROVED && (
        <Button variant="primary" width="100%" onClick={approveCallbackToken0}>
          {t('Approve %symbol%', {
            symbol: amountA.currency.symbol,
          })}
        </Button>
      )}
      {amountB && approvalStateToken1 === ApprovalState.NOT_APPROVED && (
        <Button variant="primary" width="100%" mt="0.5em" onClick={approveCallbackToken1}>
          {t('Approve %symbol%', {
            symbol: amountB.currency.symbol,
          })}
        </Button>
      )}
      <Button
        mt="0.5em"
        variant="primary"
        width="100%"
        onClick={() => {
          mintThenDeposit()
        }}
        disabled={
          (amountA && approvalStateToken0 !== ApprovalState.APPROVED) ||
          (amountB && approvalStateToken1 !== ApprovalState.APPROVED)
        }
      >
        {t('Confirm')}
      </Button>
    </>
  )
})
