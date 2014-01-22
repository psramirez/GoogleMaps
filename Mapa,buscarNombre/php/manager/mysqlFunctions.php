<?php
	//conexion como global
	require("../utils/sql/mysqlConection.php");

	$db = getConnet();

	function insertUser($name,$email,$password){
		global $db;
		$query = "INSERT into bike_users (user_name,user_email,user_password) values('$name','$email','$password')";
		$result = mysqli_query($db,$query);
                $code = createToken();
                if ($result) {
                    $cuerpo = 'Hola '.$name.', para activar tu cuenta haz click en el siguiente link:
                    ' . "\n" . '
                    <a href="http://http://localhost/git/GoogleMaps/Mapa,buscarNombre/activar.html?code=' . $code . '">http://localhost/git/GoogleMaps/Mapa,buscarNombre/activar.html?code=' . $code . '</a>
                    O copia el siguiente link en la barra de direcciones de tu navegador:
                    ' . "\n" . '
                    http://localhost/git/GoogleMaps/Mapa,buscarNombre/php/manager/mapToro/activar/code=' . $code;

                    if(send_mail($email, $cuerpo)){
                            $query_state_null = "UPDATE bike_users SET user_state='$code' WHERE user_name='".$name."'";
                            mysqli_query($db,$query_state_null);
                            return "Mensaje de activacion enviado a su bandeja de entrada, ".$result;
                    }else{ 
                        return "Error en phpmailer";
                    }
                }
                else
                    echo "Error en el insert";
        }

	function logUser($email,$password){
		global $db;
		$query = "SELECT user_name FROM bike_users WHERE user_email='$email' and user_password='$password'";
		$result = mysqli_query($db,$query);
		$row = mysqli_fetch_array($result);
		return $row['user_name'];
	}
        
        function activateUser($code){
                global $db;
		$query = "SELECT * FROM bike_users WHERE user_state='$code'";
		$result = mysqli_query($db,$query);
                if($result) 
                    $row = mysqli_fetch_array($result);
                    $query_state_ok = "UPDATE bike_users SET user_state='activate' WHERE user_name='".$row['user_name']."'";
                    mysqli_query($db,$query_state_ok);
                    return $row['user_name']." ha sido activado.";
        }

        function createToken(){
            return sha1(mt_rand() . time() . mt_rand() . $_SERVER['REMOTE_ADDR']);
        }
        //insertUser('test','test','test');
        
	
?>