import React from "react";
import {MainPageStudent} from "./MainPageStudent/MainPageStudent";
import {MainPageTeacher} from "./MainPageTeacher/MainPageTeacher";
import {Route, Routes} from "react-router";
import {TestPage} from "./MainPageStudent/TestPage";
import {MainPageAdministrator} from "./MainPageAdministrator/MainPageAdministrator";
import {useSelector} from "react-redux";
import {TestResultPage} from "./MainPageStudent/TestResultPage";


export const Routing = (props) => {
    const role = localStorage.getItem('role');

    if (role === "Administrator")
        return <MainPageAdministrator/>
    else if (role === "Teacher")
        return (<MainPageTeacher rerender={props.rerender}/>)
    else if (role === "Student") {
        if (localStorage.getItem("route-student") === "greetings")
            return (<MainPageStudent rerender={props.rerender}/>)
        else if (localStorage.getItem("route-student") === "start-test")
            return (<TestPage rerender={props.rerender}/>);
        else if (localStorage.getItem("route-student") === "test-result")
            return (<TestResultPage/>)
    }
    return <></>

}