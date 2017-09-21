import React, { Component } from 'react';
import ItemComponent from "./item-component.jsx";

class ItemContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                title: props.todo.title,
                description: props.todo.description,
                price: props.todo.price,


            }
        }
    }

    handleInput = (e) => {
        e.persist();
        this.setState((prevState) => {
                return {
                    inputs: {
                    ...prevState.inputs,
                    [e.target.name] : e.target.value
                }
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editTodo(this.state.inputs, this.props.todo.id)
    }

    render() {
        return (
            <ItemComponent todo={this.props.todo} />
        );
    }
}

export default ItemContainer;