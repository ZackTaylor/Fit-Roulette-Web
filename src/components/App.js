import React, { Component } from 'react';
import TopBar from './TopBar';
import TimerContainer from '../containers/TimerContainer';
import ExerciseContainer from '../containers/ExerciseContainer';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <ExerciseContainer />
        <TimerContainer />
      </div>
    );
  }
}

export default App;
