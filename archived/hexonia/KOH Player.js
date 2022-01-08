"use strict";
//PLAYER
//INCLUDES PLAYER FUNCTIONS, TURN CALCULATIONS, MOVE FINISHING, EMD OF GAME CHECKS

import { toggleE } from "./KOH Launch.js";
import { currentPlayer, officialPlayerArray, changeCurrentPlayer, intendedOfficialPlayerArrayLength, chosenSize, drawMapFrame } from "./KOH Parameters.js"
import { zonesArray, territoryArray, updateAllZones, territoryGroups, territoryNumber } from "./KOH Zones.js"
import { capitalizeFirst, setStyle } from "./KOH Event Listeners.js";

var turnsPassed = 1;
var savedCurrentPlayer = 0;
export var victoryDeclared = false;
export var trucedTime = 0;
export var trucedTimeout = 0;
export function changeTrucedVariables(toChange, amount) {
  if (toChange == 0) {
    trucedTime = amount;
  } else {
    trucedTimeout = amount;
  }
}

//variables for player info update
var territoryList = [];


//part of registermoves, isolated so it can also be used for player info updates
function countTerritories(counter) {
  var workArray = [];
  var counter = 0;
  territoryList = [];
  for (var i = 0; i < territoryGroups.length; i++) {
    for (var j = 0; j < zonesArray.length; j++) {
      if (territoryArray[j] == territoryGroups[i]) {
        workArray.push(zonesArray[j]);
        if (workArray.length == territoryNumber[i]) {
          break;
        }
      }
    }
    var ownedCounter = 0;
    for (var j = 0; j < workArray.length; j++) {
      if (workArray[j].owner == currentPlayer) {
        ownedCounter += 1;
      }
    }
    if (ownedCounter == workArray.length) {
      counter += 1;
      territoryList.push(territoryGroups[i]);
    }
    workArray = [];
  }
  return counter;
}


//updating current player moves
export function registerMoves(insert) {
  var territoryOwnedCounter = countTerritories();
  if ((chosenSize != 2) && (zonesArray[(zonesArray.length / 2) - 0.5].owner == currentPlayer)) {
    //so that if you own the center square, you just get the full move bomus (see below) and not also the +1 territory move poop
    territoryOwnedCounter -=1;
  }
  var finalMoves;
  var progressMoves;
  finalMoves = Math.floor((territoryOwnedCounter + insert.templeArray.length) / document.getElementById('inputMovesPerTerritory').value);
  progressMoves = Math.floor((territoryOwnedCounter + insert.templeArray.length) % document.getElementById('inputMovesPerTerritory').value);
  if (chosenSize != 2) {
    if (zonesArray[(zonesArray.length / 2) - 0.5].owner == currentPlayer) {
      finalMoves += 1;
    }
  }
  if (document.getElementById('dDefault').checked == true) {
    insert._moves = (3 - chosenSize) + finalMoves;
  } else {
    insert._moves = Number(document.getElementById('inputDefaultMoves').value) + finalMoves;
  }
  insert._leftMoves = insert.moves;
  //movebar code
  var canvas = document.getElementById('moveBar');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 120, 20);
  ctx.fillStyle = currentPlayer.color;
  //120 is the width of the movebar in pixels, 20 is the height of the movebar in pixels
  ctx.fillRect(1, 1, ((120 / document.getElementById('inputMovesPerTerritory').value) * progressMoves), 18);
}

function inspectDeadAndIterateNextPlayer() {
  var toSplice = [];
  for (var i = 0; i < officialPlayerArray.length; i++) {
    var proceed = true;
    for (var j = 0; j < zonesArray.length; j++) {
      if (officialPlayerArray[i] == zonesArray[j].owner) {
        proceed = false;
      }
    }
    if (proceed == true) {
      toLog('The ' + officialPlayerArray[i].color + ' empire has been destroyed!', true);
      toSplice.push(i);
    }
  }


  //next player
  function tryNextPlayer() {
    if (officialPlayerArray.indexOf(currentPlayer) + 1 == officialPlayerArray.length) {
      //if it is already the last player, switch it to the first
      changeCurrentPlayer(officialPlayerArray[0]);
    } else {
      //else go to next player
      changeCurrentPlayer(officialPlayerArray[officialPlayerArray.indexOf(currentPlayer) + 1]);
    }
  }
  tryNextPlayer();

  //seeing if the tried player is eliminated, and then moving onto the next
  while (toSplice.indexOf(currentPlayer.number) != -1) {
    tryNextPlayer();
  }

  //removing the tosplice empires
  //note that when an article is removed from an array, the elements after it maybe targetted incorrectly because their article number has moved down
  //to compensate, removedsofar is subtracted
  var removedSoFar = 0;
  for (var i = 0; i < toSplice.length; i++) {
    officialPlayerArray.splice(toSplice[i] - removedSoFar, 1);
    removedSoFar += 1;
  }

}

//updating to next player
function nextPlayer() {
  registerMoves(currentPlayer);
  updateAllZones();
  inspectDeadAndIterateNextPlayer();
  if ((officialPlayerArray.length < 2) && (officialPlayerArray.length != intendedOfficialPlayerArrayLength)) {
    //allowing for battleLogic to stop running
    victoryDeclared = true;
    toLog('GAME OVER: The ' + officialPlayerArray[0].color + ' empire has declared victory! Hail ' + officialPlayerArray[0].color + '!', true);
    for (var i = 0; i < zonesArray.length; i++) {
      zonesArray[i].changeOwner(officialPlayerArray[0]);
    }
    updateAllZones();
  } else {
    registerMoves(currentPlayer);
    document.getElementById('currentPlayerDisplay').style.backgroundColor = currentPlayer.color;
    if (currentPlayer == officialPlayerArray[0]) {
      turnsPassed += 1;
    }
    drawMapFrame(true);
    if (currentPlayer._truced == true) {
      trucedTime -= 1;
      toLog('The truce is ticking away', false);
      if (trucedTime == 0) {
        for (var i = 0; i < officialPlayerArray.length; i++) {
          officialPlayerArray[i].toggleTruced(false);
        }
        toLog('Truce over', true);
      }
    }
    if (trucedTimeout > 0) {
      trucedTimeout -= 1;
    }
  }
  for (var i = 0; i < zonesArray.length; i++) {
    zonesArray[i].toggleRecruiting(false);
    zonesArray[i].toggleFatigued(false);
  }
}

function targetMoveOptionList(target) {
  if (target != null) {
    document.getElementById(target).style.color = 'red';
    document.getElementById(target).style.fontWeight = 'bold';
    document.getElementById(target).style.textDecoration = 'line-through red solid';
  } else {
    var allPossibleTargets = ['moveOptionListCleanse', 'moveOptionListAttack', 'moveOptionListWorship', 'moveOptionListBarracks'];
    for (var i = 0; i < allPossibleTargets.length; i++) {
      document.getElementById(allPossibleTargets[i]).style.color = 'black';
      document.getElementById(allPossibleTargets[i]).style.fontWeight = 'normal';
      document.getElementById(allPossibleTargets[i]).style.textDecoration = 'none black solid';
    }
  }
}

//log function
export function toLog(message, boldred) {
  var node = document.createElement('LI');
  node.className = 'logListItems';
  node.innerHTML = 'Year ' + turnsPassed + ', Month ' + (currentPlayer.number + 1) + ', Day ' + ((currentPlayer.moves + 1) - currentPlayer.leftMoves) + ' | ' + capitalizeFirst(currentPlayer.color) + ' | ' + message;
  if (boldred == true) {
    node.style.color = 'red';
    node.style.fontWeight = 'bold';
  }
  document.getElementById('log').appendChild(node);
  document.getElementById('log').scrollTop = document.getElementById('log').scrollHeight;
}

//player box function
export function showPlayerInfo() {
  document.getElementById('pNumberColor').innerHTML = 'Player ' + (currentPlayer.number + 1) + ', ' + capitalizeFirst(currentPlayer.color);
  setStyle('pNumberColor', currentPlayer.color, 'bold');
  document.getElementById('pTerritories').innerHTML = 'You own ' + territoryList.length + ' territories [Hover]';
  document.getElementById('pTerritories').title = territoryList;
  document.getElementById('pTemples').innerHTML = 'You own ' + currentPlayer.templeArray.length + ' temples';
  document.getElementById('pCommandSoftCap').innerHTML = 'WIP';
  document.getElementById('pCommandHardCap').innerHTML = 'WIP';
}

export class Player {
  constructor(number, color) {
    this._number = number;
    this._color = color;
    this._moves = 3;
    this._leftMoves = 3;
    this._truced = false;
    this.templeArray = [];
  }
  get number() {
    return this._number;
  }
  get color() {
    return this._color;
  }
  get moves() {
    return this._moves;
  }
  get leftMoves() {
    return this._leftMoves;
  }
  nextMove() {
    if (this._leftMoves == 1) {
      this._leftMoves = this._moves;
      nextPlayer();
      if (chosenSize != 2) {
        targetMoveOptionList(null);
        toggleE('attackAlert');
      }
      if (victoryDeclared == false) {
        document.getElementById('movesLeft').innerHTML = 'Moves Left: ' + currentPlayer.moves + '  | Progress to Next Move:';
      } else {
        document.getElementById('movesLeft').innerHTML = 'Moves Left: * | Progress to Next Move:';
      }
    } else {
      this._leftMoves -= 1;
      document.getElementById('movesLeft').innerHTML = 'Moves Left: ' + currentPlayer.leftMoves + '  | Progress to Next Move:';
    }

    //player info box
    var uselessFiller = 0;
    countTerritories(uselessFiller);
    showPlayerInfo();

    //making move option list items that are now nondoable red and bold
    if (this.moves > this.leftMoves) {
      targetMoveOptionList('moveOptionListWorship');
      targetMoveOptionList('moveOptionListBarracks');
    }

    if (this.leftMoves == 1) {
      if (chosenSize != 2) {
        targetMoveOptionList('moveOptionListCleanse');
        targetMoveOptionList('moveOptionListAttack');
        toggleE('attackAlert');
      }
    }
  }
  toggleTruced(direction) {
    this._truced = direction;
  }
}
