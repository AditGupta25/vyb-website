const maneTokenPartnerCrowdsale = {
  endTime: async () => {
    return await maneTokenPartnerCrowdsale.getContract().methods.endTime().call();
  },
  owner: async() => {
    return await maneTokenPartnerCrowdsale.getContract().methods.owner().call();
  },
  address: () => {
    return maneTokenPartnerCrowdsale.ref.networks[Application.currentNetwork].address;
  },
  abi: () => {
    return maneTokenPartnerCrowdsale.ref.abi;
  },
  bytecode: () => {
    return maneTokenPartnerCrowdsale.ref.bytecode;
  },
  getContract: () => {
    return maneTokenPartnerCrowdsale.contract || (maneTokenPartnerCrowdsale.contract = new web3.eth.Contract(maneTokenPartnerCrowdsale.abi(), maneTokenPartnerCrowdsale.address()));
  },
  deploy: async (endTime, rate, wallet, partner1, partner2, tokenAddress, tokenHolder) => {
    const transaction = new web3.eth.Contract(maneTokenPartnerCrowdsale.abi()).deploy({ arguments: [endTime, rate, wallet, partner1, partner2, tokenAddress, tokenHolder], data: maneTokenPartnerCrowdsale.bytecode()});
    const coinbase = await web3.eth.getCoinbase();
    return transaction.send({ from: coinbase, gas: await transaction.estimateGas({ from: coinbase }) })
  },
  ref: require('../../../truffle/build/contracts/MANETokenPartnerCrowdsale.json')
};

export default maneTokenPartnerCrowdsale;