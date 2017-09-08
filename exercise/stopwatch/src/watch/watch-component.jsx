import React, { Component } from 'react';

class WatchComponent extends Component {
    render() {
        return (
            <div>
                <div className="watch">
                <div>
                <h1>{this.props.mins}: </h1>
                </div>
                <div>
                <h1>{this.props.secs}: </h1>
                </div>
                <div>
                <h1>{this.props.mils} </h1>
                </div>
                </div>
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