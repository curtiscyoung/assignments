import React, { Component } from 'react';
import TrackItemComponent from "./track-item-component.jsx"

class TrackListComponent extends Component {
    genTracks(){
        return this.props.tracks.map((track, index) =>{
            return <TrackItemComponent id={track._id} track={track} key={index}/>
        })
    }
    
    render() {
        return (
            <div className="trackList">
                {this.genTracks()}
            </div>
        );
    }
}

export default TrackListComponent;