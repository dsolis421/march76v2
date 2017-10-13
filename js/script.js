$(document).ready(function(){

/*var $bios = ['WebDeveloper','Husband','Gamer','DogLover','ProjectManager','DataAnalyst'];
var $bioindex = 1;*/

var $quotes = [
  {
    quote: "I am always doing that which I cannot do, in order that I may learn how to do it.",
    author: " - PabloPicasso"
  },
  {
    quote: "A dog is the only thing on earth that loves you more than you love yourself.",
    author: " - JoshBillings"
  },
  {
    quote: "Happiness lies in the joy of achievement and the thrill of creative effort.",
    author: " - FranklinDRoosevelt"
  },
  {
    quote: "Quality is never an accident. It is always the result of intelligent effort.",
    author: " - JohnRuskin"
  }
];

/*function loopBios() {
  setInterval(function(){
    $('#bio-carousel').fadeOut(1200,"swing",function(){
      $('#bio-carousel').html($bios[$bioindex]);
    });
    $('#bio-carousel').fadeIn(1200,"swing");
    if ($bioindex === 5) {
      $bioindex = 0;
    } else {
    $bioindex++;
    }
  },5000)
}*/

function pickQuote() {
  var i = Math.floor(Math.random() * 4);
  var $myquote = $quotes[i];
  $('#myquote').html($myquote.quote + $myquote.author);
}



//loopBios();
pickQuote();

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

$('nav .fa-chevron-down, .toggle-menu a').click(function(){
  if($('.toggle-menu').hasClass('collapsed')){
    $('.toggle-menu').removeClass('collapsed');
  } else {
    $('.toggle-menu').addClass('collapsed');
  }
});

});
