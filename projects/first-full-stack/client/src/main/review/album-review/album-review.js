import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AlbumReview extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="review-header col-xs-12">
                        <div className="image-and-rating">
                        <img className="review-album-image" src={this.props.album.imgUrl} alt="album cover" />
                        <Link to={`/editAlbum/${this.props.album._id}`}><span className="rating">{this.props.album.rating}</span></Link>
                        </div>
                        <h1 className="album-title">{this.props.album.albumName}</h1>
                        <h3 className="artist">{this.props.album.artist}</h3>
                    </div>
                    <div className="review col-xs-10 col-xs-offset-1">
                        <p className="review-text">{this.props.album.review}</p>
                        

                    </div>
                </div>
            </div>
        );
    }
}

export default AlbumReview;