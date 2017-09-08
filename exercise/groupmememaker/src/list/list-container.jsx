import React, { Component } from 'react';
import { loadData } from "../redux/actions/actions.jsx"
import { connect } from "react-redux"

class ListContainer extends Component {
    
    componentWillMount(){
        this.props.loadData();
    }
    
    
    render() {
        return (
            <ListComponent memes={this.props.memes} />
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, { loadData })(ListContainer);