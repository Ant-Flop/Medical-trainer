import React from "react";
import {Container} from "@mui/material";
import {StackStages} from "./TestPageComponents/StagesStack";
import {ChooseButton} from "./TestPageComponents/ChooseButton";
import {Header} from "./TestPageComponents/Header";
import {Question} from "./TestPageComponents/Question";
import {Animation} from "./TestPageComponents/Animation";
import {useDispatch, useSelector} from "react-redux";
import {getTestData, updateTestData} from "../../redux/reducers/TestDataReducer";

const URL_DATA_TEST_UK = "http://localhost/medical-trainer/rest-full-api/test-data/test-data-uk.php";

export const TestPage = () => {
    localStorage.setItem('route-student', 'greetings');
    const value = useSelector(state => state.testData)
    console.log(value.data.stages)
    return (
        <Container fixed>
            <StackStages />
            <Header/>
            <Animation/>
            <Question />
            <ChooseButton/>
        </Container>
    )
}