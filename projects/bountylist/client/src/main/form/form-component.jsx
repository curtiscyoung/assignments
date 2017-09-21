import React, { Component } from 'react';

class FormComponent extends Component {
    
    render() {
        return (
            <div>
            <form onSubmit={this.props.handleSubmit}>
            <input onChange={this.props.handleInput} type="text" value={this.props.firstName}name="firstName" placeholder="first name"/>
            <input onChange={this.props.handleInput} type="text" value={this.props.lastName} name="lastName"placeholder="last name"/>
            <input onChange={this.props.handleInput} type="checkbox" checked={this.props.living }  name="living"/>
            <input onChange={this.props.handleInput} type="text" value={this.props.bountyAmt} name="bountyAmt" placeholder="bounty amount"/>
            <input onChange={this.props.handleInput} type="text" value={this.props.type} name="type" placeholder="type"/>
            <button type="submit">SUBMIT BOUNTY</button>
            
            </form>
            
            </div>
        );
    }
}

export default FormComponent;