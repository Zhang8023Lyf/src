import React, { Component } from 'react'
import Size from "./Size"
import Cart from "./Cart"
import Demo from "./demo"
import Axios from "axios"
import "./index.css"

export class index extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }
  render () {
    return (
      <div>
        <Size></Size>
        <Cart></Cart>
        <Demo></Demo>
      </div>
    )
  }
}

export default index
