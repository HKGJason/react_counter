import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
  <button onClick={()=>{alert("now you know how to handle onclick event")}}>Hello world!</button>
		<span>number: 0</span>
	  </div>
    );
  }
}

export default App;
