import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app"
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux"
import { mainReducer } from "./redux/reducers/reducers.js";
import { middleWare, thunk } from "./"
import "./index.css";

ReactDOM.render(<Provider><Router><App /></Router></Provider>, document.getElementById("root"));

