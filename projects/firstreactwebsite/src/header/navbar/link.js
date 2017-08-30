import React, { Component } from 'react';


class Link extends Component {
    render() {
        return (<a href={this.props.link.url}><p className="nav">{this.props.link.name}</p> </a>  );
    }
}

export default Link;