<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
include "../connectToDB.php";

$mysqli = connectToDB();

$mysqli->set_charset('utf8');


$data = array();


$result = $mysqli->query("SELECT h.id as id, u.login as login, u.name as name, u.surname as surname, 
                                        u.group_name, h.datetime as date, h.test_result as test_result 
                                        FROM users u JOIN history_results_test h ON u.id = h.user_id WHERE u.id_role = 3");
while($row = $result->fetch_assoc()){
    array_push($data, ['id' => $row['id'], 'login' => $row['login'], 'name' => $row['name'],
        'surname' => $row['surname'], 'group' => $row['group_name'],
        'datetime' => $row['date'], 'resultTest' => $row['test_result']]);
}

$json = [
    "teacherResultTestData" => $data,
];
echo json_encode($json);

$mysqli->close();
