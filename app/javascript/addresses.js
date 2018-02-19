import maneToken from './web3/maneToken'
import maneTokenCrowdsale from './web3/maneTokenCrowdsale'

const addresses = {
  init: () => {
    $(".crowdsale-address").each(function () {
      $(this).text(maneTokenCrowdsale.address());
    });
    $(".token-address").each(function () {
      $(this).text(maneToken.address());
    });
    $(".crowdsale-etherscan").each(function () {
      $(this).attr('href', `https://${Application.currentNetwork === 3 ? 'ropsten.' : ''}etherscan.io/address/${maneTokenCrowdsale.address()}`)
    });
    $(".token-etherscan").each(function () {
      $(this).attr('href', `https://${Application.currentNetwork === 3 ? 'ropsten.' : ''}etherscan.io/address/${maneToken.address()}`)
    });
  }
};

export default addresses;