import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import VideoPlayer from "react-video-js-player";




export const Animation = (props) => {

    const playAnimation = () => {

            return (
                <video key={props.animations[0].animation_nameFile} width="600" height="400" controls="controls" loop autoPlay>
                    <source src={"http://u118049.test-handyhost.ru/images/" + props.animations[0].animation_nameFile }/>
                </video>
            )
    }

    return (
        <div>
            <Paper id="paper-animation">
                {playAnimation()}
            </Paper>
        </div>)
}