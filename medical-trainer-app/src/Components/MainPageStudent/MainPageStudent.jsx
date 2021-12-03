import React from "react";
import {Container} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import {useDispatch, useSelector} from "react-redux";
import {updateTestData} from "../../redux/reducers/TestDataReducer";
import Paper from "@mui/material/Paper";

const URL_DATA_TEST_UK = "http://localhost/medical-trainer/rest-full-api/test-data/test-data-uk.php";

export const MainPageStudent = (props) => {
    const dispatch = useDispatch();
    const startTest = () => {
        localStorage.setItem('route-student', 'start-test');
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
            dispatch(updateTestData(data));
            props.rerender();
        })
    }

    return (
        <>
            <Container fixed>
                <Box sx={{height: '90vh'}}>
                    <Box sx={{height: '10vh'}} style={{minHeight: 80}}><h2 style={{
                        fontFamily: "system-ui",
                        color: "#242c5c"
                    }}>Вітаємо тебе любий друже !</h2></Box>
                    <Divider variant="middle"/>
                    <Paper style={{minHeight: 100}}>
                        <Box sx={{height: '10vh'}}><p>Пропонуємо тоб перевірити свої
                            знання з дисципліни
                            "Дитячі інфекційні хвороби" та допомгти перемогти хворобу за допомогою набутих тобою
                            знань.</p>
                        </Box>
                    </Paper>
                    <p/>
                    <Divider variant="middle"/>
                    <Paper style={{minHeight: 100}}>
                        <Box sx={{height: '10vh'}}><p>Використовуючи навички та
                            вміння, користуючись симптомами, обери вірні кроки для подолання стадій
                            хвороби,
                            обираючи вірні засоби та методи лікування. Але пам'ятай - хибні методи призведуть до
                            трагедії!
                            Хай
                            щастить!</p></Box>
                    </Paper>
                    <Button variant="contained" style={{margin: "15px 0 0 0 ", backgroundColor: "#414c93"}}
                            onClick={startTest} disableElevation>
                        Розпочати
                    </Button>
                </Box>
            </Container>
        </>
    )
}