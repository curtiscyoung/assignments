import React, { Component } from 'react';
import FormComponent from "./form-component.jsx";
import { postItem } from "../redux/actions/actions.jsx";
import { connect } from "react-redux";

class FormContainer extends Component {
    constructor() {
        super()
        this.state = {
            inputs: {
                meme: "",
                imgUrl: ""
            }
        }
    }

    handleInput = (e) => {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    clearInputs = () => {
        this.setState(() =>{
            return {
                inputs: {
                    meme: "",
                    imgUrl: ""
                }
            }
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.postItem(this.state.inputs)
        this.clearInputs();
    }

    render() {
        return (
            <FormComponent 
            handleSubmit={this.handleSubmit} 
            handleInput={this.handleInput} 
            inputs={this.state.inputs} />
        );
    }
}



export default connect(null, { postItem })(FormContainer);