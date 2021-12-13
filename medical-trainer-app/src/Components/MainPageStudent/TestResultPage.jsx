import React from "react";
import {Button, Paper} from "@mui/material";
import {useSelector} from "react-redux";
import Box from "@mui/material/Box";

export const TestResultPage = () => {
    const progressStudent = useSelector(state => state.progressStudentTest);

    const toMainPage = () => {
        localStorage.setItem('route-student', 'greetings');
        window.location.reload();
    }
    return (
        <div style={{padding: "50px 0 0 0"}}>
            <Paper style={{minHeight: 100, padding: "10px 0 0 0"}} variant="elevation">
                <Box><h3>Результат</h3></Box>
            </Paper>
            <Paper style={{minHeight: 100, padding: "10px 0 0 0"}} variant="elevation">
                <Box>{progressStudent.result.testResult}</Box>
            </Paper>
            <Paper style={{minHeight: 100, padding: "20px 0 0 0"}} variant="outlined"  >
                <Button onClick={toMainPage} variant="contained">До початку</Button>
            </Paper>
        </div>
    )
}