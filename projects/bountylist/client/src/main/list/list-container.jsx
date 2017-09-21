import React, { Component } from 'react';
import { loadData } from "../../redux/actions/actions.jsx";
import ListComponent from "./list-component.jsx";
import {connect} from "react-redux";

class ListContainer extends Component {
    componentWillMount(){
        this.props.loadData();
    }    
    render() {
        return (
           <ListComponent bounties={this.props.bounties}  />
        );
    }
}

const mapStateToProps = function(state){
    return state
}

export default connect(mapStateToProps, { loadData })(ListContainer)