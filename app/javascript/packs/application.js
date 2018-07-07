/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import web3Init from '../web3/web3Init'
import addresses from '../addresses'
import countdown from '../countdown'
import MANEToken from '../web3/maneToken'
import MANETokenCrowdsale from '../web3/maneTokenCrowdsale'
import MANETokenPartnerCrowdsale from '../web3/maneTokenPartnerCrowdsale'

global.Application = {
  init: async () => {
    await web3Init();
    addresses.init();
    countdown.initializeCountdown();
  },
  Contracts: {
    MANEToken,
    MANETokenCrowdsale,
    MANETokenPartnerCrowdsale
  }
};

$(document).on('turbolinks:load', Application.init);

