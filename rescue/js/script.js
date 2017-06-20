var $petfinderAPI = 'https://api.petfinder.com/';
var $devkey = '3c73470956892905e562a55f0e113f50';

function updateShelterStatus(message) {
  console.log(message);
  if(message) {
    $('#searchstatus').fadeOut("slow","swing", function() {
      $('#searchstatus').html(`<h3>${message}</h3>`)
        .fadeIn("slow","swing");
    });
  } else {
    $('#searchstatus').fadeOut("slow","swing", function() {
      $('#searchstatus').empty();
    });
  };
};

function getShelter(id) {
  updateShelterStatus('Getting that family info...');
  $.getJSON($petfinderAPI + 'shelter.get?id=' + id + '&format=json&key=' + $devkey + '&callback=?')
    .done(function(shelter){
      var shelterdetail = shelter.petfinder.shelter;
      console.log(shelter);
      $('#shelters').fadeOut("slow","swing", function() {
        $('#shelters').empty()
          .html('<div class="shelterdetail"><h4>'+ shelterdetail.name.$t +
            '</h4><h5>' + shelterdetail.email.$t + '</h5></div>')
          .fadeIn("slow","swing");
      });
    })
    .done(function(){
      updateShelterStatus(null);
    })
    .error(function(err) {
      console.log('Get shelter by ID error! ' + err);
    });
};

function getSheltersZip(zip) {
  updateShelterStatus('Finding families...');
  $.getJSON($petfinderAPI + 'shelter.find?location=' + zip + '&format=json&key=' + $devkey + '&callback=?')
    .done(function(petApiData){
      console.log(petApiData);
      if(petApiData.petfinder.hasOwnProperty('shelters')) {
        $('#shelters').fadeOut("slow","swing", function() {
          $('#shelters').empty();
          var shelters = petApiData.petfinder.shelters.shelter;
          for (i in shelters) {
            var listing = '<div class="shelter" shelterid=' + shelters[i].id.$t + '><h4>' + shelters[i].name.$t + '</h4><div>See Family</div></div>';
            $('#shelters').append(listing);
          };
          $('#shelters').fadeIn("slow","swing");
          /*$('#shelters').on("click", ".shelter", function(){
            getShelter($(this).attr('shelterid'));
            $('html, body').animate({
              scrollTop: $('#adoption').offset().top - 35
            }, 500);
          });*/
          $('.shelter').on("click", function() {
            getShelter($(this).attr('shelterid'));
            $('html, body').animate({
              scrollTop: $('#adoption').offset().top - 35
            }, 500);
          });
        });
        updateShelterStatus('Here\'s what we found...');
      } else {
        updateShelterStatus('Hmm... We didn\'t find any shelters. Please check the zip code and try again.');
        $('#shelters').fadeOut("slow","swing", function() {
          $('#shelters').empty();
        });
      }
    })
    .error(function(err){
      console.log('Get shelters by zip error! ' + err);
    });
};


$(document).ready(function() {

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 35
          }, 500);
          return false;
        }
      }
    });
  });

  $('#sheltersearchgo').click(function(){
    if($('#sheltersearch').val().length === 5) {
      getSheltersZip($('#sheltersearch').val());
    } else {
      updateShelterStatus('Oops! That doesn\'t look like a valid zip code.');
    }
  });
});
