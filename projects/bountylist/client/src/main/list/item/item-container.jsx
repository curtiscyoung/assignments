import React, { Component } from 'react';
import ItemComponent from "./item-component.jsx";
import * as actionCreators from "../../../redux/actions/actions.jsx"
import { connect } from "react-redux";

class ItemContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggled: false,
            inputs: {
                firstName: props.bounty.firstName,
                lastName: props.bounty.lastName,
                living: props.bounty.living,
                bountyAmt: props.bounty.bountyAmt,
                type: props.bounty.type
            }
        }
    }

    handleToggle = () =>{
        this.setState((prevState) =>{
            return {
                toggled: !prevState.toggled
            }
        })
    }
    
    handleDelete = (e) =>{
        e.preventDefault()
        this.props.deleteData(this.props.bounty._id)
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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editData(this.props.bounty._id, this.state.inputs)
        
    }

    clearInputs = () => {
        this.setState({
            inputs: {
                firstName: "",
                lastName: "",
                living: "",
                bountyAmt: "",
                type: ""
            }

        })
    }

    render() {
        return (
            <ItemComponent handleSubmit={this.handleSubmit} handleInput={this.handleInput} handleToggle={this.handleToggle} handleDelete={this.handleDelete} bounty={this.props.bounty} {...this.state} />
        );
    }
}

const mapStateToProps = function(state){
    return state
}

export default connect(mapStateToProps, actionCreators)(ItemContainer)