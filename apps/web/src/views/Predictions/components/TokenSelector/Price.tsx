import { Text, TextProps } from '@pancakeswap/uikit'
import { formatBigIntToFixed } from '@pancakeswap/utils/formatBalance'
import { useMemo } from 'react'
import CountUp from 'react-countup'
import { Address } from 'viem'
import usePollOraclePrice from 'views/Predictions/hooks/usePollOraclePrice'

interface PriceProps extends TextProps {
  chainlinkOracleAddress: Address
}

export const Price: React.FC<React.PropsWithChildren<PriceProps>> = ({ chainlinkOracleAddress, ...props }) => {
  const { price } = usePollOraclePrice(chainlinkOracleAddress)

  const priceAsNumber = useMemo(() => parseFloat(formatBigIntToFixed(price, 4, 8)), [price])

  if (!Number.isFinite(priceAsNumber)) {
    return null
  }

  return (
    <CountUp start={0} preserveValue delay={0} end={priceAsNumber} prefix="$" decimals={4} duration={1}>
      {({ countUpRef }) => (
        <Text lineHeight="110%" style={{ alignSelf: 'center' }} bold fontSize="16px" {...props}>
          <span ref={countUpRef} />
        </Text>
      )}
    </CountUp>
  )
}
