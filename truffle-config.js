require("dotenv").config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
//Local
const local_mnemonic = process.env.LOCAL_MNEMONIC;
const local_private_key = process.env.LOCAL_PRIVATE_KEY;
const local_url = process.env.LOCAL_0_URL;
//Testnet
const testnet_mnemonic = process.env.TESTNET_MNEMONIC;
const testnet_private_key = process.env.TESTNET_PRIVATE_KEY;
const testnet_url = process.env.TESTNET_0_URL;
//Mainnet
const mainnet_mnemonic = process.env.MAINNET_MNEMONIC;
const mainnet_private_key = process.env.MAINNET_PRIVATE_KEY;
const mainnet_url = process.env.MAINNET_0_URL;

//GAS - Currently using same GAS accross all environments
gasLimit = process.env.GAS_LIMIT;
gasPrice = process.env.GAS_PRICE;

module.exports = {
  truffle: {
    allowUnlimitedContractSize: true,
    blockGasLimit: 100000000,
    gas: 100000000
  },
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    mainnet: {
      provider: () => new HDWalletProvider(mainnet_private_key, `https://eth.bd.evmos.org:8545`),
      network_id: 9001,
      chain_id: 9001,
      timeout: 2000000,
      skipDryRun: true
    },
    testnet: {
      provider: () => new HDWalletProvider(testnet_private_key, `https://eth.bd.evmos.dev:8545`),
      network_id: 9000,
      chain_id: 9000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.7.4",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};