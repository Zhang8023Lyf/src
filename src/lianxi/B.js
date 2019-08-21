import React, { Component } from 'react'
import C from "./C"
import D from "./D"

export class B extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount () {
    // console.log(this.props)
  }
  render () {
    return (
      <div>
        <C></C>
        <D></D>
      </div>
    )
  }
}

export default B
