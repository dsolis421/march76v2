$(document).ready(function() {
  var $scroll = $(document).scrollTop();
  var $quotes = [{
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

  function pickQuote() {
    var i = Math.floor(Math.random() * 4);
    var $myquote = $quotes[i];
    $('#myquote').html($myquote.quote + $myquote.author);
  }

  pickQuote();

  $(document).scroll(function() {
    $scroll = $(document).scrollTop();
    if ($scroll > 250) {
      $('.fa-chevron-down').fadeIn(500, "swing");
    } else if ($scroll < 230) {
      $('.fa-chevron-down').fadeOut(500, "swing");
    }
  });

  $('nav .fa-chevron-down, .toggle-menu a').click(function() {
    if ($('.toggle-menu').hasClass('collapsed')) {
      $('.toggle-menu').removeClass('collapsed');
      $('.toggle-menu').fadeIn();
    } else {
      $('.toggle-menu').addClass('collapsed');
      $('.toggle-menu').fadeOut();
    }
  });

});
