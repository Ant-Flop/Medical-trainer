import React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";

export const Question = (props) => {
    return (
        <div>
            <Paper variant="outlined">
                <div style={{padding: 5}}>
                    <h4 style={{fontFamily: "inherit", fontWeight: 500}}>{props.questionText}</h4>
                </div>
            </Paper>
        </div>
    )
}