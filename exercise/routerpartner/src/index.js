import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app.jsx";
import { mainReducer } from "./redux/reducers/reducers.jsx"
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css"


ReactDOM.render(<Provider><Router><App /></Router></Provider>, document.getElementById("root"));



