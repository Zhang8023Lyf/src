import React, { Component } from 'react'
import "./todoli.css"

export default class Input extends Component {
    constructor(props){
        super(props)
        this.state={

        }
            
        
    }
    handleSubmit(e){
        var val=this.textInput.value
        console.log(val)
        if(!val){
            alert("请输入代办事件")
            e.preventDefault();//阻止刷新
            return false
        }

        let newTodo = {
            text:val,
            isDone:false
        }

        this.props.addTodoinput(newTodo);
        this.textInput.value="";
        e.preventDefault();//阻止刷新

    }
  render() {
    return (
      <div>
          <div className="center1">
              <form onSubmit={this.handleSubmit.bind(this)}>
                  <label className="Todolist">Todolist</label>
                  <input className="inout" type="text" placeholder="请输入代办事件" id="todoInput" ref={(input)=>{this.textInput=input}}/>
              </form>
          </div>
      </div>
    )
  }
}
