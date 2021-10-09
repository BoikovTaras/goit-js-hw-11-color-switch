const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

startBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    const random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[random];
    startBtn.setAttribute('disabled', true);
  }, 1000)
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled', false);
});