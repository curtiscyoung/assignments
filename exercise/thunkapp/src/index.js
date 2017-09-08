import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app.jsx"
import mainReducer  from "./main/redux/reducers/reducers.jsx";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware} from "redux"

let store = createStore(mainReducer, applyMiddleware(thunk));




ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));