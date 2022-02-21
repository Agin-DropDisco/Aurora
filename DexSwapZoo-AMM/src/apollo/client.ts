import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { ChainId } from 'dexswap-sdk'

export const defaultSubgraphClient = new ApolloClient({
  uri: '',
  cache: new InMemoryCache()
})

export const subgraphClients: { [chainId in ChainId]?: ApolloClient<NormalizedCacheObject> | undefined } = {
  [ChainId.MAINNET]: defaultSubgraphClient,
  [ChainId.RINKEBY]: new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/agin-dropdisco/gin-rinkeby-data',
    cache: new InMemoryCache()
  }),
  [ChainId.AURORA]: new ApolloClient({
    uri: '',
    cache: new InMemoryCache()
  }),
  [ChainId.MUMBAI]: new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/agin-dropdisco/dexswappolygon',
    cache: new InMemoryCache()
  })
}
