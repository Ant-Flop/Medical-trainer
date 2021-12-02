import React from "react";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import {useSelector} from "react-redux";
import moment from "moment";

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
            answers: []
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
        if(progressStudentData.status === "result"){
            progressStudentData.result.user_id = localStorage.getItem("user_id");
            progressStudentData.result.testResult = progressStudentData.progress[progressStudentData.progress.length - 1].current_stage_name;
            progressStudentData.result.stage_id = progressStudentData.progress[progressStudentData.progress.length - 1].current_stage_id;
            progressStudentData.result.datetime = moment().format("DD-MM-YYYY hh:mm:ss");
            localStorage.setItem('route-student', 'test-result');
        }
        props.rerender();
    }
    const itemButton = (id, text, nextStageId) => {
        return (<Button id={id} key={id} onClick={itemButtonClick.bind(this, nextStageId)}>{text}</Button>)
    }
    const itemsButtonArray = props.progress.answers.map(button => itemButton(button.answer_id, button.answer_text, button.next_stage_id))

    return (
        <div>
            <Divider variant="fullWidth"/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup variant="text" aria-label="text button group">
                    {itemsButtonArray}
                </ButtonGroup>
            </Box>
            <Divider variant="fullWidth"/>
        </div>
    )
}