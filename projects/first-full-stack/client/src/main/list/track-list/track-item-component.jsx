import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TrackItemComponent extends Component {
    render() {
        return (
            <div>
               <Link to={`/track/${this.props.id}`}><h1>{this.props.track.artist}</h1></Link> 
            </div>
        );
    }
}

export default TrackItemComponent;