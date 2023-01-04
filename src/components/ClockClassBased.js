import React, { Component } from 'react'

export default class ClockClassBased extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        console.log('hello component did mount');
        this.timer = setInterval(() => this.tick(), 1000)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

  render() {
    return (
       <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
    )
  }
}
