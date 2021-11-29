<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
include "../connectToDB.php";

$mysqli = connectToDB();
$JSONData = file_get_contents("php://input");
$dataObject = json_decode($JSONData);
session_start();
$mysqli->set_charset('utf8');

$user = $dataObject->user;
$password = $dataObject->key;

if ($result = $mysqli->prepare("SELECT users.login as login, users.password as password, users.name as name, 
                                             users.surname as surname, users.group_name as group_name, users.id as user_id, 
                                             roles.role as role, roles.description as role_description, roles.id as role_id 
                                      FROM users 
                                      INNER JOIN roles ON users.id_role = roles.id WHERE login = ?")) {
    $result->bind_param('s', $user);
    $result->execute();
    $get_result = $result->get_result();
    if ($get_result->num_rows == 1) {
        $data = $get_result->fetch_assoc();
        $data_key = $data['password'];
        if (password_verify($password, $data_key)) {
            $json = json_encode(array('connect' => true, 'login' => $data['login'], 'name' => $data['name'],
                'surname' => $data['surname'], 'group_name' => $data['group_name'], 'user_id' => $data['user_id'], 'id_role' => $data['role_id'], 'role' => $data['role']));
            $_SESSION['user'] = "qwewqe";
            echo $json;
        } else {

            echo json_encode(array('connect' => false, 'error' => 'Wrong password or login!'));
        }
    } else {
        echo json_encode(array('connect' => false, 'error' => 'Wrong password or login!'));
    }
    $result->close();
} else {
    echo json_encode(array('connect' => false, 'error' => 'Error connect!'));
}
$mysqli->close();
