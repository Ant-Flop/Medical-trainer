import * as React from 'react';
import {useRef, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Alert from "@mui/material/Alert";

const URL_LOGIN = "http://localhost/Medical-trainer/rest-full-api/sign-In-Up/sign-In.php";


const sendData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    /*console.log( response)*/
    return await response.json();
}

export default function SignIn(props) {
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
        /*console.log(requestJson);console.log(requestJson.connect);*/

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
                label="Login"
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
                label="Password"
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
                Sign In
            </Button>
        </Box>

    );
}