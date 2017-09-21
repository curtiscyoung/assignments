import React, { Component } from 'react';

class TrackReview extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div className="review">
                <p>{this.props.track.review}</p>
                <img src={this.props.track.imgUrl} alt="HUMBLE"/>
            </div>
        );
    }
}

export default TrackReview;