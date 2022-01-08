"use strict";
//ZONES
//INCLUDES ZONE DECLARATIONS, TERRITORY MAP, AND UPDATEALLZONES

import { surroundingsProcess, menuProcess } from "./KOH Event Listeners.js";
import { atWidest, firstInRow, chosenSize, atFlip, cosmeticHexagon, currentPlayer } from "./KOH Parameters.js";
import { toggleE } from "./KOH Launch.js";

export var personalizedTemples = ['Temple', 'Altar', 'Skyscraper', 'Chapel', 'Garden', 'University', 'College', 'Museum', 'Church', 'Cathedral', 'Shrine', 'Sanctuary', 'School'];
export var personalizedBarracks = ['Trains', 'Barracks', 'Training Grounds', 'Military Bases', 'Ports', 'Harbours', 'Headquarters', 'Airplanes', 'Airfields', 'Weapon Stockpiles', 'Factories'];
export var personalizedFortifications = ['Palisade', 'Citadel', 'Fortress', 'Barricade', 'Moat', 'Catapult', 'Trench', 'Wall', 'Inner Sanctum'];

class Zone {
  constructor(row, dia, x, y, owner, territory, surroundings) {
    this._row = row;
    this._dia = dia;
    this._x = x;
    this._y = y;
    this._owner = owner;
    this._housing = 0;
    this._corruptwait = 0;
    this._corrupted = false;
    this._corruptfort = 0;
    this._territory = territory;
    this._fortifications = 0;
    this._cleansed = false;
    this._temple = false;
    this._templeName = null;
    this._barracks = false;
    this._barracksName = null;
    this._recruiting = false;
    this._fatigued = false;
    this._hovered = false;
    this.surroundings = surroundings;
  }
  get location() {
    return this._row + '-' + this._dia;
  }
  get owner() {
    return this._owner;
  }
  get territory() {
    return this._territory;
  }
  get corruptwait() {
    return this._corruptwait;
  }
  get corrupted() {
    return this._corrupted;
  }
  get corruptfort() {
    return this._corruptfort;
  }
  get fortifications() {
    return this._fortifications;
  }
  get cleansed() {
    return this._cleansed;
  }
  get temple() {
    return this._temple;
  }
  get barracks() {
    return this._barracks;
  }
  get housing() {
    return this._housing;
  }
  get recruiting() {
    return this._recruiting;
  }
  get fatigued() {
    return this._fatigued;
  }
  get hovered() {
    return this._hovered;
  }
  get templeName() {
    return this._templeName;
  }
  get barracksName() {
    return this._barracksName;
  }
  draw() {
    var target = document.getElementById('canvas');
    var ctx = target.getContext('2d');
    ctx.strokeStyle = 'black';
    ctx.strokeRect(this._x, this._y, 50, 50);
  }
  toggleRecruiting(direction) {
    this._recruiting = direction;
  }
  toggleFatigued(direction) {
    this._fatigued = direction;
  }
  fortifyThis() {
    this._fortifications += 1;
  }
  cleanseThis() {
    if (this._cleansed == false) {
      this._cleansed = true;
    } else {
      toLog('This zone has already been cleansed', true);
    }
  }
  corruptThis() {
    if (this._cleansed == false) {
      if (this._corruptwait < 4) {
        this._corruptwait += 1;
      } else {
        this._corruptwait = 0;
        this._corrupted = true;
      }
    }
  }
  worshipThis() {
    this._temple = true;
    currentPlayer.templeArray.push(this);
    this._templeName = personalizedTemples[Math.floor(Math.random() * personalizedTemples.length)];
  }
  //changing owner of zone
  changeOwner(newOwner) {
    this._owner = newOwner;
  }
  //changing army content of zone
  changeHousing(direction, amount) {
    if (direction == true) {
      this._housing += amount;
    } else {
      this._housing -= amount;
    }
    this._housing = Number(this._housing);
  }
  //setting army content of zone to 0
  leaveHousing() {
    this._housing = 0;
  }
}

//define zones
var xxa1, xxa2, xxa3, xxb1, xxb2, xxb3, xxb4, xxc1, xxc2, xxc3, xxc4, xxc5, xxd1, xxd2, xxd3, xxd4, xxe1, xxe2, xxe3;
var xa1, xa2, xa3, xa4, xa5, xb1, xb2, xb3, xb4, xb5, xb6, xc1, xc2, xc3, xc4, xc5, xc6, xc7, xd1, xd2, xd3, xd4, xd5, xd6, xd7, xd8, xe1, xe2, xe3, xe4, xe5, xe6, xe7, xe8, xe9, xf1, xf2, xf3, xf4, xf5, xf6, xf7, xf8, xg1, xg2, xg3, xg4, xg5, xg6, xg7, xh1, xh2, xh3, xh4, xh5, xh6, xi1, xi2, xi3, xi4, xi5;
var a1, a2, a3, a4, a5, a6, a7, b1, b2, b3, b4, b5, b6, b7, b8, c1, c2, c3, c4, c5, c6, c7, c8, c9, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, j1, j2, j3, j4, j5, j6, j7, j8, j9, j10, k1, k2, k3, k4, k5, k6, k7, k8, k9, l1, l2, l3, l4, l5, l6, l7, l8, m1, m2, m3, m4, m5, m6, m7;
//array of above
var smallZonesArray = [xxa1, xxa2, xxa3, xxb1, xxb2, xxb3, xxb4, xxc1, xxc2, xxc3, xxc4, xxc5, xxd1, xxd2, xxd3, xxd4, xxe1, xxe2, xxe3];
var mediumZonesArray = [xa1, xa2, xa3, xa4, xa5, xb1, xb2, xb3, xb4, xb5, xb6, xc1, xc2, xc3, xc4, xc5, xc6, xc7, xd1, xd2, xd3, xd4, xd5, xd6, xd7, xd8, xe1, xe2, xe3, xe4, xe5, xe6, xe7, xe8, xe9, xf1, xf2, xf3, xf4, xf5, xf6, xf7, xf8, xg1, xg2, xg3, xg4, xg5, xg6, xg7, xh1, xh2, xh3, xh4, xh5, xh6, xi1, xi2, xi3, xi4, xi5];
var largeZonesArray = [a1, a2, a3, a4, a5, a6, a7, b1, b2, b3, b4, b5, b6, b7, b8, c1, c2, c3, c4, c5, c6, c7, c8, c9, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, j1, j2, j3, j4, j5, j6, j7, j8, j9, j10, k1, k2, k3, k4, k5, k6, k7, k8, k9, l1, l2, l3, l4, l5, l6, l7, l8, m1, m2, m3, m4, m5, m6, m7];
//zone territories
var smallTerritoryGroups = ['Frontier', 'Conqueror', 'Core'];
var smallTerritoryNumber = [12, 6, 1];
var mediumTerritoryGroups = ['Love', 'Red', 'Ember', 'Orange', 'Spark', 'Yellow', 'Bloom', 'Green', 'Essence', 'Blue', 'Hydro', 'Purple', 'Conqueror', 'Core'];
var mediumTerritoryNumber = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 6, 1];
var largeTerritoryGroups = ['Love', 'Red', 'Ember', 'Orange', 'Spark', 'Yellow', 'Bloom', 'Green', 'Essence', 'Blue', 'Hydro', 'Purple', 'Red_Frontier', 'Orange_Frontier', 'Yellow_Frontier', 'Green_Frontier', 'Blue_Frontier', 'Purple_Frontier', 'Conqueror', 'Core'];
var largeTerritoryNumber = [7, 8, 7, 8, 7, 8, 7, 8, 7, 8, 7, 8, 5, 5, 5, 5, 5, 5, 6, 1];
//clean for display
var largeTerritoryGroupsClean = ['Love', 'Red', 'Ember', 'Orange', 'Spark', 'Yellow', 'Bloom', 'Green', 'Essence', 'Blue', 'Hydro', 'Purple', 'Red Frontier', 'Orange Frontier', 'Yellow Frontier', 'Green Frontier', 'Blue Frontier', 'Purple Frontier', 'Conqueror', 'Core'];
//array of above
var smallTerritoryArray = ['Frontier', 'Frontier', 'Frontier', 'Frontier', 'Conqueror', 'Conqueror', 'Frontier', 'Frontier', 'Conqueror', 'Core', 'Conqueror', 'Frontier', 'Frontier', 'Conqueror', 'Conqueror', 'Frontier', 'Frontier', 'Frontier', 'Frontier'];
var mediumTerritoryArray = ['Love', 'Red', 'Red', 'Red', 'Ember', 'Purple', 'Love', 'Red', 'Red', 'Ember', 'Orange', 'Purple', 'Purple', 'Love', 'Red', 'Ember', 'Orange', 'Orange', 'Purple', 'Purple', 'Purple', 'Conqueror', 'Conqueror', 'Orange', 'Orange', 'Orange', 'Hydro', 'Hydro', 'Hydro', 'Conqueror', 'Core', 'Conqueror', 'Spark', 'Spark', 'Spark', 'Blue', 'Blue', 'Blue', 'Conqueror', 'Conqueror', 'Yellow', 'Yellow', 'Yellow', 'Blue', 'Blue', 'Essence', 'Green', 'Bloom', 'Yellow', 'Yellow', 'Blue', 'Essence', 'Green', 'Green', 'Bloom', 'Yellow', 'Essence', 'Green', 'Green', 'Green', 'Bloom'];
var largeTerritoryArray = ['Love', 'Love', 'Red', 'Red', 'Red', 'Ember', 'Ember', 'Love', 'Love', 'Love', 'Red', 'Red', 'Ember', 'Ember', 'Ember', 'Purple', 'Love', 'Love', 'Red', 'Red', 'Red', 'Ember', 'Ember', 'Orange', 'Purple', 'Purple', 'Purple', 'Purple_Frontier', 'Red_Frontier', 'Red_Frontier', 'Orange_Frontier', 'Orange', 'Orange', 'Orange', 'Purple', 'Purple', 'Purple', 'Purple_Frontier', 'Red_Frontier', 'Red_Frontier', 'Red_Frontier', 'Orange_Frontier', 'Orange', 'Orange', 'Orange', 'Hydro', 'Hydro', 'Purple', 'Purple_Frontier', 'Purple_Frontier', 'Conqueror', 'Conqueror', 'Orange_Frontier', 'Orange_Frontier', 'Orange', 'Spark', 'Spark', 'Hydro', 'Hydro', 'Hydro', 'Purple_Frontier', 'Blue_Frontier', 'Conqueror', 'Core', 'Conqueror', 'Yellow_Frontier', 'Orange_Frontier', 'Spark', 'Spark', 'Spark', 'Hydro', 'Hydro', 'Blue', 'Blue_Frontier', 'Blue_Frontier', 'Conqueror', 'Conqueror', 'Yellow_Frontier', 'Yellow_Frontier', 'Yellow', 'Spark', 'Spark', 'Blue', 'Blue', 'Blue', 'Blue_Frontier', 'Blue_Frontier', 'Green_Frontier', 'Yellow_Frontier', 'Yellow_Frontier', 'Yellow', 'Yellow', 'Yellow', 'Blue', 'Blue', 'Blue', 'Green_Frontier', 'Green_Frontier', 'Green_Frontier', 'Green_Frontier', 'Yellow', 'Yellow', 'Yellow', 'Blue', 'Essence', 'Essence', 'Green', 'Green', 'Green', 'Bloom', 'Bloom', 'Yellow', 'Essence', 'Essence', 'Essence', 'Green', 'Green', 'Bloom', 'Bloom', 'Bloom', 'Essence', 'Essence', 'Green', 'Green', 'Green', 'Bloom', 'Bloom'];

//bunching declarations together
var potentialArrays = [smallZonesArray, mediumZonesArray, largeZonesArray];
var potentialTerritoryGroups = [smallTerritoryGroups, mediumTerritoryGroups, largeTerritoryGroups];
var potentialTerritoryGroupsClean = [smallTerritoryGroups, mediumTerritoryGroups, largeTerritoryGroupsClean];
var potentialTerritoryNumber = [smallTerritoryNumber, mediumTerritoryNumber, largeTerritoryNumber];
var potentialTerritoryArray = [smallTerritoryArray, mediumTerritoryArray, largeTerritoryArray];

//official territory variables
export var zonesArray;
export var territoryGroups;
export var territoryGroupsClean;
export var territoryNumber;
export var territoryArray;

//declaring zones, EXCEPT surroundings
export function declareZones() {
  zonesArray = potentialArrays[2 - chosenSize];
  territoryGroups = potentialTerritoryGroups[2 - chosenSize];
  territoryGroupsClean = potentialTerritoryGroupsClean[2 - chosenSize];
  territoryNumber = potentialTerritoryNumber[2 - chosenSize];
  territoryArray = potentialTerritoryArray[2 - chosenSize];
  var currentX = 200 + (50 * chosenSize);
  var currentY = 25 + (100 * chosenSize);
  var currentZone = 0;
  var inRow = firstInRow;
  var savedX = null;
  for (var i = 0; i < atWidest; i++) {
    savedX = currentX;
    for (var j = 0; j < inRow; j++) {
      //defining statement
      zonesArray[currentZone] = new Zone(i + 1, j + 1, currentX, currentY, null, territoryArray[currentZone], [null, null, null, null, null, null]);
      currentX += 50;
      currentZone += 1;
    }
    if (i > atFlip) {
      currentX = savedX + 25;
      inRow -= 1;
    } else {
      currentX = savedX - 25;
      inRow += 1;
    }
    currentY += 50;
  }
}

//defining surroundings
export function declareZoneSurroundings() {
  var currentZone = 0;
  var inRow = firstInRow;
  for (var i = 0; i < atWidest; i++) {
    for (var j = 0; j < inRow; j++) {
      var thisLeft, thisTopLeft, thisTopRight, thisRight, thisBottomRight, thisBottomLeft;
      if (j == 0) {
        thisLeft = null;
      } else {
        thisLeft = zonesArray[currentZone - 1];
      }
      if ((j == 0 && i < firstInRow) || i == 0) {
        thisTopLeft = null;
      } else {
        if ((i + 1) == firstInRow) {
          thisTopLeft = zonesArray[currentZone - inRow];
        } else if ((i + 1) < firstInRow) {
          thisTopLeft = zonesArray[currentZone - inRow];
        } else if ((i + 1) > firstInRow) {
          thisTopLeft = zonesArray[currentZone - (inRow + 1)];
        }
      }
      if ((j + 1) == inRow && i < firstInRow || i == 0) {
        thisTopRight = null;
      } else {
        if ((i + 1) == firstInRow) {
          thisTopRight = zonesArray[currentZone - (inRow - 1)];
        } else if ((i + 1) < firstInRow) {
          thisTopRight = zonesArray[currentZone - (inRow - 1)];
        } else if ((i + 1) > firstInRow) {
          thisTopRight = zonesArray[currentZone - inRow];
        }
      }
      if ((j + 1) == inRow) {
        thisRight = null;
      } else {
        thisRight = zonesArray[currentZone + 1];
      }
      if (((j + 1) == inRow && (i + 1) > atFlip + 1) || (i + 1) == atWidest) {
        thisBottomRight = null;
      } else {
        if ((i + 1) == firstInRow) {
          thisBottomRight = zonesArray[currentZone + inRow];
        } else if ((i + 1) < firstInRow) {
          thisBottomRight = zonesArray[currentZone + (inRow + 1)];
        } else if ((i + 1) > firstInRow) {
          thisBottomRight = zonesArray[currentZone + inRow];
        }
      }
      if ((j == 0 && (i + 1) > atFlip + 1) || (i + 1) == atWidest) {
        thisBottomLeft = null;
      } else {
        if ((i + 1) == firstInRow) {
          thisBottomLeft = zonesArray[currentZone + (inRow - 1)];
        } else if ((i + 1) < firstInRow) {
          thisBottomLeft = zonesArray[currentZone + inRow];
        } else if ((i + 1) > firstInRow) {
          thisBottomLeft = zonesArray[currentZone + (inRow - 1)];
        }
      }
      var thisSurroundings = [thisLeft, thisTopLeft, thisTopRight, thisRight, thisBottomRight, thisBottomLeft];
      //defining statement
      zonesArray[currentZone].surroundings = thisSurroundings;
      currentZone += 1;
    }
    if (i > atFlip) {
      inRow -= 1;
    } else {
      inRow += 1;
    }
  }
}

//code for interchange between territory arrays and css colours
export function territoryColours(input) {
  switch (input) {
    case 'Love':
    return 'fuchsia';
    break;
    case 'Ember':
    return 'orangered';
    break;
    case 'Spark':
    return 'lightsalmon';
    break;
    case 'Bloom':
    return 'lime';
    break;
    case 'Essence':
    return 'aqua';
    break;
    case 'Hydro':
    return 'blueviolet';
    break;
    case 'Red':
    return 'red';
    break;
    case 'Orange':
    return 'orange';
    break;
    case 'Yellow':
    return 'yellow';
    break;
    case 'Green':
    return 'green';
    break;
    case 'Blue':
    return 'blue';
    break;
    case 'Purple':
    return 'violet';
    break;
    case 'Red_Frontier':
    return 'darkred';
    break;
    case 'Orange_Frontier':
    return 'darkorange';
    break;
    case 'Yellow_Frontier':
    return 'gold';
    break;
    case 'Green_Frontier':
    return 'darkgreen';
    break;
    case 'Blue_Frontier':
    return 'darkblue';
    break;
    case 'Purple_Frontier':
    return 'darkviolet';
    break;
    case 'Conqueror':
    return 'grey';
    break;
    case 'Core':
    return '#333333';
    break;
    case "Frontier":
    return 'darkgrey';
  }
}

var qTerritoryMapDrawn = false;
export function swapCanvas() {
  if (qTerritoryMapDrawn == false) {
    //if map isn't on
    toggleE('canvas');
    toggleE('canvas2');



    //drawing territorymap
    var canvas2 = document.getElementById('canvas2');
    var ctx = canvas2.getContext('2d');
    var currentX = 200 + (50 * chosenSize);
    var currentY = 25 + (100 * chosenSize);
    var inRow = firstInRow;
    var currentZone = 0;
    var savedX = null;
    ctx.strokeStyle = 'black';
    ctx.globalAlpha = 0.5;

    //clearing territorymapl drawing hexagon
    cosmeticHexagon(ctx);

    //draw formula
    for (var i = 0; i < atWidest; i++) {
      savedX = currentX;
      for (var j = 0; j < inRow; j++) {
        ctx.strokeRect(currentX + (j * 50), currentY + (i * 50), 50, 50);
        ctx.fillStyle = territoryColours(territoryArray[currentZone]);
        ctx.fillRect(currentX + (j * 50), currentY + (i * 50), 50, 50);
        currentZone += 1;
      }
      if (i > atFlip) {
        currentX = savedX + 25;
        inRow -= 1;
      } else {
        currentX = savedX - 25;
        inRow += 1;
      }
    }


    ctx.globalAlpha = 1;



    toggleE('territoryMapLegendPositioning');
    //setting qMap to true
    qTerritoryMapDrawn = true;
  } else {
    //if map is already on
    toggleE('canvas');
    toggleE('canvas2');
    toggleE('territoryMapLegendPositioning');
    qTerritoryMapDrawn = false;
  }
}

document.getElementById('swapCanvas').onclick = swapCanvas;


export function createTerritoryLegend() {
  //used in parameters, after zone declarations
  for (var i = 0; i < territoryGroups.length; i++) {
    var node = document.createElement('LI');
    node.className = 'legendcss';
    node.innerHTML = territoryGroupsClean[i];
    node.id = territoryGroups[i];
    document.styleSheets[0].addRule('#' + territoryGroups[i] + '::before', 'color: ' + territoryColours(territoryGroups[i]) + ';');
    document.getElementById('territoryMapLegend').appendChild(node);
  }
}

export function updateZone(zone) {
  if (zone == null) {

  } else {
    //clear
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(zone._x + 1, zone._y + 1, 48, 48);
    if (zone.owner == null) {

    } else {
      //owned
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = zone.owner.color;
      //original bar on left
      //ctx.fillRect(zone._x + 5, zone._y + 5, 8, 40);
      ctx.fillRect(zone._x + 1, zone._y + 1, 48, 48);
      ctx.fillStyle = 'black';
      ctx.globalAlpha = 1;
    }
    if (zone.housing == 0) {

    } else {
      //housing army
      ctx.font = "15px Arial";
      ctx.fillStyle = 'black';
      //original on middle
      //ctx.fillText(zone.housing, zone._x + 15, zone._y + 15);
      ctx.fillText(zone.housing, zone._x + 7, zone._y + 18);
    }
    if (zone.fortifications == 0) {

    } else {
      //fortified
      ctx.font = "15px Arial";
      ctx.fillStyle = 'black';
      ctx.fillText(zone.fortifications * 15, zone._x + 7, zone._y + 42);
    }
    if (zone.temple == false) {

    } else {
      //worshipped
      ctx.fillStyle = 'black';
      ctx.fillRect(zone._x + 35, zone._y + 7, 10, 10);
      ctx.fillStyle = 'yellow';
      ctx.fillRect(zone._x + 36, zone._y + 8, 8, 8);
    }
    if (zone.hovered == true) {
      //so that when your mouse is idling, a zone will remain hovered
      ctx.lineWidth = 5;
      ctx.strokeRect(zone._x + 2, zone._y + 2, 46, 46);
      ctx.lineWidth = 1;
    }
  }
}

export function updateAllZones() {
  if (document.getElementById('canvas').style.display == 'block') {
    if ((surroundingsProcess == false) && (menuProcess == false) && (qTerritoryMapDrawn == false)) {
      for (var i = 0; i < zonesArray.length; i++) {
        updateZone(zonesArray[i]);
      }
    }
  }
  //console.log(currentPlayer)
}
setInterval(updateAllZones, 1000);
