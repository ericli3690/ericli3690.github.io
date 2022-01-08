"use strict";
//EVENT LISTENERS

import { toggleE } from "./KOH Launch.js";
import { zonesArray, updateZone, updateAllZones, swapCanvas, personalizedTemples, personalizedBarracks, personalizedFortifications, territoryColours } from "./KOH Zones.js";
import { currentPlayer, drawMapFrame } from "./KOH Parameters.js";
import { battleLogic } from "./KOH Battle Logic.js";
import { toLog } from "./KOH Player.js";

//selection and movement variables
var selectionModeMouseDown = false;
export var surroundingsProcess = false;
export var menuProcess = false;
var qNull1, qNull2, qNull3, qNull4, qNull5, qNull6;
var qNullArray = [qNull1, qNull2, qNull3, qNull4, qNull5, qNull6];
export var zoneExport = null;
export var surroundingsXExport = [null, null, null, null, null, null];
export var surroundingsYExport = [null, null, null, null, null, null];
export var zoneSurExport = [null, null, null, null, null, null];
export var chosenZoneSurExport = null;
for (var i = 0; i < 6; i++) {
  qNullArray[i] = false;
}

//menuProcess variables
var menuExport = null;
var menuChildrenX = [0, 62, 0, -62, 0];
var menuChildrenY = [-62, 0, 62, 0, 0];

export function switchProcess(target, to) {
  if (target == 0) {
    surroundingsProcess = to;
  } else if (target == 1) {
    menuProcess = to;
  }
}

export function resetSurroundingExports(change) {
  if (change == zoneExport) {
    zoneExport = null;
  } else if (change == zoneSurExport) {
    zoneSurExport = [null, null, null, null, null, null];
  } else if (change == chosenZoneSurExport) {
    chosenZoneSurExport = null;
  }
}

//during selection, claiming territories
function selectionModeAddToEmpire() {
  var x = event.clientX - 10 + pageXOffset;
  var y = event.clientY - 70 + pageYOffset;
  for (var i = 0; i < zonesArray.length; i++) {
    if ((x > zonesArray[i]._x) && (x < (zonesArray[i]._x + 50))) {
      if ((y > zonesArray[i]._y) && (y < (zonesArray[i]._y + 50))) {
        zonesArray[i].changeOwner(currentPlayer);
        updateAllZones();
      }
    }
  }
}





//zone info display personalized info, using imports from zones
var wordNumbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen'];
export function capitalizeFirst(toCap) {
  return toCap.charAt(0).toUpperCase() + toCap.slice(1);
}
export function setStyle(target, color, weight) {
  document.getElementById(target).style.color = color;
  document.getElementById(target).style.fontWeight = weight;
}


export function showZoneInfo(zone) {
  //location
  if (zone.owner == null) {
    //not owned
    document.getElementById('iLocation').innerHTML = 'Uncolonized Zone ' + wordNumbers[zone._row - 1] + '-' + wordNumbers[zone._dia - 1];
  } else if (zone.corrupted == true) {
    //corrupted
    document.getElementById('iLocation').innerHTML = 'Corrupted Zone ' + wordNumbers[zone._row - 1] + '-' + wordNumbers[zone._dia - 1];
  } else if (zone.fortifications > 0) {
    //fortified
    document.getElementById('iLocation').innerHTML = 'Fortified Zone ' + wordNumbers[zone._row - 1] + '-' + wordNumbers[zone._dia - 1];
  } else {
    //none of above
    document.getElementById('iLocation').innerHTML = 'Colonized Zone ' + wordNumbers[zone._row - 1] + '-' + wordNumbers[zone._dia - 1];
  }
  //territory
  document.getElementById('iTerritory').innerHTML = 'Part of the ' + zone.territory + ' Territory';
  if (zone.territory == 'Yellow') {
    setStyle('iTerritory', 'darkGoldenRod', 'bold');
  } else {
    setStyle('iTerritory', territoryColours(zone.territory), 'bold');
  }
  //owner
  if (zone.owner == null) {
    document.getElementById('iOwner').innerHTML = 'Uncolonized Land';
    setStyle('iOwner', 'black', 'normal');
  } else {
    document.getElementById('iOwner').innerHTML = capitalizeFirst(zone.owner.color) + ' Sovereign Land';
    if (zone.owner.color == 'yellow') {
      setStyle('iOwner', 'darkGoldenRod', 'bold');
    } else {
      setStyle('iOwner', zone.owner.color, 'bold');
    }
  }
  //housing
  document.getElementById('iHousing').innerHTML = 'Garrisoned by ' + zone.housing + ' Troops';
  if (zone.housing > 0) {
    setStyle('iHousing', 'black', 'bold');
  } else {
    setStyle('iHousing', 'black', 'normal');
  }
  //housing modifiers
  if (zone.recruiting == true) {
    document.getElementById('iHousingModifiers').innerHTML = 'Troops in this zone are busy recruiting';
    setStyle('iHousingModifiers', 'red', 'bold');
  } else if (zone.fatigued == true) {
    document.getElementById('iHousingModifiers').innerHTML = 'Troops in this zone are exhausted from battle';
    setStyle('iHousingModifiers', 'red', 'bold');
  } else if (zone.housing > 0) {
    document.getElementById('iHousingModifiers').innerHTML = 'Troops in this zone are ready for war';
    setStyle('iHousingModifiers', 'black', 'normal');
  } else {
    document.getElementById('iHousingModifiers').innerHTML = 'There are no troops in this zone';
    setStyle('iHousingModifiers', 'black', 'normal');
  }
  //foritifications
  if (zone.fortifications == 0) {
    document.getElementById('iFortifications').innerHTML = 'Not Fortified';
    setStyle('iFortifications', 'black', 'normal');
  } else {
    document.getElementById('iFortifications').innerHTML = 'Protected by Level ' + zone.fortifications + ' Fortifications';
    setStyle('iFortifications', 'blue', 'bold');
  }
  //temple
  if (zone.temple == false) {
    document.getElementById('iTemple').innerHTML = 'Contains No Monuments';
    setStyle('iTemple', 'black', 'normal');
  } else {
    document.getElementById('iTemple').innerHTML = 'Containing the Royal ' + capitalizeFirst(zone.owner.color) + ' ' + zone.templeName;
    setStyle('iTemple', 'darkGoldenRod', 'bold');
  }
  //barracks
  if (zone.barracks == false) {
    document.getElementById('iBarracks').innerHTML = 'Contains No Military Infrastructure';
    setStyle('iBarracks', 'black', 'normal');
  } else {
    document.getElementById('iBarracks').innerHTML = 'Containing Military Assets, including ' + personalizedBarracks[Math.floor(Math.random() * personalizedBarracks.length)];
    setStyle('iBarracks', 'red', 'bold');
  }
  //corruption
  if (zone.corrupted == false) {
    document.getElementById('iCorrupted').innerHTML = 'Is Pure';
    setStyle('iCorrupted', 'green', 'normal');
  } else {
    document.getElementById('iCorrupted').innerHTML = 'Overrun by the Corruption';
    setStyle('iCorrupted', 'purple', 'bold');
  }
  //corruptfort
  if (zone.corruptfort == 0) {
    document.getElementById('iCorruptionFortified').innerHTML = 'Is Pure';
    setStyle('iCorruptionFortified', 'green', 'normal');
  } else {
    document.getElementById('iCorruptionFortified').innerHTML = 'Fortified by the Corruption to Level ' + zone.corruptfort;
    setStyle('iCorruptionFortified', 'purple', 'bold');
  }
  if (zone.cleansed == false) {
    document.getElementById('iCleansed').innerHTML = 'Susceptible to the Corruption';
    setStyle('iCleansed', 'black', 'normal');
  } else {
    document.getElementById('iCleansed').innerHTML = 'Cleansed and Protected from the Corruption';
    setStyle('iCleansed', 'green', 'bold')
  }
}





//when an object is hovered
function objectHovered(event) {
  if ((surroundingsProcess == false) && (menuProcess == false)) {
    var x = event.clientX - 10 + pageXOffset;
    var y = event.clientY - 70 + pageYOffset;
    for (var i = 0; i < zonesArray.length; i++) {

      zonesArray[i]._hovered = false;

      if ((x > zonesArray[i]._x) && (x < (zonesArray[i]._x + 50))) {
        if ((y > zonesArray[i]._y) && (y < (zonesArray[i]._y + 50))) {
          var target = document.getElementById('canvas');
          var ctx = target.getContext('2d');
          ctx.strokeStyle = 'black';
          updateAllZones();

          ctx.lineWidth = 5;
          ctx.strokeRect(zonesArray[i]._x + 2, zonesArray[i]._y + 2, 46, 46);
          ctx.lineWidth = 1;
          document.getElementById('hoveredZone').innerHTML = zonesArray[i].location;

          zonesArray[i]._hovered = true;

          showZoneInfo(zonesArray[i]);
        }
      }
    }
  }
  //if selection is ongoing and the mouse is down
  if (selectionModeMouseDown == true) {
    selectionModeAddToEmpire();
  }
}
document.getElementById('canvas').onmousemove = objectHovered;





//when army is clicked and about to be moved, conquest logic
function moveSelect(event) {
  battleLogic(event);
}





//loading images onto the menu buttons
function loadMenuButtonImages(mySrc, menuButtonX, menuButtonY, ctxi) {
  var imageToDraw = new Image();
  imageToDraw.onload = function() {
    ctxi.drawImage(imageToDraw, menuButtonX, menuButtonY);
  }
  imageToDraw.src = mySrc;
}





//menu choices, to be used in clicked and keydown instances
function menuClicked(clickedButton) {
  if (clickedButton == 0) {
    //fortify was clicked
    if (menuExport.housing > 0) {
      if ((document.getElementById('fCustom').checked == true) && (menuExport.fortifications == document.getElementById('inputFortificationLimit').value)) {
        toLog('Maximum fortification already reached', true);
      } else {
        menuExport.fortifyThis();
        toLog('A ' + personalizedFortifications[Math.floor(Math.random() * personalizedFortifications.length)] + ' was built to reinforce Zone ' + menuExport.location, false);
        currentPlayer.nextMove();
      }
    } else {
      toLog('No one is here to build the fortifications!', true);
    }
  } else if (clickedButton == 1) {
    //worship was clicked
    if (menuExport.housing > 0) {
      if (menuExport.temple == true) {
        toLog('A temple has already been built here!', true);
      } else {
        if (currentPlayer.leftMoves == currentPlayer.moves) {
          menuExport.worshipThis();
          toLog('A ' + menuExport.templeName + ' was built to honour Zone ' + menuExport.location, false);
          var currentPlayerWhenWorshipBegan = currentPlayer;
          for (var k = 0; k < currentPlayerWhenWorshipBegan.moves; k++) {
            currentPlayer.nextMove();
          }
        } else {
          toLog('You do not have the sufficient amount of moves to build a temple here.', true);
        }
      }
    } else {
      toLog('No one is here to build the temple!', true);
      //aUstIn wUz heRe poopy man
    }
  } else if (clickedButton == 2) {
    //close menu was clicked

    //nothing happens

  } else if (clickedButton == 3) {
    //cleanse was clicked
  } else if (clickedButton == 4) {
    //recruit was clicked
    if (menuExport.housing == 0) {
      menuExport._fatigued = false;
    }
    if (menuExport.fatigued == false) {
      menuExport.toggleRecruiting(true);
      menuExport.changeHousing(true, 10);
      toLog('The garrison in Zone ' + menuExport.location + ' has been reinforced to ' + menuExport.housing + ' troops', false);
      currentPlayer.nextMove();
    } else {
      toLog('A fatigued army cannot have more troops added to its ranks.', true);
    }
  }
}





//update for ENTIRE board, including outside of zone region, after menu resolves
function updateAfterMenu() {
  //redraw
  drawMapFrame(true);

  //updates
  switchProcess(1, false);
  menuExport = null;
  updateAllZones();
  toggleE(['recruitButtonTextBefore', 'recruitButtonTextAfter']);
}





//when a zone is clicked
function objectClicked(event) {
  //if empires are being selected
  if (document.getElementById('selectionPalette').style.display == 'block') {
    selectionModeMouseDown = true;
    selectionModeAddToEmpire();
  } else if ((surroundingsProcess == false) && (menuProcess == false)) {
    //if, during regular play, moveSelect and menu is not ongoing
    if (event.button == 0) {
      var x = event.clientX - 10 + pageXOffset;
      var y = event.clientY - 70 + pageYOffset;
      for (var i = 0; i < zonesArray.length; i++) {

        zonesArray[i]._hovered = false;

        if ((x > zonesArray[i]._x) && (x < (zonesArray[i]._x + 50))) {
          if ((y > zonesArray[i]._y) && (y < (zonesArray[i]._y + 50))) {
            if ((zonesArray[i].housing > 0) && (zonesArray[i].owner == currentPlayer)) {
              //affirming zone was clicked
              switchProcess(0, true);
              //drawing (redundant?)
              var target = document.getElementById('canvas');
              var ctx = target.getContext('2d');
              ctx.strokeStyle = 'black';
              updateZone(zonesArray[i]);
              zoneExport = zonesArray[i];
              //resetting query null array
              for (var k = 0; k < 6; k++) {
                qNullArray[k] = false;
              }
              for (var j = 0; j < 6; j++) {
                //checking existence of surroundings
                if (zonesArray[i].surroundings[j] == null) {
                  qNullArray[j] = true;
                } else {
                  //exporting surroundings for use in moveSelect()
                  surroundingsXExport[j] = zonesArray[i].surroundings[j]._x;
                  surroundingsYExport[j] = zonesArray[i].surroundings[j]._y;
                  zoneSurExport[j] = zonesArray[i].surroundings[j];
                  //giving hover border to surroundings, adding text
                  ctx.lineWidth = 5;
                  ctx.strokeRect(zonesArray[i].surroundings[j]._x + 2, zonesArray[i].surroundings[j]._y + 2, 46, 46);
                  ctx.lineWidth = 1;
                  ctx.font = '15px Arial';
                  ctx.fillStyle = 'black';
                  var movementKeys = ['A', 'W', 'E', 'D', 'X', 'Z'];
                  ctx.fillText(movementKeys[j], zonesArray[i].surroundings[j]._x + 32, zonesArray[i].surroundings[j]._y + 43);
                }
              }
            }
          }
        }
      }
    } else if (event.button == 2) {
      //open building menu
      var x = event.clientX - 10 + pageXOffset;
      var y = event.clientY - 70 + pageYOffset;
      //getting zone clicked
      for (var i = 0; i < zonesArray.length; i++) {
        if ((x > zonesArray[i]._x) && (x < (zonesArray[i]._x + 50))) {
          if ((y > zonesArray[i]._y) && (y < (zonesArray[i]._y + 50))) {
            if (zonesArray[i].owner == currentPlayer) {
              //process on
              switchProcess(1, true);
              //drawing basics
              var target = document.getElementById('canvas');
              var ctx = target.getContext('2d');
              ctx.strokeStyle = 'black';
              menuExport = zonesArray[i];
              //updating before the stop
              updateZone(zonesArray[i]);
              //drawing menu borders, uses arrays defined globally, see above
              //some internal arrays:
              var borderStarts = [50, 48, 46, 44, 42];
              var imageFills = ['/hexonia/images/fortify.png', '/hexonia/images/worship.png', '/hexonia/images/cancel.png', '/hexonia/images/cleanse.png', '/hexonia/images/recruit.png'];
              //outer: each individual menu button
              for (var a = 0; a < 5; a++) {
                //inner: each border
                for (var b = 0; b < 7; b++) {
                  //stroking the thick borders
                  ctx.strokeRect(zonesArray[i]._x + menuChildrenX[a] + b, zonesArray[i]._y + menuChildrenY[a] + b, 50 - b * 2, 50 - b * 2);
                }
                loadMenuButtonImages(imageFills[a], zonesArray[i]._x + menuChildrenX[a], zonesArray[i]._y + menuChildrenY[a], ctx);
              }
              toggleE(['recruitButtonTextBefore', 'recruitButtonTextAfter']);
              document.getElementById('recruitButtonTextBefore').style.left = zonesArray[i]._x + 24 + 'px';
              document.getElementById('recruitButtonTextBefore').style.top = zonesArray[i]._y + 36 + 'px';
              document.getElementById('recruitButtonTextAfter').style.left = zonesArray[i]._x + 24 + 'px';
              document.getElementById('recruitButtonTextAfter').style.top = zonesArray[i]._y + 60 + 'px';
              document.getElementById('recruitButtonTextBefore').innerHTML = zonesArray[i].housing;
              document.getElementById('recruitButtonTextAfter').innerHTML = zonesArray[i].housing + 10;
            }
          }
        }
      }
    }
  } else if (surroundingsProcess == true) {
    //if, during regular play, moveSelect is active
    var x = event.clientX - 10 + pageXOffset;
    var y = event.clientY - 70 + pageYOffset;
    for (var i = 0; i < zonesArray.length; i++) {
      if ((x > zonesArray[i]._x) && (x < (zonesArray[i]._x + 50))) {
        if ((y > zonesArray[i]._y) && (y < (zonesArray[i]._y + 50))) {
          switchProcess(0, false);
          chosenZoneSurExport = zonesArray[i];
          moveSelect(event);
        }
      }
    }
  } else if (menuProcess == true) {
    //if, during regular play, the menu is open
    var x = event.clientX - 10 + pageXOffset;
    var y = event.clientY - 70 + pageYOffset;
    //5 is number of menu buttons
    for (var i = 0; i < 5; i++) {
      var menuButtonLocX = menuExport._x + menuChildrenX[i];
      var menuButtonLocY = menuExport._y + menuChildrenY[i];
      if ((x > menuButtonLocX) && (x < (menuButtonLocX + 50))) {
        if ((y > menuButtonLocY) && (y < (menuButtonLocY + 50))) {
          menuClicked(i);
        }
      }
    }
    updateAfterMenu();
  }
}
document.getElementById('canvas').onmousedown = objectClicked;





function selectionModeMouseUp() {
  if (document.getElementById('selectionPalette').style.display == 'block') {
    selectionModeMouseDown = false;
  }
}
document.getElementById('canvas').onmouseup = selectionModeMouseUp;





function selectionModeMouseOut() {
  if (document.getElementById('selectionPalette').style.display == 'block') {
    selectionModeMouseDown = false;
  }
}
document.getElementById('canvas').onmouseout = selectionModeMouseOut;





function keyPressed(event) {
  //for movement choice in moveSelect
  if (surroundingsProcess == true) {
    switchProcess(0, false);
    moveSelect(event);
  }

  //for menu
  if (menuProcess == true) {
    if (event.keyCode == 46) {
      //renouncing a zone
      menuExport.changeOwner(null);
      menuExport._housing = 0;
      menuExport._fortifications = 0;
      menuExport._temple = false;
    } else {
      //a menu button was clicked via keyboard
      var menuEvalKeyCode = [70, 81, 84, 67, 82];
      for (var i = 0; i < 5; i++) {
        if (event.keyCode == menuEvalKeyCode[i]) {
          menuClicked(i);
        }
      }
    }
    //updating to remove menu
    updateAfterMenu();
  } else if (event.keyCode == 83) {
    //for territory map toggle
    swapCanvas();
  }

  //switching selectMoveAmount checkeds
  var moveEvalKeyCode = [49, 50, 51, 52, 53];
  var checkedPossibilities = [document.getElementById('mAll'), document.getElementById('mHalf'), document.getElementById('mMost'), document.getElementById('mLeast'), document.getElementById('mCustom')];
  for (var i = 0; i < 5; i++) {
    if (event.keyCode == moveEvalKeyCode[i]) {
      checkedPossibilities[i].checked = true;
    }
  }
}
document.addEventListener('keydown', keyPressed);
