<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
include "../connectToDB.php";

$mysqli = connectToDB();
$JSONData = file_get_contents("php://input");
$dataObject = json_decode($JSONData);
$mysqli->set_charset('utf8');

$user_id = $dataObject->user_id;


if ($result = $mysqli->prepare("SELECT attempt_test FROM users WHERE id = ?")) {
    $result->bind_param('s', $user_id);
    $result->execute();
    $get_result = $result->get_result();
    if ($get_result->num_rows == 1) {
        $data = $get_result->fetch_assoc();
        echo json_encode(array('attempt_test' => $data['attempt_test']));
    }
    $result->close();
} else {
    echo json_encode(array('attempt_test' => 'false'));
}
$mysqli->close();