import React, { Component } from 'react'
import List from "./List.js"
import "./todoli.css"

export default class ListItem extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    itemChangecheck(index,isDone){
        this.props.addChangeCheck(index,isDone)
        
    }
    deleteTode(index){
        this.props.appDeleteTodo(index)
    }
  render() {
    return (
      <div>
        <ul>
            {
            this.props.todos.map((item,index)=>
                <List key={index} index={index} value={item.text} checked={item.isDone} isDone={item.isDone} itemChangecheck = {this.itemChangecheck.bind(this)} deleteTode={this.deleteTode.bind(this)}></List>
            )
            }
        </ul>
      </div>
    )
  }
}
