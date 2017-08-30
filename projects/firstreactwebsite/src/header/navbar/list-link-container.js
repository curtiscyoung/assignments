import React, { Component } from 'react';
import Link from "./link.js";

class LinkListContainer extends Component {
    constructor() {
        super();
        this.links = [
            {
                name: "Home",
                url: ""
            },
            {
                name: "Contact",
                url: ""
            },
            {
                name: "Other Sites",
                url: ""
            }
        ]
    }

    genLinks(){
        return this.links.map((link) => {
           return (<Link link={link}/>)

        })

    }
    render() {
        return (
            <div>
            {this.genLinks()}    
            </div>
        );
    }
}

export default LinkListContainer;