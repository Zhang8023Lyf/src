import React, { Component } from 'react'
import "./todoli.css"

export default class List extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  changeCheck(){
    let isDone = !this.props.isDone
    this.props.itemChangecheck(this.props.index,isDone)
  }
  deleteList(){
    this.props.deleteTode(this.props.index)
  }
  render() {
    return (
      <div>
        <li className="li">
          <input className="inp" type="checkbox" checked={this.props.isDone} onChange={ this.changeCheck.bind(this) }/>
          <span className="title" >{this.props.value}</span>
          <a type="button" className="del" onClick={this.deleteList.bind(this)}>-</a>
        </li>
      </div>
    )
  }
}
