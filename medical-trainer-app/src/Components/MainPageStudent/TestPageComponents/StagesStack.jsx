import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import React from "react";
import {makeStyles} from "@mui/styles";

const useStyles= makeStyles(() => ({
    stage: {
        padding: "6px 10px 6px 10px",
        margin: "8px 15px 8px 15px !important",

    },
    divider: {
        margin: "10px 0 15px 0"
    }
}))

export const StackStages = () => {
    const {stage, divider} = useStyles();
    return(
        <div className={divider}>
            <Divider variant="fullWidth"/>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" style={{margin: "0"}} flexItem />}
                spacing={2}
            >
                <Paper className={stage}>Stage 1</Paper><Paper className={stage}>Stage 1</Paper>
            </Stack>
            <Divider variant="fullWidth"/>
        </div>
    )
}