class App.Calculator
  ethRates = { eth: 1 }

  init: ->
    getKwattRate(initializeCalculator)

  initializeCalculator = (_, kwattRate) ->
    ethRates.kwatt = kwattRate
    $('#kwatt-rate').html(kwattRate)
    getBitcoinAndDollarRates(updateCalcValues)
    bindOnChangeCalculation()

  getKwattRate = (callback) ->
    new web3.eth.Contract(crowdsaleABI, '0x3d8d321d3414f66684326dd8a471d382c515495f').methods.rate().call(callback);

  getBitcoinAndDollarRates = (callback) ->
    $.get 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD', (data) ->
      ethRates.btc = data.BTC
      ethRates.usd = data.USD
      $('#eth-value').val(1)
      callback('eth', 1)

  updateCalcValues = (anchorKey, anchorValue) ->
    Object.keys(ethRates).filter((key) => key != anchorKey).forEach (key) ->
      $("input[data-sym='#{key}']").first().val((ethRates[key] / ethRates[anchorKey]) * anchorValue)

  bindOnChangeCalculation = ->
    $('.calculator input').change () ->
      updateCalcValues($(this).attr('data-sym'), $(this).val())


$(document).on "turbolinks:load", ->
  if($('.calculator').length)
    calc = new App.Calculator
    calc.init()
