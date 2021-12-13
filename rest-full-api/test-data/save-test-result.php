<?php
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
include "../connectToDB.php";

$mysqli = connectToDB();
$JSONData = file_get_contents("php://input");
$dataObject = json_decode($JSONData);
$mysqli->set_charset('utf8');

$user_id = $dataObject->user_id;
$stage_id = $dataObject->stage_id;
$test_result = $dataObject->testResult;
$datetime = $dataObject->datetime;
if($user_id != null && $stage_id != null && $test_result != null && $datetime != null){
    $query = "INSERT INTO history_results_test (datetime, test_result, user_id, stage_id)
              VALUES ('$datetime', '$test_result', '$user_id', '$stage_id')";
    $mysqli->query($query);
    $query = "UPDATE `users` SET `attempt_test` = 'false' WHERE `users`.`id` = '$user_id'";
    $mysqli->query($query);
}
