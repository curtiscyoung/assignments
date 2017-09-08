import React, { Component } from 'react';
import * as actionCreators from "../redux/actions/actions.jsx";
import { connect } from "react-redux";
import FormComponent from "./form-component.jsx"


class FormContainer extends Component {
    constructor() {
        super()
        this.state = {
            title: "",
            description: "",
            price: "",
            completed: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput = (e) => {
        e.persist();
        this.setState({
            [e.target.name]: e.target.value
            })
            console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState(() => {
            return {

                title: "",
                description: "",
                price: "",
                completed: false

            }
        })
    }



    render() {
        return (
            <FormComponent
                handleInput={this.handleInput}
                handleSubmit={this.handleSubmit}
                addTodo={this.props.addTodo}
                {...this.state} />
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators)(FormContainer);