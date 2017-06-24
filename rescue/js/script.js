var $petfinderAPI = 'https://api.petfinder.com/';
var $devkey = '3c73470956892905e562a55f0e113f50';

function updateShelterStatus(message) {
  console.log(message);
  if(message) {
    $('#searchstatus').fadeOut("slow","swing", function() {
      $('#searchstatus').html('<h3>' + message + '</h3>')
        .fadeIn("slow","swing");
    });
  } else {
    $('#searchstatus').fadeOut("slow","swing", function() {
      $('#searchstatus').empty();
    });
  };
};

function evaluatePictures(photos) {
  /*trying to ascertain if a usuable picture is available
  otherwise display default value based on cat or dog*/
  var photoslength = photos.length;
  var goodphoto = '';
  for(i = 0;i < photoslength;i++) {
    if(photos[i][@size] === "t") {
      goodphotos = photos[i];
    }
  };
};

function getShelter(id) {
  updateShelterStatus('Getting that family info...');
  $.getJSON($petfinderAPI + 'shelter.get?id=' + id + '&format=json&key=' + $devkey + '&callback=?')
    .done(function(shelter){
      console.log(shelter);
      var shelterdetail = shelter.petfinder.shelter;
      var sheltername = shelterdetail.name.$t;
      var shelteraddress1 = shelterdetail.address1.$t ? shelterdetail.address1.$t : "Not available";
      var shelteraddress2 = shelterdetail.address2.$t ? shelterdetail.address2.$t : "";
      var sheltercity = shelterdetail.city.$t ? shelterdetail.city.$t : "";
      var shelterstate = shelterdetail.state.$t ? shelterdetail.state.$t : "";
      var shelterphone = shelterdetail.phone.$t ? shelterdetail.phone.$t : "Not available";
      $('#shelters').fadeOut("slow","swing", function() {
        $('#shelters').empty()
          .html('<div class="shelter-detail">\
              <div class="shelter-header">\
                <div class="shelter-name">\
                  <h3>'+ sheltername +'</h3>\
                </div>\
                <div class="shelter-contact">\
                  <h4>Address: ' + shelteraddress1  + ' ' +
                    shelteraddress2 + ', ' +
                    sheltercity + ', ' +
                    shelterstate + '</h4>\
                  <h4>Phone: ' + shelterphone + '</h4>\
                  <h4>Email: ' + shelterdetail.email.$t + '</h4>\
                </div>\
              </div>\
              <div class="shelter-pets">\
              </div>\
            </div>')
          .fadeIn("slow","swing",getShelterPets(shelterdetail.id.$t));
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

function getShelterPets(id) {
  $.getJSON($petfinderAPI + 'shelter.getPets?id=' + id + '&output=full&format=json&key=' + $devkey + '&callback=?')
    .done(function(petApiData){
      console.log(petApiData);
      //petfinder returns an object if only one pet exists, it returns an array of objects for multiple pets
      if(petApiData.petfinder.pets.hasOwnProperty('pet') && Array.isArray(petApiData.petfinder.pets.pet)) {
        console.log('found pets is an array');
        var rescues = petApiData.petfinder.pets.pet;
        for (x in rescues) {
          var petdescription = rescues[x].description.$t ? rescues[x].description.$t.replace("'","\'") : "Not available";
          $('shelter-pets').empty();
          $('.shelter-pets').append('<div>\
              <h4>' + rescues[x].name.$t + '</h4>\
              <span>Sex: ' + rescues[x].sex.$t + '</span>\
              <span>Breed: ' + rescues[x].breeds.breed.$t + '</span>\
              <p>' + petdescription + '</p>\
            </div>');
        };
      } else if (petApiData.petfinder.pets.hasOwnProperty('pet') && typeof petApiData.petfinder.pets.pet === 'object') {
        console.log('found pet is an object');
        var rescues = petApiData.petfinder.pets.pet;
        $('shelter-pets').empty();
        $('.shelter-pets').append('<div>\
            <h4>' + rescues.name.$t + '</h4>\
            <span>Sex: ' + rescues.sex.$t + '</span>\
            <span>Breed: ' + rescues.breeds.breed.$t + '</span>\
            <p>' + rescues.description.$t.replace("'","\'") + '</p>\
          </div>');
      } else {
        console.log('looked for pets but none found');
        $('.shelter-pets').append('h4>Looks like there are no pets currently at this shelter</h4>');
      }
    })
    .error(function(err){
      console.log('Get shelters by zip error! ' + err);
    });
}


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
    var zip = $('#sheltersearch').val()
    if(zip.length === 5) {
      console.log('searching ', zip);
      getSheltersZip(zip);
    } else {
      updateShelterStatus('Oops! That doesn\'t look like a valid zip code.');
    }
  });
});
