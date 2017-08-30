import React, { Component } from 'react';

class FormComponent extends Component {
    render() {
        return (
            <div>
            <h2> Post an Ugly Thing!! </h2>
            <form action="">
            <input type="text" placeholder="name"/>
            <input type="text" placeholder="description"/>
            <input type="text" placeholder="imgUrl"/>
            </form>
            </div>
        );
    }
}

export default FormComponent;