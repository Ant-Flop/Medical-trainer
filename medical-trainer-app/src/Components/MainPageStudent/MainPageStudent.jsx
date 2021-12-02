import React from "react";
import {Container} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import {useDispatch, useSelector} from "react-redux";
import {updateTestData} from "../../redux/reducers/TestDataReducer";

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
                    <Box sx={{height: '10vh'}}><h1>Вітаємо тебе любий друже !</h1></Box>
                    <Divider variant="middle"/>
                    <Box sx={{height: '10vh'}}><p>Пропонуємо тоб перевірити свої
                        знання з дисципліни
                        "Дитячі інфекційні хвороби" та допомгти перемогти хворобу за допомогою набутих тобою знань.</p>
                    </Box>
                    <Divider variant="middle"/>
                    <Box sx={{height: '10vh'}}><p>Використовуючи навички та
                        вміння, користуючись симптомами, обери вірні кроки для подолання стадій
                        хвороби,
                        обираючи вірні засоби та методи лікування. Але пам'ятай - хибні методи призведуть до трагедії!
                        Хай
                        щастить!</p></Box>
                    <Button variant="contained" onClick={startTest} disableElevation>
                        Розпочати
                    </Button>
                </Box>
            </Container>
        </>
    )
}