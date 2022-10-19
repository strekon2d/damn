import { useAccount, useNetwork, useProvider } from '@pancakeswap/awgmi'
import { useIsMounted } from '@pancakeswap/hooks'
import { AutoColumn, Button, Text, useToast } from '@pancakeswap/uikit'
import { FaucetClient } from 'aptos'
import { useAllTokens } from 'hooks/Tokens'
import { useMemo } from 'react'

export function TestTokens() {
  const allTokens = useAllTokens()
  const { chain } = useNetwork()
  const provider = useProvider()
  const { account, connector } = useAccount()

  const isMounted = useIsMounted()

  const faucetClient = useMemo(() => {
    if (!chain || !chain.testnet) return null
    return new FaucetClient(chain.nodeUrls.default, chain.faucetUrl)
  }, [chain])

  const { toastSuccess, toastError, toastInfo } = useToast()

  if (!account || !faucetClient || !isMounted) {
    return null
  }

  const faucet = () => {
    return faucetClient
      .fundAccount(account.address, 20_000_000)
      .then((v) => toastSuccess(JSON.stringify(v)))
      .catch((err) => toastError(JSON.stringify({ err })))
  }

  const mint = async (coinType: string, module = 'devnet_coins') => {
    if (connector) {
      const pending = await connector.signAndSubmitTransaction({
        type_arguments: [coinType],
        arguments: ['100000000'],
        function: `0x08c805723ebc0a7fc5b7d3e7b75d567918e806b3461cb9fa21941a9edc0220bf::${module}::mint_to_wallet`,
      })
      toastInfo('Pending', pending.hash)
      try {
        const result = await provider.waitForTransactionWithResult(pending.hash, { checkSuccess: true })
        toastSuccess('Success', result.hash)
      } catch (error) {
        toastError(JSON.stringify({ error }))
      }
    }
  }

  return (
    <AutoColumn style={{ alignSelf: 'flex-end' }}>
      <Text textAlign="center" bold color="textSubtle">
        Faucet Dev Coin
      </Text>
      <Button onClick={faucet} variant="text">
        APT
      </Button>
      {Object.values(allTokens).map((token) => {
        return (
          <Button variant="text" key={token.address} onClick={() => mint(token.address)}>
            {token.name}
          </Button>
        )
      })}
      <Button
        variant="text"
        onClick={() =>
          mint('0x8c805723ebc0a7fc5b7d3e7b75d567918e806b3461cb9fa21941a9edc0220bf::pancake::Cake', 'pancake')
        }
      >
        Cake
      </Button>
    </AutoColumn>
  )
}
