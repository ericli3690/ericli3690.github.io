"use strict";
//LAUNCH
//INCLUDES ONLOAD, TOGGLEE, TO DO

import { checksum } from "./KOH Checksum.js";

console.log('# Launched KINGDOMS OF HEXONIA, V2');
console.log('# Checksum: ' + checksum);

//toggles elements
export function toggleE(e) {
  //toggle code
  function rawToggle() {
    if (target.style.display === 'none') {
      target.style.display = 'block';
    } else {
      target.style.display = 'none';
    }
  }
  //if toggle is an array
  if (Array.isArray(e)) {
    for (var i = 0; i < e.length; i++) {
      var target = document.getElementById(e[i]);
      rawToggle(target)
    }
  } else {
    //else
    var target = document.getElementById(e);
    rawToggle(target)
  }
}

//onload
function atStart() {
  document.getElementById('dDefault').checked = true;
  document.getElementById('fNone').checked = true;
  document.getElementById('inputDefaultMoves').value = 1;
  document.getElementById('inputMovesPerTerritory').value = 3;
  document.getElementById('inputFortificationLimit').value = 0;
  document.getElementById('inputStartingTroops').value = 5;
  toggleE(['canvas', 'hoveredZone', 'canvas2', 'currentPlayerTitle', 'currentPlayerDisplay', 'swapCanvas', 'movesLeft', 'inputMoveAmount', 'truceButton', 'selectionPalette', 'selectionDisplay', 'beginBoard', 'selectMoveAmount', 'mapSelection', 'filler', 'moveBar', 'territoryMapLegendPositioning', 'recruitButtonTextBefore', 'recruitButtonTextAfter', 'skipMove', 'moveOptionList', 'attackAlert', 'deleteIndicator', 'zoneInfo', 'log', 'playerInfo']);
  console.log('# atStart');
}

atStart();

//TODO

//barracks & command limit
//trait of zones, on menu, replacing cancel button
//having barracks increases your command capacity, which dictates how many troops can be in a single square at once
//command capacity is calculated as: at minimum xxx value, once reached, this formula takes over: (record highest a zone has ever held) + (10 extra you can accumulate) + (ammount added by barracks)
//barracks must be built by a manned crew, cannot be crammed more than one into a square, incompatible with temple
//when a barracks is built, the entire turn is used, but all those moves are turned into the amount the barracks allows you to build over the command limit
//barracks can be augmented 3 times, each turn adding its moves to its total amount, after that, seperate barracks must be built
//when an enemy's barracks are destroyed, the enemy's troops are cut down so that the command limit is obeyed

//corruption and placement
//doescorruptionspread, doescorruptionfortify rules
//unpassable blockers, to make terrain more interesting
//corruption and blockers can be added at empire placement
//being able to go back and change a zone, or clear a zone completely, if you make a mistake in placement
//randomization button, where it logs all the zone types currently on the board into an array (counting repeating mentions) and then randomly assigns each zone
//an army walking through corruption suffers losses proportionate to its total size, not a fixed amount; to discourage doomstacking

//saves
//being able to load a save game: title screen says new game or continue campaign, when leaving a game it gives you a save string, which you can input in later to load up the same game, just needs info on players and zones
//logging the save string every move, so that you can rewind
//cookies

//name
//name of game: cold war silent war? because you can do lots of things (ex recruiting, building temples, taking territory) that seem like acts of aggression that the enemy automatically has to counter in order not to fall behind militarily in the future
