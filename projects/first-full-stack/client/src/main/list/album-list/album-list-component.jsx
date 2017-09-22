import React, { Component } from 'react';
import AlbumItemComponent from "./album-item-component.jsx"

class AlbumListComponent extends Component {
    
    genAlbums(){
        return this.props.albums.map((album, index) =>{
            return <AlbumItemComponent id={album._id} album={album} key={index}/>
        })
    }
    
    render() {
        return (
            <div className="albumList col-xs-5">
              <h3 className="albumReviews">ALBUM REVIEWS</h3>
              {this.genAlbums()}  
            </div>
        );
    }
}

export default AlbumListComponent;