import React, { Component } from 'react';
import { postReview } from "../../redux/actions/actions.js";
import { connect } from "react-redux";
import FormComponent from "./form-component.js";


class FormContainer extends Component {
    constructor(){
        super()
        this.state = {
            type: "",
            author: "",
            artist: "",
            songName: "",
            albumName:"",
            review: "",
            rating: "",
            imgUrl:"",
            amazonLink: "",
            youtubeLink: "" 
        }
    
    }

    handleInput = (e) =>{
        e.persist();
            this.setState({
                [e.target.name] : e.target.value
            })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.postReview(this.state);
        this.clearInputs();
    }

    clearInputs(){
        this.setState((prevState) =>{
            return {
                type: "",
                author: "",
                artist: "",
                songName: "",
                albumName:"",
                review: "",
                rating: "",
                imgUrl:"",
                amazonLink: "",
                youtubeLink: "" 
            }
        })
    }
    
    render() {
        return (
            <div>
                <FormComponent handleSubmit={this.handleSubmit} handleInput={this.handleInput} {...this.state}/>
            </div>
        );
    }
}

const mapStateToProps = function(state){
    return state
}

export default connect(mapStateToProps, { postReview })(FormContainer);