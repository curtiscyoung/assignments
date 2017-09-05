import React, { Component } from 'react';

class ItemComponent extends Component {
    render() {
        return (
            <div>
            <h1>{this.props.thing.name}</h1>
            <p>{this.props.thing.description}</p>
            <img src={this.props.thing.imgUrl} alt=""/>
            <button onClick={()=>{this.props.deleteThing(this.props.index)}}>DELETE</button>
            <button onClick={this.props.handleToggle}>EDIT</button>
            <form onSubmit={this.props.handleEdit} className={this.props.toggled ? "show" : "hide"}>
            <input onChange={this.props.handleInput} value={this.props.inputs.name}type="text" name="name"/>
            <input onChange={this.props.handleInput} value={this.props.inputs.description}type="text" name="description"/>
            <input onChange={this.props.handleInput} value={this.props.inputs.imgUrl}type="text" name="imgUrl"/>
            <button type="submit">SUBMIT</button>
            
            </form>
            </div>
                
        
        );
    }
}

export default ItemComponent;