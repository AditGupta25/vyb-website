App.EthAddressForm = {
  init: () => {
    $('.edit_user').submit(function (e) {
      e.preventDefault();
      const alert = $('.alert-danger');
      alert.hide();
      const val = $(this).find('#user_eth_address').val();
      if(web3.utils.isAddress(val)) {
        $(this).unbind('submit').submit()
      } else {
        alert.show();
      }
    });
  }
};

$(document).on("turbolinks:load", () => App.EthAddressForm.init());
