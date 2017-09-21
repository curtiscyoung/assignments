import React, { Component } from 'react';

class ItemComponent extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.bounty.firstName} {this.props.bounty.lastName}</h1>
                    <p>{this.props.bounty.type}</p>
                    <p>{this.props.bounty.living ? "Is Alive" : "Deceased"}</p>
                    <p>{this.props.bounty.bountyAmt}</p>
                <button onClick={this.props.handleDelete}>REMOVE BOUNTY</button>
                <form
                    onSubmit={this.props.handleSubmit}
                    className={this.props.toggled ? "show" : "hide"}>
                    <input
                        onChange={this.props.handleInput}
                        type="text"
                        value={this.props.inputs.firstName}
                        name="firstName"
                        placeholder="first name" />
                    <input
                        onChange={this.props.handleInput}
                        type="text"
                        value={this.props.inputs.lastName}
                        name="lastName"
                        placeholder="last name" />
                    <input
                        onChange={this.props.handleInput}
                        type="checkbox"
                        value={this.props.inputs.living}
                        name="living"
                        placeholder="first name" />
                    <input
                        onChange={this.props.handleInput}
                        type="text"
                        value={this.props.inputs.bountyAmt}
                        name="bountyAmt"
                        placeholder="bounty amount" />
                    <input
                        onChange={this.props.handleInput}
                        type="text"
                        value={this.props.inputs.type}
                        name="type"
                        placeholder="type" />
                    <button type="submit">UPDATE</button>
                </form>
                <button onClick={this.props.handleToggle}>UPDATE BOUNTY</button>

            </div>
        );
    }
}

export default ItemComponent;