import React from "react";
import NavBar from "./navbar/navbar.js";


class Header extends React.Component{
        render(){
            return (
                <div className="header jumbotron col-lg-12 img-responsive">
                <NavBar />
                
                <h1 className="title">Scuba Sound</h1>
                
                <span className="slogan"> We don't just listen, we dive in </span>
                
                </div>

            )

        }

}


export default Header;