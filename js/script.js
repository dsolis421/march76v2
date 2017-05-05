$(document).ready(function(){

var $bios = ['HUSBAND','GAMER','DOG LOVER','PROJECT MANAGER','DATA ANALYST','WEB DEVELOPER'];
var $bioindex = 1;

function loopBios() {
  setInterval(function(){
    $('#bio-carousel').fadeOut("slow","swing",function(){
      $('#bio-carousel').html($bios[$bioindex]);
    });
    $('#bio-carousel').fadeIn("slow","swing");
    if ($bioindex === 5) {
      $bioindex = 0;
    } else {
    $bioindex++;
    }
  },5000)
}

loopBios();

  var $scroll = $(document).scrollTop();

  function STop() {
    console.log("scroll is " + $scroll);
  }

  $(document).scroll(function(){
    $scroll = $(document).scrollTop();
    if ($scroll > 150) {
        $('#mar-nav').fadeIn(500,"swing");
    } else if ($scroll == 0) {
        $('#mar-nav').fadeOut(500,"swing");
    }
  });

  $('#feedback-submit').submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLScphQoYfir7fbGiMzRQqrgdyVQDNWxju4dLMc1Iwig5tAe02A/formResponse",
            data: $(this).serialize(),
            type: "POST",
            dataType: "xml",
            success: function(data) {
                console.log('Submission successful');
            },
            error: function(xhr, status, error) {
                console.log('Submission failed: ' + error);
            }
        });
        $('#feedback-lead').html("Thank You!");
        $('input:first-of-type, textarea').val("")
    });

  $('#marnav-navbar-collapse').click(function(){
    $(this).removeClass("in");
    $(this).attr("aria-expanded",false);
  });

})
