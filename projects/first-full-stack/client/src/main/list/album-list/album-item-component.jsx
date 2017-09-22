import React, { Component } from 'react';
import {Link} from "react-router-dom";

class AlbumItemComponent extends Component {
    
    render() {
        return (
            <div className="albumCover">
               <div className="nameAndArtist">
               <p className="albumName">{this.props.album.albumName}</p>
               <p>{this.props.album.artist}</p>
               </div>
               <Link to={`/album/${this.props.id}`}><img className="albumItem" src={this.props.album.imgUrl} alt="album cover"/></Link>
               
            </div>
        );
    }
}

export default AlbumItemComponent;