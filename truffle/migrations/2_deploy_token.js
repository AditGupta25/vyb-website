var Token = artifacts.require("./VybCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(Token, '0xaBa302Bcfa914610B1FDDc70a4854F7f1122601a');
};
