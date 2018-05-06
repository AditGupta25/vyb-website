import Web3 from 'web3';

export default async function() {
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    global.web3 = new Web3(new Web3.providers.HttpProvider(`https://${networkId === 1 ? 'mainnet' : 'ropsten'}.infura.io/RmMECEHkDnjRQjZDkdPE`));
  }

  const netId = await web3.eth.net.getId();
  Application.currentNetwork = netId;
  if (netId !== networkId) {
    if(networkId === 1){
      alert('You are not on the Main Ethereum Network. Some information on this site will not load correctly');
    } else {
      alert('We are testing on Ropsten')
    }
  }
};