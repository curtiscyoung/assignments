import React, { Component } from 'react';
import SideBar from "./sidebar/sidebar";
import { Switch, Route } from "react-router-dom";
import Home from "./home/home.js"

class App extends Component {
    render() {
        return (
            <div>
            <SideBar />    
            <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route path="/projects"></Route>
            <Route path="/contact"></Route>
            <Route path="/languages"></Route>
            <Route path="/about"></Route>

            </Switch>
            
            
            </div>
        );
    }
}

export default App;