<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];

function connectToDB(){

  $host = "localhost";
  $user = "root";
  $password = "";
  $bd = "medical-trainer";
  

    $connection = mysqli_connect($host, $user, $password,$bd);

        if($connection){
            echo "";
        }else{
            echo 'Error connect!';
        }

    return $connection;
}

