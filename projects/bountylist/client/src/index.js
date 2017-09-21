import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { mainReducer } from "./redux/reducers/reducers.jsx";
import thunk from "redux-thunk";
import App from "./main/app.jsx";
import { createStore, applyMiddleware } from "redux";

let store = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));