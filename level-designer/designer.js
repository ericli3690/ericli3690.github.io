/////////////////
/////////////////
/////////////////

// BLOCKS //

// BELOW, PLEASE INSERT THE ADDRESS  OF THE IMAGES IN THE FOLDER "images" WITH THE SYNTAX: /// './images/YOUR_FILENAME_HERE.png', /// //

var images = [
'./images/void.png',
'./images/spawn.png',
'./images/win.png',
'./images/overworld_material_dirt.png',
'./images/overworld_material_grass.png',
'./images/overworld_background.png',
'./images/overworld_background_hanging_grass.png',
'./images/overworld_background_hanging_grass_180.png',
'./images/overworld_material_dirt_corner.png',
'./images/overworld_material_dirt_corner_reflect.png',
'./images/overworld_water.png'
];

//////////////////
//////////////////
//////////////////

// THE CODE BELOW IS ALL THE FUNCTIONAL CODE USED BY THE PROGRAM, EDITING SHOULD NOT BE NECESSARY //
// PLEASE REACH OUT TO THE DEVELOPERS FOR QUERIES //

//simple values for testing, making canvas invisible, saving invisible
document.getElementById('inputX').value = 20;
document.getElementById('inputY').value = 20;
document.getElementById('div0').style.display = 'none';
document.getElementById('div3').style.display = 'none';

var maxX = 0;
var maxY = 0;
var mouseIsDown = false;
var usedButton = 0;
var toOutput = 1;
var output = [];
var primaryBrush = './images/spawn.png';
var secondaryBrush = './images/void.png';
var fillBrush = '';
var fillStatus = 0;
var copyStatus = 0;
var pasteStatus = 0;
var ctx = document.getElementById('canvas').getContext('2d');

//procedurally generating all blocks
//array of all block objects
var blocks = [];
//images.length is the user specified amount of blocks
for (var i = 0; i < images.length; i++) {
  //window is a global value that can procedurally create variables
  blocks.push(window['block' + i]);
}

//loading images
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

//get the offset of any object:
function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    //the 3 is the border
    left: rect.left + 3,
    top: rect.top + 3
  }
}

//creates each block; this allows them to each have their own event listener
class Block {
  constructor(name) {
    this.name = name;
  }
  addListener() {
    //since "this refers to the html element, we need to save this.name briefly"
    var nameImportToAvoidThisProblems = this.name;
    document.getElementById(this.name).addEventListener("mouseup", function() {
      //set it as the brush!
      if (event.button == 2) {
        //is there a canvas that has a border that matches the current brush? if so, set it to white
        document.getElementById(secondaryBrush).style.border = '3px solid white';
        //set it as right click brush
        secondaryBrush = nameImportToAvoidThisProblems;
        //set border
        this.style.border = '3px solid grey';
      } else {
        document.getElementById(primaryBrush).style.border = '3px solid white';
        //set it as left click brush
        primaryBrush = nameImportToAvoidThisProblems;
        //set border
        this.style.border = '3px solid black';
      }
    })
  }
}

//creates the blocks
function createBlocks() {
  //for each block, with the quantity indicated by "blocks"
  for (var i = 0; i < blocks.length; i++) {
    //create a new canvas, and peg it to div2
    var newButton = document.createElement('canvas');
    var find = document.getElementById('div01');
    find.appendChild(newButton);

    //give the canvas an id
    var id = document.createAttribute('id');
    id.value = images[i];
    newButton.setAttributeNode(id);

    //give the canvas a class which shows that it is a block and editable as a batch in the css
    var classs = document.createAttribute('class');
    classs.value = 'block';
    newButton.setAttributeNode(classs);

    //on hover, shows the name of the block
    var title = document.createAttribute('title');
    title.value = images[i];
    newButton.setAttributeNode(title);

    //disable the right click menu when it is clicked
    var oncontextmenu = document.createAttribute('oncontextmenu');
    oncontextmenu.value = 'return false';
    newButton.setAttributeNode(oncontextmenu);

    //fill the canvas
    var ctxOfBlock = document.getElementById(images[i]).getContext('2d');
    //width, height
    loadImage(images[i], 0, 0, 300, 150, ctxOfBlock, true);

    //instance a new block, give it a listener (see above)
    blocks[i] = new Block(images[i]);
    blocks[i].addListener();
  }
}

//create immediately
createBlocks();
document.getElementById('./images/spawn.png').style.border = '3px solid black';
document.getElementById('./images/void.png').style.border = '3px solid grey';

function createCanvas() {
  if (document.getElementById('loadString').value == "") {
    maxX = document.getElementById('inputX').value;
    maxY = document.getElementById('inputY').value;
    document.getElementById('canvas').width = maxX * 20;
    document.getElementById('canvas').height = maxY * 20;
    //gainsboro as gridlines
    output.push(maxX);
    output.push(maxY);
    for (var i = 0; i < maxX * maxY; i++) {
      output.push(0);
    }
    output.push('|END OF STRING|');
  } else {
    var stringToLoad = document.getElementById('loadString').value;
    output = stringToLoad.split(",");
    output.push('|END OF STRING|');
    maxX = output[0];
    maxY = output[1];
    document.getElementById('canvas').width = maxX * 20;
    document.getElementById('canvas').height = maxY * 20;
    for (var i = 0; i < maxY; i++) {
      //moving down a row
      for (var j = 0; j < maxX; j++) {
        //moving over a column
        if (output[i * maxX + j + 2] != 0) {
          loadImage(images[parseInt(output[i * maxX + j + 2], 10)], j * 20, i * 20, 20, 20, ctx);
          //i * maxx + j + 2 is the current tile of the string we are looking at
          //output[the above] is that tile
          //parseInt(the above, 10) takes the string output and turns it into a number, the 10 is for base 10
          //images[the above]  to get the block with that call number
        }
      }
    }
  }
  //canvas and save now viewable, create not viewable
  document.getElementById('div0').style.display = 'block';
  document.getElementById('div3').style.display = 'block';
  document.getElementById('div1').style.display = 'none';
  document.getElementById('div2').style.display = 'none';
}

var fill1 = 0;
var fill2 = 0;
var fill3 = 0;
var fill4 = 0;

var copy1 = 0;
var copy2 = 0;
var copy3 = 0;
var copy4 = 0;
var paste1 = 0;
var paste2 = 0;

var copiedSelection = [];

function fill() {
  if (fillStatus == 0 && copyStatus == 0 && pasteStatus == 0) {
    fillStatus = 1;
    fillBrush = '';
    document.getElementById('fill').innerHTML = 'x, y - x, y';
  }
}

function copy() {
  if (fillStatus == 0 && copyStatus == 0 && pasteStatus == 0) {
    copyStatus = 1;
    copiedSelection = [];
    document.getElementById('copy').innerHTML = 'x, y - x, y';
  }
}

function paste() {
  //copied selection is not empty, ie copy has been run before
  if (fillStatus == 0 && copyStatus == 0 && copiedSelection.length > 0) {
    pasteStatus = 1;
    document.getElementById('paste').innerHTML = 'Paste: x, y';
  }
}

function mouseDown() {
  if (fillStatus == 0 && copyStatus == 0 && pasteStatus == 0) {
    //filling is not happening
    mouseIsDown = true;
    usedButton = event.button;
    objectMousedOver();





  } else if (fillStatus == 1) {
    //fill, first one clicked, save the first block and set the images to fill with
    usedButton = event.button;
    var mouseX = event.clientX - getOffset(document.getElementById('canvas')).left;
    var mouseY = event.clientY - getOffset(document.getElementById('canvas')).top;
    fill1 = Math.floor(mouseX / 20);
    fill2 = Math.floor(mouseY / 20);
    if (usedButton == 2) {
      fillBrush = secondaryBrush;
    } else {
      fillBrush = primaryBrush;
    }
    fillStatus = 2;
    document.getElementById('fill').innerHTML = fill1 + ', ' + fill2 + ' - x, y';
  } else if (fillStatus == 2) {
    //fill, second one clicked, save it
    var mouseX = event.clientX - getOffset(document.getElementById('canvas')).left;
    var mouseY = event.clientY - getOffset(document.getElementById('canvas')).top;
    fill3 = Math.floor(mouseX / 20);
    fill4 = Math.floor(mouseY / 20);
    //the math and actual filling
    for (var i = 0; i < (fill4 - fill2 + 1); i++) {
      for (var j = 0; j < (fill3 - fill1 + 1); j++) {
        //filling everything, but starting from the initial selection
        loadImage(fillBrush, (fill1 + j) * 20, (fill2 + i) * 20, 20, 20, ctx, true);
        output[(fill2 + i) * maxX + (fill1 + j) + 2] = images.indexOf(fillBrush);
      }
    }
    //set fill back to 0
    fillStatus = 0;
    document.getElementById('fill').innerHTML = 'Fill (F)';





  } else if (copyStatus == 1) {
    //copy paste, first one clicked, just remember it for now
    var mouseX = event.clientX - getOffset(document.getElementById('canvas')).left;
    var mouseY = event.clientY - getOffset(document.getElementById('canvas')).top;
    copy1 = Math.floor(mouseX / 20);
    copy2 = Math.floor(mouseY / 20);
    copyStatus = 2;
    document.getElementById('copy').innerHTML = copy1 + ', ' + copy2 + ' - x, y';
  } else if (copyStatus == 2) {
    //copy paste, second one clicked, export all the cells that were clicked to an array; the values stored are the output
    var mouseX = event.clientX - getOffset(document.getElementById('canvas')).left;
    var mouseY = event.clientY - getOffset(document.getElementById('canvas')).top;
    copy3 = Math.floor(mouseX / 20);
    copy4 = Math.floor(mouseY / 20);
    //grabbing the values, see the fill code above for an explanation as they are similar
    for (var i = 0; i < (copy4 - copy2 + 1); i++) {
      for (var j = 0; j < (copy3 - copy1 + 1); j++) {
        //grabbing everything from the initial selection
        copiedSelection.push(output[(copy2 + i) * maxX + (copy1 + j) + 2]);
      }
    }
    copyStatus = 0;
    document.getElementById('copy').innerHTML = copy1 + ', ' + copy2 + ' - ' + copy3 + ', ' + copy4 + ' (C)';







  } else if (pasteStatus == 1) {
    //writing values everywhere: filling images and adding to the output
    var mouseX = event.clientX - getOffset(document.getElementById('canvas')).left;
    var mouseY = event.clientY - getOffset(document.getElementById('canvas')).top;
    paste1 = Math.floor(mouseX / 20);
    paste2 = Math.floor(mouseY / 20);
    //the math and actual filling
    for (var i = 0; i < (copy4 - copy2 + 1); i++) {
      for (var j = 0; j < (copy3 - copy1 + 1); j++) {
        //all values here count from 0, except for maxx and maxy, therefore make them count from 0
        //if the current fill is going to be out of bounds in either x or y axis
        if (!(paste1 + j > maxX - 1 || paste2 + i > maxY - 1)) {
          //current row * amount of columns + current column = current tile
          var amountOfTimesThisVariableHasBeenDeclared = i * (copy3 - copy1 + 1) + j;
          loadImage(images[copiedSelection[amountOfTimesThisVariableHasBeenDeclared]], (paste1 + j) * 20, (paste2 + i) * 20, 20, 20, ctx, true);
          output[(paste2 + i) * maxX + (paste1 + j) + 2] = copiedSelection[amountOfTimesThisVariableHasBeenDeclared];
        }
      }
    }
    pasteStatus = 0;
    document.getElementById('paste').innerHTML = 'Paste (V)';
  }
}

function mouseUp() {
  mouseIsDown = false;
}

function objectMousedOver() {
  if (mouseIsDown == true) {
    var mouseX = event.clientX - getOffset(document.getElementById('canvas')).left;
    var mouseY = event.clientY - getOffset(document.getElementById('canvas')).top;
    var targetX = Math.floor(mouseX / 20);
    var targetY = Math.floor(mouseY / 20);
    //if out of bounds
    //theoretically could be extended to other mouse events, but since this one is the most common, it should be good enough
    if (!(targetX >= maxX || targetY >= maxY || targetX < 0 || targetY < 0)) {
      if (usedButton == 2) {
        loadImage(secondaryBrush, targetX * 20, targetY * 20, 20, 20, ctx, true);
        toOutput = images.indexOf(secondaryBrush);
      } else {
        loadImage(primaryBrush, targetX * 20, targetY * 20, 20, 20, ctx, true);
        toOutput = images.indexOf(primaryBrush);
      }
      output[targetY * maxX + targetX + 2] = toOutput;
    }
  }
}

function keyPressed(event) {
  if (event.keyCode == 70) {
    //press F to fill
    fill();
  }
  if (event.keyCode == 67) {
    //press c to copy
    copy();
  }
  if (event.keyCode == 86) {
    paste();
  }
}

function saveCanvas() {
  document.getElementById('output').innerHTML = output.toString();
}

document.addEventListener('keydown', keyPressed);
document.getElementById('canvas').onmousedown = mouseDown;
document.getElementById('canvas').onmousemove = objectMousedOver;
document.getElementById('canvas').onmouseup = mouseUp;
