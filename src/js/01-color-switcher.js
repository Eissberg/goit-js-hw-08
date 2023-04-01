function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timerChangeColor;

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  timerChangeColor = setTimeout(function tick() {
    document.body.style.backgroundColor = getRandomHexColor();
    timerChangeColor = setTimeout(tick, 1000);
  }, 1000);
});

btnStop.addEventListener('click', () => {
  btnStart.disabled = false;
  document.body.style.backgroundColor = '#fafafa';
  clearTimeout(timerChangeColor);
});
