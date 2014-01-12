$(document).on('ready',function(){
	
	//coordenada inicial
	var config = {
	zoom:13,
	center: new google.maps.LatLng(40.473330251762974,-3.8682174682617188),
	mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	//crear mapa
	var mapa = new google.maps.Map($('#mapa')[0],config);
	
	//añadir marcador
	google.maps.event.addListener(mapa, 'click', function(event) {
    		placeMarker(event.latLng);
  	});

	//crear marcador
	function placeMarker(location) {
	  var marker = new google.maps.Marker({
	      position: location,//posicion marcador
	      map: mapa,//mapa que contendra marcador
	      animation:google.maps.Animation.DROP,//animacion 
	      draggable:false//no arrastrar marcador
	  });

	  mapa.setCenter(location);
	}

})