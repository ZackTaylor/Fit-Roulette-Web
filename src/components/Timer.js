import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import './Timer.css';

class Timer extends Component {
  handleClick = () => {
    this.props.togglePause();
  };

  handleComplete = () => {
    this.props.restartTimer();
  };

  render() {
    return (
      <div className="timer-wrapper">
        <ReactCountdownClock
          seconds={this.props.timer.seconds}
          color="#00aaea"
          alpha={0.9}
          size={150}
          paused={this.props.timer.paused}
          fontSize={this.props.timer.fontSize}
          pausedText={'▐▐ '}
          onClick={this.handleClick}
          onComplete={this.handleComplete}
        />
      </div>
    );
  }
}
export default Timer;
