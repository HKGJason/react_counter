import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {number: 0}
  render() {
    return (
      <div>
        <button onClick={()=>{this.setState({number: this.state.number+1})}}>Hello world!</button>
        <span>number: {this.state.number}</span>
	  </div>
    );
  }
}

export default App;
