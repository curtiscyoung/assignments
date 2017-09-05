import React, { Component } from 'react';
import * as actionCreators from "../redux/actions/actions.js";
import { connect } from "react-redux";
import WatchComponent from "./watch-component.jsx";



class WatchContainer extends Component {
    constructor() {
        super()
        this.intervalMilliseconds = null;
        this.interval = null;
        this.timer = this.timer.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleMilliseconds = this.handleMilliseconds.bind(this);
        this.handleSecond = this.handleSecond.bind(this);
        this.lapse = false;
    }


    timer() {
        if (this.props.timeOn === false) {
            this.interval = setInterval(() => {
                this.props.start();
            }, 1000)
            this.handleMilliseconds();
        }
    }

    handleSecond() {
        if (this.lapse === true) {
            this.props.subReset();
            clearInterval(this.intervalMilliseconds);
            this.lapse = false;
            this.handleMilliseconds();
        }
    }


    handleMilliseconds() {
        if (this.lapse === false) {
            this.intervalMilliseconds = setInterval(() => {
                this.props.milli();
            }, 10)
            this.handleSecond();
        } else {
            console.log("the timer is running")
        }
    }

    handleStop() {
        clearInterval(this.interval)
        clearInterval(this.intervalMilliseconds);
        this.props.stop();
    }


    handleReset() {
        this.props.reset();
        clearInterval(this.interval);
    }

    render() {
        return (
            <WatchComponent timer={this.timer}
                millisecond={this.props.millisecond}
                counter={this.props.counter}
                start={this.props.start}
                milli={this.props.milli}
                handleReset={this.handleReset}
                handleToggle={this.handleToggle}
                toggled={this.props.toggled}
                handleStop={this.handleStop} />
        );
    }
}

const mapStateToProps = function (state) {
    return state
}



export default connect(mapStateToProps, actionCreators)(WatchContainer);