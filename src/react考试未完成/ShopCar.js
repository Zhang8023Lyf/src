import React, { Component } from 'react'
import Axios from "axios"
import List from "./List"
import Header from "./header"

export class ShopCar extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      // img: B
    }
  }
  componentDidMount () {
    console.log(11)
    Axios.get("./cart.json").then((res) => {
      this.setState({
        list: res.data.products
      })
      console.log(this.state.list)
    })
  }
  getsort () {
    this.state.list.sort(function (a, b) {
      return a.price - b.price
    })
    this.setState({
      list: this.state.list
    })
  }
  selectSize (size) {
    var arr = this.state.list.filter((i) => {
      return i.availableSizes.indexOf(size) != -1
    })
    console.log(arr)
  }
  render () {
    return (
      <div>
        <div>
          <Header mySize={(size) => { this.selectSize(size) }}></Header>
        </div>
        <List ListData={this.state.list}></List>
      </div>
    )
  }
}

export default ShopCar
