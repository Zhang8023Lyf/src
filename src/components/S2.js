import React, { Component } from 'react'

export class S2 extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }
  render () {
    return (
      <div>
        <button onClick={this.Ev.bind(this)}>-</button>
      </div>
    )
  }
  Ev () {
    this.props.yyy(1)
  }
}

export default S2
