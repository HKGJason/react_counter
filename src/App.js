import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './components/Number.js';
import Line from './components/Line.js';

class App extends Component {
	
	updateNum = () =>{
		let newNum = this.props.onClickWho(this.state.number)
		this.setState({number: newNum})
	}
	
	state = {number: 1}
  render() {
    return (
      <div>
        <button onClick={this.updateNum}>Hello world!</button>
		<Number /><span>{this.state.number}</span>
	    {Array(this.state.number).fill(1).map(() =><Line/>)}
	  </div>
    );
  }
}

export default App;
