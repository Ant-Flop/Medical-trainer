import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Container} from "@mui/material";
import {StackStages} from "./TestPageComponents/StagesStack";
import {ChooseButton} from "./TestPageComponents/ChooseButton";
import {Header} from "./TestPageComponents/Header";
import {Question} from "./TestPageComponents/Question";
import {Animation} from "./TestPageComponents/Animation";

export const TestPage = () => {
    return (
        <Container fixed>
            <StackStages/>
            <Header />
            <Animation />
            <Question />
            <ChooseButton />
        </Container>
    )
}