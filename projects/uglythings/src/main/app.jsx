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
                 imgUrl: "http://lastangryfan.com/wp-content/uploads/2009/10/brad_childress.jpg"

                },
                {
                name: "Jeff",
                description: "wretched little thing, curses too often",
                imgUrl: "http://lastangryfan.com/wp-content/uploads/2009/10/brad_childress.jpg"  

                },
                {
                name: "Richard",
                description: "wretched little thing, curses too often",
                imgUrl: "http://lastangryfan.com/wp-content/uploads/2009/10/brad_childress.jpg"

                }


            ]

        }
        this.postThing = this.postThing.bind(this);
        this.deleteThing = this.deleteThing.bind(this);
        this.editThing = this.editThing.bind(this);
    
    }

    editThing = (index, editeditem) => {
        this.setState((prevState) =>{
            let newThings = [...prevState.uglythings]
            newThings[index] = editeditem;
                return {
                    uglythings: newThings
                }

        })
    }    
    
    deleteThing = (index) => {
        this.setState((prevState) =>{
            let newThing = [...prevState.uglythings]
            newThing.splice(index, 1);
            return {
                uglythings : newThing
            }

        })
    }
    
    postThing(newThing){
        this.setState((prevState) => {
            let newThings = [...prevState.uglythings, newThing]
            return {uglythings: newThings};

        })
    }

    render() {
        return (
            <div>
              <Header />
              <FormContainer postThing={this.postThing} /> 
              <ListContainer {...this.state} deleteThing={this.deleteThing} editThing={this.editThing} /> 
            </div>
        );
    }
}

export default App;