import React, { Component } from 'react'
import Input from "./Input"
import ListItem from "./ListItem"
import "./todoli.css"


export default class Allfather extends Component {
    constructor(props){
        super(props)
        this.state={
            todos:[],
            todosDoing:[],
            todosDong:[],  
        }
    }

    addTodo(newTodo){
        this.state.todos.push(newTodo);
        this.state.todosDoing.push(newTodo)
        this.setState({
            todos:this.state.todos,
            todosDoing:this.state.todosDoing 
        })
        // console.log(this.state.todos)
    }
    appChangeCheckDoing(index,isDone){
        this.state.todosDoing[index].isDone=isDone;
        this.setState({
            todosDoing:this.state.todos.filter(function(n){
                return n.isDone==false
            }),
            todosDong:this.state.todos.filter(function(n){
                return n.isDone==true
            }),
            
        })
    }   

    deleteTodoDoing(index){
        this.state.todosDoing.splice(index,1);
        this.state.todos = [...this.state.todosDoing,...this.state.todosDong]
        this.setState({
            todosDoing:this.state.todosDoing,
            todosDong:this.state.todosDong
        })
    }
    appChangeCheckDong(index,isDone){
        this.state.todosDong[index].isDone=isDone;
        this.setState({
            todosDoing:this.state.todos.filter(function(n){
                return n.isDone==false
            }),
            todosDong:this.state.todos.filter(function(n){
                return n.isDone==true
            }),
            
        })
    }
    deleteTodoDong(index){
        this.state.todosDong.splice(index,1);
        this.state.todos = [...this.state.todosDoing,...this.state.todosDong]
        this.setState({
            todosDoing:this.state.todosDoing,
            todosDong:this.state.todosDong
        })
    }



  render() {
    const lengthTodoDoing = this.state.todosDoing.length
    const lengthTodoDong = this.state.todosDong.length

    return (
      <div>
          <div className="header">
          <Input addTodoinput={this.addTodo.bind(this)} ></Input>
          </div>
          <div className="center">
              <h2>正在进行：<span className="count">{lengthTodoDoing}</span></h2>
              <ListItem  todos={this.state.todosDoing } addChangeCheck={this.appChangeCheckDoing.bind(this)} appDeleteTodo={this.deleteTodoDoing.bind(this)}></ListItem>              
              <h2>已经完成：<span className="count">{lengthTodoDong}</span></h2>
              <ListItem  todos={this.state.todosDong } addChangeCheck={this.appChangeCheckDong.bind(this)} appDeleteTodo={this.deleteTodoDong.bind(this)}></ListItem>              
          </div>
      </div>
    )
  }
}
