import { ChainId } from 'dexswap-sdk'
import { useActiveWeb3React } from '.'

export function useLiquidityMiningFeatureFlag(): boolean {
  const { chainId } = useActiveWeb3React()
  return chainId === ChainId.RINKEBY || chainId === ChainId.AURORA || chainId === ChainId.MUMBAI 
}
