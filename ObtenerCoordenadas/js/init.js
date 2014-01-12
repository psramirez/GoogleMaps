	//ARRAY PARA ALMACENAR NUEVOS MARCADORES
    var marcadores_nuevos = [];

	//FUNCION PARA QUITAR MARCADORES DE MAPA
    function quitar_marcadores(lista)
    {
        //RECORRER EL ARRAY DE MARCADORES
        for (i in lista)
        {
            //QUITAR MARCADOR DEL MAPA
            lista[i].setMap(null);
        }
    }

$(document).on('ready',function(){
	var formulario = $("#formulario");
	//ajax
	 $("#btn_grabar").on("click", function(){
            //INSTANCIAR EL FORMULARIO
            var f = $("#formulario");
           $.ajax({
               type:"POST",
               url:"./php/iajax.php",
               dataType:"JSON",
               data:formulario.serialize()+"&tipo=grabar",
               success:function(data){
                   alert(data.mensaje);
               },
               beforeSend:function(){
                   
               },
               complete:function(){
                   
               }
           });
           return false;
        });

	
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
		 	console.log(coordenadas.b);
			//variable para marcador
	        var marcador = new google.maps.Marker({          
	           position:coordenadas,//la posición del nuevo marcador
	           map: mapa, //en que mapa se ubicará el marcador
	           animation:google.maps.Animation.DROP,//como aparecerá el marcador
	           draggable:true//no permitir el arrastre del marcador
	       });
	        marcadores_nuevos.push(marcador);
	    	//agregar evento click al marcador
	       google.maps.event.addListener(marcador, "click", function(){
	          
	   	   });

	   
       formulario.find("input[name='cx']").val(coordenadas.b);
       formulario.find("input[name='cy']").val(coordenadas.d);
       formulario.find("input[name='titulo']").focus(); 

        quitar_marcadores(marcadores_nuevos);
       //ubicar el marcador en el mapa
       marcador.setMap(mapa);  	 
  	});

})