import React, { Component } from 'react';
import { Link, Switch, Route } from "react-router-dom";
import Header from "./header/header.jsx";
import Home from "./routes/home.jsx";
import Contact from "./routes/contact.jsx";
import ListContainer from "./content/list-container.jsx"

class App extends Component {
    render() {
        return (
            <div>
            <Header />
            <h1> Welcome to Scuba Sound </h1>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/music" component={ListContainer}></Route>
                <Route path="/contact" component={Contact}></Route>
            </Switch>
            </div>
        );
    }
}

export default App;