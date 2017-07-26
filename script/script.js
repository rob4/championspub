function initMap() {
        var uluru = {lat: 27.3073739, lng:  -82.4970109};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
