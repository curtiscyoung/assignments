import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from "react-bootstrap";
// import { IndexLinkContainer } from "react-router-bootstrap";




class NavBar extends Component {
    // showSettings (event) {
    //     event.preventDefault();
    
    // }
    render() {
        return (
            <div className="navBar">
                <div className="logo">
                    <p className="title">DIVE</p>
                    <img className="icon" src={require("../../images/diverhelmetinverted.png")} alt="diver icon" />
                </div>
                <Link to="/"><span className="navItem">Reviews</span></Link>
                <Link to="/newmusic"> <span className="navItem">Dive In</span></Link>
                <Link to="/bestof">  <span className="navItem">Best of</span></Link>
                <Link to="/news"> <span className="navItem">News</span></Link>
                <Link to="/post"><span className="navItem">Post</span></Link>
                    <span onClick={this.showSettings}></span>
               
            </div>
       
//         <Navbar className="navbar-static-top" inverse collapseOnSelect>
//     <Navbar.Header>
//       <Navbar.Brand>
//         <a href="#">DIVE</a>
//       </Navbar.Brand>
//       <Navbar.Toggle />
//     </Navbar.Header>
//     <Navbar.Collapse>
//       <Nav>
//         <NavItem eventKey={1} href="#">Link</NavItem>
//         <NavItem eventKey={2} href="#">Link</NavItem>
//         <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//           <IndexLinkContainer to="/"><MenuItem eventKey={3.1}>Action</MenuItem></IndexLinkContainer>
//           <MenuItem eventKey={3.2}>Another action</MenuItem>
//           <MenuItem eventKey={3.3}>Something else here</MenuItem>
//           <MenuItem divider />
//           <MenuItem eventKey={3.3}>Separated link</MenuItem>
//         </NavDropdown>
//       </Nav>
//       <Nav pullRight>
//         <NavItem eventKey={1} href="#">Link Right</NavItem>
//         <NavItem eventKey={2} href="#">Link Right</NavItem>
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
 
        
        
        
        );
    }
}

export default NavBar;

// https://d30y9cdsu7xlg0.cloudfront.net/png/168767-200.png