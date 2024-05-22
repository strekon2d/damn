import {
  AllowanceTransfer,
  Permit,
  Permit2ABI,
  generatePermitTypedData,
  getPermit2Address,
} from '@pancakeswap/permit2-sdk'
import { Token } from '@pancakeswap/swap-sdk-core'
import { Permit2Signature } from '@pancakeswap/universal-router-sdk'
import { useCallback } from 'react'
import { publicClient } from 'utils/viem'
import { Address, isHex } from 'viem'
import { useSignTypedData, useWalletClient } from 'wagmi'
import useAccountActiveChain from './useAccountActiveChain'
import { useIsContract } from './useIsContract'

const useAllowanceTransferPermit = () => {
  const { account, chainId } = useAccountActiveChain()
  const { data: walletClient } = useWalletClient()

  return useCallback(
    async (permit: Permit) => {
      if (!chainId) throw new Error('PERMIT: missing chainId')
      if (!account) throw new Error('PERMIT: missing account')
      const permit2Address = getPermit2Address(chainId)
      if (!permit2Address) throw new Error('PERMIT: missing permit2Address')

      const { amount, token, expiration } = permit.details

      const { request } = await publicClient({ chainId }).simulateContract({
        address: permit2Address,
        abi: Permit2ABI,
        functionName: 'approve',
        args: [token as Address, permit.spender as Address, BigInt(amount), Number(expiration)],
      })
      await walletClient?.writeContract(request)
    },
    [account, chainId, walletClient],
  )
}

export const useWritePermit = (token?: Token, spender?: Address, nonce?: number) => {
  const { account, chainId } = useAccountActiveChain()
  const safeWritePermit = useAllowanceTransferPermit()
  const { signTypedDataAsync } = useSignTypedData()
  const isSmartAccount = useIsContract(account)

  return useCallback(async (): Promise<Permit2Signature> => {
    if (!chainId) throw new Error('PERMIT: missing chainId')
    if (!token) throw new Error('PERMIT: missing token')
    if (!spender) throw new Error('PERMIT: missing spender')
    if (!account) throw new Error('PERMIT: missing owner')
    if (nonce === undefined) throw new Error('PERMIT: missing nonce')

    const permit: Permit = generatePermitTypedData(token, nonce, spender)

    if (isSmartAccount) {
      await safeWritePermit(permit)
      return {
        ...permit,
        signature: '0x',
      }
    }

    const {
      domain,
      types,
      values: message,
    } = AllowanceTransfer.getPermitData(permit, getPermit2Address(chainId), chainId)

    let signature = await signTypedDataAsync({
      account,
      domain,
      primaryType: 'PermitSingle',
      types,
      message,
    })

    // @hack: trust extension wallet doesn't prefix the signature with 0x
    signature = isHex(signature) ? signature : `0x${signature}`

    return {
      ...permit,
      signature,
    }
  }, [account, chainId, isSmartAccount, nonce, safeWritePermit, signTypedDataAsync, spender, token])
}
