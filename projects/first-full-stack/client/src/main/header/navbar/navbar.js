import React, { Component } from 'react';
import { Link } from "react-router-dom";


class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                
                <div>
                    <p className="title">SCUBA SOUND</p>
                    <img className="icon" src="https://d30y9cdsu7xlg0.cloudfront.net/png/168767-200.png" alt="diver icon" />
                </div>
                    <span><Link to="/">Reviews</Link></span>
                    <span><Link to="/newmusic">New Music</Link></span>
                    <span><Link to="/bestof">Best of</Link></span>
                    <span><Link to="/news">News</Link></span>
            </div>
        );
    }
}

export default NavBar;