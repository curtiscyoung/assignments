import React, { Component } from 'react';

class FormComponent extends Component {
    render() {
        return (
            <div>
            <form onSubmit={this.props.handleSubmit} className ="post" action="review-text">
            <textarea onChange={this.props.handleInput} value={this.props.review} name="review" id="" cols="100" rows="20"></textarea>
            <div><input onChange={this.props.handleInput} value={this.props.type} placeholder="type"  name="type" type="text"/></div>
            <div><input onChange={this.props.handleInput} value={this.props.author} placeholder="author"   name="author" type="text"/></div>
            <div><input onChange={this.props.handleInput} value={this.props.artist} placeholder="artist"   name="artist" type="text"/></div>
            <div><input onChange={this.props.handleInput} value={this.props.songName} placeholder="songName"   name="songName" type="text"/></div>
            <div><input onChange={this.props.handleInput} value={this.props.albumName} placeholder="albumName"   name="albumName" type="text"/></div>
            <div><input onChange={this.props.handleInput} value={this.props.imgUrl} placeholder="imgUrl"   name="imgUrl" type="text"/></div>
            <div><input onChange={this.props.handleInput} value={this.props.amazonLink} placeholder="amazonLink"   name="amazonLink" type="text"/></div>
            <div><input onChange={this.props.handleInput} value={this.props.youtubeLink} placeholder="youtubeLink"   name="youtubeLink" type="text"/></div>
            <div><input onChange={this.props.handleInput} value={this.props.rating} placeholder="rating"   name="rating" type="text"/></div>
            <button type="submit">POST</button>
            </form>
                
            </div>
        );
    }
}

export default FormComponent;