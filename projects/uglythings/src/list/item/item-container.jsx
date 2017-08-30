import React, { Component } from 'react';
import ItemComponent from "./item-component.jsx";

class ItemContainer extends Component {
    render() {
        return (
            <div>
                <ItemComponent thing={this.props.uglything} />
            </div>
        );
    }
}

export default ItemContainer;