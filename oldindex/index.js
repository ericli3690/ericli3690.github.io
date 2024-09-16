$(document).ready(() => {
    $(".dropdown_button").click(function() {
        $(this).siblings().slideToggle();
        let clickedButtonTextArray = $(this).attr("value").split("");
        clickedButtonTextArray[0] == "➡" ? clickedButtonTextArray[0] = "⬇" : clickedButtonTextArray[0] = "➡";
        $(this).attr("value", clickedButtonTextArray.join(""));
    })
})