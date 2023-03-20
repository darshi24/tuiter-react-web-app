import React from "react";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import TuitsList from "../tuits/tuits-list";
import tuits from "../tuits/tuits-reducer"
import WhatsHappening from "./whats-happening";
const store = configureStore({reducer : tuits});

const ReduxHomeComponent = () => {
    return(

        <div>
            <WhatsHappening/>
            <TuitsList/>
        </div>


    )
}

export default ReduxHomeComponent