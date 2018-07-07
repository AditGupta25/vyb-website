class App.Mix
  init: ->
    if $('#home').length > 0
      mixpanel.track("Homepage view")
    if $('#ico').length > 0
      mixpanel.track("ICO view")

    $('body').on 'click', '.join-ico', ->
      mixpanel.track("Join ICO click")

    $('body').on 'click', '.whitepaper', ->
      mixpanel.track("Whitepaper click")

    $('body').on 'click', '.telegram', ->
      mixpanel.track("Join Telegram click")

    if $('.registration').length > 0
      $('.registration').submit (e) ->
        email = $(this).find('#user_email').val()
        mixpanel.alias email
        mixpanel.people.set({ '$email': email })
        mixpanel.track('Registration', { email })

$(document).on "turbolinks:load", ->
  mix = new App.Mix
  mix.init()
