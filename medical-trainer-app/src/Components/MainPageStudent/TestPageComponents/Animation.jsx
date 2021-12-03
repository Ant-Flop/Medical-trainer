import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import VideoPlayer from "react-video-js-player";
const URL_ANIMATION = "http://localhost/medical-trainer/medical-trainer-app/images/000_1.mp4"

export const Animation = (props) => {
    //console.log(props.animations[0]);

    /*const videoItemPlayer = () => {
        for(let i = 0; i < props.animations.length; i++){
            return props.animations[i].animation_nameFile;
        }

    }*/

    //console.log(videoItemPlayer())

    return (
        <div>
            <Paper >
                {/*<VideoPlayer src={URL_ANIMATION} width="400" height="300" loop autoPlay/>*/}
                <video width="400" height="300" controls="controls" loop autoPlay>
                    <source src={URL_ANIMATION} type="video/mp4"/>
                </video>
            </Paper>
        </div>
    )
}