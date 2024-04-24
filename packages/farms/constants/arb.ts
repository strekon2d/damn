import { arbitrumTokens } from '@pancakeswap/tokens'
import { FeeAmount } from '@pancakeswap/v3-sdk'
import { getAddress } from 'viem'
import { defineFarmV3Configs } from '../src/defineFarmV3Configs'
import { FarmConfigV3, SerializedFarmConfig } from '../src/types'

const v3TopFixedLps: FarmConfigV3[] = [
  {
    pid: 43,
    lpAddress: '0x389938CF14Be379217570D8e4619E51fBDafaa21',
    token0: arbitrumTokens.weth,
    token1: arbitrumTokens.usdt,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 42,
    lpAddress: '0x7fCDC35463E3770c2fB992716Cd070B63540b947',
    token0: arbitrumTokens.weth,
    token1: arbitrumTokens.usdc,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 2,
    lpAddress: '0x0BaCc7a9717e70EA0DA5Ac075889Bd87d4C81197',
    token0: arbitrumTokens.weth,
    token1: arbitrumTokens.usdt,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 1,
    lpAddress: '0xd9e2a1a61B6E61b275cEc326465d417e52C1b95c',
    token0: arbitrumTokens.weth,
    token1: arbitrumTokens.usdc,
    feeAmount: FeeAmount.LOW,
  },
]

export const farmsV3 = defineFarmV3Configs([
  ...v3TopFixedLps,
  {
    pid: 47,
    lpAddress: '0xB19005B42E2Dcc65FB6A5598db329EDFe365A0b2',
    token0: arbitrumTokens.arb,
    token1: arbitrumTokens.usdt,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 46,
    lpAddress: '0x93CCe474015007B38dA0eceA96671EE4dc3d40Ad',
    token0: arbitrumTokens.arb,
    token1: arbitrumTokens.usdc,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 45,
    lpAddress: '0x11d53EC50bc8F54B9357fbFe2A7dE034FC00f8b3',
    token0: arbitrumTokens.weth,
    token1: arbitrumTokens.arb,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 44,
    lpAddress: '0x4bfc22A4dA7f31F8a912a79A7e44a822398b4390',
    token0: arbitrumTokens.wbtc,
    token1: arbitrumTokens.weth,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 41,
    lpAddress: '0x35D85D531BE7159cB6f92E8B9CeaF04eC28c6ad9',
    token0: arbitrumTokens.usdv,
    token1: arbitrumTokens.usdplus,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 40,
    lpAddress: '0x8a06339Abd7499Af755DF585738ebf43D5D62B94',
    token0: arbitrumTokens.usdtplus,
    token1: arbitrumTokens.usdplus,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 39,
    lpAddress: '0x721F37495cD70383B0A77Bf1eB8f97eef29498Bb',
    token0: arbitrumTokens.usdc,
    token1: arbitrumTokens.usdplus,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 38,
    lpAddress: '0x753bA05488Cac9B3f7D59Ff7D3f13F31bB5eDf22',
    token0: arbitrumTokens.weth,
    token1: arbitrumTokens.wbnb,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 37,
    lpAddress: '0x714D48cb99b87F274B33A89fBb16EaD191B40b6C',
    token0: arbitrumTokens.ovn,
    token1: arbitrumTokens.usdplus,
    feeAmount: FeeAmount.HIGH,
  },
  {
    pid: 36,
    lpAddress: '0xdAA80a051E22A7f7b0cfC33Aa29572fbDE65183E',
    token0: arbitrumTokens.weth,
    token1: arbitrumTokens.ethplus,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 35,
    lpAddress: '0xd01075f7314a6436e8B74fc18069848229D0c555',
    token0: arbitrumTokens.usdplus,
    token1: arbitrumTokens.usdce,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 34,
    lpAddress: '0x06c75011479E47280e8B7E72E9e0315C8b3A634d',
    token0: arbitrumTokens.ethplus,
    token1: arbitrumTokens.usdplus,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 33,
    lpAddress: '0xb9c2d906f94b27bC403Ab76B611D2C4490c2ae3F',
    token0: arbitrumTokens.usdtplus,
    token1: arbitrumTokens.usdplus,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 32,
    lpAddress: '0xf0B860d338E8B5199606322653B83A166d96E417',
    token0: arbitrumTokens.xai,
    token1: arbitrumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 3,
    lpAddress: '0x0d7c4b40018969f81750d0a164c3839a77353EFB',
    token0: arbitrumTokens.weth,
    token1: arbitrumTokens.arb,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 4,
    lpAddress: '0x7e928afb59f5dE9D2f4d162f754C6eB40c88aA8E',
    token0: arbitrumTokens.usdc,
    token1: arbitrumTokens.usdt,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 5,
    lpAddress: '0xF5Fac36c2429e1Cf84D4aBACdB18477Ef32589c9',
    token0: arbitrumTokens.cake,
    token1: arbitrumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 6,
    lpAddress: '0xD58522653D3F368D76d453Bc4C80CD7Fb36AC786',
    token0: arbitrumTokens.weth,
    token1: arbitrumTokens.lvl,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 7,
    lpAddress: '0x5e3C3a063cc9A4AEB5310C7faDc2A98aEbDD245d',
    token0: arbitrumTokens.weth,
    token1: arbitrumTokens.mgp,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 8,
    lpAddress: '0x9fFCA51D23Ac7F7df82da414865Ef1055E5aFCc3',
    token0: arbitrumTokens.arb,
    token1: arbitrumTokens.usdc,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 9,
    lpAddress: '0x81D1cc282e9a097115E59F67B9D81d4d1d00AC51',
    token0: arbitrumTokens.arb,
    token1: arbitrumTokens.usdt,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 10,
    lpAddress: '0x1Cb2892038867aDFa78CCfc6C3fB89b1dA558243',
    token0: arbitrumTokens.pendle,
    token1: arbitrumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 11,
    lpAddress: '0xF5BFda16f9E57F0B7a67C57b42407C33C31349B6',
    token0: arbitrumTokens.weth,
    token1: arbitrumTokens.gmx,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 12,
    lpAddress: '0x0Ba3d55678C019B8101061855fe4Ea8D3ECE784f',
    token0: arbitrumTokens.weth,
    token1: arbitrumTokens.link,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 13,
    lpAddress: '0xC9057e7b625D293c0E308Ce344357E2d23174CE6',
    token0: arbitrumTokens.kuji,
    token1: arbitrumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 14,
    lpAddress: '0x6a23ec7A203F546d7D62FA667A652EC55197Ea6F',
    token0: arbitrumTokens.usdc,
    token1: arbitrumTokens.link,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 15,
    lpAddress: '0x278566F0ad52fbF36eb4Ba16d2171ed6e6e84e8a',
    token0: arbitrumTokens.weth,
    token1: arbitrumTokens.eqb,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 16,
    lpAddress: '0x3C2bf5C0Be7be4919fae1330b748E89f165259D7',
    token0: arbitrumTokens.usdc,
    token1: arbitrumTokens.axlUSDC,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 17,
    lpAddress: '0x54076C901D4fDF76C1fA1F77FAFC3FC1022ADBE5',
    token0: arbitrumTokens.wbtc,
    token1: arbitrumTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 18,
    lpAddress: '0xd5d1F85E65Ce58a4782852F4A845b1d6Ca71F1a2',
    token0: arbitrumTokens.usdc,
    token1: arbitrumTokens.dai,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 19,
    lpAddress: '0x3fFCa56A99f477dd57A4a5d8799F4DA613C9956B',
    token0: arbitrumTokens.axlUSDC,
    token1: arbitrumTokens.usdt,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 20,
    lpAddress: '0xF3d0d1d3788FBd1F327149D30a4Eb7744861f05d',
    token0: arbitrumTokens.stg,
    token1: arbitrumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 21,
    lpAddress: '0x7767FBfd90b557dc56554058E7c05c9fAa600F8F',
    token0: arbitrumTokens.stg,
    token1: arbitrumTokens.arb,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 22,
    lpAddress: '0x4573ef50dbb79769eF66B1b16dcDB60652884ba6',
    token0: arbitrumTokens.stg,
    token1: arbitrumTokens.usdc,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 23,
    lpAddress: '0x0CAA927059CB8db37CEefcB9e18c4FC7Efef9655',
    token0: arbitrumTokens.rdnt,
    token1: arbitrumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 24,
    lpAddress: '0x46e3faBB9f963f84E9d23Ca2E332A3Ced59604a6',
    token0: arbitrumTokens.magic,
    token1: arbitrumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 25,
    lpAddress: '0x3ABBbBb4C254b9327F1a0580BdbCcb51B0b5Fb08',
    token0: arbitrumTokens.wstETH,
    token1: arbitrumTokens.weth,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 26,
    lpAddress: '0xC75908421566eA77A73B14D9cD0479C568f2B7A7',
    token0: arbitrumTokens.weth,
    token1: arbitrumTokens.rETH,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 27,
    lpAddress: '0xb901fc9D0D31C9A15DB69C616D31e19fF39b0df6',
    token0: arbitrumTokens.stEUR,
    token1: arbitrumTokens.usdc,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 28,
    lpAddress: '0xbA339883104bf9D1e894E1640E21E261bcacE6DD',
    token0: arbitrumTokens.kuji,
    token1: arbitrumTokens.usdc,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 29,
    lpAddress: '0x98cffCe9A35132A42Da9582cCed57Db98C07A690',
    token0: arbitrumTokens.dmt,
    token1: arbitrumTokens.usdc,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 30,
    lpAddress: '0x060d8a5a7C03882e33AcA8FC304BabE869e21Ee9',
    token0: arbitrumTokens.grai,
    token1: arbitrumTokens.usdc,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 31,
    lpAddress: '0x964f1c58aD7058F352fAEd049A4674c1990355AB',
    token0: arbitrumTokens.weth,
    token1: arbitrumTokens.swETH,
    feeAmount: FeeAmount.LOWEST,
  },
])

const farms: SerializedFarmConfig[] = [
  {
    pid: 2,
    lpSymbol: 'mDLP-DLP LP',
    lpAddress: '0x0db5e247ab73FBaE16d9301f2977f974EC0AA336',
    token: arbitrumTokens.dlp,
    quoteToken: arbitrumTokens.mdlp,
    stableSwapAddress: '0xd0f0be815a76eFE677c92b07b39a5e972BAf22bD',
    infoStableSwapAddress: '0x58B2F00f74a1877510Ec37b22f116Bf5D63Ab1b0',
    stableLpFee: 0.00125,
    stableLpFeeRateOfTotalFee: 0.5,
    bCakeWrapperAddress: '0xC6B6926ef8B7218F054d64B52Ac455aEd22D690B',
    allocPoint: 1,
  },
  {
    pid: 178,
    lpSymbol: 'mPENDLE-PENDLE LP',
    lpAddress: '0x1A2329546f11e4fE55b853D98Bba2c4678E3105A',
    token: arbitrumTokens.pendle,
    quoteToken: arbitrumTokens.mpendle,
    stableSwapAddress: '0x73ed25e04Aa673ddf7411441098fC5ae19976CE0',
    infoStableSwapAddress: '0x58B2F00f74a1877510Ec37b22f116Bf5D63Ab1b0',
    stableLpFee: 0.00125,
    stableLpFeeRateOfTotalFee: 0.5,
    bCakeWrapperAddress: '0x7Fa4536b3E78643E027Dc34bB5A055517B4D9096',
    allocPoint: 1,
  },
].map(
  (p) =>
    ({
      ...p,
      token: p.token.serialize,
      quoteToken: p.quoteToken.serialize,
      lpAddress: p.lpAddress ? getAddress(p.lpAddress) : '0x',
    } as SerializedFarmConfig),
)
export default farms
