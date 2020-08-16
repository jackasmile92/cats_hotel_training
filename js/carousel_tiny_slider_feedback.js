
var feedbackSlider = tns({
    container: '#feedback__row',
    items: 2,
    prevButton: '#feedback__nav__left img',
    nextButton: '#feedback__nav__right img',
    navContainer: "#feedback_nav_circles"
});

function navColorsFeedback(direction) {

    let elements1 = $("#feedback_nav .nav_circle");
    var x = 0;
    for (let i = 0; i < elements.length; i++) {
        if (elements1[i].style.background == "rgb(250, 198, 99)") {
            x = i;
        }
    }
    $("#feedback_nav .nav_circle").css("background", "#E1E1E1");
    if (direction == "left") {
        if (x == 0) {
            $(elements1[elements1.length-1]).css("background", "#FAC663");
        } else {
            $(elements1[x - 1]).css("background", "#FAC663");
        }
    }else{
        if (x == elements1.length-1) {
            $(elements1[0]).css("background", "#FAC663");
        } else {
            $(elements1[x + 1]).css("background", "#FAC663");
        }
    }
}

$("#feedback_nav .nav_circle").css("background", "#E1E1E1");
var elements1 = $("#feedback_nav .nav_circle");
$(elements1[0]).css("background", "#FAC663");


$("#feedback__nav__left img").on("click", function () {
    navColorsFeedback("left");
})

$("#feedback__nav__right img").on("click", function () {
    navColorsFeedback("right");
})
