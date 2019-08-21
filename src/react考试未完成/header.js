import React, { Component } from 'react'

export class header extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  selectSize (e) {
    this.props.mySize(e.target.inneHTML.toUpperCase())
  }
  render () {
    return (
      <div>
        <ul onClick={(e) => { this.selectSize(e) }}>
          <li>xs</li>
          <li>s</li>
          <li>m</li>
          <li>ml</li>
          <li>l</li>
          <li>xl</li>
          <li>xxl</li>
        </ul>
      </div>
    )
  }
}

export default header
