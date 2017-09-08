import React, { Component } from 'react';
import ItemContainer from "./item/item-container.jsx";

class ListComponent extends Component {
    
    genTodos(){
        return this.props.todos.map((todo, index) =>{
            return <ItemContainer todo={todo} key={index + todo.title} />
        })
    }
    
    render() {
        return (
            <div>
            {this.genTodos()}
            </div>
        );
    }
}

export default ListComponent;