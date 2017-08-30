import React, { Component } from 'react';
import ListComponent from "./list-component"

class ListContainer extends Component {
    render() {
        return (
            <ListComponent uglythings={this.props.uglythings}/>            
            
        );
    }
}

export default ListContainer;