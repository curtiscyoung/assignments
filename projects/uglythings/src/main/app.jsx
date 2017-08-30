import React, { Component } from 'react';
import Header from "../header/header.jsx"
import FormContainer from "../form/form-container.jsx";
import ListContainer from "../list/list-container.jsx";

class App extends Component {
    constructor(){
        super();
        this.state = {
            uglythings: [
                {
                 name: "Curtis",
                 description: "wretched little thing, curses too often",
                 imgUrl: ""

                }

            ]

        }
    }

    postThing(){
        
    }

    render() {
        return (
            <div>
              <Header />
              <FormContainer /> 
              <ListContainer uglythings={this.state.uglythings} /> 
            </div>
        );
    }
}

export default App;