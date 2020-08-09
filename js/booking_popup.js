$(".room__button").click(function(){
    $("#popup__container").toggle();
    $("#cat_page").addClass("blur-filter");

});
$("#popup__close").click(function(){
    $("#popup__container").hide();
    $("#cat_page").removeClass("blur-filter");
});


$(window).on("load", function () {
    $("#popup__container").hide();
  });