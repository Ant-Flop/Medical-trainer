import React from "react";
import {TabsBar} from "./TabsBar";
import {Container} from "@mui/material";
import "./MainPageTeacher.css";

export const MainPageTeacher = (props) => {

    return(
        <TabsBar rerender={props.rerender}/>
    )
}