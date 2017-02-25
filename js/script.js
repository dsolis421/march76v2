$(document).ready(function(){

var $skills = ['CSS3','JavaScript','jQuery','Bootstrap','HTML5'];
var $bios = ['HUSBAND','GAMER','DOG LOVER','PROJECT MANAGER','DATA ANALYST','WEB DEVELOPER'];
var $bioindex = 1;
var $skillsindex = 1;

/*function loopSkills() {
  setInterval(function(){
    $('#skill-carousel').fadeOut("slow","swing",function(){
      $('#skill-carousel').html($skills[$skillsindex]);
    });
    $('#skill-carousel').fadeIn("slow","swing");
    if ($skillsindex === 4) {
      $skillsindex = 0;
    } else {
    $skillsindex++;
    }
  },5000)
}*/

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
//loopSkills();

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
