import * as React from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useRef, useState} from "react";
import Alert from "@mui/material/Alert";

const URL_LOGIN = "http://u118049.test-handyhost.ru/rest-full-api/sign-In-Up/sign-Up.php";

const sendData = async (url, data) => {
    console.log(data)
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    return await response.json();
}

export default function SignUp() {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const refLogin = useRef(null);
    const refName = useRef(null);
    const refSurname = useRef(null);
    const refGroup = useRef(null);
    const refKey= useRef(null);

    const handleSignUp = async () => {
        const data = {
            "login": refLogin.current.value,
            "name": refName.current.value,
            "surname": refSurname.current.value,
            "group": refGroup.current.value,
            "key": refKey.current.value,
        }

        const requestJson = await sendData(URL_LOGIN, data).then();

        refLogin.current.value = null;
        refName.current.value = null;
        refSurname.current.value = null;
        refGroup.current.value = null;
        refKey.current.value = null;
        setError(requestJson.error);
        setSuccess(requestJson.success)
    }

    return (
        <>
            <Box component="form" sx={{ mt: 1 }}>
                {success &&
                <Alert severity="success">{success}</Alert>}
                {error &&
                <Alert severity="error">{error}</Alert>}
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    style={{maxWidth: 400}}
                    id="login"
                    label="Логін"
                    name="login"
                    autoComplete="login"
                    inputRef={refLogin}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    style={{maxWidth: 400}}
                    id="name"
                    label="Ім'я"
                    name="name"
                    autoComplete="name"
                    inputRef={refName}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    style={{maxWidth: 400}}
                    id="surname"
                    label="Прізвище"
                    name="surname"
                    autoComplete="surname"
                    inputRef={refSurname}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    style={{maxWidth: 400}}
                    id="group"
                    label="Група"
                    name="group"
                    autoComplete="group"
                    inputRef={refGroup}
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
                <Button
                    /*type="submit"*/
                    onClick={handleSignUp}
                    fullWidth
                    style={{maxWidth: 400}}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Зареєструватись
                </Button>
            </Box>
            </>

    );
}