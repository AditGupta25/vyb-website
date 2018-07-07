import maneToken from './web3/maneToken'
import maneTokenPartnerCrowdsale from './web3/maneTokenPartnerCrowdsale'

const addresses = {
  init: () => {
    $(".crowdsale-address").each(function () {
      $(this).text(maneTokenPartnerCrowdsale.address());
    });
    $(".token-address").each(function () {
      $(this).text(maneToken.address());
    });
    $(".crowdsale-etherscan").each(function () {
      $(this).attr('href', `https://${Application.currentNetwork === 3 ? 'ropsten.' : ''}etherscan.io/address/${maneTokenPartnerCrowdsale.address()}`)
    });
    $(".token-etherscan").each(function () {
      $(this).attr('href', `https://${Application.currentNetwork === 3 ? 'ropsten.' : ''}etherscan.io/address/${maneToken.address()}`)
    });
  }
};

export default addresses;