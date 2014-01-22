$(function() {
    var formRegister = $('#register-content');
    var formLogin = $('#login-content');
     $('#login-submit').click(function() {
      logSend();
     });
  	
    $('#register-submit').click(function() {
        regSend();
    });


    /*FUNCIONES*/
    function regSend(){
      $.ajax({
        type: 'POST',
        url: 'php/manager/mapToro/insertUser',
        dataType: 'text',
        data: { 
                name: formRegister.find('input[name = user-name]').val(), 
                email: formRegister.find('input[name = user-email]').val(), 
                password: formRegister.find('input[name = user-password]').val() }
      }).done(function(data) {
        $('#error-form').html(data);
      }).fail(function() {
        console.log("error", arguments);
      });
    }

    function logSend(){
      $.ajax({
        type: 'POST',
        url: 'php/manager/maptoro/logUser',
        dataType: 'text',
        data: { 
                email: formLogin.find('input[name = log-email]').val(),
                password: formLogin.find('input[name = log-password]').val() }
      }).done(function(data) {
        $('#error-form-log').html(data);
        //Cambio de interfaz
        viewUser(data);
      }).fail(function() {
        console.log("error", arguments);
      });
    }
   
    function viewUser(user_name) {
        if(user_name){
            $('#login-content').remove();
            var $newElement = $('<a/>', {
               html : 'Bienvenido, '+ user_name,
               href : '#user'
            });

            $newElement.appendTo('#menu_top');
        }else{
            console.log ("El email y la contraseña no coinciden.");
        }
    }
  });