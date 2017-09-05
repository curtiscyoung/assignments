import React, { Component } from 'react';
import ItemContainer from "./item/item-container.jsx";

class ListComponent extends Component {
    
    genUglyThings(){
        return this.props.uglythings.map((thing, index) =>{
            return <ItemContainer key={index + thing.name}index={index} editThing={this.props.editThing} deleteThing={this.props.deleteThing}  uglything={thing}/>

        })


    }
    
    
    render() {
        return (
            <div>
            {this.genUglyThings()}
            </div>
        );
    }
}

export default ListComponent;