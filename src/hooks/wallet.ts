import {ethers} from "ethers";
import {NETWORK, STAKE_CONTRACT} from "@/contracts";
import {sleep} from "@/utils/sleep";

declare let window: any

export type StakeInfo = {
  index: number;
  lockBalance: string;
  claimBalance: string;
  rewardBalance: string;
  lockTimestamp: number;
  rewardPercent: number;
  withdrawStatus: number;
}

export enum LockStatus {
  UNSTAKED,
  STAKING,
  CLAIMED,
  EARLY_CLAIMED
}

export default function useWallet() {

  const switchChain = async () => {
    const ethereum = window.ethereum
    if (typeof ethereum === 'undefined') {
      throw new Error("not ethereum")
    }

    const provider = new ethers.BrowserProvider(ethereum);
    const chainId = await ethereum.request({method: "eth_chainId"})
    console.log(chainId)
    if (chainId != NETWORK.chainId) {
      try {
        console.log("wallet_switchEthereumChain")
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{chainId: NETWORK.chainId}],
        })
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            console.log("wallet_addEthereumChain")
            await ethereum.request({
              method: "wallet_addEthereumChain",
              params: [NETWORK],
            })
          } catch (e) {
            console.error('wallet_addEthereumChain', e)
          }
        } else {
          throw switchError
        }
      }
    }

    // const accounts = await provider.send("eth_requestAccounts", []);
    // console.log(accounts)
    const newChainId = await ethereum.request({method: "eth_chainId"})
    console.log(newChainId)
    if (newChainId != NETWORK.chainId) {
      throw new Error("User rejected the request.")
    }

    return provider
  }

  const connect = async () => {
    try {
      console.log('connect')
      const provider = await switchChain()
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      return address
    } catch (e) {
      console.error('connect', e)
      throw new Error(e.error?.message || e.error?.message || e.err?.message || e.reason || e.message)
    }
  }

  /**
   * 质押
   * @param amount
   * @param months
   */
  const stake = async (amount: bigint, months: number) => {
    try {
      console.log("stake", amount, months)

      const provider = await switchChain()
      const signer = await provider.getSigner();
      const stakeContract = new ethers.Contract(STAKE_CONTRACT.address, STAKE_CONTRACT.abi, signer);
      const maxMonths = await stakeContract.getMaxDepoistDuration()
      if (months > maxMonths) {
        throw new Error(`The maximum selectable time is currently ${maxMonths} months.`)
      }
      const tx = await stakeContract.deposit(months, {value: amount});
      console.log("stake", tx.hash)
      return tx.hash
    } catch (e) {
      console.error('stake', e)
      throw new Error(e.error?.message || e.err?.message || e.reason || e.message)
    }
  };

  /**
   * 领取质押本息
   * @param index
   */
  const claim = async (index: number) => {
    try {
      console.log('claim', index)
      const provider = await switchChain()
      const signer = await provider.getSigner();
      const stakeContract = new ethers.Contract(STAKE_CONTRACT.address, STAKE_CONTRACT.abi, signer);
      const tx = await stakeContract.claim(index);
      console.log("claim", tx.hash)
      return tx.hash
    } catch (e) {
      console.error('claim', e)
      throw new Error(e.error?.message || e.err?.message || e.reason || e.message)
    }
  }

  /**
   * 提前解除质押
   * @param index
   */
  const earlyClaim = async (index: number) => {
    try {
      console.log('unstake', index)
      const provider = await switchChain()
      const signer = await provider.getSigner();
      const stakeContract = new ethers.Contract(STAKE_CONTRACT.address, STAKE_CONTRACT.abi, signer);
      const tx = await stakeContract.unstake(index);
      console.log("unstake", tx.hash)
      return tx.hash
    } catch (e) {
      console.error('unstake', e)
      throw new Error(e.error?.message || e.err?.message || e.reason || e.message)
    }
  }

  const getTransactionReceipt = async (hash: string) => {
    try {
      const provider = new ethers.JsonRpcProvider(NETWORK.rpcUrls[0]);
      const txReceipt = await provider.getTransactionReceipt(hash);
      console.log('getTransactionReceipt', txReceipt?.status)
      return txReceipt?.status
    } catch (e) {
      throw new Error(e.error?.message || e.err?.message || e.reason || e.message)
    }
  }

  const confirmTransaction = async (hash: string) => {
    console.log('confirmTransaction', hash)
    let count = 0
    const provider = new ethers.JsonRpcProvider(NETWORK.rpcUrls[0]);
    while (count++ < 20) {
      const txReceipt = await provider.getTransactionReceipt(hash);
      console.log(txReceipt)
      if (!txReceipt) {
        await sleep(3000)
        continue;
      }
      if (txReceipt.status != 1) {
        throw new Error("confirmTransaction error")
      }
      console.log("confirmTransaction success")
      break
    }
    if (count == 20) {
      throw new Error("confirmTransaction timout")
    }
  }

  const getLatestBlockTimestamp = async () => {
    try {
      const provider = new ethers.JsonRpcProvider(NETWORK.rpcUrls[0]);
      const latestBlock = await provider.getBlock("latest");
      return latestBlock!.timestamp * 1000;
    } catch (e) {
      console.error('getLatestBlockTimestamp', e)
      throw new Error(e.error?.message || e.err?.message || e.reason || e.message)
    }
  }

  const getBalance = async (address: string): Promise<bigint> => {
    try {
      const provider = new ethers.JsonRpcProvider(NETWORK.rpcUrls[0]);
      const balance = await provider.getBalance(address);
      console.log('getBalance', balance)
      return balance
    } catch (e) {
      console.error('getBalance', e)
      throw new Error(e.error?.message || e.err?.message || e.reason || e.message)
    }
  }

  const getMaxStakeMonth = async () => {
    try {
      console.log('getMaxStakeMonth')
      const provider = new ethers.JsonRpcProvider(NETWORK.rpcUrls[0]);
      const stakeContract = new ethers.Contract(STAKE_CONTRACT.address, STAKE_CONTRACT.abi, provider);
      const res = await stakeContract.getMaxDepoistDuration();
      console.log('getMaxStakeMonth', res)
      return Number(res)
    } catch (e) {
      console.error('getMaxStakeMonth', e)
      throw new Error(e.error?.message || e.err?.message || e.reason || e.message)
    }
  }

  const getRewardPercent = async () => {
    try {
      console.log('getRewardPercent')
      const provider = new ethers.JsonRpcProvider(NETWORK.rpcUrls[0]);
      const stakeContract = new ethers.Contract(STAKE_CONTRACT.address, STAKE_CONTRACT.abi, provider);
      const res = await stakeContract.getRewardPercent();
      console.log('getRewardPercent', res)
      return res
    } catch (e) {
      console.error('getRewardPercent', e)
      throw new Error(e.error?.message || e.err?.message || e.reason || e.message)
    }
  }

  const getPenaltyPercent = async () => {
    try {
      console.log('getPenaltyPercent')
      const provider = new ethers.JsonRpcProvider(NETWORK.rpcUrls[0]);
      const stakeContract = new ethers.Contract(STAKE_CONTRACT.address, STAKE_CONTRACT.abi, provider);
      const res = await stakeContract.getPenaltyPercent();
      console.log('getPenaltyPercent', res)
      return Number(res)
    } catch (e) {
      console.error('getPenaltyPercent', e)
      throw new Error(e.error?.message || e.err?.message || e.reason || e.message)
    }
  }

  const getLockIndex = async (address: string) => {
    try {
      console.log('getLockIndex', address)
      const provider = new ethers.JsonRpcProvider(NETWORK.rpcUrls[0]);
      const stakeContract = new ethers.Contract(STAKE_CONTRACT.address, STAKE_CONTRACT.abi, provider);
      const res = await stakeContract.getLockIndex(address);
      console.log('getLockIndex', res)
      return res
    } catch (e) {
      console.error('getLockIndex', e)
      throw new Error(e.error?.message || e.err?.message || e.reason || e.message)
    }
  }

  const getLockInfo = async (address: string, index: number): Promise<StakeInfo> => {
    try {
      const provider = new ethers.JsonRpcProvider(NETWORK.rpcUrls[0]);
      const stakeContract = new ethers.Contract(STAKE_CONTRACT.address, STAKE_CONTRACT.abi, provider);
      const res = await stakeContract.getLockInfo(address, index);
      const item = {
        index: index,
        lockBalance: ethers.formatEther(res[0]),
        claimBalance: ethers.formatEther(res[1]),
        rewardBalance: ethers.formatEther(res[2]),
        lockTimestamp: Number(res[3]) * 1000,
        rewardPercent: Number(res[4]),
        withdrawStatus: Number(res[5])
      }
      console.log("getLockInfo", item)
      return item
    } catch (e) {
      console.error('getLockInfo', e)
      throw new Error(e.error?.message || e.err?.message || e.reason || e.message)
    }
  }

  const getStakedList = async (address: string): Promise<StakeInfo[]> => {
    try {
      const list: StakeInfo[] = []
      const size = Number(await getLockIndex(address))
      for (let i = size - 1; i >= 0; --i) {
        const item = await getLockInfo(address, i)
        list.push(item)
      }
      return list
    } catch (e) {
      console.error('getStakedList', e)
      throw new Error(e.error?.message || e.err?.message || e.reason || e.message)
    }
  }

  const estimateReward = async (amount: bigint, months: number) => {
    try {
      console.log('estimateReward')
      const provider = new ethers.JsonRpcProvider(NETWORK.rpcUrls[0]);
      const stakeContract = new ethers.Contract(STAKE_CONTRACT.address, STAKE_CONTRACT.abi, provider);
      const res = await stakeContract.estimateReward(months, amount);
      console.log('estimateReward', res)
      return res
    } catch (e) {
      console.error('estimateReward', e)
      throw new Error(e.error?.message || e.err?.message || e.reason || e.message)
    }
  }

  return {
    connect,
    stake,
    claim,
    earlyClaim,
    getTransactionReceipt,
    confirmTransaction,
    getMaxStakeMonth,
    getRewardPercent,
    getPenaltyPercent,
    getStakedList,
    getLatestBlockTimestamp,
    estimateReward,
    getBalance
  }
}