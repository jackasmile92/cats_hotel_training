
    var slider = tns({
        container: '.room__row',
        items: 1,
        prevButton: '.nav-arrow.left img',
        nextButton: '.nav-arrow.right img',
        navContainer: ".nav_circles"
    });
    var feedbackSlider = tns({
        container: '#feedback__row',
        items: 2,
        prevButton: '#feedback__nav__left img',
        nextButton: '#feedback__nav__right img',
        navContainer: "#feedback_nav_circles"
    });
    $("#rooms_nav .nav_circle").on("click", function () {
        $("#rooms_nav .nav_circle").css("background", "#E1E1E1");
        $(this).css("background", "#FAC663");
    })

    $("#feedback_nav .nav_circle").on("click", function () {
        $("#feedback_nav .nav_circle").css("background", "#E1E1E1");
        $(this).css("background", "#FAC663");
    })
