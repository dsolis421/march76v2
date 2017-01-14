$(document).ready(function(){

    function carouselLoop(){
        var image1 = 'url("img/dog1.jpg")';
        var image2 = 'url("img/dog2.jpg")';
        var image3 = 'url("img/dog3.jpg")';
        var activeimg = image2;

        setInterval(function(){
            $("#fading-back-carousel").css('background-image', activeimg);
            if (activeimg === image1) {
                activeimg = image2;
            } else if (activeimg === image2) {
                activeimg = image3;
            } else {
                activeimg = image1;
            };
        }, 5000);
    };

    carouselLoop();

    setInterval(function() {
      $(".upper-left").removeClass("upper-left").addClass("upper-right");
      $(".upper-right").removeClass("upper-right").addClass("lower-right");
      $(".lower-right").removeClass("lower-right").addClass("lower-left");
      $(".lower-left").removeClass("lower-left").addClass("upper-left");
    }, 3500);

});
