window.App ||= {}

App.init = ->
  if $('.navbar').length > 0
    $(window).on 'scroll', () ->
    	if $(window).scrollTop() > 50
        $('.navbar').addClass('scrolled')
      else
      	$('.navbar').removeClass('scrolled')
  if $('.ico').length > 0
  	$('#attentionModal').modal('show')

  if $('.home').length > 0
    $('video')[0].play()

  $(document).on 'click', ->
	   $('.collapse').collapse('hide')

  if $('.home').length > 0
    window.sr = ScrollReveal();
    sr.reveal('.reveal-jumbotron', { duration: 1200, origin: 'right', distance:'1000px' });
    sr.reveal('.reveal-card-left', { duration: 1200, origin: 'left', distance: '120px'});
    sr.reveal('.reveal-card-right', { duration: 1200, origin: 'right', distance: '120px'});

$(document).on "turbolinks:load", ->
  App.init()
