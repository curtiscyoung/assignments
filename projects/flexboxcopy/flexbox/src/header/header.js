import React, { Component } from 'react';
import NavBar from "./navbar.js";

class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
            <div className="row">
            <div className="header col-md-12">
                <img src="http://logos-download.com/wp-content/uploads/2016/05/Wix_logo.png"/>
                <NavBar />
            </div>
             </div>  
            </div>
        );
    }
}

export default Header;