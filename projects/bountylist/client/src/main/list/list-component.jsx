import React, { Component } from 'react';
import ItemContainer from "../list/item/item-container.jsx"

class ListComponent extends Component {
    genBounties(){
        return this.props.bounties.map((bounty, index) =>{
            return <ItemContainer bounty={bounty} key={index} />
        })
    }
    
    render() {
        return (
            <div>
                {this.genBounties()}
            </div>
        );
    }
}

export default ListComponent;