document.addEventListener('DOMContentLoaded', () => {
  function calculateRemainingTime() {
    const endDate = new Date('2019-10-26T18:00:00');
    const actualDate = new Date();
    const datesDifference = endDate - actualDate;
    const remainingSeconds = Math.floor((datesDifference / 1000) % 60);
    const remainingMinutes = Math.floor((datesDifference / 1000 / 60) % 60);
    const remainingHours = Math.floor((datesDifference / (1000 * 60 * 60)) % 24);
    const remainingDays = Math.floor(datesDifference / (1000 * 60 * 60 * 24));
    const remainingWeeks = Math.floor(datesDifference / (1000 * 60 * 60 * 24 * 7));
    
    return {
      totalTime: datesDifference,
      totalSeconds: remainingSeconds,
      totalMinutes: remainingMinutes,
      totalHours: remainingHours,
      totalDays: remainingDays,
      totalWeeks: remainingWeeks,
    };
  }
  
  // Countdown Initialization
  (function () {
    const countdownContainer = document.querySelector('.countdown');
    const weekContainer = countdownContainer.querySelector('.weeks');
    const dayContainer = countdownContainer.querySelector('.days');
    const hourContainer = countdownContainer.querySelector('.hours');
    const minuteContainer = countdownContainer.querySelector('.minutes');
    const seconContainer = countdownContainer.querySelector('.seconds');
    
    function updateCountDown() {
      const remainingTime = calculateRemainingTime();
      
      weekContainer.innerText = (`0${remainingTime.totalWeeks}`).slice(-2); 
      dayContainer.innerText = remainingTime.totalDays;
      hourContainer.innerText = (`0${remainingTime.totalHours}`).slice(-2);
      minuteContainer.innerText = (`0${remainingTime.totalMinutes}`).slice(-2);
      seconContainer.innerText = (`0${remainingTime.totalSeconds}`).slice(-2);
      
      if (remainingTime.totalTime <= 0) {
        clearInterval(interval);
        countdownContainer.innerHTML = '<h1>Congratulations!</h1>';
      }
    }
    
    updateCountDown();
    
    const interval = setInterval(updateCountDown, 1000);
  })();
});