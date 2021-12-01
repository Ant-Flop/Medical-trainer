import React from "react";
import {MainPageStudent} from "./MainPageStudent/MainPageStudent";
import {MainPageTeacher} from "./MainPageTeacher/MainPageTeacher";
import {Route, Routes} from "react-router";
import {TestPage} from "./MainPageStudent/TestPage";
import {MainPageAdministrator} from "./MainPageAdministrator/MainPageAdministrator";


export const Routing = () => {
    const role = localStorage.getItem('role');


    if (role === "Administrator")
        return <MainPageAdministrator/>
    else if (role === "Teacher")
        return (<MainPageTeacher/>)
    else if (role === "Student") {
        if (localStorage.getItem("route-student") === "greetings")
            return (<MainPageStudent/>)
        else if (localStorage.getItem("route-student") === "1")
            return (<TestPage/>/*<Routes><Route path="/test-start" element={<TestPage/>}/></Routes>*/);
    }
    return <></>

}