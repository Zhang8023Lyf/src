import React from 'react';
import "./index.css"
import { connect } from 'react-redux';  // connect 用来给组件注册方法
import { bindActionCreators } from 'redux'; // 绑定action的方法
import * as EventAction from '../redux/action/index'; // 倒入写好的 action
class A extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: '',
      n: 0
    }
  }
  componentDidMount () {
    this.setState({
      n: this.props.data.Data.n
    })
  }
  add () {
    console.log(this.props.data.Data.n)
    this.props.EventAction.add(1)

    this.setState({
      n: this.props.data.Data.n
    })

  }
  del () {
    console.log(this.props.data.Data.n)
    this.props.EventAction.del(1)

    this.setState({
      n: this.props.data.Data.n
    })

  }

  render () {
    return (
      <div>
        <h1>A</h1>
        <div>reduct 数据{this.props.data.Data.n}</div>
        <button onClick={() => { this.add() }}>+</button>
        <button onClick={() => { this.del() }}>-</button>
      </div>
    )
  }
}

//将 redux 数据引入props
function mapStateToProps (state) {
  return {
    data: state
  }
}
//将action方法引入props
function mapDispatchToProps (dispatch) {
  return {
    EventAction: bindActionCreators(EventAction, dispatch)
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(A)