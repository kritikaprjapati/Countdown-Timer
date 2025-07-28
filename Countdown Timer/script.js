const startBtn = document.getElementById('startBtn');
const datetimeInput = document.getElementById('datetime');
const message = document.getElementById('message');

let countdownInterval;

startBtn.addEventListener('click', () => {
  clearInterval(countdownInterval); // Clear any previous countdown
  message.textContent = '';

  const targetDate = new Date(datetimeInput.value);
  if (isNaN(targetDate)) {
    alert('Please select a valid date and time.');
    return;
  }

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      clearInterval(countdownInterval);
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      message.textContent = '🎉 Time is up!';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  }, 1000);
});
