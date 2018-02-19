const maneTokenCrowdsale = {
  endTime: async () => {
    return await maneTokenCrowdsale.getContract().methods.endTime().call();
  },
  owner: async() => {
    return await maneTokenCrowdsale.getContract().methods.owner().call();
  },
  address: () => {
    return maneTokenCrowdsale.ref.networks[Application.currentNetwork].address;
  },
  abi: () => {
    return maneTokenCrowdsale.ref.abi;
  },
  bytecode: () => {
    return maneTokenCrowdsale.ref.bytecode;
  },
  getContract: () => {
    return maneTokenCrowdsale.contract || (maneTokenCrowdsale.contract = new web3.eth.Contract(maneTokenCrowdsale.abi(), maneTokenCrowdsale.address()));
  },
  deploy: async (endTime, rate, wallet, tokenAddress, tokenHolder) => {
    const transaction = new web3.eth.Contract(maneTokenCrowdsale.abi()).deploy({ arguments: [endTime, rate, wallet, tokenAddress, tokenHolder], data: maneTokenCrowdsale.bytecode()});
    const coinbase = await web3.eth.getCoinbase();
    return transaction.send({ from: coinbase, gas: await transaction.estimateGas({ from: coinbase }) })
  },
  ref: require('../../../truffle/build/contracts/MANETokenCrowdsale.json')
};

export default maneTokenCrowdsale;