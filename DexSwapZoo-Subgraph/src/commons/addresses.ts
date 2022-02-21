/* eslint-disable prefer-const */
import { dataSource, log } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export function getFactoryAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return '0x103c8f7e220bc589f0cbb3b03bb50891a37f8929' // harmony
  if (network == 'aurora') return '0x315d8ad6e8232f496ba996d772b957a0443949ef'
  if (network == 'mumbai') return '0x3cbb677671f7a56e579df767236b815338022cdd'
  log.warning('no factory address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getStakingRewardsFactoryAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return '0xeb7fe9aeb942546c8e0f72b080c77946b2b8ed79'
  if (network == 'aurora') return '0xdc389aa3a4d16d1fa6826088323f11a796838020'
  if (network == 'mumbai') return '0x5cc549eefabfed7ad69d9cc637651d677ace2256'
  log.warning('no staking rewards factory address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getNativeCurrencyWrapperAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return '0x7466d7d0c21fa05f32f5a0fa27e12bdc06348ce2' // WONE || HARMONY MAINNET
  if (network == 'aurora') return '0x784e5B8541410284092cf465Cd455Beb09aAcdc3' // wrapped aurora - deployed
  if (network == 'mumbai') return '0x9c3c9283d3e44854697cd22d3faa240cfb032889'
  log.warning('no native currency wrapper address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getLiquidityTrackingTokenAddresses(): string[] {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') {
    return [
      '0x7466d7d0C21Fa05F32F5a0Fa27e12bdC06348Ce2', // wone
      '0x0E80905676226159cC3FF62B1876C907C91F7395', // busd
      '0x6c4387C4f570Aa8cAdcaFFc5E73ecb3D0F8Fc593', // wbtc
      '0x1E120B3b4aF96e7F394ECAF84375b1C661830013', // one ETH (1ETH)
      '0xEC0A02AAb46049A151E60da8c4D12D59FA2d04fA', // xDEXS
      '0x339681251B9F28E9867b5472E3E5059d9209bA29', // USDC
      '0x33B465B61EBb322E6336437b2624F705a34a0Df0', // USDC
    ]
  }
  if (network == 'aurora') {
    return [
      '0x784e5b8541410284092cf465cd455beb09aacdc3', // weth
      '0x69b107a88107dd99fadcfc82c1b6f3d6f04ca6e6', // usdc
      '0x61bb797a838100c7b4c99ae8a307fed5d669b6f6', // usdt
      '0x43b52ff270093b7ef48f0cf731ed0c5500b7b5b7', // wbtc
      '0xd3faffafe0d2339d66c3f63b6740007eff3e634a', // dai
      '0x45e92dd180eca40f90556aa5b84620f253194e5e' // dexswapzoo
    ]
  }
  if (network == 'mumbai') {
    return [
      '0x9c3c9283d3e44854697cd22d3faa240cfb032889', // weth
      '0xeDC606d083dAB26DecD226F93969Fd798353d569', // usdc
      '0x3813e82e6f7098b9583FC0F33a962D02018B6803', // usdt
      '0xcB1e72786A6eb3b44C2a2429e317c8a2462CFeb1', // dai
      '0xAd2F2D10d8056ECa21A26436245AC2666a6662aB', // zoo
      '0x4F80365e46da3A5B03458c31CccB3b640E12d4fE' // dezu
    ]
  }
  log.warning('no liquidity tracking token address for unsupported network {}', [network])
  return []
}

// USDC
export function getUsdcNativeCurrencyWrapperPairAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return '0x080f75b38133a12253ca6954d0045f143d18c5f8' //1usdc pair
  if (network == 'aurora') return '0xfa46ad677bcc67d6eda494ae77f6eb00c5492b58'
  if (network == 'mumbai') return '0x33377c946fa88721a35ef8df0efe39d644a55b1b'
  log.warning('no usdc native currency wrapper pair address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getDaiNativeCurrencyWrapperPairAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet ') return ADDRESS_ZERO
  if (network == 'aurora') return '0xf246e5d50708defc9bddb74452411851b0a61bf0'
  if (network == 'mumbai') return '0x324ec4d71111bfb391a6d74099421eae1a6d5264'
  log.warning('no dai native currency wrapper pair address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

// USDT
export function getUsdtNativeCurrencyWrapperPair(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return ADDRESS_ZERO
  if (network == 'aurora') return ADDRESS_ZERO
  if (network == 'mumbai') return ADDRESS_ZERO
  log.warning('no usdt native currency wrapper pair address for unsupported network {}', [network])
  return ADDRESS_ZERO
}
