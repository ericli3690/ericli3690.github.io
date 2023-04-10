import { exercises } from './data.js';
import { slider } from './slider.js';

// init
export var optionFields = [];
export var toggleOptionFields = [];

// globals
export var currentlySelectedExercise = null;

export class Option {
    constructor(address, poolObj) {
        this.address = address;
        this.exercise = $(address).find('.exercise');
        this.leftRight = $(address).find('.leftRightButton');
        this.poolObj = poolObj;
        this.pool = poolObj.pool; // the options for the exercise

        this._rapidIncrementInterval = null; // holds the timeout if rapid incrementing is about to begin, and the rapid incrementing interval if its already begun
        $(this.leftRight[0])
            .mousedown((e) => {
                // when clicked, increment, then wait to see if they keep holding it down
                this.incrementExercise(false);
                this._rapidIncrementInterval = setTimeout(() => {
                    this.rapidIncrementExercise(false)
                }, 500); // in half a second, begin rapid incrementation
            })
        $(this.leftRight[1])
            .mousedown((e) => {
                // when clicked, increment, then wait to see if they keep holding it down
                this.incrementExercise(true);
                this._rapidIncrementInterval = setTimeout(() => {
                    this.rapidIncrementExercise(true)
                }, 500); // in half a second, begin rapid incrementation
            })
        $(this.leftRight)
            // if moused out or unclicked, stop whatever rapid incrementing step we're currently on
            .mouseup((e) => {
                clearInterval(this._rapidIncrementInterval);
            })
            .mouseout((e) => {
                clearInterval(this._rapidIncrementInterval);
            })

        this.exercise.val(this.pool[0]); // set the exercise to the first in the pool
        this._counter = 0; // current exercise
    }
    incrementExercise(isToRight) {
        if (isToRight) {
            this._counter++;
        } else {
            this._counter--;
        }
        this._counter = this.checkOverflow(this._counter);
        this.exercise.val(
            this.pool[
                this._counter
            ]
        )
    }
    rapidIncrementExercise(isToRight) {
        // start the rapid incrementing interval, to be run every tenth of a second
        this._rapidIncrementInterval = setInterval(() => {
            this.incrementExercise(isToRight)
        }, 100);
    }
    checkOverflow(value) {
        if (value > this.pool.length - 1) {
            return 0;
        } else if (value < 0) {
            return this.pool.length - 1;
        } else {
            return value;
        }
    }
    multiContentOptionCallback() {
        // interface
    }
}

export class ToggleOption extends Option {
    constructor(address, poolObj) {
        super(address, poolObj);
        this.exercise.css('background-color', 'lightgrey');
        this.enabled = $(address).find('.selectedExerciseRadio');
        this.enabled
            .click((e) => {
                this.toggleOn();
            });
    }
    placeExerciseLabels() {
        // set the left property of all selectedExerciseLabels
        // is absolute, so that it takes up no space in its default position
        // gets how far right from the left wall the first left-right arrow is
        // subtracts its own width (converted from px to int)
        // subtracts another five for padding
        $('.selectedExerciseLabel').css('left', `${$('.leftRightButton').offset().left - parseInt($('.selectedExerciseLabel').css('width')) - 10}px`);
        window.addEventListener('resize', this.placeExerciseLabels) // run self every time the screen resizes to place the exercise labels 
    }
    toggleOn() {
        // on click of any option, set all other options's exercise fields to a background color of grey
        for (let i = 0; i < toggleOptionFields.length; i++) {
            $($(toggleOptionFields[i].address).find('.exercise')).css('background-color', 'lightgrey');
        }
        // then set this to white
        this.exercise.css('background-color', 'white');
        // set this to the current selected option
        currentlySelectedExercise = this;
        // WARNING: does not scale well; if this option is also the scales option, then do activate keys (see MultiContentOption class)
        if (currentlySelectedExercise == toggleOptionFields[0]) {
            optionFields[0].multiContentOptionCallback(true); // activate keys
        } else {
            optionFields[0].multiContentOptionCallback(false); // deactivate keys
        }
    }
}

export class MultiContentOption extends Option {
    constructor(address, poolObjList) {
        let defaultObjList = poolObjList[2];
        super(address, defaultObjList); // simple scale is the default selected exercise, requires detailed keys
        this.multiPool = poolObjList;
        this.poolObj = defaultObjList; // simple scale is the default selected exercise, requires detailed keys
        this.pool = this.poolObj.pool;
    }
    multiContentOptionCallback(isTurningOn) {
        // WARNING: this bit does not scale well
        // if the "scales" exercise is currently selected (trigged from toggleOn if scales is the caller), reset the keys to C Major, highlight them light blue, and show the extra minor subtype keys
        // else do the reverse
        // if (isTurningOn) {
        //     this.pool = this.multiPool[1];
        //     this._counter = 0;
        //     this.exercise.val(this.pool[this._counter]);
        //     this.exercise.css('background-color', 'lightskyblue');
        // } else {
        //     this.pool = this.multiPool[0];
        //     this._counter = 0;
        //     this.exercise.val(this.pool[this._counter]);
        //     this.exercise.css('background-color', 'white');
        // }
    }
}

export class SliderOption extends Option {
    constructor(address, _) {
        super(address, _);
        this.slider = slider; // imported from slider.js
    }
    incrementExercise(isToRight) {
        // override the increment exercise function to instead move the bar right using the slider function defined in slider.js
        // sets position to current position (based off the left side of the page) plus 5 pixels
        if (isToRight) {
            this.slider.barPos = [parseInt(this.slider.bar.css('margin-left')) + this.slider.backDOM.offsetLeft + 5, true]; // true so that it nicely interpolates over
        } else {
            this.slider.barPos = [parseInt(this.slider.bar.css('margin-left')) + this.slider.backDOM.offsetLeft - 5, true];
        }
    }
}

$(document).ready(() => {
    // init
    const optionFieldAddresses = $('.option');
    // for each option div
    for (let i = 0; i < optionFieldAddresses.length; i++) {
        if ($(optionFieldAddresses[i]).find('.selectedExerciseRadio').length != 0) {
            // if it has an enable toggle, then init it as a toggleoption and append it to the two master arrays
            const _ = new ToggleOption(optionFieldAddresses[i], exercises[i][0]); // exercises[i] opens the exercises array and gives an array; normally it has one object unless its a multicontent
            optionFields.push(_);
            toggleOptionFields.push(_);
        } else if (exercises[i].length > 1) {
            // multicontent exercises; the exercise field can contain multiple objects
            // practically speaking, "keys" has two content fields for exercises, which activate depending on if scales is on
            const _ = new MultiContentOption(optionFieldAddresses[i], exercises[i]) // gets the array of contents, not [0], as its a multicontent
            optionFields.push(_); // does not extend toggle
        } else if ($(optionFieldAddresses[i]).find('#sliderBackground').length != 0) {
            const _ = new SliderOption(optionFieldAddresses[i], exercises[i][0]);
            optionFields.push(_);
        } else {
            // else append to the normal one, use a option object
            const _ = new Option(optionFieldAddresses[i], exercises[i][0]);
            optionFields.push(_);
        }
    }
    // ui stuff to make the first toggle option be on
    // toggleOptionFields[0].enabled.checked = true;
    toggleOptionFields[0].toggleOn();
    currentlySelectedExercise = toggleOptionFields[0];
});

