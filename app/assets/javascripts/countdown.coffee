class App.Countdown
  initializeCountdown: ->
    # "Feb 28, 2018 06:00:00" -> Value in contract for ICO end
    # Changed to "Jan 7, 2018 00:00:00 UTC" per Saransh
    countdownEnd = 1517875200000
    updateCountdown(countdownEnd)
    window.countdown = setInterval((->
      distance = updateCountdown(countdownEnd)
      if distance < 0
        clearInterval(window.countdown)
        injectCountdownNumbers(0, 0, 0, 0)
        return
    ), 1000)

  updateCountdown = (countdownEnd) ->
    now = (new Date).getTime()
    distance = countdownEnd - now

    days = Math.floor(distance / (1000 * 60 * 60 * 24))
    hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
    minutes = Math.floor((distance / 1000 / 60) % 60)
    seconds = Math.floor(distance / 1000 % 60)

    injectCountdownNumbers(days, hours, minutes, seconds)
    return distance

	injectCountdownNumbers = (days, hours, minutes, seconds) ->
	  $('.days.amount').html(formatNumberString(days))
	  $('.hours.amount').html(formatNumberString(hours))
	  $('.minutes.amount').html(formatNumberString(minutes))
	  $('.seconds.amount').html(formatNumberString(seconds))

	formatNumberString = (number) ->
	  ('0' + number).slice(-2)

$(document).on "turbolinks:load", ->
  f = new App.Countdown
  f.initializeCountdown()
