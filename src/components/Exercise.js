import React, { Component } from 'react';
import { PageHeader, Image } from 'react-bootstrap';

import './Exercise.css';

class Exercise extends Component {
  componentWillMount() {
    this.props.getExercises();
  }

  render() {
    let name = 'Loading...';
    let random = this.props.exercises.random;
    if (this.props.exercises.all[random]) {
      name = this.props.exercises.all[random].name;
    }
    return (
      <div className="text-center container">
        <PageHeader>{name}</PageHeader>
        <Image
          src="https://media1.popsugar-assets.com/files/thumbor/I-yF8sY1H5bd-T2h_ODLMl6wFfc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/02/20/992/n/1922729/d4fbc3fb8807a95e_3._Jumping-Jacks/i/Jumping-Jacks.jpg"
          responsive
        />
      </div>
    );
  }
}
export default Exercise;
