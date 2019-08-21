import React, { Component } from 'react'

export class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      tabIndex: 0,
      color: ''
    }
  }
  componentDidMount () {
    console.log(this.props)
  }
  bian (index, color) {
    this.setState({
      tabIndex: index,
      color
    })
  }
  addCar (obj) {
    if (obj.color != this.props.product.sku_info[this.state.tabIndex].spec_json.show_name) {
      obj.color = this.props.product.sku_info[this.state.tabIndex].spec_json.show_name;
      obj.name = this.props.product.name;
      obj.price = this.props.product.price;
      obj.num = 1;
      obj.img = this.props.product.sku_info[this.state.tabIndex].ali_image;
      this.props.s(obj)

    } else {
      obj.num = ++obj.num
    }

    console.log(obj)
  }

  render () {
    return (
      <div className="lm">
        <div>
          <img src={this.props.product.sku_info[this.state.tabIndex].ali_image} alt="" />
        </div>
        <div className="name_title">
          {this.props.product.name}
        </div>
        <div className="name_na">
          {this.props.product.name_title}
        </div>
        <div className="price">
          {this.props.product.price}
        </div>
        <div className="but">
          {
            this.props.product.sku_info.map((i, index) => {
              return (
                <button onClick={() => this.bian(index)} key={index}> {i.spec_json.show_name}</button>
              )
            })
          }
        </div>
        <button className="jia" onClick={() => { this.addCar(this.props.product) }}>加入购物车</button>
      </div >
    )
  }
}

export default List
