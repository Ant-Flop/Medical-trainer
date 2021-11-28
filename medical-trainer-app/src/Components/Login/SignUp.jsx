import * as React from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


export default function SignUp() {

    return (
        <>
            <Box component="form" sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    style={{maxWidth: 400}}
                    id="login"
                    label="Login"
                    name="login"
                    autoComplete="login"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    style={{maxWidth: 400}}
                    id="group"
                    label="Group"
                    name="group"
                    autoComplete="group"
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
                    autoFocus
                />
                <Button
                    type="submit"
                    fullWidth
                    style={{maxWidth: 400}}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
            </Box>
            </>

    );
}