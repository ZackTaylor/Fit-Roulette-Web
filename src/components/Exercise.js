import React, { Component } from 'react';

import './Exercise.css';

class Exercise extends Component {
  componentWillMount() {
    this.props.getExercises();
  }

  render() {
    let name = 'Loading...';
    let image;
    let random = this.props.exercises.random;
    if (this.props.exercises.all[random]) {
      name = this.props.exercises.all[random].name;
      image = this.props.exercises.all[random].image;
    }
    return (
      <div className="text-center container">
        <h1 className="display-1">{name}</h1>
        <img src={image} alt={name} />
      </div>
    );
  }
}
export default Exercise;
