// Activate the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    let swPath = 'service-worker.js';
    navigator.serviceWorker.register(swPath).then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

import './styles.scss';
import screenfull from 'screenfull';

let onColorInput = document.getElementById('on-color');
let offColorInput = document.getElementById('off-color');
let durationInput = document.getElementById('duration');
let animationTypeSelect = document.getElementById('animation-type');
let playButton = document.getElementById('play');
let stage = document.getElementById('stage');

let offColor = '#000000';
let onColor = '#ffffff';
let duration = 2000;
let easing = 'ease-in-out';

function animate() {
  return stage.animate([
    { backgroundColor: offColor },
    { backgroundColor: onColor },
    { backgroundColor: offColor }
  ], {
    duration,
    easing,
    iterations: Infinity
  });
}

let animation = animate();

// set defaults
onColorInput.value = onColor;
offColorInput.value = offColor;
durationInput.value = duration / 1000;
animationTypeSelect.value = easing;

onColorInput.addEventListener('input', function(e) {
  onColor = e.target.value;
  animate();
});

offColorInput.addEventListener('input', function(e) {
  offColor = e.target.value;
  animate();
});

durationInput.addEventListener('input', function(e) {
  duration = parseFloat(e.target.value) * 1000;
  animate();
});

animationTypeSelect.addEventListener('input', function(e) {
  easing = e.target.value;
  animate();
});

playButton.addEventListener('click', function() {
  if (animation.playState === 'running') {
    animation.pause();
    playButton.textContent = 'Play';
  } else {
    animation.play();
    playButton.textContent = 'Pause';
  }
});

stage.addEventListener('click', function(e) {
  screenfull.request(e.target);
});


