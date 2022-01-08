console.log('JS Linked');

//// TODO:
/*

FOR KIANA:
running, jumping cycles, more sprites

IN THIS PROJECT:
drawing the proper blocks
the background moves, not the player
randomness for sprite alternatives
colliding with blocks

MAYBE:
friction
fanmade levels

*/

//when loading images
function loadImage(mySrc, x, y, width, height, ctxi, firstTimeLoading) {
  var imageToDraw = new Image();
  imageToDraw.src = mySrc;
  if (firstTimeLoading == true) {
    imageToDraw.onload = function() {
      ctxi.drawImage(imageToDraw, x, y, width, height);
    }
  } else {
    ctxi.drawImage(imageToDraw, x, y, width, height);
  }
}

class Player {
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = characterImages[sprite];
    this.background = '';
    this.velocityX = 0;
    this.velocityY = 0;
    this.gravity = -0.5;
    this.height = 120;
    this.width = 48;
    this.speedLimit = 10;
    this.jumpHeight = 15;
    this.graceJump = 12;
    this.horizontalMomentum = 0.75; //the larger, the faster it slows down
    this.minimumJumpHeight = 5; //higher values practically remove small jumps
  }
  get pos() {
    return this.x + ' ' + this.y;
  }
  calculateVelocity() {
    //player speed and jump, edit before updating the position
    if (aDown == true && this.x > 0 && this.velocityX > -this.speedLimit) {
      this.velocityX -= 1;
    }
    if (dDown == true && this.x < window.innerWidth - this.width && this.velocityX < this.speedLimit) {
      this.velocityX += 1;
    }
    if (jumpKeyDown == true) {
      //the jump key is currently down
      if (canJump == true) {
        //the player is close enough to the floor
        //apply vertical velocity
        player.velocityY = player.jumpHeight;
        canJump = false;
      }
    }
    if (horizontalMovementSlowing == true) {
      //the player has terminated movement in a direction
      if ((this.velocityX < this.horizontalMomentum) && (this.velocityX > -this.horizontalMomentum)) {
        //the player's drifing has been slowed enough to the point where it will be zero next tick
        this.velocityX = 0;
        horizontalMovementSlowing = false;
      } else if (this.velocityX > 0) {
        //the player was originally moving to the right, and must continue drifting for an interval of time
        this.velocityX -= this.horizontalMomentum;
      } else if (this.velocityX < 0) {
        //the player was originally moving to the left, and must continue drifting for an interval of time
        this.velocityX += this.horizontalMomentum;
      }
    }
    if (canJump = false) {
      //Y DOES NOT HAVE A SPEED CAP
    }
  }
  newPos() {
    this.velocityY += this.gravity;
    this.x += this.velocityX;
    this.y -= this.velocityY;
    this.sideCollisions();
  }
  sideCollisions() {
    if (this.x > (window.innerWidth - this.width)) {
      //contacting right side
      this.x = window.innerWidth - this.width;
      this.velocityX = 0;
    } else if (this.x < 0) {
      //contacting left side
      this.x = 0;
      this.velocityX = 0;
    }
    //ONLY WORKS WHEN THE GROUND IS THE BOTTOM OF THE PAGE
    if (this.y >= window.innerHeight - this.height) {
      //contacting bottom
      //var rockBottom = window.innerHeight - player.height - playerCanvas.bottom;
      this.y = window.innerHeight - this.height;
      this.velocityY = 0;
    } else if (this.y > 0) {
      //contacting top
      //this.y = 0;
      //this.velocityY = 0;
    }
    if (this.y >= window.innerHeight - this.height - this.graceJump) {
      //if character is close enough to the bottom to warrant a jump
      canJump = true;
    }
  }
}



class Canvas {
  constructor(identity, bottom) {
    this.identity = identity;
    this.bottom = bottom;
  }
  set() {
    this.ctx = this.identity.getContext('2d');
    this.identity.width = window.innerWidth;
    this.identity.height = window.innerHeight;
  }
  start() {
    this.interval = setInterval(updatePlayer, 16);
  }
  stop() {
    clearInterval(this.interval);
  }
  clear() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
  drawImg(img, x, y, width, height, first) {
    loadImage(img, x, y, width, height, this.ctx, first)
  }
}

function updatePlayer() {
  playerCanvas.clear();
  player.calculateVelocity();
  player.newPos();
  playerCanvas.drawImg(player.sprite, player.x, player.y, player.width, player.height, false);
}

//first time drawing the character
var characterImages = ['./images/sprites/character.png'];
var player;
var playerCanvas;

//canvases
function startGame() {
  playerCanvas = new Canvas(document.getElementById('player'), 270);
  backgroundCanvas = new Canvas(document.getElementById('background'), 0);
  foregroundCanvas = new Canvas(document.getElementById('foreground'), 0);
  //player canvas
  player = new Player(0, 0, 0);
  player.x = window.innerWidth / 2 - player.width / 2;
  player.y = window.innerHeight / 2 - player.height / 2;
  playerCanvas.set();
  playerCanvas.drawImg(player.sprite, player.x, player.y, player.width, player.height, true);
  playerCanvas.start();
}

startGame();

//keydown variables
var aDown = false;
var dDown = false;
var canJump = true;
var jumpKeyDown = false;
var horizontalMovementSlowing = false;
var background = 0;
var backgrounds = ['./images/backgrounds/F11_background.png', './images/backgrounds/title_screen.png', './images/backgrounds/instructions_screen.png', './images/backgrounds/brain_background.png', './images/backgrounds/dream_background.png'];
function backgroundSet() {
  document.body.style.backgroundImage = "url(" + backgrounds[background].toString() + ")";
  document.body.style.backgroundSize = window.innerWidth.toString() + 'px ' + window.innerHeight.toString() + 'px';
}
var waitUntilBrowserUpdates;
function canvasSet() {
  document.getElementById('player').width = window.innerWidth;
  document.getElementById('player').height = window.innerHeight;
  document.body.style.backgroundSize = window.innerWidth.toString() + 'px ' + window.innerHeight.toString() + 'px';
  clearInterval(waitUntilBrowserUpdates);
}

backgroundSet();

//keydown
function keyDown(event) {
  if (event.keyCode == 65) {
    //a
    aDown = true;
  }
  if (event.keyCode == 68) {
    //d
    dDown = true;
  }
  if (event.keyCode == 32) {
    //space
    jumpKeyDown = true;
  }
  if (event.keyCode == 69) {
    //e, toggle background
    if (background == 3) {
      background = 4;
    } else if (background == 4) {
      background = 3;
    }
    backgroundSet();
  }
  if (event.keyCode == 27) {
    //esc
    if (background == 1 || background == 2) {
      background += 1;
      backgroundSet();
    }
  }
  if (event.keyCode == 122) {
    //f11
    if (background == 0) {
     background += 1;
     backgroundSet();
    }
    waitUntilBrowserUpdates = setInterval(canvasSet, 250);
  }
}


function keyUp(event) {
  if (event.keyCode == 65) {
    //a
    aDown = false;
    horizontalMovementSlowing = true;
    //player.velocityX = 0;
  }
  if (event.keyCode == 68) {
    //d
    dDown = false;
    horizontalMovementSlowing = true;
    //player.velocityX = 0;
  }
  if (event.keyCode == 32) {
    //space
    jumpKeyDown = false;
    if (player.velocityY > player.minimumJumpHeight) {
      player.velocityY = player.minimumJumpHeight;
    }
  }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
