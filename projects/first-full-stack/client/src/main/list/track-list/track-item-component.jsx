import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TrackItemComponent extends Component {
    render() {
        return (
            <div>
               <Link to={`/track/${this.props.id}`}><p className="track-name">{this.props.track.artist}-{this.props.track.songName}</p></Link> 
            
            </div>
        );
    }
}

export default TrackItemComponent;