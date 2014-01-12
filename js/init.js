$(document).on('ready',function(){
	
	//coordenada inicial
	var config = {
	zoom:13,
	center: new google.maps.LatLng(40.473330251762974,-3.8682174682617188),
	mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	//crear mapa
	var mapa = new google.maps.Map($('#mapa')[0],config);
	
	//crear un marcador
	google.maps.event.addListener(mapa, 'click', function(event) {
    		console.log(event.latLng);//event.latLng(retorna coordenadas)
  	});

})