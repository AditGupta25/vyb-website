var Token = artifacts.require("./MANEToken.sol");
var Crowdsale = artifacts.require("./MANETokenPartnerCrowdsale.sol");

module.exports = async function(deployer) {
  token = await Token.deployed();
  token.approve(Crowdsale.address, web3.toWei('500000000'));
};