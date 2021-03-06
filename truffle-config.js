'use strict';

const path = require('path');
const ethers = require('ethers');
const dotenv = require('dotenv');
const HDWalletProvider = require('@truffle/hdwallet-provider');
dotenv.config(path.join(__dirname, '.env'));

module.exports = {
  contracts_directory: path.join(__dirname, 'contracts'),
  contracts_build_directory: path.join(__dirname, 'build'),
  compilers: {
    solc: {
      version: 'v0.6.8',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },
  networks: {
    mainnet: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY.substr(2), new ethers.providers.InfuraProvider('mainnet', process.env.INFURA_PROJECT_ID).connection.url),
      gasPrice: Number(ethers.utils.parseUnits('40', 9).toString()),
      gas: 3e6,
      skipDryRun: true,
      network_id: '1',
      timeoutBlocks: 1e4,
      timeoutExpiry: 1000*60e3
    },
    ganache: {
      host: 'localhost',
      port: 8545,
      network_id: '*'
    }
  },
  plugins: [
    'verify-on-etherscan'
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  }
};
