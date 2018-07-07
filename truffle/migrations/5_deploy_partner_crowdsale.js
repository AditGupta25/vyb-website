var Token = artifacts.require("./MANEToken.sol");
var Crowdsale = artifacts.require("./MANETokenPartnerCrowdsale.sol");

module.exports = function(deployer) {
  deployer.deploy(Crowdsale,
    Date.parse('January 1 2019'),
    5,
    '0xDAe6A0e9e9032270dC88a8F6a6967C0321470bf3',
    '0xbc4a964dFC98fD8095b412a72342f62E9c94fAE6',
    '0x7ed8E5d7884FF0Be732479a475ACB82f229C9e35',
    Token.address,
    '0xDAe6A0e9e9032270dC88a8F6a6967C0321470bf3'
  );
};
