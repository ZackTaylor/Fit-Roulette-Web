import React, { Component } from 'react';
import './TopBar.css';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass: 'topnav'
    };
  }

  toggleDropdown = () => {
    this.setState({
      navClass: this.state.navClass === 'topnav' ? 'topnav responsive' : 'topnav'
    });
  };

  render() {
    return (
      <ul className={this.state.navClass} id="myTopnav">
        <li>
          <a>Fit Roulette</a>
        </li>
        <li>
          <a>Take A Spin</a>
        </li>
        <li className="icon">
          <a onClick={this.toggleDropdown}>☰</a>
        </li>
      </ul>
    );
  }
}

export default TopBar;
