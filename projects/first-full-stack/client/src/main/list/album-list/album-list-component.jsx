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
            <div className="albumList">
              {this.genAlbums()}  
            </div>
        );
    }
}

export default AlbumListComponent;