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
import maneToken from '../web3/maneToken'
import maneTokenCrowdsale from '../web3/maneTokenCrowdsale'

global.Application = {
  init: async () => {
    await web3Init();
    addresses.init();
  },
  Contracts: {
    MANEToken: maneToken,
    MANETokenCrowdsale: maneTokenCrowdsale
  }
};

$(document).on('turbolinks:load', Application.init);

