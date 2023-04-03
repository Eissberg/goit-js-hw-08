function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timerChangeColor;

btnStop.disabled = true;

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  btnStop.disabled = false;
  timerChangeColor = setTimeout(function tick() {
    document.body.style.backgroundColor = getRandomHexColor();
    timerChangeColor = setTimeout(tick, 1000);
  }, 1000);
});

btnStop.addEventListener('click', () => {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearTimeout(timerChangeColor);
});
