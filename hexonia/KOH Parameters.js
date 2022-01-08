"use strict";
//PARAMETERS
//CONTAINS SETTINGS FUNCTIONS, MAP SETUP, AND TRUCE

import { toggleE } from "./KOH Launch.js";
import { Player, registerMoves, trucedTime, trucedTimeout, changeTrucedVariables, toLog, showPlayerInfo } from "./KOH Player.js";
import { zonesArray, updateAllZones, declareZones, declareZoneSurroundings, createTerritoryLegend } from "./KOH Zones.js";
import { switchProcess } from "./KOH Event Listeners.js";

//when play button clicked, map selection
function endStart() {
  toggleE('beginGame');
  toggleE('mapSelection');
  console.log('# atMap');
}

export var atWidest = null;
export var firstInRow = null;
export var chosenSize = null;
export var atFlip = null;

function mapSelected(size, chosen) {
  atWidest = size;
  firstInRow = (size / 2) + 0.5;
  chosenSize = chosen;
  atFlip = (size / 2) - 1;
  endMap();
}

export function cosmeticHexagon(ctxi) {
  //drawing hexagonal border


  //CLEARING
  ctxi.fillStyle = 'white';
  ctxi.fillRect(0, 0, 750, 700);

  ctxi.lineWidth = 5;

  var originX = 200 + (50 * chosenSize);
  var originY = 25 + (100 * chosenSize);
  ctxi.beginPath();
  ctxi.moveTo(originX - 10, originY - 10);
  ctxi.lineTo(originX - (50 * (3 - chosenSize)) - 20, originY + ((atFlip * 50) + 50));
  ctxi.lineTo(originX - 10, originY + (atWidest * 50) + 10);
  ctxi.lineTo(originX + (firstInRow * 50) + 10, originY + (atWidest * 50) + 10);
  ctxi.lineTo(originX + (firstInRow * 50) + (50 * (3 - chosenSize)) + 20, originY + ((atFlip * 50) + 50));
  ctxi.lineTo(originX + (firstInRow * 50) + 10, originY - 10);
  ctxi.lineTo(originX - 10, originY - 10);
  ctxi.stroke();

  ctxi.lineWidth = 1;
}

export function cosmeticCircles(ctxi) {
  ctxi.fillStyle = currentPlayer.color;
  ctxi.strokeStyle = 'black';

  function eachCircle(x, y) {
    //each circle
    ctxi.globalAlpha = 0.8;
    ctxi.beginPath();
    ctxi.arc(x, y, 150, 0, 2 * Math.PI, false);
    ctxi.fill();
    ctxi.globalAlpha = 1;
    ctxi.lineWidth = 5;
    ctxi.stroke();
  }

  eachCircle(0, 0);
  eachCircle(0, 700);
  eachCircle(750, 0);
  eachCircle(750, 700);

  ctxi.lineWidth = 1;
}

export function drawMapFrame(withCircles) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  cosmeticHexagon(ctx);
  if (withCircles == true) {
    cosmeticCircles(ctx);
  }
  var x = 200 + (50 * chosenSize);
  var y = 25 + (100 * chosenSize);
  var inRow = firstInRow;
  var currentZone = 0;
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 5;
  for (var i = 0; i < atWidest; i++) {
    for (var j = 0; j < inRow; j++) {
      ctx.strokeRect(x + (j * 50), y + (i * 50), 50, 50);
      currentZone += 1;
    }
    if (i > atFlip) {
      x += 25;
      inRow -= 1;
    } else {
      x -= 25;
      inRow += 1;
    }
  }
  ctx.lineWidth = 1;
}


//when map selected, drawing selection
function endMap() {
  if ((document.getElementById('inputDefaultMoves').value > 0) && (document.getElementById('inputMovesPerTerritory').value >= 0) && (document.getElementById('inputFortificationLimit').value >= 0) && (document.getElementById('inputStartingTroops').value >= 0)) {
    toggleE('mapSelection');
    console.log('# atSelection');

    toggleE(['selectionPalette', 'selectionDisplay', 'beginBoard']);
    //drawing the palettes
    for (var i = 0; i < 6; i++) {
      var palettes = ['selectionPaletteR', 'selectionPaletteO', 'selectionPaletteY', 'selectionPaletteG', 'selectionPaletteB', 'selectionPaletteP'];
      var colours = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
      document.getElementById(palettes[i]).style.backgroundColor = colours[i];
    }

    toggleE(['canvas', 'hoveredZone']);

    //drawing canvas
    drawMapFrame(false);

    declareZones();
    declareZoneSurroundings();
    createTerritoryLegend();
  } else {
    alert('Invalid inputs for Settings were submitted. Terminating Page.');
    toggleE('mapSelection');
  }
}

//player variables
var clickedColours = [];
var player1, player2, player3, player4, player5, player6;
var playerArray = [player1, player2, player3, player4, player5, player6];
export var currentPlayer = null;
export var recordPlayerArray = [];
export var officialPlayerArray = [];
export var intendedOfficialPlayerArrayLength = 0;

//for use in exports
export function changeCurrentPlayer(newCurrentPlayer) {
  currentPlayer = newCurrentPlayer;
}

//when a palette is clicked
function paletteClicked(colour) {
  //checking if colour has already been clicked
  var proceed = true;
  for (var i = 0; i < clickedColours.length; i++) {
    if (colour == clickedColours[i]) {
      proceed = false;
    }
  }
  if (proceed == true) {
    //defining a new player
    playerArray[clickedColours.length] = new Player(clickedColours.length, colour);
    currentPlayer = playerArray[clickedColours.length];
    var asPrint = currentPlayer.number + 1;
    document.getElementById('selectionDisplay').innerHTML = 'Player ' + asPrint + ' controls the ' + currentPlayer.color + ' empire.';

    clickedColours.push(colour);
  }
}

function endSelection() {
  //checking if there are territories on the map
  var proceed = false;
  var allowToggle = true;
  for (var i = 0; i < zonesArray.length; i++) {
    if (zonesArray[i].owner != null) {
      proceed = true;
    }
  }
  if (proceed == true) {
    //defining official player array, removing undefined slots
    for (var i = 0; i < 6; i++) {
      if (playerArray[i] != null) {
        officialPlayerArray.push(playerArray[i]);
        recordPlayerArray.push(playerArray[i]);
      }
    }
    intendedOfficialPlayerArrayLength = officialPlayerArray.length;
    //adding territories that belong to x player to x player's array
    for (var i = 0; i < officialPlayerArray.length; i++) {
      var playerTerritories = [];
      for (var j = 0; j < zonesArray.length; j++) {
        if (officialPlayerArray[i] == zonesArray[j].owner) {
          playerTerritories.push(zonesArray[j]);
        }
      }
      if (playerTerritories.length > 0) {
        //placing armies, with a total power of 50 in random territory owned by x player
        // j < x, where x multiplied by 10 is the amount of troops each player will have
        for (var j = 0; j < document.getElementById('inputStartingTroops').value; j++) {
          playerTerritories[Math.floor(Math.random() * playerTerritories.length)].changeHousing(true, 10);
        }
      } else {
        //x player has no territories
        allowToggle = false;
        alert('No zones were claimed by player(s). Terminating page.');
        toggleE(['selectionPalette', 'selectionDisplay', 'beginBoard', 'canvas', 'hoveredZone']);
      }
    }
    if (allowToggle == true) {
      toggleE(['selectionPalette', 'selectionDisplay', 'beginBoard', 'selectMoveAmount', 'inputMoveAmount', 'currentPlayerTitle', 'currentPlayerDisplay', 'swapCanvas', 'movesLeft', 'truceButton', 'moveBar', 'skipMove', 'moveOptionList', 'deleteIndicator', 'zoneInfo', 'log', 'playerInfo']);
      //setting variables related to currentPlayer, setting up map
      currentPlayer = officialPlayerArray[0];
      drawMapFrame(true);
      updateAllZones();
      document.getElementById('mAll').checked = true;
      document.getElementById('currentPlayerDisplay').style.backgroundColor = currentPlayer.color;
      registerMoves(currentPlayer);
      document.getElementById('movesLeft').innerHTML = 'Moves Left: ' + currentPlayer.leftMoves + '  | Progress to Next Move:';
      showPlayerInfo();
    }
  } else {
    //no players have territories
    alert('No zones were claimed by player(s). Terminating page.');
    toggleE(['selectionPalette', 'selectionDisplay', 'beginBoard', 'canvas', 'hoveredZone']);
  }
}

function declareTruce() {
  if (trucedTimeout == 0) {
    if (confirm('Would you like to declare a universal truce? [This is an unsupported feature, and use is not advised]')) {
      for (var i = 0; i < officialPlayerArray.length; i++) {
        officialPlayerArray[i].toggleTruced(true);
      }
      if (currentPlayer.leftMoves == currentPlayer.moves) {
        changeTrucedVariables(0, 2 * officialPlayerArray.length + 1);
        changeTrucedVariables(1, 4 * officialPlayerArray.length + 1);
        toLog('Player ' + (currentPlayer.number + 1) + ' declared a universal truce', true);
        for (var i = 0; i < currentPlayer.moves; i++) {
          currentPlayer.nextMove();
        }
      } else {
        toLog('You do not have the sufficient amount of moves', true);
      }
    }
  } else {
    toLog('The ability to truce is on cooldown', true);
  }
  switchProcess(0, false);
  switchProcess(1, false);
}

function forfeitMove() {
  currentPlayer.nextMove();
  toLog('Player ' + (currentPlayer.number + 1) + ' forfeited a move', false);
}

//onclicks for buttons and palettes
document.getElementById('beginGame').onclick = endStart;
document.getElementById('smallMap').addEventListener('click', function(){mapSelected(5, 2)});
document.getElementById('mediumMap').addEventListener('click', function(){mapSelected(9, 1)});
document.getElementById('largeMap').addEventListener('click', function(){mapSelected(13, 0)});
document.getElementById('beginBoard').onclick = endSelection;
document.getElementById('truceButton').onclick = declareTruce;
document.getElementById('skipMove').onclick = forfeitMove;

document.getElementById('selectionPaletteR').onclick = function() {
  paletteClicked('red');
}
document.getElementById('selectionPaletteO').onclick = function() {
  paletteClicked('orange');
}
document.getElementById('selectionPaletteY').onclick = function() {
  paletteClicked('yellow');
}
document.getElementById('selectionPaletteG').onclick = function() {
  paletteClicked('green');
}
document.getElementById('selectionPaletteB').onclick = function() {
  paletteClicked('blue');
}
document.getElementById('selectionPaletteP').onclick = function() {
  paletteClicked('purple');
}
