import { Address, useAccount } from 'wagmi'
import { FetchStatus } from 'config/constants/types'
import { useCallback } from 'react'
import { useErc721CollectionContract } from 'hooks/useContract'
import { getNftApi, getNftsMarketData, getNftsOnChainMarketData } from 'state/nftMarket/helpers'
import { NftLocation, NftToken, TokenMarketData } from 'state/nftMarket/types'
import { useProfile } from 'state/profile/hooks'
import { NOT_ON_SALE_SELLER } from 'config/constants'
import { safeGetAddress } from 'utils'
import { useQuery } from '@tanstack/react-query'

const useNftOwn = (collectionAddress: Address | undefined, tokenId: string, marketData?: TokenMarketData) => {
  const { address: account } = useAccount()
  const collectionContract = useErc721CollectionContract(collectionAddress)
  const { isInitialized: isProfileInitialized, profile } = useProfile()

  const { data: tokenOwner } = useQuery(
    ['nft', 'ownerOf', collectionAddress, tokenId],
    async () => collectionContract.read.ownerOf([BigInt(tokenId)]),
    {
      enabled: Boolean(collectionAddress && tokenId),
    },
  )

  return useQuery(
    ['nft', 'own', collectionAddress, tokenId, marketData?.currentSeller],
    async () => {
      const nftIsProfilePic =
        tokenId === profile?.tokenId?.toString() && collectionAddress === profile?.collectionAddress
      const nftIsOnSale = marketData ? marketData?.currentSeller !== NOT_ON_SALE_SELLER : false
      if (nftIsOnSale) {
        return {
          isOwn: safeGetAddress(marketData?.currentSeller) === safeGetAddress(account),
          nftIsProfilePic,
          location: NftLocation.FORSALE,
        }
      }
      if (nftIsProfilePic) {
        return {
          isOwn: true,
          nftIsProfilePic,
          location: NftLocation.PROFILE,
        }
      }
      return {
        isOwn: safeGetAddress(tokenOwner) === safeGetAddress(account),
        nftIsProfilePic,
        location: NftLocation.WALLET,
      }
    },
    {
      enabled: Boolean(account && isProfileInitialized && tokenOwner && collectionAddress && tokenId),
    },
  )
}

export const useCompleteNft = (collectionAddress: Address | undefined, tokenId: string) => {
  const { data: nft, refetch: refetchNftMetadata } = useQuery(
    ['nft', collectionAddress, tokenId],
    async () => {
      const metadata = await getNftApi(collectionAddress, tokenId)
      if (metadata) {
        const basicNft: NftToken = {
          tokenId,
          collectionAddress,
          collectionName: metadata.collection.name,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
          attributes: metadata.attributes,
        }
        return basicNft
      }
      return null
    },
    {
      enabled: Boolean(collectionAddress && tokenId),
    },
  )

  const { data: marketData, refetch: refetchNftMarketData } = useQuery(
    ['nft', 'marketData', collectionAddress, tokenId],
    async () => {
      const [onChainMarketDatas, marketDatas] = await Promise.all([
        getNftsOnChainMarketData(collectionAddress, [tokenId]),
        getNftsMarketData({ collection: collectionAddress?.toLowerCase(), tokenId }, 1),
      ])
      const onChainMarketData = onChainMarketDatas[0]

      if (!marketDatas[0] && !onChainMarketData) return null

      if (!onChainMarketData) return marketDatas[0]

      return { ...marketDatas[0], ...onChainMarketData }
    },
    {
      enabled: Boolean(collectionAddress && tokenId),
    },
  )

  const { data: nftOwn, refetch: refetchNftOwn, status } = useNftOwn(collectionAddress, tokenId, marketData)

  const refetch = useCallback(async () => {
    await refetchNftMetadata()
    await refetchNftMarketData()
    await refetchNftOwn()
  }, [refetchNftMetadata, refetchNftMarketData, refetchNftOwn])

  return {
    combinedNft: nft ? { ...nft, marketData, location: nftOwn?.location ?? NftLocation.WALLET } : undefined,
    isOwn: nftOwn?.isOwn || false,
    isProfilePic: nftOwn?.nftIsProfilePic || false,
    isLoading: status !== FetchStatus.Fetched,
    refetch,
  }
}
