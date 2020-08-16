var slider = tns({
    container: '.room__row',
    items: 1,
    prevButton: '.nav-arrow.left img',
    nextButton: '.nav-arrow.right img',
    navContainer: ".nav_circles"
});

function navColors(direction) {

    let elements = $("#rooms_nav .nav_circle");
    var x = 0;
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.background == "rgb(250, 198, 99)") {
            x = i;
        }
    }
    $("#rooms_nav .nav_circle").css("background", "#E1E1E1");
    if (direction == "left") {
        if (x == 0) {
            $(elements[elements.length-1]).css("background", "#FAC663");
        } else {
            $(elements[x - 1]).css("background", "#FAC663");
        }
    }else{
        if (x == elements.length-1) {
            $(elements[0]).css("background", "#FAC663");
        } else {
            $(elements[x + 1]).css("background", "#FAC663");
        }
    }
}

$("#rooms__nav__left img").on("click", function () {
    navColors("left");
})

$("#rooms__nav__right img").on("click", function () {
    navColors("right");
})

$("#rooms_nav .nav_circle").on("click", function () {
    $("#rooms_nav .nav_circle").css("background", "#E1E1E1");
    $(this).css("background", "#FAC663");
})

$("#feedback_nav .nav_circle").on("click", function () {
    $("#feedback_nav .nav_circle").css("background", "#E1E1E1");
    $(this).css("background", "#FAC663");
})

$("#rooms_nav .nav_circle").css("background", "#E1E1E1");
var elements = $("#rooms_nav .nav_circle");
$(elements[0]).css("background", "#FAC663");




//"#FAC663" = rgb(250, 198, 99)
//"#E1E1E1" = rgb(225, 225, 225)