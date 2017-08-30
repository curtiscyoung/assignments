import React, { Component } from 'react';
import Link from "./link.js";

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
        <span> Features </span> <span>Explore</span> <span>Subscriptions</span> <span>Templates</span> <span>Support</span>
            </div>
        );
    }
}

export default NavBar;