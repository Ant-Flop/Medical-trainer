import React from "react";
import {Container} from "@mui/material";
import {StackStages} from "./TestPageComponents/StagesStack";
import {ChooseButton} from "./TestPageComponents/ChooseButton";
import {Header} from "./TestPageComponents/Header";
import {Question} from "./TestPageComponents/Question";
import {Animation} from "./TestPageComponents/Animation";
import {useSelector} from "react-redux";


export const TestPage = (props) => {
    localStorage.setItem('route-student', 'greetings');
    const testData = useSelector(state => state.testData);
    const progressStudentData = useSelector(state => state.progressStudentTest);
    const setProgressData = () => {
        if(progressStudentData.progress.length === 1){
            for(let i = 0; i < progressStudentData.progress.length; i++){
                progressStudentData.progress[i].id = i + 1;
                progressStudentData.progress[i].current_stage_id = testData.data.stages[i].id;
                progressStudentData.progress[i].current_stage_name = testData.data.stages[i].stage;
                progressStudentData.progress[i].question_id = testData.data.questions[i].id;
                progressStudentData.progress[i].question_text = testData.data.questions[i].text_question;
                for(let j = 0; j < testData.data.answers.length; j++){
                    let answersCurrentStage = {
                        answer_id: "",
                        answer_text: "",
                        answer_status: "",
                        current_stage_id: "",
                        next_stage_id: "",
                        question_id: ""
                    }
                    if(testData.data.stages[i].id === testData.data.answers[j].stage_uk_id){
                        answersCurrentStage.answer_id = testData.data.answers[j].id;
                        answersCurrentStage.answer_text = testData.data.answers[j].text_answer;
                        answersCurrentStage.answer_status = testData.data.answers[j].status;
                        answersCurrentStage.current_stage_id = testData.data.answers[j].stage_uk_id;
                        answersCurrentStage.next_stage_id = testData.data.answers[j].next_stage_uk_id;
                        answersCurrentStage.question_id = testData.data.answers[j].question_uk_id;
                        progressStudentData.progress[i].answers.push(answersCurrentStage);
                    } else break;

                }


            }
        }

        return progressStudentData.progress[progressStudentData.progress.length - 1];
    }
    const currentProgress = setProgressData();

    return (
        <Container fixed>
            <StackStages />
            <Header/>
            <Animation/>
            <Question questionId={currentProgress.question_id} questionText={currentProgress.question_text}/>
            <ChooseButton progress={currentProgress} rerender={props.rerender}/>
        </Container>
    )
}