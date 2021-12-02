import React from "react";
import Divider from "@mui/material/Divider";

export const Question = (props) => {
    return (
        <><Divider variant="fullWidth"/>
            {props.questionText}
            <Divider variant="fullWidth"/></>
    )
}