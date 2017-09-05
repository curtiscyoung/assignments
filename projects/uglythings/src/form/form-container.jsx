import React, { Component } from 'react';
import FormComponent from "./form-component.jsx";

class FormContainer extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            description: "",
            imgUrl: ""
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.postThing(this.state);
        this.clearInput();
    }
    
    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    clearInput = () => {
        this.setState({
            
                name: "",
                description: "",
                imgUrl: ""
            })
    }
    
    render() {
        return (
            <FormComponent handleInput={this.handleInput} handleSubmit={this.handleSubmit} {...this.state} />
        );
    }
}

export default FormContainer;