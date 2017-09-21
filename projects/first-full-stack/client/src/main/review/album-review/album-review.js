import React, { Component } from 'react';

class AlbumReview extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="review">
                {this.props.album.review}
                <img src={this.props.album.imgUrl} alt="science fiction"/>
                <p>{this.props.album.author}</p>
                
            </div>
        );
    }
}

export default AlbumReview;