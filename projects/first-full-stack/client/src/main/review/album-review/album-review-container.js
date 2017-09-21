import React, { Component } from 'react';
import { loadAlbum } from "../../../redux/actions/actions.js";
import { connect } from "react-redux";
import AlbumReview from "./album-review.js";

class AlbumReviewContainer extends Component {
    componentWillMount(){
        this.props.loadAlbum(this.props.match.params.id)
    }
    
    render() {
        return (
            <div>
                <AlbumReview album={this.props.currentAlbum}/>
            </div>
        );
    }
}

const mapStateToProps = function(state){
    return state
}

export default connect(mapStateToProps, { loadAlbum })(AlbumReviewContainer);