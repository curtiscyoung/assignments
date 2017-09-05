import React, { Component } from 'react';
import ListComponent from "./list-component"

class ListContainer extends Component {
    render() {
        return (
            <ListComponent editThing={this.props.editThing} uglythings={this.props.uglythings} deleteThing={this.props.deleteThing}/>            
            
        );
    }
}

export default ListContainer;