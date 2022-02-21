import { ChainId, Currency } from 'dexswap-sdk'
import { DAI, USDC, USDT } from '../../constants'

export const MainPage = 'Governance Main Page'
export const PairPage = 'Governance Pair Page'

export const temporaryCurrencyData: Array<Currency> = [
  DAI[ChainId.MAINNET], 
  USDC[ChainId.MAINNET], 
  USDT[ChainId.MAINNET],
  DAI[ChainId.RINKEBY], 
  USDC[ChainId.RINKEBY], 
  USDT[ChainId.RINKEBY],
  DAI[ChainId.AURORA], 
  USDC[ChainId.AURORA], 
  USDT[ChainId.AURORA],
  DAI[ChainId.MUMBAI], 
  USDC[ChainId.MUMBAI], 
  USDT[ChainId.MUMBAI]
]
