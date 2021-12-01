import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Container} from "@mui/material";
import {StackStages} from "./TestPageComponents/StagesStack";
import {ChooseButton} from "./TestPageComponents/ChooseButton";
import {Header} from "./TestPageComponents/Header";
import {Question} from "./TestPageComponents/Question";
import {Animation} from "./TestPageComponents/Animation";
import {useSelector} from "react-redux";

const URL_DATA_TEST_UK = "http://localhost/medical-trainer/rest-full-api/test-data/test-data-uk.php";

export const TestPage = () => {
    const state = useSelector(state => state);

    const responseDataTest = () => {
        return fetch(URL_DATA_TEST_UK, {
            method: "POST",
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({action: 1})
        })
            .then((response) => {
                return response.json().then((data) => {
                    return data;
                })
            })


    }
    responseDataTest().then((data) => {
        /*console.log(data.stages);
        console.log(data.questions);
        console.log(data.answers);*/
    })



    return (
        <Container fixed>
            <StackStages/>
            <Header/>
            <Animation/>
            <Question/>
            <ChooseButton/>
        </Container>
    )
}