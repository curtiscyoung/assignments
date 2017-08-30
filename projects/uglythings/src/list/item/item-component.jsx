import React, { Component } from 'react';

class ItemComponent extends Component {
    render() {
        return (
            <div>
            <h1>{this.props.thing.name}</h1>



            </div>
                
        
        );
    }
}

export default ItemComponent;