import React, { Component } from 'react';
import { PageHeader, Image } from 'react-bootstrap';

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
        <PageHeader>{name}</PageHeader>
        <Image src={image} responsive />
      </div>
    );
  }
}
export default Exercise;
