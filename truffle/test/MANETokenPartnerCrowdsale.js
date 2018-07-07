const MANEToken = artifacts.require("MANEToken.sol");
const MANETokenPartnerCrowdsale = artifacts.require("MANETokenPartnerCrowdsale.sol");

contract('MANETokenPartnerCrowdsale', async (accounts) => {
  const coinbase = web3.eth.coinbase;

  it('should correctly split up the earnings', async () => {
    const token = await MANEToken.new(coinbase);
    const crowdsale = await MANETokenPartnerCrowdsale.new(
      Date.parse(new Date()) + 100000,
      1000,
      //wallet
      accounts[2],
      //partner1
      accounts[3],
      //partner2
      accounts[4],
      token.address,
      //tokenHolder
      coinbase
    );
    await token.approve(crowdsale.address, await token.totalSupply());

    const startingBalances = {
      wallet: web3.eth.getBalance(accounts[2]),
      partner1: web3.eth.getBalance(accounts[3]),
      partner2: web3.eth.getBalance(accounts[4])
    };
    web3.eth.sendTransaction({ from: accounts[5], to: crowdsale.address, value: web3.toWei('100'), gas: 4000000, gasPrice: 0 });
    const endingBalances = {
      wallet: web3.eth.getBalance(accounts[2]),
      partner1: web3.eth.getBalance(accounts[3]),
      partner2: web3.eth.getBalance(accounts[4])
    };

    assert.equal(endingBalances.wallet.sub(startingBalances.wallet).toPrecision(), web3.toWei('89'));
    assert.equal(endingBalances.partner1.sub(startingBalances.partner1).toPrecision(), web3.toWei('10'));
    assert.equal(endingBalances.partner2.sub(startingBalances.partner2).toPrecision(), web3.toWei('1'));
  });
});