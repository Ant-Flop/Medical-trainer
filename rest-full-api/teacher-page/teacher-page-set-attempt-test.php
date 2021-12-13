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
$data = array();

if($user_id != null){
    $query = "UPDATE `users` SET `attempt_test` = 'true' WHERE `users`.`id` = '$user_id'";
    $mysqli->query($query);

    $result = $mysqli->query("SELECT * FROM users WHERE id_role = 3");
    while($row = $result->fetch_assoc()){
        array_push($data, ['id' => $row['id'], 'login' => $row['login'], 'name' => $row['name'],
            'surname' => $row['surname'], 'group' => $row['group_name'],
            'attempt' => $row['attempt_test'], 'statusAccount' => $row['status_account']]);
    }

    $json = [
        "teacherFirstData" => $data,
    ];
    echo json_encode($json);
}

$mysqli->close();