import React, { Component } from 'react';

export default class Result extends Component {
  render() {
    return (
      <h2>{this.props.output}</h2>
    )
  }
}