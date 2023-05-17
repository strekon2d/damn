import { bscTokens } from '@pancakeswap/tokens'
import { FeeAmount, Pool } from '@pancakeswap/v3-sdk'
import { CAKE_BNB_LP_MAINNET } from './common'
import { defineFarmV3Configs } from '../src/defineFarmV3Configs'
import { SerializedFarmConfig } from '..'

export const farmsV3 = defineFarmV3Configs([
  {
    pid: 1,
    token0: bscTokens.cake,
    token1: bscTokens.wbnb,
    lpAddress: '0x133B3D95bAD5405d14d53473671200e9342896BF',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 2,
    token0: bscTokens.cake,
    token1: bscTokens.busd,
    lpAddress: '0x9f6EB6903C1277c8f02d71F8814dc9998199af1D',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 3,
    token0: bscTokens.cake,
    token1: bscTokens.usdt,
    lpAddress: '0x7f51c8AaA6B0599aBd16674e2b17FEc7a9f674A1',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 4,
    token0: bscTokens.wbnb,
    token1: bscTokens.busd,
    lpAddress: '0x85FAac652b707FDf6907EF726751087F9E0b6687',
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 5,
    token0: bscTokens.usdt,
    token1: bscTokens.wbnb,
    lpAddress: '0x36696169C63e42cd08ce11f5deeBbCeBae652050',
    feeAmount: FeeAmount.LOW,
  },
  // keep those farms on top
  {
    pid: 40,
    token0: bscTokens.ush,
    token1: bscTokens.bnb,
    lpAddress: Pool.getAddress(bscTokens.ush, bscTokens.bnb, FeeAmount.HIGH),
    feeAmount: FeeAmount.HIGH,
  },
  {
    pid: 39,
    token0: bscTokens.id,
    token1: bscTokens.usdt,
    lpAddress: Pool.getAddress(bscTokens.id, bscTokens.usdt, FeeAmount.MEDIUM),
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 38,
    token0: bscTokens.bnb,
    token1: bscTokens.gal,
    lpAddress: Pool.getAddress(bscTokens.gal, bscTokens.bnb, FeeAmount.MEDIUM),
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 37,
    token0: bscTokens.bnbx,
    token1: bscTokens.bnb,
    lpAddress: '0x77B27c351B13Dc6a8A16Cc1d2E9D5e7F9873702E',
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 36,
    token0: bscTokens.peel,
    token1: bscTokens.busd,
    lpAddress: '0x08eAbc3d13Fb4bdFFD1F42a5644C1c826aCF62c0',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 35,
    token0: bscTokens.revv,
    token1: bscTokens.edu,
    lpAddress: '0x07b2d7379427d9A5AC96D704D53983b41D9d0082',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 34,
    token0: bscTokens.wbnb,
    token1: bscTokens.edu,
    lpAddress: '0xFB5C2D2f2cF7741ba1A7Be2FfAbED248BD9b888e',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 33,
    token0: bscTokens.usdt,
    token1: bscTokens.edu,
    lpAddress: '0x6425bC30D0751aF5181fC74a50e760b0e4a19811',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 32,
    token0: bscTokens.eth,
    token1: bscTokens.wbeth,
    lpAddress: Pool.getAddress(bscTokens.wbeth, bscTokens.eth, FeeAmount.LOW),
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 31,
    token0: bscTokens.cake,
    token1: bscTokens.zbc,
    lpAddress: '0x63ca58e7c6bF06B06cBbEc2a83bf6AA8f8f9f77B',
    feeAmount: FeeAmount.HIGH,
  },
  {
    pid: 30,
    token0: bscTokens.usdt,
    token1: bscTokens.champ,
    lpAddress: '0x2dA32920A775CF121004551AbC92F385B3C0Dab9',
    feeAmount: FeeAmount.HIGH,
  },
  {
    pid: 29,
    token0: bscTokens.unshETH,
    token1: bscTokens.ush,
    lpAddress: Pool.getAddress(bscTokens.unshETH, bscTokens.ush, FeeAmount.MEDIUM),
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 28,
    token0: bscTokens.unshETH,
    token1: bscTokens.usdt,
    lpAddress: Pool.getAddress(bscTokens.unshETH, bscTokens.usdt, FeeAmount.MEDIUM),
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 27,
    token0: bscTokens.cake,
    token1: bscTokens.pstake,
    lpAddress: Pool.getAddress(bscTokens.pstake, bscTokens.cake, FeeAmount.MEDIUM),
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 26,
    token0: bscTokens.wbnb,
    token1: bscTokens.stkbnb,
    lpAddress: Pool.getAddress(bscTokens.stkbnb, bscTokens.wbnb, FeeAmount.LOW),
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 25,
    token0: bscTokens.unw,
    token1: bscTokens.wbnb,
    lpAddress: '0xb4E9DeA6105089f15685508B8EF2e7f7F5A1B16D',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 24,
    token0: bscTokens.wbnb,
    token1: bscTokens.mgp,
    lpAddress: '0x088464e4E8CC54BF91180cBb8c61C68AeCC74166',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 23,
    token0: bscTokens.usdt,
    token1: bscTokens.axl,
    lpAddress: '0xD10612A288Bd5024Db6a47663750996d176130Fe',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 22,
    token0: bscTokens.usdt,
    token1: bscTokens.gq,
    lpAddress: '0x07003daEbc432ecec26309cCd1391BBBF06cC890',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 20,
    token0: bscTokens.eth,
    token1: bscTokens.ankrETH,
    lpAddress: Pool.getAddress(bscTokens.eth, bscTokens.ankrETH, FeeAmount.LOW),
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 21,
    token0: bscTokens.ankrbnb,
    token1: bscTokens.bnb,
    lpAddress: '0xCf57DaADfBE05A04440C502967cE5209F64747eB',
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 6,
    token0: bscTokens.btcb,
    token1: bscTokens.busd,
    lpAddress: '0x369482C78baD380a036cAB827fE677C1903d1523',
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 7,
    token0: bscTokens.usdt,
    token1: bscTokens.btcb,
    lpAddress: '0x46Cf1cF8c69595804ba91dFdd8d6b960c9B0a7C4',
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 8,
    token0: bscTokens.eth,
    token1: bscTokens.btcb,
    lpAddress: '0xD4dCA84E1808da3354924cD243c66828cf775470',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 9,
    token0: bscTokens.btcb,
    token1: bscTokens.wbnb,
    lpAddress: '0xFC75f4E78bf71eD5066dB9ca771D4CcB7C1264E0',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 10,
    token0: bscTokens.eth,
    token1: bscTokens.wbnb,
    lpAddress: '0x7d05c84581f0C41AD80ddf677A510360bae09a5A',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 11,
    token0: bscTokens.eth,
    token1: bscTokens.usdc,
    lpAddress: '0x539e0EBfffd39e54A0f7E5F8FEc40ade7933A664',
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 12,
    token0: bscTokens.usdt,
    token1: bscTokens.usdc,
    lpAddress: '0x92b7807bF19b7DDdf89b706143896d05228f3121',
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 13,
    token0: bscTokens.usdc,
    token1: bscTokens.busd,
    lpAddress: '0x22536030B9cE783B6Ddfb9a39ac7F439f568E5e6',
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 14,
    token0: bscTokens.usdt,
    token1: bscTokens.busd,
    lpAddress: '0x4f3126d5DE26413AbDCF6948943FB9D0847d9818',
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 15,
    token0: bscTokens.wbnb,
    token1: bscTokens.link,
    lpAddress: '0x0E1893BEEb4d0913d26B9614B18Aea29c56d94b9',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 16,
    token0: bscTokens.xrp,
    token1: bscTokens.wbnb,
    lpAddress: '0xd15B00E81F98A7DB25f1dC1BA6E983a4316c4CaC',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 17,
    token0: bscTokens.trx,
    token1: bscTokens.busd,
    lpAddress: '0x71f51e5070C7070B2d079c087BfA814642Fcef58',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 18,
    token0: bscTokens.ada,
    token1: bscTokens.wbnb,
    lpAddress: '0x673516E510d702Ab5F2bBf0c6B545111a85f7ea7',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 19,
    token0: bscTokens.dot,
    token1: bscTokens.wbnb,
    lpAddress: '0x62F0546cBcd684F7C394D8549119e072527C41Bc',
    feeAmount: FeeAmount.MEDIUM,
  },
])

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'CAKE',
    lpAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    token: bscTokens.syrup,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 2,
    v1pid: 251,
    lpSymbol: 'CAKE-BNB LP',
    lpAddress: CAKE_BNB_LP_MAINNET,
    token: bscTokens.cake,
    quoteToken: bscTokens.wbnb,
    boosted: true,
  },
  {
    pid: 39,
    v1pid: 389,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddress: '0x804678fa97d91B974ec2af3c843270886528a9E6',
    boosted: true,
    token: bscTokens.cake,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 47,
    v1pid: 422,
    lpSymbol: 'CAKE-USDT LP',
    lpAddress: '0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b',
    token: bscTokens.cake,
    quoteToken: bscTokens.usdt,
    boosted: true,
  },
  {
    pid: 3,
    v1pid: 252,
    lpSymbol: 'BUSD-BNB LP',
    lpAddress: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    token: bscTokens.busd,
    quoteToken: bscTokens.wbnb,
  },
  //    * V3 by order of release (some may be out of PID order due to multiplier boost)
  {
    pid: 163,
    lpSymbol: 'HAY-USDT LP',
    lpAddress: '0xB2Aa63f363196caba3154D4187949283F085a488',
    token: bscTokens.hay,
    quoteToken: bscTokens.usdt,
    stableSwapAddress: '0xb1Da7D2C257c5700612BdE35C8d7187dc80d79f1',
    infoStableSwapAddress: '0x150c8AbEB487137acCC541925408e73b92F39A50',
    stableLpFee: 0.0002,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    pid: 160,
    lpSymbol: 'RDNT-BNB LP',
    lpAddress: '0x346575fC7f07E6994D76199E41D13dC1575322E1',
    token: bscTokens.rdnt,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 158,
    lpSymbol: 'ID-USDT LP',
    lpAddress: '0x9Ed9E9aA51670A3210fD6078024c21ec6c1d61d9',
    token: bscTokens.id,
    quoteToken: bscTokens.usdt,
  },
  {
    pid: 157,
    lpSymbol: 'UNW-BNB LP',
    lpAddress: '0x5CF69395345614e349b2117dBC5F6cf5A500a43d',
    token: bscTokens.unw,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 156,
    lpSymbol: 'LVL-BNB LP',
    lpAddress: '0x70f16782010fa7dDf032A6aaCdeed05ac6B0BC85',
    token: bscTokens.lvl,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 155,
    lpSymbol: 'CAPS-BNB LP',
    lpAddress: '0x9Bafeea2A8bC72b1910AB102ca5F8eCa6a67D929',
    token: bscTokens.caps,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 153,
    lpSymbol: 'agEUR-USDT LP',
    lpAddress: '0x1DEC73074cE9cAbEd47D7748410277109B23Cda2',
    token: bscTokens.ageur,
    quoteToken: bscTokens.usdt,
  },
  {
    pid: 152,
    lpSymbol: 'BNBx-BNB LP',
    lpAddress: '0x92357Ab9003CA881E08e32CDAE59B10B3161b05C',
    token: bscTokens.bnbx,
    quoteToken: bscTokens.wbnb,
    stableSwapAddress: '0x9c138bE1D76ee4C5162E0fe9D4eEA5542a23D1bD',
    infoStableSwapAddress: '0x150c8AbEB487137acCC541925408e73b92F39A50',
    stableLpFee: 0.0002,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    pid: 151,
    lpSymbol: 'WBNB-stkBNB LP',
    lpAddress: '0x9976f5c8BEfDee650226d5571d5F5551e8722b75',
    token: bscTokens.stkbnb,
    quoteToken: bscTokens.wbnb,
    stableSwapAddress: '0x0b03e3d6Ec0c5e5bBf993dED8D947C6fb6eEc18D',
    infoStableSwapAddress: '0x150c8AbEB487137acCC541925408e73b92F39A50',
    stableLpFee: 0.0002,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    pid: 150,
    lpSymbol: 'APX-BNB LP',
    lpAddress: '0xAf839f4D3620a1EED00cCc21dDC01119C26a75E1',
    token: bscTokens.apx,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 148,
    lpSymbol: 'CSIX-CAKE LP',
    lpAddress: '0x43C2aBe5e3bceC619072D8668Ac83Ad825da707f',
    token: bscTokens.csix,
    quoteToken: bscTokens.cake,
  },
  {
    pid: 147,
    lpSymbol: 'axlUSDC-USDT LP',
    lpAddress: '0x1c7e5a3A72b6D94DE5Ec20812E3e68713978a584',
    token: bscTokens.axlusdc,
    quoteToken: bscTokens.usdt,
    stableSwapAddress: '0x6D8fba276ec6F1EDa2344DA48565AdbCA7e4FFa5',
    infoStableSwapAddress: '0x150c8AbEB487137acCC541925408e73b92F39A50',
    stableLpFee: 0.0002,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    pid: 146,
    lpSymbol: 'SDAO-BNB',
    lpAddress: '0x43b95976cF0929478bC13332C9cd2D63Bf060976',
    token: bscTokens.sdao,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 144,
    lpSymbol: 'CHAMP-BUSD LP',
    lpAddress: '0x1D0F31Bf6171EdFEED3d202104ed69B04C936B02',
    token: bscTokens.champ,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 142,
    lpSymbol: 'ARENA-CAKE LP',
    lpAddress: '0xfcc860289819c8b754ef31a1709a7952EB940223',
    token: bscTokens.arena,
    quoteToken: bscTokens.cake,
  },
  {
    pid: 140,
    lpSymbol: 'PRIMAL-BUSD LP',
    lpAddress: '0x4D4310f465C6db2081C3d24fA3B571cb29aBddB7',
    token: bscTokens.primal,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 139,
    lpSymbol: 'ZBC-CAKE LP',
    lpAddress: '0x269043694D070e8811c620bf95485314BCC7B4b7',
    token: bscTokens.zbc,
    quoteToken: bscTokens.cake,
  },
  {
    pid: 138,
    lpSymbol: 'SQUAD-CAKE LP',
    lpAddress: '0x54cd9d6Ce45cEF4fCc1AC568329254661B28711d',
    token: bscTokens.squad,
    quoteToken: bscTokens.cake,
  },
  {
    pid: 135,
    lpSymbol: 'USDT-USDC LP',
    lpAddress: '0xee1bcc9F1692E81A281b3a302a4b67890BA4be76',
    token: bscTokens.usdt,
    quoteToken: bscTokens.usdc,
    stableSwapAddress: '0x3EFebC418efB585248A0D2140cfb87aFcc2C63DD',
    infoStableSwapAddress: '0xa680d27f63Fa5E213C502d1B3Ca1EB6a3C1b31D6',
    stableLpFee: 0.00005,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    pid: 134,
    lpSymbol: 'USDC-BUSD LP',
    lpAddress: '0x1A77C359D0019cD8F4d36b7CDf5a88043D801072',
    token: bscTokens.usdc,
    quoteToken: bscTokens.busd,
    stableSwapAddress: '0xc2F5B9a3d9138ab2B74d581fC11346219eBf43Fe',
    infoStableSwapAddress: '0xa680d27f63Fa5E213C502d1B3Ca1EB6a3C1b31D6',
    stableLpFee: 0.00005,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    pid: 133,
    lpSymbol: 'USDT-BUSD LP',
    lpAddress: '0x36842F8fb99D55477C0Da638aF5ceb6bBf86aA98',
    token: bscTokens.usdt,
    quoteToken: bscTokens.busd,
    stableSwapAddress: '0x169F653A54ACD441aB34B73dA9946e2C451787EF',
    infoStableSwapAddress: '0xa680d27f63Fa5E213C502d1B3Ca1EB6a3C1b31D6',
    stableLpFee: 0.00005,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    pid: 132,
    lpSymbol: 'HFT-BUSD',
    lpAddress: '0xC9853537DC498F4667f9E50bF2BE6aBeF9D53149',
    token: bscTokens.hft,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 131,
    lpSymbol: 'HOOK-CAKE',
    lpAddress: '0x9e9b768174eF24233BF8AC2f4131F10ff5E72Dee',
    token: bscTokens.hook,
    quoteToken: bscTokens.cake,
  },
  {
    pid: 109,
    lpSymbol: 'XCAD-BUSD LP',
    lpAddress: '0x07C10ecFb0e1CF81E3e05ddb693Cc114C8EBe498',
    token: bscTokens.xcad,
    quoteToken: bscTokens.busd,
    isCommunity: true,
    auctionHostingStartSeconds: 1668153600, // Fri Nov 11 2022 08:00:00 GMT+0000
  },
  {
    pid: 130,
    lpSymbol: 'XCAD-CAKE',
    lpAddress: '0x50e4837Fc2eEFFD34EF78483A89c6Afb7Dd70c77',
    token: bscTokens.xcad,
    quoteToken: bscTokens.cake,
  },
  {
    pid: 106,
    lpSymbol: 'MHUNT-BNB LP',
    lpAddress: '0x58aED290F42963A502626774Bd8fa03f33c9B71f',
    token: bscTokens.mhunt,
    quoteToken: bscTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 91,
    v1pid: 522,
    lpSymbol: 'TINC-BNB LP',
    lpAddress: '0x0d5b9A0f4315a4bcE36D1Ea7d6B6d3123167aFAa',
    token: bscTokens.tinc,
    isCommunity: true,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 129,
    lpSymbol: 'MGP-BUSD LP',
    lpAddress: '0x76B0d10A4540B6743aa086EA31DC48E8AB691c4d',
    token: bscTokens.mgp,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 128,
    lpSymbol: 'WMX-BUSD LP',
    lpAddress: '0xe86eaAD81C32ffbb88B7ec9B325C8f75C8c9f1Ab',
    token: bscTokens.wmx,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 127,
    lpSymbol: 'KRS-BUSD LP',
    lpAddress: '0xac747ad9D61884986aD7A4A6cC5de998ce21B253',
    token: bscTokens.krs,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 123,
    lpSymbol: 'ARV-BNB LP',
    lpAddress: '0xA63E32FeEFC6590bBf869070Fd2e706Eb7881bd2',
    token: bscTokens.arv,
    quoteToken: bscTokens.wbnb,
  },

  {
    pid: 90,
    v1pid: 520,
    lpSymbol: 'PEX-BNB LP',
    lpAddress: '0x5ca96E8bDe0Bc587DaC9e02422Fd205b1102DAa4',
    token: bscTokens.pex,
    quoteToken: bscTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 117,
    lpSymbol: 'SPIN-BNB LP',
    lpAddress: '0x89c68051543Fa135B31c2CE7BD8Cdf392345FF01',
    token: bscTokens.spin,
    quoteToken: bscTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 122,
    lpSymbol: 'CO-BUSD LP',
    lpAddress: '0x800946D29e40199963100d67c9265B1725F80333',
    token: bscTokens.co,
    quoteToken: bscTokens.busd,
  },

  {
    pid: 120,
    lpSymbol: 'HOOP-BUSD LP',
    lpAddress: '0xdE8a4f457af12F98DB090841579Feed384684819',
    token: bscTokens.hoop,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 119,
    lpSymbol: 'MONI-BNB LP',
    lpAddress: '0xbcfd0d4a37fEb4dceAAeFa9da28CD833E5f04e9f',
    token: bscTokens.moni,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 118,
    lpSymbol: 'GQ-BUSD LP',
    lpAddress: '0x72121d60b0e2F01c0FB7FE32cA24021b42165A40',
    token: bscTokens.gq,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 93,
    v1pid: 524,
    lpSymbol: 'HAPPY-BNB',
    lpAddress: '0x008604A38cD589680F7B8f085DC2D5B4F81151dB',
    token: bscTokens.happy,
    quoteToken: bscTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 116,
    lpSymbol: 'WOM-BUSD LP',
    lpAddress: '0xe68D05418A8d7969D9CA6761ad46F449629d928c',
    token: bscTokens.wom,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 115,
    lpSymbol: 'HAY-BUSD LP',
    lpAddress: '0x70c26e9805ec5Df3d4aB0b2a3dF86BBA2231B6c1',
    token: bscTokens.hay,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 59,
    v1pid: 450,
    lpSymbol: 'SFUND-BNB LP',
    lpAddress: '0x74fA517715C4ec65EF01d55ad5335f90dce7CC87',
    token: bscTokens.sfund,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 111,
    lpSymbol: 'AOG-CAKE LP',
    lpAddress: '0xF8cA29a3BF6d34691981D3Ee8D4c9Cd1C437EfeE',
    token: bscTokens.aog,
    quoteToken: bscTokens.cake,
    isCommunity: true,
  },
  {
    pid: 114,
    lpSymbol: 'stkBNB-BNB LP',
    lpAddress: '0xaA2527ff1893e0D40d4a454623d362B79E8bb7F1',
    token: bscTokens.stkbnb,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 113,
    lpSymbol: 'PSTAKE-BUSD LP',
    lpAddress: '0x009C58e79779982eB53a9941F9F4a2269d093566',
    token: bscTokens.pstake,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 112,
    lpSymbol: 'PEEL-BUSD LP',
    lpAddress: '0x25bfD3162360BbD8FF97b86169288b311c2A68D7',
    token: bscTokens.peel,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 110,
    lpSymbol: 'SHELL-BUSD LP',
    lpAddress: '0x02D75D7beebF6D5228A3Fa5f810CedF2BEa5aB1E',
    token: bscTokens.shell,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 94,
    v1pid: 525,
    lpSymbol: 'WZRD-BUSD LP',
    lpAddress: '0xee456d906a38e10680c9d157FFf143390e9681bA',
    token: bscTokens.wzrd,
    quoteToken: bscTokens.busd,
    isCommunity: true,
  },
  {
    pid: 73,
    v1pid: 491,
    lpSymbol: 'HIGH-BUSD LP',
    lpAddress: '0xe98ac95A1dB2fCaaa9c7D4ba7ecfCE4877ca2bEa',
    token: bscTokens.high,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 38,
    v1pid: 386,
    lpSymbol: 'HOTCROSS-BNB LP',
    lpAddress: '0xF23BAD605E94dE0e3B60c9718a43A94A5aF43915',
    token: bscTokens.hotcross,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 108,
    lpSymbol: 'OLE-BUSD LP',
    lpAddress: '0xe9F369298565B60a0DC19A6fA93cEE934Fd1A58c',
    token: bscTokens.ole,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 107,
    lpSymbol: 'TRIVIA-BNB LP',
    lpAddress: '0xEF642c40EebBc964881dD7Bd1A0b50e90441E73A',
    token: bscTokens.trivia,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 105,
    lpSymbol: 'SDAO-BUSD LP',
    lpAddress: '0x3d12E4381901a6b94438758B90881cB03F10b01E',
    token: bscTokens.sdao,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 104,
    lpSymbol: 'NBT-USDT LP',
    lpAddress: '0x401AbD5327542c25baD057614935BfD98186a8a1',
    token: bscTokens.nbt,
    quoteToken: bscTokens.usdt,
    isCommunity: true,
  },
  {
    pid: 103,
    lpSymbol: 'BBT-BNB LP',
    lpAddress: '0x3D5A3E3824da092851026fCda3D8a0B7438c4573',
    token: bscTokens.bbt,
    quoteToken: bscTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 102,
    lpSymbol: 'PEAK-BNB LP',
    lpAddress: '0x41140a1650372Fb8cb2f71e335448ab8cfc1c4f3',
    token: bscTokens.peak,
    quoteToken: bscTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 40,
    v1pid: 390,
    lpSymbol: 'CHR-BUSD LP',
    lpAddress: '0x6045931E511EF7e53A4A817F971e0CA28c758809',
    token: bscTokens.chr,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 96,
    lpSymbol: '8PAY-BUSD LP',
    lpAddress: '0x92c3E2cddDb0CE886bCA864151BD4d611A86E563',
    token: bscTokens['8pay'],
    quoteToken: bscTokens.busd,
    isCommunity: true,
  },
  {
    pid: 101,
    lpSymbol: 'MIX-BUSD LP',
    lpAddress: '0x7618fdAb208aE23690dadD3aa4a42a442313d24E',
    token: bscTokens.MIX,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 100,
    lpSymbol: 'METIS-BNB LP',
    lpAddress: '0x69AFe59e88614501c3fDEb7480f12DBA0A414032',
    token: bscTokens.metis,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 99,
    lpSymbol: 'XCN-BNB LP',
    lpAddress: '0xF01eD80d46759c0cf6A3e9c66856017d81284962',
    token: bscTokens.xcn,
    quoteToken: bscTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 98,
    lpSymbol: 'GAL-BNB LP',
    lpAddress: '0xbe6A4f74fdDc88853612C50D7404E059b37692D8',
    token: bscTokens.gal,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 97,
    lpSymbol: 'RPG-BUSD LP',
    lpAddress: '0x55cdb14855220b239Cf857A03849D96736b9103f',
    token: bscTokens.rpg,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 92,
    v1pid: 523,
    lpSymbol: 'CEEK-BNB',
    lpAddress: '0x046A9B3A9b743340eE2Bc4C6dDD35543E237C6c2',
    token: bscTokens.ceek,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 89,
    v1pid: 519,
    lpSymbol: 'GMI-BNB LP',
    lpAddress: '0x58d4B61983Ca0aFE6E352e90719F403E24e016F4',
    token: bscTokens.gmi,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 88,
    v1pid: 518,
    lpSymbol: 'FROYO-CAKE LP',
    lpAddress: '0x1CCc3cC95c8148477Afd18a552f03835Be9D182a',
    token: bscTokens.froyo,
    quoteToken: bscTokens.cake,
  },
  {
    pid: 87,
    v1pid: 516,
    lpSymbol: 'BSW-BNB LP',
    lpAddress: '0x8CA3fF14A52b080C54A6d1a405eecA02959d39fE',
    token: bscTokens.bsw,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 86,
    v1pid: 515,
    lpSymbol: 'DUET-CAKE LP',
    lpAddress: '0xbDF0aA1D1985Caa357A6aC6661D838DA8691c569',
    token: bscTokens.duet,
    quoteToken: bscTokens.cake,
  },
  {
    pid: 85,
    v1pid: 514,
    lpSymbol: 'GMT-USDC LP',
    lpAddress: '0x007EC643C7Cc33a70C083fC305c283dd009C8b94',
    token: bscTokens.gmt,
    quoteToken: bscTokens.usdc,
  },
  {
    pid: 84,
    v1pid: 513,
    lpSymbol: 'ERA-BNB LP',
    lpAddress: '0x53a63ac301D6410915385294527f947aFf616599',
    token: bscTokens.era,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 83,
    v1pid: 510,
    lpSymbol: 'BTT-BUSD',
    lpAddress: '0xB7E73DaEe6A6Ca37A21f8E4bfba4DA448DFE4d92',
    token: bscTokens.btt,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 82,
    v1pid: 509,
    lpSymbol: 'ACH-USDT',
    lpAddress: '0x28BDb16b623176426305a70D8B475bE73Aca71f3',
    token: bscTokens.ach,
    quoteToken: bscTokens.usdt,
  },
  {
    pid: 81,
    v1pid: 507,
    lpSymbol: 'RACA-BUSD LP',
    lpAddress: '0x8e744Ec2795c8B836689d1b4EBE1489204357dAC',
    token: bscTokens.raca,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 80,
    v1pid: 506,
    lpSymbol: 'ERTHA-BNB LP',
    lpAddress: '0x70531B39E2Bb4d8dA59E2Ce41a98eBA2990F8497',
    token: bscTokens.ertha,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 79,
    v1pid: 505,
    lpSymbol: 'FUSE-BNB LP',
    lpAddress: '0x6483F166b9E4310A165a55FEa04F867499aded06',
    token: bscTokens.fuse,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 78,
    v1pid: 503,
    lpSymbol: 'FROYO-BNB LP',
    lpAddress: '0x1Ce76390Dd210B9C9ae28373FDf79714206ECb73',
    token: bscTokens.froyo,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 77,
    v1pid: 502,
    lpSymbol: 'APX-BUSD',
    lpAddress: '0xa0Ee789a8F581CB92dD9742ed0B5d54a0916976C',
    token: bscTokens.apx,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 76,
    v1pid: 501,
    lpSymbol: 'BCOIN-BNB',
    lpAddress: '0x2Eebe0C34da9ba65521E98CBaA7D97496d05f489',
    token: bscTokens.bcoin,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 75,
    v1pid: 497,
    lpSymbol: 'AOG-BUSD LP',
    lpAddress: '0x88c9bf5E334e2591C6A866D5E20683E31226Be3d',
    token: bscTokens.aog,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 74,
    v1pid: 495,
    lpSymbol: 'WOOP-BNB LP',
    lpAddress: '0x2AE94A6C768D59f5DDc25bd7f12C7cBE1D51dc04',
    token: bscTokens.woop,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 72,
    v1pid: 489,
    lpSymbol: 'DPT-BNB LP',
    lpAddress: '0x141e9558f66Cc21c93628400cCa7d830c15c2c24',
    token: bscTokens.dpt,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 71,
    v1pid: 488,
    lpSymbol: 'THG-BNB LP',
    lpAddress: '0x486697ae24469cB1122F537924Aa46E705B142Aa',
    token: bscTokens.thg,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 70,
    v1pid: 484,
    lpSymbol: 'IDIA-BUSD LP',
    lpAddress: '0x71E6de81381eFE0Aa98f56b3B43eB3727D640715',
    token: bscTokens.idia,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 69,
    v1pid: 481,
    lpSymbol: 'SANTOS-BNB LP',
    lpAddress: '0x06043B346450BbCfdE066ebc39fdc264FdFFeD74',
    token: bscTokens.santos,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 68,
    v1pid: 476,
    lpSymbol: 'QI-BNB',
    lpAddress: '0xf924E642f05ACC57fc3b14990c2B1a137683b201',
    token: bscTokens.qi,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 67,
    v1pid: 474,
    lpSymbol: 'PORTO-BNB LP',
    lpAddress: '0x0A292e96ABb35297786a38fDD67Dc4f82689E670',
    token: bscTokens.porto,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 66,
    v1pid: 472,
    lpSymbol: 'XWG-USDC LP',
    lpAddress: '0x936928146a21AfCcd30DfA84824A780572B1630B',
    token: bscTokens.xwg,
    quoteToken: bscTokens.usdc,
  },
  {
    pid: 65,
    v1pid: 471,
    lpSymbol: 'DAR-BNB LP',
    lpAddress: '0x062f88E2B4896e823ac78Ac314468c29eEC4186d',
    token: bscTokens.dar,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 64,
    v1pid: 470,
    lpSymbol: 'FINA-BUSD LP',
    lpAddress: '0x6dB23b5360c9D2859fDcbf41c56494e7b8573649',
    token: bscTokens.fina,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 63,
    v1pid: 466,
    lpSymbol: 'DKT-BNB LP',
    lpAddress: '0x365c3F921b2915a480308D0b1C04aEF7B99c2876',
    token: bscTokens.dkt,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 62,
    v1pid: 464,
    lpSymbol: 'LAZIO-BNB LP',
    lpAddress: '0x11c0b2BB4fbB430825d07507A9E24e4c32f7704D',
    token: bscTokens.lazio,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 61,
    v1pid: 461,
    lpSymbol: 'BETA-BNB LP',
    lpAddress: '0x88a02D94F437799f06f8c256ff07Aa397E6D0016',
    token: bscTokens.beta,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 60,
    v1pid: 457,
    lpSymbol: 'NFT-BNB LP',
    lpAddress: '0x0ecc84c9629317a494f12Bc56aA2522475bF32e8',
    token: bscTokens.nft,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 58,
    v1pid: 449,
    lpSymbol: 'BP-BNB LP',
    lpAddress: '0x2bF2dEB40639201C9A94c9e33b4852D9AEa5fd2D',
    token: bscTokens.bp,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 57,
    v1pid: 448,
    lpSymbol: 'RUSD-BUSD LP',
    lpAddress: '0x59FaC9e98479fc9979aE2a0C7422Af50bCBB9B26',
    token: bscTokens.rusd,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 56,
    v1pid: 442,
    lpSymbol: 'TRX-BUSD LP',
    lpAddress: '0xb5D108578Be3750209d1b3A8f45FFee8C5a75146',
    token: bscTokens.trx,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 55,
    v1pid: 441,
    lpSymbol: 'WIN-BUSD LP',
    lpAddress: '0x6a445cEB72c8B1751755386c3990055ff92e14A0',
    token: bscTokens.win,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 54,
    v1pid: 432,
    lpSymbol: 'SPS-BNB LP',
    lpAddress: '0xFdFde3aF740A22648B9dD66D05698e5095940850',
    token: bscTokens.sps,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 53,
    v1pid: 431,
    lpSymbol: 'C98-BNB LP',
    lpAddress: '0x92247860A03F48d5c6425c7CA35CDcFCB1013AA1',
    token: bscTokens.c98,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 52,
    v1pid: 430,
    lpSymbol: 'AXS-BNB LP',
    lpAddress: '0xC2d00De94795e60FB76Bc37d899170996cBdA436',
    token: bscTokens.axs,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 51,
    v1pid: 429,
    lpSymbol: 'CHESS-USDC LP',
    lpAddress: '0x1472976E0B97F5B2fC93f1FFF14e2b5C4447b64F',
    token: bscTokens.chess,
    quoteToken: bscTokens.usdc,
  },
  {
    pid: 50,
    v1pid: 427,
    lpSymbol: 'ONE-BNB LP',
    lpAddress: '0x9D2296e2Fe3CdBf2EB3e3e2CA8811BaFA42eeDFF',
    token: bscTokens.harmony,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 49,
    v1pid: 425,
    lpSymbol: 'DVI-BNB LP',
    lpAddress: '0x89EBF9cD99864f6E51bd7a578965922029cAB977',
    token: bscTokens.dvi,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 48,
    v1pid: 423,
    lpSymbol: 'USDC-USDT LP',
    lpAddress: '0xEc6557348085Aa57C72514D67070dC863C0a5A8c',
    token: bscTokens.usdc,
    quoteToken: bscTokens.usdt,
  },
  {
    pid: 46,
    v1pid: 421,
    lpSymbol: 'BSCPAD-BNB LP',
    lpAddress: '0xba01662E978DE7d67F8FfC937726215eb8995d17',
    token: bscTokens.bscpad,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 45,
    v1pid: 414,
    lpSymbol: 'WOO-BNB LP',
    lpAddress: '0x89eE0491CE55d2f7472A97602a95426216167189',
    token: bscTokens.woo,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 44,
    v1pid: 409,
    lpSymbol: 'ETH-USDC LP',
    lpAddress: '0xEa26B78255Df2bBC31C1eBf60010D78670185bD0',
    token: bscTokens.eth,
    quoteToken: bscTokens.usdc,
  },
  {
    pid: 43,
    v1pid: 408,
    lpSymbol: 'BTCB-ETH LP',
    lpAddress: '0xD171B26E4484402de70e3Ea256bE5A2630d7e88D',
    token: bscTokens.btcb,
    quoteToken: bscTokens.eth,
  },
  {
    pid: 42,
    v1pid: 405,
    lpSymbol: 'MBOX-BNB LP',
    lpAddress: '0x8FA59693458289914dB0097F5F366d771B7a7C3F',
    token: bscTokens.mbox,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 41,
    v1pid: 397,
    lpSymbol: 'TUSD-BUSD LP',
    lpAddress: '0x2E28b9B74D6d99D4697e913b82B41ef1CAC51c6C',
    token: bscTokens.tusd,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 37,
    v1pid: 376,
    lpSymbol: 'DOGE-BNB LP',
    lpAddress: '0xac109C8025F272414fd9e2faA805a583708A017f',
    token: bscTokens.doge,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 36,
    v1pid: 365,
    lpSymbol: 'BTCB-BUSD LP',
    lpAddress: '0xF45cd219aEF8618A92BAa7aD848364a158a24F33',
    token: bscTokens.btcb,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 35,
    v1pid: 362,
    lpSymbol: 'ALPACA-BUSD LP',
    lpAddress: '0x7752e1FA9F3a2e860856458517008558DEb989e3',
    token: bscTokens.alpaca,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 34,
    v1pid: 352,
    lpSymbol: 'TLM-BNB LP',
    lpAddress: '0xE6b421a4408c82381b226Ab5B6F8C4b639044359',
    token: bscTokens.tlm,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 33,
    v1pid: 350,
    lpSymbol: 'EPS-BNB LP',
    lpAddress: '0xddE420cbB3794ebD8FFC3Ac69F9c78e5d1411870',
    token: bscTokens.eps,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 32,
    v1pid: 346,
    lpSymbol: 'TKO-BNB LP',
    lpAddress: '0xFFd4B200d3C77A0B691B5562D804b3bd54294e6e',
    token: bscTokens.tko,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 31,
    v1pid: 326,
    lpSymbol: 'BIFI-BNB LP',
    lpAddress: '0x3f1A9f3D9aaD8bD339eD4853F345d2eF89fbfE0c',
    token: bscTokens.bifi,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 30,
    v1pid: 322,
    lpSymbol: 'ALICE-BNB LP',
    lpAddress: '0xcAD7019D6d84a3294b0494aEF02e73BD0f2572Eb',
    token: bscTokens.alice,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 29,
    v1pid: 318,
    lpSymbol: 'BELT-BNB LP',
    lpAddress: '0xF3Bc6FC080ffCC30d93dF48BFA2aA14b869554bb',
    token: bscTokens.belt,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 28,
    v1pid: 317,
    lpSymbol: 'RAMP-BUSD LP',
    lpAddress: '0xE834bf723f5bDff34a5D1129F3c31Ea4787Bc76a',
    token: bscTokens.ramp,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 27,
    v1pid: 309,
    lpSymbol: 'IOTX-BUSD LP',
    lpAddress: '0xc13aA76AAc067c86aE38028019F414D731b3D86A',
    token: bscTokens.iotx,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 26,
    v1pid: 306,
    lpSymbol: 'SUSHI-ETH LP',
    lpAddress: '0x16aFc4F2Ad82986bbE2a4525601F8199AB9c832D',
    token: bscTokens.sushi,
    quoteToken: bscTokens.eth,
  },
  {
    pid: 25,
    v1pid: 299,
    lpSymbol: 'SFP-BNB LP',
    lpAddress: '0x942b294e59a8c47a0F7F20DF105B082710F7C305',
    token: bscTokens.sfp,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 24,
    v1pid: 298,
    lpSymbol: 'LINA-BUSD LP',
    lpAddress: '0xC5768c5371568Cf1114cddD52CAeD163A42626Ed',
    token: bscTokens.lina,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 23,
    v1pid: 293,
    lpSymbol: 'UST-BUSD LP',
    lpAddress: '0x05faf555522Fa3F93959F86B41A3808666093210',
    token: bscTokens.ust,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 22,
    v1pid: 285,
    lpSymbol: 'BTCST-BNB LP',
    lpAddress: '0xB2678C414ebC63c9CC6d1a0fC45f43E249B50fdE',
    token: bscTokens.btcst,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 21,
    v1pid: 284,
    lpSymbol: 'LTC-BNB LP',
    lpAddress: '0x71b01eBdDD797c8E9E0b003ea2f4FD207fBF46cC',
    token: bscTokens.ltc,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 20,
    v1pid: 283,
    lpSymbol: 'USDC-BUSD LP',
    lpAddress: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1',
    token: bscTokens.usdc,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 19,
    v1pid: 282,
    lpSymbol: 'DAI-BUSD LP',
    lpAddress: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489',
    token: bscTokens.dai,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 18,
    v1pid: 276,
    lpSymbol: 'VAI-BUSD LP',
    lpAddress: '0x133ee93FE93320e1182923E1a640912eDE17C90C',
    token: bscTokens.vai,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 17,
    v1pid: 268,
    lpSymbol: 'SXP-BNB LP',
    lpAddress: '0xD8E2F8b6Db204c405543953Ef6359912FE3A88d6',
    token: bscTokens.sxp,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 16,
    v1pid: 270,
    lpSymbol: 'INJ-BNB LP',
    lpAddress: '0x1BdCebcA3b93af70b58C41272AEa2231754B23ca',
    token: bscTokens.inj,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 15,
    v1pid: 268,
    lpSymbol: 'UNI-BNB LP',
    lpAddress: '0x014608E87AF97a054C9a49f81E1473076D51d9a3',
    token: bscTokens.uni,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 14,
    v1pid: 265,
    lpSymbol: 'XRP-BNB LP',
    lpAddress: '0x03F18135c44C64ebFdCBad8297fe5bDafdBbdd86',
    token: bscTokens.xrp,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 13,
    v1pid: 264,
    lpSymbol: 'USDT-BNB LP',
    lpAddress: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
    token: bscTokens.usdt,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 12,
    v1pid: 263,
    lpSymbol: 'ALPHA-BNB LP',
    lpAddress: '0xACF47CBEaab5c8A6Ee99263cfE43995f89fB3206',
    token: bscTokens.alpha,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 11,
    v1pid: 262,
    lpSymbol: 'BTCB-BNB LP',
    lpAddress: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
    token: bscTokens.btcb,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 10,
    v1pid: 261,
    lpSymbol: 'ETH-BNB LP',
    lpAddress: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    token: bscTokens.eth,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 9,
    v1pid: 260,
    lpSymbol: 'XVS-BNB LP',
    lpAddress: '0x7EB5D86FD78f3852a3e0e064f2842d45a3dB6EA2',
    token: bscTokens.xvs,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 8,
    v1pid: 259,
    lpSymbol: 'TWT-BNB LP',
    lpAddress: '0x3DcB1787a95D2ea0Eb7d00887704EeBF0D79bb13',
    token: bscTokens.twt,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 7,
    v1pid: 258,
    lpSymbol: 'USDT-BUSD LP',
    lpAddress: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    token: bscTokens.usdt,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 6,
    v1pid: 257,
    lpSymbol: 'LINK-BNB LP',
    lpAddress: '0x824eb9faDFb377394430d2744fa7C42916DE3eCe',
    token: bscTokens.link,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 5,
    v1pid: 255,
    lpSymbol: 'DOT-BNB LP',
    lpAddress: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF',
    token: bscTokens.dot,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 4,
    v1pid: 253,
    lpSymbol: 'ADA-BNB LP',
    lpAddress: '0x28415ff2C35b65B9E5c7de82126b4015ab9d031F',
    token: bscTokens.ada,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 121,
    lpSymbol: 'HAY-BUSD LP',
    lpAddress: '0xB6040A9F294477dDAdf5543a24E5463B8F2423Ae',
    token: bscTokens.hay,
    quoteToken: bscTokens.busd,
    stableSwapAddress: '0x49079d07ef47449af808a4f36c2a8dec975594ec',
    infoStableSwapAddress: '0xa680d27f63Fa5E213C502d1B3Ca1EB6a3C1b31D6',
    stableLpFee: 0.0002,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    pid: 95,
    lpSymbol: 'aBNBc-BNB LP',
    lpAddress: '0x272c2CF847A49215A3A1D4bFf8760E503A06f880',
    token: bscTokens.abnbc,
    quoteToken: bscTokens.wbnb,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
