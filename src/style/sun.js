import React, { Component } from 'react'
import Father from "./father"
export class sun extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <Father>
          <h2>组件A传递的H2标签</h2>
          <p>组件A传递的P标签</p>
        </Father>
      </div>
    )
  }
}

export default sun
