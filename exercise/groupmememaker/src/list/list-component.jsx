import React, { Component } from 'react';

class ListComponent extends Component {
    
    genMemes(){
        return this.props.items.map((item, index)=>{
            return <ItemContainer item={item} 
            index={index} 
            key={index + item.meme} />
        })
    }
    
    
    render() {
        return (
            <div>
                {this.genMemes()}
            </div>
        );
    }
}

export default ListComponent;