// consts, settings
var body;
const sideOffset = 5;

// slider object
export const slider = {
    back: null,
    bar: null,
    backDOM: null,
    get barPos() {
        const maxPos = parseInt(this.back.css('width')) - parseInt(this.bar.css('width')) - sideOffset - sideOffset; // cannot touch right side, subtract the left and right sides to get the length of the area between the left and right paddings
        return (parseInt(this.bar.css('margin-left')) - sideOffset) / maxPos; // take the distance from the left side of the background, to the bar; subtract the left side as it cannot touch the right edge, then divide by the maximum
        // returns a value from 0 to 1
    },
    set barPos([mouseXPos, isAnimated]) {
        let droppedPosition = mouseXPos - this.backDOM.offsetLeft; // position based off left side of bar background
        const maxPos = parseInt(this.back.css('width')) - parseInt(this.bar.css('width')) - sideOffset; // cannot touch right side
        if (droppedPosition > maxPos) {
            droppedPosition = maxPos; // too high
        } else if (droppedPosition < sideOffset) {
            droppedPosition = sideOffset; // too low, touching left side
        }
        if (isAnimated) {
            this.bar.stop(); // stop all current anims
            this.bar.animate(
                {
                    marginLeft: droppedPosition + 'px',
                },
                100,
            ) // smooth animation that takes a tenth of a second
        } else {
            // normal go to position; used for dragging
            this.bar.css('margin-left', `${droppedPosition}px`);
        }
        // console.log(this.barPos);
    },
}

// init
$(document).ready(() => {
    
    // init
    body = $('body');
    slider.bar = $('#sliderBar');
    slider.back = $('#sliderBackground');
    slider.backDOM = document.getElementById('sliderBackground');

    // default behaviours
    // the bar cannot touch the left or right sides of the background, nor the top or bottom
    slider.bar.css('top', `${sideOffset}px`);

    // event listeners
    let wasMouseDown = false;
    slider.back
        .mousedown((e) => {
            // when the background is clicked, set the bar to that position and get ready to drag in case they dont let go
            e.preventDefault(); // avoid highlight
            wasMouseDown = true;
            slider.barPos = [e.pageX, true];
        })

    body
        .mousemove((e) => {
            // mouse moved, and the cursor just clicked the bar; the mouse may not be on the bar anymore; move the bar to the mouse's x position
            if (wasMouseDown) {
                slider.barPos = [e.pageX, false];
            }
        })
        .mouseup((e) => {
            // the mouse clicked the bar but let go, either on or off the bar; disable dragging
            wasMouseDown = false;
        })
    
});