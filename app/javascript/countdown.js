const countdown = {
  initializeCountdown: async () => {
    // Changed to pull from contract
    const countdownEnd = (await Application.Contracts.MANETokenPartnerCrowdsale.endTime()) * 1000;
    countdown.updateCountdown(countdownEnd);
    return window.countdown = setInterval((function() {
      const distance = countdown.updateCountdown(countdownEnd);
      if (distance < 0) {
        clearInterval(window.countdown);
        countdown.injectCountdownNumbers(0, 0, 0, 0);
        return;
      }
    }), 1000);
  },
  updateCountdown: function(countdownEnd) {
    const now = (new Date).getTime();
    const distance = countdownEnd - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / 1000 / 60) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    countdown.injectCountdownNumbers(days, hours, minutes, seconds);
    return distance;
  },
  injectCountdownNumbers: function(days, hours, minutes, seconds) {
    $('.days.amount').html(countdown.formatNumberString(days));
    $('.hours.amount').html(countdown.formatNumberString(hours));
    $('.minutes.amount').html(countdown.formatNumberString(minutes));
    return $('.seconds.amount').html(countdown.formatNumberString(seconds));
  },
  formatNumberString: number => (`0${number}`).slice(-2)
};

export default countdown;

