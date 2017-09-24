import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { YouTube } from "react-youtube";

class TrackReview extends Component {
    
    render() {
        const opts = {
            height: '390',
            width: '640',
            autoplay: 1
            }
        return (
            <div className="container">
                <div className="row">
                    <div className="review-header col-xs-12">
                        <div className="image-and-rating">
                        <img className="review-album-image" src={this.props.track.imgUrl} alt="track cover" />
                        <Link to={`/editTrack/${this.props.track._id}`} ><span className="rating">{this.props.track.rating}</span></Link>
                        </div>
                        <h1 className="album-title">{this.props.track.songName}</h1>
                        <h3 className="artist">{this.props.track.artist}</h3>
                    </div>
                    <div className="review col-xs-10 col-xs-offset-1">
                        <p className="review-text">{this.props.track.review}</p>
                        

                         
                    </div>
                </div>
            </div>
        );
    }
}

export default TrackReview;