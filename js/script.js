$(document).ready(function(){

var $bios = ['HUSBAND','GAMER','DOG LOVER','PROJECT MANAGER','DATA ANALYST','WEB DEVELOPER'];
var $bioindex = 1;

function loopBios() {
  setInterval(function(){
    $('#bio-carousel').fadeOut("slow","swing",function(){
      $('#bio-carousel').html($bios[$bioindex]);
    });
    $('#bio-carousel').fadeIn("slow","swing");
    if ($bioindex === 4) {
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
  })

})
