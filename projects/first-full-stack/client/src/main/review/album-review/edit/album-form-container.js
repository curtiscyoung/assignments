import React, { Component } from 'react';
import { loadAlbum, editReview, deleteReview } from "../../../../redux/actions/actions.js";
import { connect } from "react-redux";
import AlbumFormComponent from "./album-form-component.js"

class AlbumFormContainer extends Component {
    componentWillMount(){
        this.props.loadAlbum(this.props.match.params.id)
    }
    
    constructor(props){
        super(props)
        this.state = {
            inputs: {
                type: props.currentAlbum.type,
                author: props.currentAlbum.author,
                artist: props.currentAlbum.artist,
                songName: props.currentAlbum.songName,
                albumName:props.currentAlbum.albumName,
                review: props.currentAlbum.review,
                rating: props.currentAlbum.rating,
                imgUrl: props.currentAlbum.imgUrl,
                amazonLink: props.currentAlbum.amazonLink,
                youtubeLink: props.currentAlbum.youtubeLink 
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
        this.props.editReview(this.props.currentAlbum._id, this.state.inputs);
        this.clearInputs();
    }

    handleDelete = (e) =>{
        e.preventDefault();
        this.props.deleteReview(this.props.currentAlbum._id)
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
        console.log(this.props);
        return (
            <div>
                <AlbumFormComponent handleInput={this.handleInput} handleSubmit={this.handleSubmit} handleDelete={this.handleDelete} {...this.state} />
            </div>
        );
    }
}

const mapStateToProps = function(state){
    return state
    
}

export default connect(mapStateToProps, { loadAlbum, editReview, deleteReview })(AlbumFormContainer);