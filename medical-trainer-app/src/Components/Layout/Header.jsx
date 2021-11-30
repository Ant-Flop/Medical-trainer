import React from "react";
import {AppBar, Toolbar} from "@mui/material";
import {makeStyles} from '@material-ui/styles';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const useStyles = makeStyles(() => ({
    header: {
        paddingRight: "79px",
        paddingLeft: "118px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
        backgroundColor: "#353953" + " !important"

    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 500,
        color: "#fff",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 500,
        size: "18px",
        marginLeft: "38px",
        padding: "3px 8px !important"
    },

    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        margin: "6px 20px 6px 20px",
    },

}))

export const Header = () => {
    const { header, logo, menuButton, toolbar} = useStyles();
    const Logo = (<Typography variant="h6" component="h1"
                              className={logo}>Med-quiz</Typography>);
    const Exit = () => {
        localStorage.clear();
        window.location.reload();
    }

    const displayDesktop = () => {
        return(
            <Toolbar variant="h6" component="h1" className={toolbar}>
                <div>{Logo}</div>
                <Button className={menuButton} style={{backgroundColor: "#fff"}} onClick={Exit}>Exit</Button>
            </Toolbar>
        )
    }

    return(
            <AppBar position="static" className={header}>
                {displayDesktop()}
            </AppBar>
    )
}