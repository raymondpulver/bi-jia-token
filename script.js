'use strict';

const truffle = require('./truffle-config');

const provider = truffle.networks.mainnet.provider();

const ethers = require('ethers');

const ethersProvider = new ethers.providers.Web3Provider(provider);

(async () => {
  const acct = await ethersProvider.listAccounts();
  await ethersProvider.send('eth_sendTransaction', [{
	  to: acct[0],
	  from: acct[0],
	  value: '0x0',
	  nonce: '0x0',
	  gasPrice: ethers.utils.parseUnits('50', 9).toString(),
	  gas: '0x' + (25000).toString(16)
  }]);
	/*
  await ethersProvider.send('eth_sendTransaction', [{
	  to: acct[0],
	  from: acct[0],
	  value: '0x0',
	  nonce: '0x1',
	  gasPrice: ethers.utils.parseUnits('50', 9).toString(),
	  gas: 25000
  }]);
  await ethersProvider.send('eth_sendTransaction', [{
	  to: acct[0],
	  from: acct[0],
	  value: '0x0',
	  nonce: '0x2',
	  gasPrice: ethers.utils.parseUnits('50', 9).toString(),
	  gas: 25000
  }]);
  */
})().catch((err) => console.error(err));
