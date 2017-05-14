$(document).ready(function(){

var $bios = ['HUSBAND','GAMER','DOG LOVER','PROJECT MANAGER','DATA ANALYST','WEB DEVELOPER'];
var $bioindex = 1;
var $quotes = [
  {
    quote: "I am always doing that which I cannot do, in order that I may learn how to do it.",
    author: " - Pablo Picasso"
  },
  {
    quote: "A dog is the only thing on earth that loves you more than you love yourself.",
    author: " - Josh Billings"
  },
  {
    quote: "Happiness lies in the joy of achievement and the thrill of creative effort.",
    author: " - Franklin D. Roosevelt"
  },
  {
    quote: "Quality is never an accident. It is always the result of intelligent effort.",
    author: " - John Ruskin"
  }
]

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

function pickQuote() {
  var i = Math.floor(Math.random() * 4);
  var $myquote = $quotes[i];
  $('#myquote').html($myquote.quote + $myquote.author);
}

loopBios();
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

  $('#marnav-navbar-collapse, #logo').click(function(){
    $('#marnav-navbar-collapse').removeClass("in");
    $('#marnav-navbar-collapse').attr("aria-expanded",false);
  });

})
