import React, { Component } from 'react'
import Axios from "axios"

export class Cart extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount () {
    fetch('./cart.json', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },

    })
      .then(response => response.json())
      .then(data => {

        this.setState({ list: data })

      })
  }
  render () {
    return (
      <div>
        购物车
      </div>
    )
  }
}

export default Cart
