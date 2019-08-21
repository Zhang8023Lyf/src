import React, { Component } from 'react'

export class list extends Component {
  constructor() {
    super()
    this.state = {
      list: [
        { item: "宝马", price: "200000" },
        { item: "奔驰", price: "600000" },
        { item: "网吧", price: "100000" }
      ],
      tabIndex: 1
    }

  }
  handleClick (index) {
    this.setState({
      tabIndex: index
    })
  }
  render () {

    return (
      <div>
        <h1>渲染</h1>
        <ul>
          {this.state.list.map((item, index) => {
            if (item.price > 400000) {
              return (
                <li style={{ "backgroundColor": index == this.state.tabIndex ? "red" : "" }} key={index} onClick={this.handleClick.bind(this, index)}>
                  <span>{index}</span>
                  <span>品牌：{item.title}</span>
                  <span>价格：{item.price}</span>
                </li>
              )
            }

          })}
        </ul>
      </div>
    )
  }
}

export default list
