"use strict";
//BATTLE LOGIC
//INCLUDES PURE BATTLELOGIC AND RECRUIT/FATIGUED RESET

import { surroundingsProcess, zoneExport, zoneSurExport, surroundingsXExport, surroundingsYExport, switchProcess, resetSurroundingExports, chosenZoneSurExport, showZoneInfo } from "./KOH Event Listeners.js";
import { currentPlayer, chosenSize } from "./KOH Parameters.js";
import { updateAllZones } from "./KOH Zones.js";
import { victoryDeclared, toLog } from "./KOH Player.js";

function resetRecruitingAndFatigued(ii) {
  //so that if an army is recruiting/fatigued and you transit part of it away to dupe the system before transiting it back, it wont work
  //moving recruiting
  if (zoneExport.recruiting == true) {
    zoneSurExport[ii]._recruiting = true;
  }
  //moving fatigued
  if (zoneExport.fatigued == true) {
    zoneSurExport[ii]._fatigued = true;
  }
  //removing recruiting and fatigued if the command was for all to move
  if (zoneExport.housing == 0) {
    zoneExport._recruiting = false;
    zoneExport._fatigued = false;
  }
}

function math(command, i) {
  if (zoneSurExport[i].owner == currentPlayer) {
    //owned territory
    var savedHousing = zoneSurExport[i].housing;
    zoneSurExport[i]._housing = 0;
    zoneSurExport[i].changeHousing(true, command + savedHousing);
    zoneExport.changeHousing(false, command);
    resetRecruitingAndFatigued(i);
    if (savedHousing > 0) {
      //regrouping
      toLog(command + ' troops from the army in ' + zoneExport.location + ' regrouped with the ' + savedHousing + ' troops in ' + zoneSurExport[i].location + ', amassing '+ zoneSurExport[i].housing, false);
    } else {
      //movement
      toLog(command + ' troops from the army in ' + zoneExport.location + ' moved to ' + zoneSurExport[i].location, false);
    }
    if (victoryDeclared == false) {
      currentPlayer.nextMove();
    }
  } else if (zoneSurExport[i].owner == null) {
    //no man's land
    resetRecruitingAndFatigued(i);
    zoneSurExport[i].changeOwner(currentPlayer);
    zoneSurExport[i].changeHousing(true, command);
    zoneExport.changeHousing(false, command);
    toLog(command + ' troops from the army in ' + zoneExport.location + ' colonized ' + zoneSurExport[i].location, false);
    if (victoryDeclared == false) {
      currentPlayer.nextMove();
    }
  } else {
    //enemy territory
    if (zoneSurExport[i].housing > 0 || zoneSurExport[i].fortifications > 0) {
      //garrisoned/fortified enemy territory
      if (currentPlayer.leftMoves >= 2 || chosenSize == 2) {
        //2< moves left
        //austin wus here too
        if (zoneExport.recruiting == false) {
          //not recruiting
          if (currentPlayer._truced == false) {
            //truce inactive
            if (zoneSurExport[i].housing + (zoneSurExport[i].fortifications * 15) >= command) {
              //loss
              var savedHousing = zoneSurExport[i].housing;
              if (zoneSurExport[i].housing >= command) {
                //loss was accomplished by garrison
                zoneSurExport[i].changeHousing(false, command);
              } else {
                //loss was accomplished by fortifications
                zoneSurExport[i]._housing = 0;
              }
              zoneExport.changeHousing(false, command);
              toLog(command + ' troops from the army in ' + zoneExport.location + ' were defeated by the ' + savedHousing + ' defenders in ' + zoneSurExport[i].location + ', leaving ' + zoneSurExport[i].housing + ' to guard ' + zoneSurExport[i].location, false);
            } else {
              //win
              //destroying temple
              var wasTemple = false;
              var wasTempleName = zoneSurExport[i].templeName;
              if (zoneSurExport[i]._temple == true) {
                wasTemple = true;
              }
              zoneSurExport[i]._temple = false;
              zoneSurExport[i]._templeName = null;
              for (var k = 0; k < zoneSurExport[i].owner.templeArray.length; k++) {
                if (zoneSurExport[i].owner.templeArray[k] == zoneSurExport[i]) {
                  zoneSurExport[i].owner.templeArray.splice(k, 1);
                }
              }
              //log variables
              var formerDefenders = zoneSurExport[i].housing;
              var casualties = zoneSurExport[i].housing + (zoneSurExport[i].fortifications * 15);
              //fatigued and recruiting
              zoneSurExport[i].toggleFatigued(true);
              resetRecruitingAndFatigued(i);
              //handover
              zoneSurExport[i].changeOwner(currentPlayer);
              zoneSurExport[i]._housing = command - (zoneSurExport[i].housing + (zoneSurExport[i].fortifications * 15));
              zoneExport._housing = zoneExport.housing - command;
              //breaking fortifications
              var oldFortifications = zoneSurExport[i].fortifications;
              zoneSurExport[i]._fortifications = Math.floor(zoneSurExport[i].fortifications / 2);
              var newFortifications = zoneSurExport[i].fortifications;
              //logs
              if (wasTemple == true && oldFortifications > 0) {
                toLog(command + ' troops from the army in ' + zoneExport.location + ' conquered ' + zoneSurExport[i].location + ', defeating ' + formerDefenders + ', suffering ' + casualties + ' casualties, shattering ' + (oldFortifications - newFortifications) + ' fortifications, and destroying the ' + wasTempleName, false);
              } else if (wasTemple == true) {
                toLog(command + ' troops from the army in ' + zoneExport.location + ' conquered ' + zoneSurExport[i].location + ', defeating ' + formerDefenders + ', suffering ' + casualties + ' casualties, and destroying the ' + wasTempleName, false);
              } else if (oldFortifications > 0) {
                toLog(command + ' troops from the army in ' + zoneExport.location + ' conquered ' + zoneSurExport[i].location + ', defeating ' + formerDefenders + ', suffering ' + casualties + ' casualties, and shattering ' + (oldFortifications - newFortifications) + ' fortifications', false);
              } else {
                toLog(command + ' troops from the army in ' + zoneExport.location + ' conquered ' + zoneSurExport[i].location + ', defeating ' + formerDefenders + ', and suffering ' + casualties + ' casualties', false);
              }
            }
            if (victoryDeclared == false) {
              for (var j = 0; j < 2; j++) {
                currentPlayer.nextMove();
              }
            }
          } else {
            //truce active
            toLog('A universal truce was declared recently; you cannot engage in open battle', true);
          }
        } else {
          //recruiting
          toLog('Attacking cannot be done immediately after recruiting', true);
        }
      } else {
        //2> moves left
        toLog('Attacking costs 2 moves on all maps except the smallest', true);
      }
    } else {
      //unguarded enemy territory
      //destroying temple
      var wasTemple = false;
      var wasTempleName = zoneSurExport[i].templeName;
      if (zoneSurExport[i]._temple == true) {
        wasTemple = true;
      }
      zoneSurExport[i]._temple = false;
      zoneSurExport[i]._templeName = null;
      for (var k = 0; k < zoneSurExport[i].owner.templeArray.length; k++) {
        if (zoneSurExport[i].owner.templeArray[k] == zoneSurExport[i]) {
          zoneSurExport[i].owner.templeArray.splice(k, 1);
        }
      }
      //fatigued and recruiting
      resetRecruitingAndFatigued(i);
      //handover
      zoneSurExport[i].changeOwner(currentPlayer);
      zoneSurExport[i].changeHousing(true, command);
      zoneExport.changeHousing(false, command);
      //logs
      if (wasTemple == true) {
        toLog(command + ' troops from the army in ' + zoneExport.location + ' conquered ' + zoneSurExport[i].location + ', destroying the ' + wasTempleName, false);
      } else {
        toLog(command + ' troops from the army in ' + zoneExport.location + ' conquered ' + zoneSurExport[i].location, false);
      }
      if (victoryDeclared == false) {
        currentPlayer.nextMove();
      }
    }
  }
}

export function battleLogic(event) {
  var inputMoveAmount = document.getElementById('inputMoveAmount');
  var evalKeyCode = [65, 87, 69, 68, 88, 90];
  function loop(array) {
    //if key pressed is correct
    for (var i = 0; i < 6; i++) {
      if ((event.keyCode == array[i]) || chosenZoneSurExport == zoneSurExport[i]) {
        if (zoneSurExport[i] != null) {
          //outcome
          if ((document.getElementById('mAll').checked == true) || (zoneExport.housing == 5)) {
            math(zoneExport.housing, i);
          } else if (document.getElementById('mHalf').checked == true) {
            math((zoneExport.housing / 2) - ((zoneExport.housing / 2) % 5), i);
          } else if (document.getElementById('mMost').checked == true) {
            math(zoneExport.housing - 5, i);
          } else if (document.getElementById('mLeast').checked == true) {
            math((zoneExport.housing) - (zoneExport.housing - 5), i);
          } else if (document.getElementById('mCustom').checked == true) {
            if ((inputMoveAmount.value % 5 == 0) && (inputMoveAmount.value <= zoneExport.housing) && (inputMoveAmount.value > '0') && (inputMoveAmount.value != '')) {
              math(inputMoveAmount.value, i);
            } else {
              toLog('This input is invalid', true);
            }
          }
          zoneSurExport[i]._hovered = true;
          showZoneInfo(zoneSurExport[i]);
        }
      }
    }
  }
  loop(evalKeyCode);
  //updating all zones
  updateAllZones();
  //resetting variables
  resetSurroundingExports(zoneExport);
  resetSurroundingExports(zoneSurExport);
  resetSurroundingExports(chosenZoneSurExport);
}
