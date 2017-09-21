import React, { Component } from 'react';
import {Link} from "react-router-dom";

class SideBar extends Component {
    render() {
        return (
            <div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/languages">Languages</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        );
    }
}

export default SideBar;