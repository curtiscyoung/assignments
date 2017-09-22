import React, { Component } from 'react';

class AlbumFormComponent extends Component {
    render() {
        return (
        <div>
            <form onSubmit={this.props.handleSubmit} className="post" action="">
                    <textarea onChange={this.props.handleInput} value={this.props.inputs.review} name="review" id="" cols="100" rows="20"></textarea>
                    <div><input onChange={this.props.handleInput} value={this.props.inputs.type} name="type" type="text" /></div>
                    <div><input onChange={this.props.handleInput} value={this.props.inputs.author} name="author" type="text" /></div>
                    <div><input onChange={this.props.handleInput} value={this.props.inputs.artist} name="artist" type="text" /></div>
                    <div><input onChange={this.props.handleInput} value={this.props.inputs.songName} placeholder="songName" name="songName" type="text" /></div>
                    <div><input onChange={this.props.handleInput} value={this.props.inputs.albumName} placeholder="albumName" name="albumName" type="text" /></div>
                    <div><input onChange={this.props.handleInput} value={this.props.inputs.imgUrl} placeholder="imgUrl" name="imgUrl" type="text" /></div>
                    <div><input onChange={this.props.handleInput} value={this.props.inputs.amazonLink} placeholder="amazonLink" name="amazonLink" type="text" /></div>
                    <div><input onChange={this.props.handleInput} value={this.props.inputs.youtubeLink} placeholder="youtubeLink" name="youtubeLink" type="text" /></div>
                    <div><input onChange={this.props.handleInput} value={this.props.inputs.rating} placeholder="rating" name="rating" type="text" /></div>
                <button type="submit">UPDATE</button>
                <button onClick={this.props.handleDelete}>REMOVE</button>
            </form>
    </div>
        );
    }
}

export default AlbumFormComponent;