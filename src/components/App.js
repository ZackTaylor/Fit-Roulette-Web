import React, { Component } from 'react';
import TopBar from './TopBar';
class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <div className="container" />
      </div>
    );
  }
}

export default App;
