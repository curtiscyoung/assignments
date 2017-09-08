import React, { Component } from 'react';
import * as actionCreators from "../../redux/actions/actions.jsx";

class ItemContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputs: {
                meme: props.item.meme,
                imgUrl: props.item.imgUrl
            }
        }
}


    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ItemContainer;