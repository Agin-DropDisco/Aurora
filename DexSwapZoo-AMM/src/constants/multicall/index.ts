import { ChainId } from 'dexswap-sdk'
import MULTICALL_ABI from './abi.json'


const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
  [ChainId.AURORA]: '0x27f42DeD0c1114Ea1650795450937dF19e8B6119',
  [ChainId.RINKEBY]: '0x8c9E7447ABE0607a610a1C3E7cCC1A7B51f729C2',
  [ChainId.MUMBAI]: '0x3D522CD23C0A8a4Eb7b7f2478c4f46132a068398'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
