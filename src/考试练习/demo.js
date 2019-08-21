import React, { Component } from 'react'
import "./demo.css"
import Listcom from "./Listcom"
import Axios from "axios"


export class demo extends Component {
  constructor() {
    super()
    this.state = {
      msg: 0,
      list: [],
      show: { display: 'none' },
      shopCarArr: [],
      lis: []
    }
  }
  componentDidMount () {
    Axios.get('https://www.easy-mock.com/mock/5c9374ecb8b6271a46e8fae6/goods-list/goods-list')
      .then((res) => {
        // debugger;// 断点
        this.setState({
          list: res.data
          // list2: res.data[0].sku_info
        })
        // console.log(res.data)
      })
  }
  mouseOverHandle () {
    this.setState({
      show: { display: 'block' }
    })
  }
  mouseLiveHandle () {
    setTimeout(() => {
      this.setState({
        show: { display: 'none' }
      })
    }, 1000)
  }
  mo () {
    this.state.shopCarArr.sort((a, b) => {       //sort() 方法用于对数组的元素进行排序,并返回数组。
      return a.id - b.id
    })
    this.setState({
      lis: this.state.shopCarArr
    })
  }
  addCar (obj) {
    this.state.shopCarArr.push(obj);
    this.setState({
      shopCarArr: this.state.shopCarArr
    })
    console.log(this.state.shopCarArr.num)
  }
  render () {
    return (
      <div className="box">

        <div className="header">
          <span onMouseOver={() => { this.mouseOverHandle() }} onMouseLeave={() => { this.mouseLiveHandle() }}>购物车:{this.state.shopCarArr.length}</span>
          <div className="two" style={this.state.show}>
            <ul>
              {this.state.shopCarArr.map((i) => {
                return (
                  <li key={i}>
                    <p><img src={i.img} alt="" /></p>
                    <p>{i.name}</p>
                    <p>价格:{i.price}</p>
                    <p>颜色:{i.color}</p>
                    <p>数量:{i.num}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="qiu">
          <span>综合排序</span>
          <span>价格排序</span>
          <span>价格从低到高</span>
          <span>价格从高到低</span>
        </div>

        <div className="con">
          {this.state.list.map((item, index) => {
            // console.log(item)
            return <Listcom s={(obj) => { this.addCar(obj) }} product={item} key={index}></Listcom>
          })}
        </div>

      </div>
    )
  }
}

export default demo
// https://www.easy-mock.com/mock/5c9374ecb8b6271a46e8fae6/goods-list/goods-list