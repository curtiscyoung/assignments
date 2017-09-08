import React, { Component } from 'react';
import { loadData } from "../redux/actions/actions.jsx";
import { connect } from "react-redux";
import ListComponent from "./list-component.jsx";


class ListContainer extends Component {
    componentWillMount(){
        this.props.loadData();
    }
    
    
    render() {
        return (
            <ListComponent todos={this.props.todos} />
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}



export default connect(mapStateToProps, {loadData})(ListContainer);