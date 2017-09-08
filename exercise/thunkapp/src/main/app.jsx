import React, { Component } from 'react';
import ListContainer from "./list/list-container.jsx";
import FormContainer from "./form/form-container.jsx";

class App extends Component {
    render() {
        return (
            <div>
            <FormContainer />
            <ListContainer />
            </div>
        );
    }
}

export default App;