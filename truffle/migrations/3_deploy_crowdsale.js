var Token = artifacts.require("./MANEToken.sol");
var Crowdsale = artifacts.require("./MANETokenCrowdsale.sol");

module.exports = function(deployer) {
  deployer.deploy(Crowdsale,
    Date.parse('January 1 2019'),
    5,
    '0xDAe6A0e9e9032270dC88a8F6a6967C0321470bf3',
    Token.address,
    '0xDAe6A0e9e9032270dC88a8F6a6967C0321470bf3'
  );
};
