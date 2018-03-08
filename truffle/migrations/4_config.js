var Token = artifacts.require("./VybCoin.sol");
var Crowdsale = artifacts.require("./VybCoinCrowdsale.sol");

module.exports = async function(deployer) {
  token = await Token.deployed();
  token.approve(Crowdsale.address, web3.toWei('500000000'));
};