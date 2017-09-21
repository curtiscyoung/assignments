import React from "react";
import ReactDOM from "react-dom";
import { mainReducer } from "./redux/reducers/reducers.js";
import App from "./main/app.jsx";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router} from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import "./index.css";

let store = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store = {store}><Router><App /></Router></Provider>, document.getElementById("root"));