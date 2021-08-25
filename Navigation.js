//NAVIGATION - ERIC LI

///////////////////////////////////////////////////////////////////////////////
//CUSTOMIZATION
var Eric = {
  name: 'Eric',
  preferredTimeSyntax: 'MDY',
  keybindings: {
    key: [
      ['0', 'Insert', 'Self Close'],
      ['Delete', 'Insert', 'Autoclose Toggle'],
      ['Escape', '---', 'Time Display Toggle'],
      ['`', '~', 'Execute Toggle'],
      ['Enter', '---', 'Execute'],
    ],
    shortcuts: [
      ['1', '---', 'Google', ['https://www.google.ca/']],
      ['2', '---', 'Google Drive', ['https://drive.google.com/drive/u/1/my-drive']],
      ['3', '---', 'Youtube', ['https://www.youtube.com/']],
      ['4', '---', 'Powerschool', ['https://sis.cbe.ab.ca/public/home.html']],
      ['z', '---', 'Chinese Resources', ['https://translate.google.com/', 'https://www.purpleculture.net/chinese-english-dictionary/?word=', 'https://www.purpleculture.net/chinese-handwriting-input/', 'https://www.chinese-tools.com/tools/sinograms.html?r']],
      ['x', '---', 'Google Translate', ['https://translate.google.com/']],
      ['c', '---', 'Chinese Dictionary', ['https://www.purpleculture.net/chinese-english-dictionary/?word=']];
      ['v', '---', 'Chinese Type Input', ['https://www.purpleculture.net/chinese-handwriting-input/']],
      ['b', '---', 'Chinese Radical Search', ['https://www.chinese-tools.com/tools/sinograms.html?r']],
      ['a', '---', 'SoundCloud', ['https://soundcloud.com/you/sets']],
      ['s', '---', 'Spotify', ['https://open.spotify.com/collection/albums']],
      ['d', '---', 'Codecademy', ['https://www.codecademy.com/learn']],
      ['f', '---', 'Github', ['https://github.com/']],
    ],
  },
}

var Guest = {
  name: 'Guest',
  preferredTimeSyntax: 'MDY',
  keybindings: {
    key: [
      ['0', 'Insert', 'Self Close'],
      ['.', 'Delete', 'Autoclose Toggle'],
      ['Escape', '---', 'Time Display Toggle'],
      ['+', '=', 'Execute Toggle'],
      ['Enter', '---', 'Execute'],
    ],
    shortcuts: [
      ['1', 'End', 'Everything Google', ['https://www.google.ca/', 'https://drive.google.com/drive/my-drive', 'https://www.youtube.com/']],
      ['2', 'ArrowRight', 'GMail', ['https://mail.google.com/mail/u/0/?tab=wm#inbox']],
      ['0', '0', 'NA', ['http://example.com/']],
      ['0', '0', 'NA', ['http://example.com/']],
      ['0', '0', 'NA', ['http://example.com/']],
      ['0', '0', 'NA', ['http://example.com/']],
      ['0', '0', 'NA', ['http://example.com/']],
      ['0', '0', 'NA', ['http://example.com/']],
    ],
  },
}

var user = Eric;
///////////////////////////////////////////////////////////////////////////////
//printing console
var consoleList = [];

function printConsole(add) {
  var consolePrint = document.getElementById('consolePrint');
  consoleList.push('<br>' + add);
  consolePrint.innerHTML = consoleList;
}

//start messages
var consoleDate = new Date();
console.log('Lauched at ' + consoleDate.getFullYear() + '.' + (consoleDate.getMonth() + 1) + '.' + consoleDate.getDate() + ' ' + consoleDate.getHours() + ':' + consoleDate.getMinutes() + ':' + consoleDate.getSeconds());
console.log('User: ' + user.name);
console.log('Autoclose on, Time Display on, Execute off');
printConsole('<strong>Navigation has launched, at ' + consoleDate.getFullYear() + '.' + (consoleDate.getMonth() + 1) + '.' + consoleDate.getDate() + ' ' + consoleDate.getHours() + ':' + consoleDate.getMinutes() + ':' + consoleDate.getSeconds() + '! User: ' + user.name + '</strong>');
printConsole('<strong>Welcome, ' + user.name + '!</strong>');
printConsole('Autoclose is On, Time Display is On, Execute is Off');
printConsole('<strong>Autoclose will only function if Navigation was opened via Javascript</strong>');

//time
function updateTime() {
  var date = new Date();
  var hoursIn12;
  if (date.getHours() > 12) {
    hoursIn12 = date.getHours() - 12;
  } else {
    hoursIn12 = date.getHours();
  }
  var interpretTime = document.getElementById('interpretTime');
  var months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  var daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  var hoursWith0;
  if (hoursIn12 < 10) {
    hoursWith0 = '0' + date.getHours();
  }
  var minutesWith0;
  if (date.getMinutes() < 10) {
    minutesWith0 = '0' + date.getMinutes();
  } else {
    minutesWith0 = date.getMinutes();
  }
  var secondsWith0;
  if (date.getSeconds() < 10) {
    secondsWith0 = '0' + date.getSeconds();
  } else {
    secondsWith0 = date.getSeconds();
  }
  var interpretTimeHMS = ',\n' + hoursWith0 + ':' + minutesWith0 + ':' + secondsWith0;
  if (user.preferredTimeSyntax == 'MDY') {
    interpretTime.innerHTML = daysOfWeek[date.getDay()] + ',\n' + months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() + interpretTimeHMS;
  } else if (user.preferredTimeSyntax == 'DMY') {
    interpretTime.innerHTML = daysOfWeek[date.getDay()] + ',\n' + date.getDate() + ' of ' + months[date.getMonth()] + ' ' + date.getFullYear() + interpretTimeHMS;
  } else if (user.preferredTimeSyntax == 'YMD') {
    interpretTime.innerHTML = daysOfWeek[date.getDay()] + ',\n' + date.getFullYear() + ' ' + months[date.getMonth()] + ' ' + date.getDate() + interpretTimeHMS;
  } else {
    alert('# ERROR - AT CUSTOMIZATION, AT USER, AT PREFERREDTIMESYNTAX -- INVALID INPUT');
  }
};

updateTime();
setInterval(updateTime, 1000);

//toggles
var qAutoClose = true;
var qShowTime = true;
var qExecute = false;
function toggleE(e) {
  var target = document.getElementById(e);
  if (target.style.display == 'none') {
    target.style.display = 'block';
  } else {
    target.style.display = 'none';
  }
};

//formatting HTML toggle buttons
var autocloseToggle = document.getElementById('autocloseToggle');
var timeDisplayToggle = document.getElementById('timeDisplayToggle');
var executeToggle = document.getElementById('executeToggle');
var execute = document.getElementById('execute');

function htmlButtons() {
  //#fa... is on / salmon; #bf... is off / dark red
  var colourArray = ['#FA807270', '#FA807270', '#bf242a90', 'grey'];
  var textArray = ['AUTOCLOSE (' + user.keybindings.key[1][0] + ')', 'TIME (' + user.keybindings.key[2][0] + ')', 'EXECUTE TOGGLE (' + user.keybindings.key[3][0] + ')', 'EXECUTE (' + user.keybindings.key[4][0] + ')'];
  var targetArray = [autocloseToggle, timeDisplayToggle, executeToggle, execute];
  for (var i = 0; i < targetArray.length; i++) {
    targetArray[i].textContent = textArray[i];
    targetArray[i].style.backgroundColor = colourArray[i];
  }
  var selfClose = document.getElementById('selfCloseButton');
  selfClose.textContent = 'Close This Page (' + user.keybindings.key[0][0] + ')';
}

htmlButtons();

function toggleHtmlButtonColour(e) {
  if (e.style.backgroundColor == 'rgba(250, 128, 114, 0.44)') {
    e.style.backgroundColor = 'rgba(191, 36, 42, 0.565)';
  } else {
    e.style.backgroundColor = 'rgba(250, 128, 114, 0.44)';
  }
}

//keydown event listener
var executeArray = [];
var manualToggleObjects = {
  selfClose: {
    key: user.keybindings.key[0][0],
  },
  autoclose: {
    key: user.keybindings.key[1][0],
  },
  timeDisplay: {
    key: user.keybindings.key[2][0],
  },
  executeToggle: {
    key: user.keybindings.key[3][0],
  },
  execute: {
    key: user.keybindings.key[4][0],
  }
}

function addIdentity() {
  var targetArray = [manualToggleObjects.autoclose, manualToggleObjects.timeDisplay, manualToggleObjects.executeToggle, manualToggleObjects.execute, manualToggleObjects.selfClose];
  for (var i = 0; i < targetArray.length; i++) {
    targetArray[i].manualIdentity = true;
  }
}

addIdentity();

function keyPressed(event) {
  if (event.key == user.keybindings.key[0][0] || event.key == user.keybindings.key[0][1]) {
    //close this page
    window.close();
    printConsole('Page failed to close');
  } else if (event.key == user.keybindings.key[1][0] || event.key == user.keybindings.key[1][1]) {
    //toggle autoclose
    qAutoClose = !qAutoClose;
    console.log('Autoclose: ' + qAutoClose);
    printConsole('Autoclose: ' + qAutoClose);
    toggleHtmlButtonColour(autocloseToggle);
  } else if (event.key == user.keybindings.key[2][0] || event.key == user.keybindings.key[2][1]) {
    //toggle time display
    toggleE('interpretTime');
    toggleE('space1');
    qShowTime = !qShowTime;
    console.log('Time Display: ' + qShowTime);
    printConsole('Time Display: ' + qShowTime);
    toggleHtmlButtonColour(timeDisplayToggle);
  } else if (event.key == user.keybindings.key[3][0] || event.key == user.keybindings.key[3][1]) {
    //toggle execute
    qExecute = !qExecute;
    console.log('Execute Function: ' + qExecute);
    printConsole('Execute Function: ' + qExecute);
    toggleHtmlButtonColour(executeToggle);
  } else if (event.key == user.keybindings.key[4][0] || event.key == user.keybindings.key[4][1]) {
    //execute
    for (var i = 0; i < executeArray.length; i++) {
      window.open(executeArray[i], '_blank');
    }
    console.log('Execute: ' + executeArray.length);
    printConsole('Execute: ' + executeArray.length + ' Pages');
    executeArray = [];
    if (qAutoClose == true) {
      window.close();
      printConsole('Page failed to close');
    }
  } else {
    //any other key, ie a hotkey
    for (var i = 0; i < user.keybindings.shortcuts.length; i++) {
      var currentInspectedKey = user.keybindings.shortcuts[i];
      if (event.key == currentInspectedKey[0] || event.key == currentInspectedKey[1]) {
        console.log('Key: ' + event.key + ' - ' + currentInspectedKey[3]); //***, 2?
        printConsole('Key: ' + event.key + ' - ' + currentInspectedKey[3]);
        for (var j = 0; j < currentInspectedKey[3].length; j++) {
          if (qExecute == true) {
            executeArray.push(currentInspectedKey[3][j]);
          } else {
            window.open(currentInspectedKey[3][j], '_blank');
          }
        }
        if (qAutoClose == true && qExecute == false) {
          window.close();
          printConsole('Page failed to close');
        }
        //exit loop
        i = user.keybindings.shortcuts.length;
      }
    }
  }
}

document.addEventListener('keydown', keyPressed);

//printing hotkeys
function printHotkeys() {
  var hotkeysPrint = document.getElementById('hotkeysPrint');
  var hotkeyList = [];
  for (var i = 0; i < user.keybindings.shortcuts.length; i++) {
    var currentInspectedKey = user.keybindings.shortcuts[i];
    hotkeyList.push(['<br>' + currentInspectedKey[0] + '-' + currentInspectedKey[1] + ' -- ' + currentInspectedKey[2]]);
  }
  hotkeysPrint.innerHTML = hotkeyList;
}

printHotkeys();
