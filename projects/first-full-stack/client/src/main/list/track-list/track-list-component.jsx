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
            <div className="track-list col-sm-6 col-xs-12">
                <h3 className="track-reviews"> TRACKS </h3>
                <div className="justify">
                {this.genTracks()}
                </div>
            </div>
        );
    }
}

export default TrackListComponent;