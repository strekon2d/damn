import BigNumber from 'bignumber.js'
import { BigNumber as EthersBigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'

import { IfoStatus, PoolIds } from 'config/constants/types'

// PoolCharacteristics retrieved from the contract
export interface PoolCharacteristics {
  raisingAmountPool: BigNumber
  offeringAmountPool: BigNumber
  limitPerUserInLP: BigNumber
  taxRate: number
  totalAmountPool: BigNumber
  sumTaxesOverflow: BigNumber

  // extends
  pointThreshold?: number
  vestingInformation: VestingInformation // TODO: Aptos
}

// IFO data unrelated to the user returned by useGetPublicIfoData
export interface PublicIfoData {
  isInitialized: boolean
  status: IfoStatus
  blocksRemaining: number
  secondsUntilStart: number
  progress: number
  secondsUntilEnd: number
  startBlockNum: number
  endBlockNum: number
  currencyPriceInUSD: BigNumber
  numberPoints: number
  thresholdPoints: EthersBigNumber // TODO: Aptos. Is this type correct?
  vestingStartTime: number // TODO: Aptos

  fetchIfoData: (currentBlock: number) => Promise<void>
  [PoolIds.poolBasic]: PoolCharacteristics // TODO: Aptos
  [PoolIds.poolUnlimited]: PoolCharacteristics
}

export interface VestingInformation {
  percentage: number
  cliff: number
  duration: number
  slicePeriodSeconds: number
}

// User specific pool characteristics
export interface UserPoolCharacteristics {
  amountTokenCommittedInLP: BigNumber // @contract: amountPool
  offeringAmountInToken: BigNumber // @contract: userOfferingAmountPool
  refundingAmountInLP: BigNumber // @contract: userRefundingAmountPool
  taxAmountInLP: BigNumber // @contract: userTaxAmountPool
  hasClaimed: boolean // @contract: claimedPool
  isPendingTx: boolean
  vestingReleased: BigNumber // TODO: Aptos
  vestingAmountTotal: BigNumber // TODO: Aptos
  isVestingInitialized?: boolean
  vestingId?: string
  vestingComputeReleasableAmount: BigNumber // TODO: Aptos
}

// Use only inside the useGetWalletIfoData hook
export interface WalletIfoState {
  isInitialized: boolean
  [PoolIds.poolBasic]: UserPoolCharacteristics // TODO: Aptos
  [PoolIds.poolUnlimited]: UserPoolCharacteristics
  ifoCredit?: {
    credit: BigNumber
    /**
     * credit left is the ifo credit minus the amount of `amountTokenCommittedInLP` in unlimited pool
     * minimum is 0
     */
    creditLeft: BigNumber
  }
}

// Returned by useGetWalletIfoData
export interface WalletIfoData extends WalletIfoState {
  allowance: BigNumber
  contract: Contract // TODO: Aptos
  setPendingTx: (status: boolean, poolId: PoolIds) => void
  setIsClaimed: (poolId: PoolIds) => void
  fetchIfoData: () => Promise<void>
  resetIfoData: () => void
}
