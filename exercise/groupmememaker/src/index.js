import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { mainReducer } from "./redux/reducers/reducers.jsx";
import { createStore } from "redux";
import App from "./app.jsx"

let store = createStore(mainReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"))
