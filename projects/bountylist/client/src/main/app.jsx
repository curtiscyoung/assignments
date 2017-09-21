import React, { Component } from 'react';
import FormContainer from "../main/form/form-container";
import ListContainer from "./list/list-container.jsx";
import Header from "../main/header/header.jsx";
class App extends Component {
    render() {
        return (
            <div className="content">
            <Header />
            <div>
            <FormContainer />
            <ListContainer />
            </div>
            </div>
        );
    }
}

export default App;