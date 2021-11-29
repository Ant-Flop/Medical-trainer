import React from "react";
import {MainPageStudent} from "./MainPageStudent/MainPageStudent";
import {MainPageTeacher} from "./MainPageTeacher/MainPageTeacher";

export const Routing = () => {
    const role = localStorage.getItem('role');
    if (role === "Administrator")
        return <MainPageStudent/>
    else if (role === "Teacher")
        return (<MainPageTeacher/>)
    else if (role === "Student")
        return (<MainPageStudent/>)
    else return <></>

}