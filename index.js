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
    intervalId = setInterval(() => {document.body.style.backgroundColor()}, 1000)
});
stopBtn.addEventListener('click', stopChangeBodyColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// function startChangeBodyColor(colors) {
//     console.log('start')
// };


function stopChangeBodyColor() {
    console.log('stop')
};