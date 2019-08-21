import React, { Component } from 'react'
import Axios from "axios"

export class Size extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }
  componentDidMount () {
    fetch('./cart.json', {
      method: "GET",

    })
      .then(response => response.json())
      .then(res => {
        console.log(res.products)
        this.setState({ list: res.products })
        console.log(this.state.list)

      })
  }
  render () {
    return (
      <div className="car">
        <h2>Size:</h2>
        <div>
          {
            this.state.list.map((i, index) => {

              return (
                <span key={index}>
                  <button>{i.availableSizes[0]}</button>
                </span>

              )
            })
          }
        </div>

      </div>
    )
  }
}

export default Size
