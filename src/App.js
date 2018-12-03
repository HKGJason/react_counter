import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {number: this.props.number}
  render() {
    return (
      <div>
        <button>Hello world!</button>
        <span>number: {this.state.number}</span>
	  </div>
    );
  }
}

export default App;
