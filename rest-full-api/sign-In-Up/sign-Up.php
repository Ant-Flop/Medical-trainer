<?php
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
include "../connectToDB.php";

$mysqli = connectToDB();
$JSONData = file_get_contents("php://input");
$dataObject = json_decode($JSONData);
$mysqli->set_charset('utf8');

$login = $dataObject->login;
$name = $dataObject->name;
$surname = $dataObject->surname;
$group = $dataObject->group;
$password = password_hash($dataObject->key, PASSWORD_DEFAULT);

if($login == null || $name == null || $surname == null || $group == null || $password == null)
    echo json_encode(array('error' => 'Incorrect data entered!'));
else {
    echo json_encode(array('success' => 'Success Sign-Up, Congrats!'));
    $query = "INSERT INTO users (login, name, surname, group_name, password, id_role, attempt_test, status_account)
              VALUES ('$login', '$name', '$surname', '$group', '$password', 3, 'true', 'false')";
    $mysqli->query($query);
}
	



	
