import React, { Component } from 'react';
import ItemContainer from "./item/item-container.jsx";

class ListComponent extends Component {
    
    genUglyThings(){
        return this.props.uglythings.map((thing) =>{
            return <ItemContainer uglything={thing}/>

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