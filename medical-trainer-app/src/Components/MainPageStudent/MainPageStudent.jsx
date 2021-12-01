import React from "react";
import {Container} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";



export const MainPageStudent = () => {

    const startTest = () => {
        localStorage.setItem('route-student', '1');
        //window.location.assign('http://localhost:3000/test-start');
        window.location.reload();
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