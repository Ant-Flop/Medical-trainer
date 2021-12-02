import React from "react";
import {Button} from "@mui/material";
import {useSelector} from "react-redux";
import Box from "@mui/material/Box";

export const TestResultPage = () => {
    const progressStudent = useSelector(state => state.progressStudentTest);

    const toMainPage = () => {
        localStorage.setItem('route-student', 'greetings');
        window.location.reload();
    }
    console.log()
    return (
        <div>
            <Box>{progressStudent.result.testResult}</Box>
            <Button onClick={toMainPage}>До початку</Button>
        </div>
    )
}