import React from 'react';
export default class B extends React.Component { // React.Component react修饰器 来创建react对象
  constructor() {
    super();
    this.state = {
      val: 'hello',
      bool: true,
      selectList: [1, 2, 3, 4],
      seleVal: ''
    }
  }

  render () {
    return (
      <div>
        <input type="text" value={this.state.val} onChange={(e) => { this.handleChange(e) }} />
        <input type="checkbox" checked={this.state.bool} onChange={() => { this.handleCk() }} />

        <select onChange={(e) => { this.selectHandle(e) }}>
          {
            this.state.selectList.map((item, index) => {
              return (
                <option key={index} value={item}>{item}</option>
              )
            })
          }

        </select>
        <span>选择了{this.state.seleVal}</span>
      </div>
    )
  }
  selectHandle (e) {
    this.setState({
      seleVal: e.target.value
    })
    // e.target.value
  }
  handleCk () {
    this.setState({
      bool: !this.state.bool
    })
  }
  handleChange (e) {
    this.setState({
      val: e.target.value
    })
  }
}