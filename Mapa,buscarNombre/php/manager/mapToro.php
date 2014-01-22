<?php

require("../../lib/toro/toro.php");
require("mysqlFunctions.php");
require "send_mail.php";

header('Content-Type: application/json; charset=utf-8');

class InsertUser {
	function post(){
            insertUser($_POST['name'],$_POST['email'],$_POST['password']);
        }
}

class LogUser{
  function post(){
    echo logUser($_POST['email'],$_POST['password']);
  }
}

class ActivateUser{
  function get(){
    echo activateUser($code);
  }
}
Toro::serve(array(
    "/insertUser" => "InsertUser",
    "/logUser" => "LogUser",
    "/activar/:string" => "ActivateUser"
));

?>
