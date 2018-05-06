const maneToken = {
  balanceOf: async (address) => {
    return await maneToken.getContract().methods.balanceOf(address).call();
  },
  decimals: async () => {
    return await maneToken.getContract().methods.decimals().call();
  },
  totalSupply: async () => {
    return await maneToken.getContract().methods.totalSupply().call();
  },
  normalizedBalanceOf: async (address) => {
    let tokenBalance = new web3.utils.BN(await maneToken.balanceOf(address));
    const tokenDecimals = new web3.utils.BN(await maneToken.decimals());
    if (tokenDecimals.gt(new web3.utils.BN('0'))) {
      tokenBalance = tokenBalance.div(new web3.utils.BN('10').pow(tokenDecimals));
    }
    return tokenBalance;
  },
  address: () => {
    return maneToken.ref.networks[Application.currentNetwork].address;
  },
  abi: () => {
    return maneToken.ref.abi;
  },
  bytecode: () => {
    return maneToken.ref.bytecode;
  },
  getContract: () => {
    return maneToken.contract || (maneToken.contract = new web3.eth.Contract(maneToken.abi(), maneToken.address()));
  },
  deploy: async (tokenHolder) => {
    const transaction = new web3.eth.Contract(maneToken.abi()).deploy({ arguments: [tokenHolder], data: maneToken.bytecode()});
    const coinbase = await web3.eth.getCoinbase();
    return transaction.send({ from: coinbase, gas: await transaction.estimateGas({ from: coinbase }) })
  },
  ref: require('../../../truffle/build/contracts/MANEToken.json')
};

export default maneToken;