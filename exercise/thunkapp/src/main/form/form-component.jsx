import React, { Component } from 'react';

class FormComponent extends Component {
    render() {
        
        return (
            <div>
            <form onSubmit={this.props.handleSubmit}>
            <input onChange={this.props.handleInput} value={this.props.title} name="title"placeholder="title" type=""/>
            <input onChange={this.props.handleInput} value={this.props.description}  name="description" placeholder="description" type="text"/>
            <input onChange={this.props.handleInput} value={this.props.price}name="price" placeholder="price" type="text"/>
            <input name="completed" type="checkbox"/>
            <button type="submit"></button>
            </form>
            </div>
        );
    }
}

export default FormComponent;