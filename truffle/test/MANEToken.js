const MANEToken = artifacts.require("MANEToken.sol");

contract('MANEToken', async (accounts) => {
const coinbase = web3.eth.coinbase;


it('should have assign all tokens to provided address', async () => {
  const token = await MANEToken.new(accounts[5]);
  assert.equal((await token.balanceOf.call(accounts[5])).toString(), (await token.totalSupply.call()).toString());
});

  it('should have a total supply of 982451653', async () => {
    const token = await MANEToken.new(accounts[5]);
    assert.equal((await token.totalSupply.call()).toPrecision(), web3.toWei('982451653'));
  });
});