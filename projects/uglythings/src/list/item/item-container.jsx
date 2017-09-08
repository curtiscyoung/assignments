import React, { Component } from 'react';
import ItemComponent from "./item-component.jsx";

class ItemContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggled: false,
            inputs: {
                name: props.uglything.name,
                description: props.uglything.description,
                imgUrl: props.uglything.imgUrl 
            }
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleToggle(){
        this.setState((prevState) =>{
            return {
                toggled: !prevState.toggled
            }
        })
    }
    
    handleEdit = (e) => {
        e.preventDefault();
        this.props.editThing(this.props.index, this.state.inputs)
    }

    handleDelete = (e) => {
        e.preventDefault();
        this.props.deleteThing(this.props.index)
    }
    
    
    handleInput(e){
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name] : e.target.value
                }
            }
        })
    }
    
    
    render() {
        return (
        
        <ItemComponent  handleEdit={this.handleEdit} handleToggle={this.handleToggle} thing={this.props.uglything} deleteThing={this.props.deleteThing} handleInput={this.handleInput}inputs={this.state.inputs} index={this.props.index} toggled={this.state.toggled}/>
            
        );
    }
}

export default ItemContainer;