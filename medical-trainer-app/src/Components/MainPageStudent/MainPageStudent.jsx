import React, {useState} from "react";
import {Container} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import {useDispatch, useSelector} from "react-redux";
import {updateTestData} from "../../redux/reducers/TestDataReducer";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";

const URL_DATA_TEST_UK = "http://u118049.test-handyhost.ru/rest-full-api/test-data/test-data-uk.php";
const URL_STATUS_ATTEMPT = "http://u118049.test-handyhost.ru/rest-full-api/test-data/status-attempt.php";

const checkStatusAttempt = async (jsonId) => {
    const response = await fetch(URL_STATUS_ATTEMPT, {
        method: 'POST',
        body: JSON.stringify(jsonId),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    return await response.json();
}

export const MainPageStudent = (props) => {
    const dispatch = useDispatch();
    const [info, setInfo] = useState(null);
    const startTest = () => {
        const jsonId = {
            "user_id": localStorage.getItem("user_id")
        }
        let attempt_test = "false";
        checkStatusAttempt(jsonId).then(resp => {
            attempt_test = resp.attempt_test;
            if(attempt_test === "true"){
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
            else if(attempt_test === "false") {
                setInfo(attempt_test);
            }
        });


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
                    </Button><p/>

                    {info &&
                    <Alert severity="info">Закінчились спроби пройти тест</Alert>}
                </Box>
            </Container>
        </>
    )
}