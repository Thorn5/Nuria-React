import React, { Component } from 'react'

export default class ClickClassBased extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    render() {
    return (
      <div>
        <h2>Click Class Based component</h2>
        <p>You clicked {this.state.count}</p>
        <button onClick={() => this.setState({count: this.state.count + 1}) }>
            Click me
        </button>
    </div>
    )
  }
}
