import React, { Component } from 'react';
import { loadData } from "../../redux/actions/actions.js"
import {connect} from "react-redux"
import AlbumListComponent from "./album-list/album-list-component.jsx";
import TrackListComponent from "./track-list/track-list-component.jsx";


class ListContainer extends Component {
    componentWillMount(){
        this.props.loadData()
    }
    
    filterReviews(type){
        return this.props.reviews.filter((review) =>{
            return review.type === type
        })
    }
    render() {
        return (
            <div className="lists container-fluid">
                <div className="row">
                <AlbumListComponent albums={this.filterReviews("album")} />
                <TrackListComponent tracks={this.filterReviews("track")}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(state){
    return state
}

export default connect(mapStateToProps, {loadData})(ListContainer)