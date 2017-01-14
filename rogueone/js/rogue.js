$(document).ready(function() {

    $("#intro img").animate({
        opacity: '1'
    }, 2500);

    $("#teaser").click(function() {
        $("#playback").fadeOut(500, "linear", function() {
            $("#playback").empty();
            $("#playback").prepend('<iframe src="https://www.youtube.com/embed/Wji-BZ0oCwg" frameborder="0" allowfullscreen></iframe>');
        });
        $("#playback").fadeIn(1000, "linear");
    });

    $("#trailer1").click(function() {
        $("#playback").fadeOut(500, "linear", function() {
            $("#playback").empty();
            $("#playback").prepend('<iframe src="https://www.youtube.com/embed/frdj1zb9sMY" frameborder="0" allowfullscreen></iframe>');
        });
        $("#playback").fadeIn(1000, "linear");
    });

    $("#trailer2").click(function() {
        $("#playback").fadeOut(500, "linear", function() {
            $("#playback").empty();
            $("#playback").prepend('<iframe src="https://www.youtube.com/embed/sC9abcLLQpI" frameborder="0" allowfullscreen></iframe>');
        });
        $("#playback").fadeIn(1000, "linear");
    });

    $("#celebration").click(function() {
        $("#playback").fadeOut(500, "linear", function() {
            $("#playback").empty();
            $("#playback").prepend('<iframe src="https://www.youtube.com/embed/HUb_zpdyDpU" frameborder="0" allowfullscreen></iframe>');
        });
        $("#playback").fadeIn(1000, "linear");
    });

    $("#ch1").click(function() {
        $("#playback").fadeOut(500, "linear", function() {
            $("#playback").empty();
            $("#playback").prepend('<iframe src="https://www.youtube.com/embed/jIrw_AszBvk" frameborder="0" allowfullscreen></iframe>');
        });
        $("#playback").fadeIn(1000, "linear");
    });

    $("#ch2").click(function() {
        $("#playback").fadeOut(500, "linear", function() {
            $("#playback").empty();
            $("#playback").prepend('<iframe src="https://www.youtube.com/embed/yNFo-DQW6PA" frameborder="0" allowfullscreen></iframe>');
        });
        $("#playback").fadeIn(1000, "linear");
    });
    $("#ch3").click(function() {
        $("#playback").fadeOut(500, "linear", function() {
            $("#playback").empty();
            $("#playback").prepend('<iframe src="https://www.youtube.com/embed/uXFh5rNaDUk" frameborder="0" allowfullscreen></iframe>');
        });
        $("#playback").fadeIn(1000, "linear");
    });

    $("#ch4").click(function() {
        $("#playback").fadeOut(500, "linear", function() {
            $("#playback").empty();
            $("#playback").prepend('<iframe src="https://www.youtube.com/embed/s7t16oeXbXY" frameborder="0" allowfullscreen></iframe>');
        });
        $("#playback").fadeIn(1000, "linear");
    });

    var q1 = 0;
    var q2 = 0;
    var q3 = 0;
    var q4 = 0;
    var q5 = 0;
    var q6 = 0;
    var q7 = 0;
    var q8 = 0;

    $('input[name="q1radio"]').click(function(){
      var q1 = $('input[name="q1radio"]:checked').val();
      console.log(q1);
    });

    $('input[name="q2radio"]').click(function(){
      var q2 = $('input[name="q2radio"]:checked').val();
      console.log(q2);
    });

    $('input[name="q3radio"]').click(function(){
      var q3 = $('input[name="q3radio"]:checked').val();
      console.log(q3);
    });

    $('input[name="q4radio"]').click(function(){
      var q4 = $('input[name="q4radio"]:checked').val();
      console.log(q4);
    });

    $('input[name="q5radio"]').click(function(){
      var q5 = $('input[name="q5radio"]:checked').val();
      console.log(q5);
    });

    $('input[name="q6radio"]').click(function(){
      var q6 = $('input[name="q6radio"]:checked').val();
      console.log(q6);
    });

    $('input[name="q7radio"]').click(function(){
      var q7 = $('input[name="q7radio"]:checked').val();
      console.log(q7);
    });

    $('input[name="q8radio"]').click(function(){
      var q8 = $('input[name="q8radio"]:checked').val();
      console.log(q8);
    });

    $("#trivia-submit").click(function(){
      $("#trivia-score").empty();
      var score = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8;
      console.log("score = " + score);
      $("#trivia-score").prepend("<h4>Score: " + score +"</h4");
    });

});

//trivia game
