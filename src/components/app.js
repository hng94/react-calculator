import React, { Component } from 'react';
import Display from './display';
import Board from './board';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
            <Display/>
            <Board/>
      </div>
    );
  }
}
