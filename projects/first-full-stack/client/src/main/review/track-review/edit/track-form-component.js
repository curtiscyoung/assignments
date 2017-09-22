import React, { Component } from 'react';

class TrackFormComponent extends Component {
    render() {
        return (
            <div>
            <form onSubmit={this.props.handleSubmit} className="post" action="">
                    <textarea onChange={this.props.handleInput} value={this.props.inputs.review} name="review" id="" cols="100" rows="20"></textarea>
                    <div><input onChange={this.props.handleInput} value={this.props.inputs.type} name="type" type="text" /></div>
                    <div><input onChange={this.props.handleInput} value={this.props.inputs.author} name="author" type="text" /></div>
                    <div><input onChange={this.props.handleInput} value={this.props.inputs.artist} name="artist" type="text" /></div>
                    <div><input onChange={this.props.handleInput} value={this.props.inputs.songName} name="songName" type="text" /></div>
                    <div><input onChange={this.props.handleInput} value={this.props.inputs.albumName} name="albumName" type="text" /></div>
                    <div><input onChange={this.props.handleInput} value={this.props.inputs.imgUrl} name="imgUrl" type="text" /></div>
                    <div><input onChange={this.props.handleInput} value={this.props.inputs.amazonLink} name="amazonLink" type="text" /></div>
                    <div><input onChange={this.props.handleInput} value={this.props.inputs.youtubeLink} name="youtubeLink" type="text" /></div>
                    <div><input onChange={this.props.handleInput} value={this.props.inputs.rating} name="rating" type="text" /></div>
                <button type="submit">UPDATE</button>
                <button onClick={this.props.handleDelete}>REMOVE</button>
            </form> 
            </div>
        );
    }
}

export default TrackFormComponent;