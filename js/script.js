$(document).ready(function(){

var $skills = ['CSS3','JavaScript','jQuery','Bootstrap','HTML5'];
var $skillsindex = 1;

function loopSkills() {
  setInterval(function(){
    $('#skill-carousel h2').fadeOut("slow","linear",function(){
      $('#skill-carousel h2').html($skills[$skillsindex]);
    });
    $('#skill-carousel h2').fadeIn("slow","linear");
    if ($skillsindex === 4) {
      $skillsindex = 0;
    } else {
    $skillsindex++;
    }
  },5000)
}

loopSkills();

})
