const Migrations = artifacts.require('Migrations');
const BiJiaToken = artifacts.require('BiJiaToken');
const ethers = require('ethers');

const INITIAL_SUPPLY_OWNER = '0xdaAd3f92459b28A6d8962bded03B67EaFc7712be';
const INITIAL_SUPPLY = ethers.utils.parseUnits('60000000', 18).toString();

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(BiJiaToken, INITIAL_SUPPLY_OWNER, INITIAL_SUPPLY);
};
