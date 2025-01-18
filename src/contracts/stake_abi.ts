export default [{ "inputs": [{ "internalType": "uint256", "name": "_start_timestamp", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "OwnableInvalidOwner", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "OwnableUnauthorizedAccount", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "lockAddress", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "lockBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "claimBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "rewardBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "lockTimestamp", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "index", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "months", "type": "uint256" }], "name": "depositLog", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "_index", "type": "uint256" }], "name": "claim", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "months", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "months", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "estimateReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "getLockIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }, { "internalType": "uint256", "name": "_index", "type": "uint256" }], "name": "getLockInfo", "outputs": [{ "components": [{ "internalType": "uint256", "name": "lockBalance", "type": "uint256" }, { "internalType": "uint256", "name": "claimBalance", "type": "uint256" }, { "internalType": "uint256", "name": "rewardBalance", "type": "uint256" }, { "internalType": "uint256", "name": "lockTimestamp", "type": "uint256" }, { "internalType": "uint256", "name": "rewardPercent", "type": "uint256" }, { "internalType": "uint256", "name": "withdrawStatus", "type": "uint256" }], "internalType": "struct LockNet.LockInfo", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getMaxDepoistDuration", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getPenaltyPercent", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getRewardPercent", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getStartTimestamp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getStopTimestamp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getTotalClaimedNets", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getTotalEstimateRewardNets", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getTotalStakedNets", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getTotalbalanceNets", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "transfer_reward", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_index", "type": "uint256" }], "name": "unstake", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_start_timestamp", "type": "uint256" }], "name": "updateConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw_reward", "outputs": [], "stateMutability": "payable", "type": "function" }]