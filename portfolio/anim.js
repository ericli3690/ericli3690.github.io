const spawnFrequency = 500; // ms
const slowestSpeed = 10; // s
const speedRange = 5; // maxSpeed is this amount of seconds greater than slowestSpeed
const maxSize = 100;

let running = false;

function spawnBubble() {
  let bubble = document.createElement("span");
  bubble.className = "bubble";

  const currentWidth = window.innerWidth + maxSize;
  const speed = Math.random() * speedRange + slowestSpeed;
  const size = Math.random() * maxSize + 5;

  bubble.style.setProperty('left', Math.random() * currentWidth - maxSize);
  bubble.style.setProperty('animation-duration', (speed+2).toString() + "s");
  bubble.style.setProperty('width', size);
  bubble.style.setProperty('height', size);
  bubble.style.setProperty('--bubbleSize', size * -1); // spawn below bottom of screen
  bubble.style.setProperty('background-color', 'rgb(' + (Math.random() * 255).toString() + ', ' + 255 + ', ' + (Math.random() * 100 + 155).toString() + ')');

  document.getElementById("bubblesRoot").appendChild(bubble);

  setTimeout(() => {
    deleteBubbleGradually(bubble);
  }, speed * 1000); // convert to ms
}

function deleteBubbleGradually(bubble) {
  function lowerOpacity() {
    bubble.style.setProperty('opacity', getComputedStyle(bubble).opacity - 0.01);
  }
  let lowerOpacityInterval = setInterval(lowerOpacity, 100);
  setTimeout(() => {
    clearInterval(lowerOpacityInterval);
    bubble.remove();
  }, 3000);
}

setInterval(spawnBubble, spawnFrequency);