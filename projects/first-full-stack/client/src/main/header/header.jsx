import React, { Component } from 'react';
import NavBar from "../header/navbar/navbar.js"


class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="header col-xs-12">
                        <NavBar />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;