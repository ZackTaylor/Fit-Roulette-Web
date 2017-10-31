import React, { Component } from 'react';
import TopBar from './TopBar';
import TimerContainer from '../containers/TimerContainer';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <div className="container" />
        <TimerContainer />
      </div>
    );
  }
}

export default App;
