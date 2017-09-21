import React, { Component } from 'react';
import { loadTrack } from "../../../redux/actions/actions.js";
import { connect } from "react-redux";
import TrackReview from "./track-review.js"


class TrackReviewContainer extends Component {
    componentWillMount(){
        this.props.loadTrack(this.props.match.params.id)
    
    }
    render() {
        return (
            <div>
                <TrackReview track={this.props.currentTrack}/>
            </div>
        );
    }
}

const mapStateToProps = function(state){
    return state
}

export default connect(mapStateToProps, { loadTrack })(TrackReviewContainer);
