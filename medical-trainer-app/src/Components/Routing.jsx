import React from "react";
import {MainPageStudent} from "./MainPageStudent/MainPageStudent";
import {MainPageTeacher} from "./MainPageTeacher/MainPageTeacher";
import {Route, Routes} from "react-router";
import {TestPage} from "./MainPageStudent/TestPage";


export const Routing = (props) => {
    const role = localStorage.getItem('role');
    console.log(localStorage.getItem("route-student"));


    if (role === "Administrator")
        return <MainPageStudent/>
    else if (role === "Teacher")
        return (<MainPageTeacher/>)
    else if (role === "Student") {
        if (localStorage.getItem("route-student") === "greetings")
            return (<MainPageStudent state={props.state}/>)
        else if (localStorage.getItem("route-student") === "start-test")
            return (<Routes><Route path="/test-start" element={<TestPage/>}/></Routes>);
    }
    return <></>

}