import React, { Component } from 'react';

class FormComponent extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input onChange={this.props.handleInput} 
                    name="meme" 
                    type="text" 
                    value={this.props.inputs.meme} 
                    placeholder="meme"/>
                    <input onChange={this.props.handleInput} 
                    name="imgUrl" 
                    type="text" 
                    value={this.props.inputs.imgUrl} 
                    placeholder="imgUrl"/>
                    <button type="submit"></button>
                
                
                </form>
            </div>
        );
    }
}

export default FormComponent;