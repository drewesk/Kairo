import React, { Component } from 'react';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      strikes: 0
    }
  }

  increment() {
    let j = Math.random(1200) * 2;
    if (this.state.strikes < 95) {
      this.setState({
        strikes: this.state.strikes += j
      })
    }
  }

  componentDidMount() {
    setInterval(this.increment.bind(this), 50);
  }

  render(){
    return (
      <p className="counter" >Loading: { this.state.strikes }</p>
    );
  }
}
