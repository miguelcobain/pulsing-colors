import './styles.scss';
import screenfull from 'screenfull';

let onColorInput = document.getElementById('on-color');
let offColorInput = document.getElementById('off-color');
let durationInput = document.getElementById('duration');
let animationTypeSelect = document.getElementById('animation-type');
let playButton = document.getElementById('play');
let stage = document.getElementById('stage');

onColorInput.addEventListener('input', function(e) {
  let color = e.target.value;
  document.documentElement.style.setProperty('--on-color', color);
});

offColorInput.addEventListener('input', function(e) {
  let color = e.target.value;
  document.documentElement.style.setProperty('--off-color', color);
});

durationInput.addEventListener('input', function(e) {
  let duration = e.target.value;
  stage.style.animationDuration = `${duration}s`;
});

animationTypeSelect.addEventListener('input', function(e) {
  let animationType = e.target.value;
  stage.style.animationTimingFunction = animationType;
});

playButton.addEventListener('click', function() {
  let { animationPlayState } = window.getComputedStyle(stage);
  if (animationPlayState === 'paused') {
    stage.style.animationPlayState = 'running';
    playButton.textContent = 'Pause';
  } else {
    stage.style.animationPlayState = 'paused';
    playButton.textContent = 'Play';
  }
});

stage.addEventListener('click', function(e) {
  screenfull.request(e.target);
});