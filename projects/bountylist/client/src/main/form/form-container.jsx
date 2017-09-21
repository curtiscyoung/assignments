import React, { Component } from 'react';
import * as actionCreators from "../../redux/actions/actions.jsx"
import { connect } from "react-redux"
import FormComponent from "./form-component.jsx";

class FormContainer extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            living: true,
            bountyAmt: 0,
            type: ""
        }
    
    }
    
    handleInput = (e) => {
        e.persist();
            this.setState({
                [e.target.name] : e.target.type === "checkbox" ? e.target.checked : e.target.value
            })
            console.log(this.state);
        }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.postData(this.state)
        this.clearInputs();
    }
    
    clearInputs = (e) =>{
        this.setState((prevState) =>{
            return {
            firstName: "",
            lastName: "",
            living: true,
            bountyAmt: 0,
            type: ""
            }
        })
    }
    
    render() {
        return (
          <FormComponent 
          handleSubmit={this.handleSubmit} 
          handleInput={this.handleInput} 
          {...this.state}/>
        );
    }
}

const mapStateToProps = function(state){
    return state
}

export default connect(mapStateToProps, actionCreators)(FormContainer);