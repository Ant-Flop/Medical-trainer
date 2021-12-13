import * as React from 'react';
import {useRef, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Alert from "@mui/material/Alert";
import {updateTeacherPage} from "../../redux/reducers/TeacherPageReducer";
import {useDispatch, useSelector} from "react-redux";
import {updateTeacherResultTest} from "../../redux/reducers/TeacherResultTestReducer";

const URL_LOGIN = "http://localhost/Medical-trainer/rest-full-api/sign-In-Up/sign-In.php";
const URL_GET_TEACHER_PAGE_DATA = "http://localhost/Medical-trainer/rest-full-api/teacher-page/teacher-page-first-get.php";
const URL_GET_TEACHER_RESULT_TEST_DATA = "http://localhost/Medical-trainer/rest-full-api/teacher-page/teacher-page-result-test-get.php";

const responseTeacherData = () => {
    return fetch(URL_GET_TEACHER_PAGE_DATA, {
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

const responseTeacherResultTestData = () => {
    return fetch(URL_GET_TEACHER_RESULT_TEST_DATA, {
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

const sendData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    //console.log( response)
    return await response.json();
}

export default function SignIn(props) {

    const dispatch = useDispatch();

    const studentData = useSelector(state => state.studentData);
    const [error, setError] = useState(null);

    const refUser = useRef(null);
    const refKey = useRef(null);

    const handleSignIn = async () => {
        const data = {
            "user": refUser.current.value,
            "key": refKey.current.value
        };
        /*console.log(data)*/
        const requestJson = await sendData(URL_LOGIN, data).then();


        responseTeacherData().then((data) => {
            dispatch(updateTeacherPage(data.teacherFirstData));
            localStorage.setItem("teacherFirstData", JSON.stringify(data.teacherFirstData));


        })
        responseTeacherResultTestData().then((data) => {
            dispatch(updateTeacherResultTest(data.teacherResultTestData));
            localStorage.setItem("teacherResultTestData", JSON.stringify(data.teacherResultTestData));
            window.location.reload();
        })

        props.access(requestJson);
        setError(requestJson.error);

    }

    return (
        <Box component="form" sx={{mt: 1}}>
            <TextField
                margin="normal"
                required
                fullWidth
                style={{maxWidth: 400}}
                id="login"
                label="Логін"
                name="login"
                autoComplete="login"
                inputRef={refUser}
                autoFocus

            />
            <TextField
                margin="normal"
                required
                fullWidth
                style={{maxWidth: 400}}
                id="password"
                label="Пароль"
                name="password"
                autoComplete="password"
                type={"password"}
                inputRef={refKey}
                autoFocus
            />


            {error &&
            <Alert severity="error">{error}</Alert>}

            <Button
                /*type="submit"*/
                onClick={handleSignIn}
                fullWidth
                style={{maxWidth: 400}}
                variant="contained"
                sx={{mt: 3, mb: 2}}
            >
                Увійти
            </Button>
        </Box>

    );
}