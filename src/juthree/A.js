import React, { Component } from 'react'
import B from "./B"
import C from "./C"

export class A extends Component {
  render () {
    return (
      <div>
        <B></B>
        <C></C>
      </div>
    )
  }
}

export default A
