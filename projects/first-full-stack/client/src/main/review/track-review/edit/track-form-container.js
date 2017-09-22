import React, { Component } from 'react';
import { loadTrack, editReview, deleteReview } from "../../../../redux/actions/actions.js";
import { connect } from "react-redux";
import TrackFormComponent from "./track-form-component.js";

class TrackFormContainer extends Component {
    componentWillMount(){
        this.props.loadTrack(this.props.match.params.id)
    }
    
    constructor(props){
        super(props)
        this.state = {
            inputs: {
                type: props.currentTrack.type,
                author: props.currentTrack.author,
                artist: props.currentTrack.artist,
                songName: props.currentTrack.songName,
                albumName:props.currentTrack.albumName,
                review: props.currentTrack.review,
                rating: props.currentTrack.rating,
                imgUrl: props.currentTrack.imgUrl,
                amazonLink: props.currentTrack.amazonLink,
                youtubeLink: props.currentTrack.youtubeLink 
            }
        }
    
    }

    handleInput = (e) =>{
        e.persist();
            this.setState((prevState) =>{
                return {
                inputs:{
                    ...prevState.inputs,
                    [e.target.name] : e.target.value
                }
            }
        })

    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.editReview(this.props.currentTrack._id, this.state.inputs);
        this.clearInputs();
    }

    handleDelete = (e) =>{
        e.preventDefault();
        this.props.deleteReview(this.props.currentTrack._id)
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
               <TrackFormComponent handleInput={this.handleInput} handleSubmit={this.handleSubmit}  handleDelete={this.handleDelete} {...this.state} /> 
            </div>
        );
    }
}

 const mapStateToProps = function(state){
     return state
 } 



export default connect(mapStateToProps, { loadTrack, editReview, deleteReview })(TrackFormContainer);