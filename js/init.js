$(document).on('ready',function(){
	
	//coordenada inicial
	var config = {
	zoom:13,
	center: new google.maps.LatLng(40.473330251762974,-3.8682174682617188),
	mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	//crear mapa
	var mapa = new google.maps.Map($('#mapa')[0],config);
	var marcador;
	
	//añadir marcador
	google.maps.event.addListener(mapa, 'click', function(event) { 	
	 	var coordenadas = event.latLng;			
		//variable para marcador
        var marcador = new google.maps.Marker({
           titulo:prompt("Titulo del marcador?"),
           position:coordenadas,//la posición del nuevo marcador
           map: mapa, //en que mapa se ubicará el marcador
           animation:google.maps.Animation.DROP,//como aparecerá el marcador
           draggable:true//no permitir el arrastre del marcador
       });

    	//agregar evento click al marcador
       google.maps.event.addListener(marcador, "click", function(){
          //mostrar una alerta al hacer  click
          alert(marcador.titulo);
       });
       
       //ubicar el marcador en el mapa
       marcador.setMap(mapa);  	 
  	});

})