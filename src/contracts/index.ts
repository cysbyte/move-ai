import NETWORKS from "./networks"
import STAKE_ABI from "./stake_abi"

export const NETWORK = NETWORKS
  .find(e => e.chainId == import.meta.env.VITE_CHAIN)
  ?? NETWORKS[0]

export const STAKE_CONTRACT = {
  address: import.meta.env.VITE_STAKE_CONTRACT_ADDRESS,
  abi: STAKE_ABI
}