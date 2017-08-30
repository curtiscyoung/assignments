import React, { Component } from 'react';

class BlogPost extends Component {
    render() {
        return (
            <div className="container-fluid">
            <div className="wrapper row">
            <div className="blog col-md-8 col-md-offset-2">
            <img src={this.props.post.img} alt="science-fiction"/>
            <h3 className="review-title"> {this.props.post.album}</h3>
            <p className="artist"> {this.props.post.artist}</p>
            <p className="rating">{this.props.post.rating}</p>
            <span className="review">{this.props.post.review}</span>
            
            </div>
            </div>
                
            </div>
        );
    }
}

export default BlogPost;