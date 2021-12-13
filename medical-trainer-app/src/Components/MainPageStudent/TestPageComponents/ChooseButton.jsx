import React from "react";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import {useSelector} from "react-redux";
import moment from "moment";
import Paper from "@mui/material/Paper";

const URL_SAVE_TEST_RESULT = "http://u118049.test-handyhost.ru/rest-full-api/test-data/save-test-result.php";

const saveTestResult =  (testResult) => {
    fetch(URL_SAVE_TEST_RESULT, {
        method: 'POST',
        body: JSON.stringify(testResult),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(r => r);
}

export const ChooseButton = (props) => {
    const progressStudentData = useSelector(state => state.progressStudentTest);
    const testData = useSelector(state => state.testData);
    const itemButtonClick = (nextStageId) => {
        let nameStage = "";
        let nameQuestion = "";
        let idQuestion = "";
        let stageStatus = "";
        for (let i = 0; i < testData.data.stages.length; i++) {
            if (testData.data.stages[i].id === nextStageId) {
                nameStage = testData.data.stages[i].stage;
                stageStatus = testData.data.stages[i].state_stages;
                break;
            }
        }
        for (let i = 0; i < testData.data.questions.length; i++) {
            if (testData.data.questions[i].stage_uk_id === nextStageId) {
                nameQuestion = testData.data.questions[i].text_question;
                idQuestion = testData.data.questions[i].id;
                break;
            }
        }
        let progressCurrentStage = {
            id: progressStudentData.progress.length,
            current_stage_name: nameStage,
            current_stage_id: nextStageId,
            question_text: nameQuestion,
            question_id: idQuestion,
            answers: [],
            animations:[],
        }
        for(let i = 0; i < testData.data.animations.length; i++) {
            let animationsCurrentStage = {
                animation_id: "",
                animation_nameFile: "",
            }
            if(nextStageId === testData.data.animations[i].stage_uk_id) {
                animationsCurrentStage.animation_id = testData.data.animations[i].id;
                animationsCurrentStage.animation_nameFile = testData.data.animations[i].name_file;
                progressCurrentStage.animations.push(animationsCurrentStage);

            }

        }
        for (let i = 0; i < testData.data.answers.length; i++) {
            let answersCurrentStage = {
                answer_id: "",
                answer_text: "",
                answer_status: "",
                current_stage_id: "",
                next_stage_id: "",
                question_id: ""
            }
            if (testData.data.answers[i].stage_uk_id === nextStageId) {
                answersCurrentStage.answer_id = testData.data.answers[i].id;
                answersCurrentStage.answer_text = testData.data.answers[i].text_answer;
                answersCurrentStage.answer_status = testData.data.answers[i].status;
                answersCurrentStage.current_stage_id = testData.data.answers[i].stage_uk_id;
                answersCurrentStage.next_stage_id = testData.data.answers[i].next_stage_uk_id;
                answersCurrentStage.question_id = testData.data.answers[i].question_uk_id;
                progressCurrentStage.answers.push(answersCurrentStage);
            }
        }
        progressStudentData.progress.push(progressCurrentStage);
        progressStudentData.status = stageStatus;
        localStorage.setItem('route-student', 'start-test');
        if (progressStudentData.status === "result") {
            progressStudentData.result.user_id = localStorage.getItem("user_id");
            progressStudentData.result.testResult = progressStudentData.progress[progressStudentData.progress.length - 1].current_stage_name;
            progressStudentData.result.stage_id = progressStudentData.progress[progressStudentData.progress.length - 1].current_stage_id;
            progressStudentData.result.datetime = moment().format("DD-MM-YYYY hh:mm:ss");
            localStorage.setItem('route-student', 'test-result');
            console.log("ez");
            saveTestResult(progressStudentData.result);
        }
        props.rerender();
    }
    const itemButton = (id, text, nextStageId) => {
        return (<Button id={id} key={id} style={{backgroundColor: "#ebeeff"}} onClick={itemButtonClick.bind(this, nextStageId)}>{text}</Button>)
    }
    const itemsButtonArray = props.progress.answers.map(button => itemButton(button.answer_id, button.answer_text, button.next_stage_id))

    return (
        <div>
            <Paper>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 3,
                        alignItems: 'center',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <ButtonGroup  variant="outlined" aria-label="outlined primary button group">
                        {itemsButtonArray}
                    </ButtonGroup>
                </Box>
            </Paper>
        </div>
    )
}