import React, { Component } from 'react';

class WatchComponent extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
                <div className="buttons">
                <button className={this.props.toggled ? "show" : "hide"} onClick={this.props.timer}>START</button>
                <button onClick={this.props.handleReset}>RESET</button>
                <button onClick={this.props.handleStop}>STOP</button>
                </div>
            </div>
        );
    }
}

export default WatchComponent;