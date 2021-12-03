import React from "react";
import {AppBar, Toolbar} from "@mui/material";
import {makeStyles} from '@material-ui/styles';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {AccountCircle} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


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
        handleClose();
        localStorage.clear();
        window.location.reload();

    }
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const name = localStorage.getItem("name") === null ? " " : localStorage.getItem("name");
    const displayDesktop = () => {
        return(
            <Toolbar variant="h6" component="h1" className={toolbar}>
                <div>{Logo}</div>
                <div>
                    <text style={{fontSize: 20}}>{name}</text>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={Exit}>Exit</MenuItem>

                    </Menu>
                </div>
                {/*<Button className={menuButton} style={{backgroundColor: "#fff"}} onClick={Exit}>Exit</Button>*/}
            </Toolbar>
        )
    }

    return(
            <AppBar position="static" className={header}>
                {displayDesktop()}
            </AppBar>
    )
}