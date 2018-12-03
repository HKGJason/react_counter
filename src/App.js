import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	
	updateNum = () =>{
		let newNum = this.props.onClickWho(this.state.number)
		this.setState({number: newNum})
	}
	
	state = {number: 1}
  render() {
    return (
      <div>
        <button  onClick={this.updateNum}>Hello world!</button>
		<span>number: {this.state.number}</span>
	  </div>
    );
  }
}

export default App;
