<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
include "../connectToDB.php";

$mysqli = connectToDB();

$mysqli->set_charset('utf8');


$stages = array();
$questions = array();
$answers = array();
$animations = array();


$result = $mysqli->query("SELECT * FROM uk_stages");
while($row = $result->fetch_assoc()){
    array_push($stages, ['id' => $row['id'], 'stage' => $row['stage'], 'state_stages' => $row['state_stage']]);
}

$result = $mysqli->query("SELECT * FROM uk_questions");
while($row = $result->fetch_assoc()){
    array_push($questions, ['id' => $row['id'], 'text_question' => $row['text_question'], 'stage_uk_id' => $row['stage_uk_id']]);
}

$result = $mysqli->query("SELECT * FROM uk_answers");
while($row = $result->fetch_assoc()){
    array_push($answers, ['id' => $row['id'], 'text_answer' => $row['text_answer'],
        'status' => $row['status'], 'question_uk_id' => $row['question_uk_id'], 'stage_uk_id' => $row['stage_uk_id'], 'next_stage_uk_id' => $row['next_stage_uk_id']]);
}

$result = $mysqli->query("SELECT * FROM animations");
while($row = $result->fetch_assoc()){
    array_push($animations, ['id' => $row['id'], 'name_file' => $row['name_file'],
        'stage_uk_id' => $row['stage_uk_id']]);
}

$json = [
    "stages" => $stages,
    "questions" => $questions,
    "answers" => $answers,
    "animations" => $animations
];
echo json_encode($json);

$mysqli->close();
