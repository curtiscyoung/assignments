import React, { Component } from 'react';

class FormComponent extends Component {
    render() {
        return (
            <div>
            <h2> Post an Ugly Thing!! </h2>
            <form onSubmit={this.props.handleSubmit}>
            <input value={this.props.name} onInput={this.props.handleInput} name="name" type="text" placeholder="name"/>
            <input value={this.props.description} onInput={this.props.handleInput} name="description" type="text" placeholder="description"/>
            <input value={this.props.imgUrl} onInput={this.props.handleInput} name="imgUrl" type="text" placeholder="imgUrl"/>
            <button type="submit">SUBMIT</button>
            </form>
            </div>
        );
    }
}

export default FormComponent;