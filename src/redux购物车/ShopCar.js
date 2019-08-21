import React from 'react';
import * as ActionEvent from './action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from './store/myStore';
class ShopCar extends React.Component {
  constructor() {
    super();
    this.state = {
      shopCarArr: []
    }
    store.subscribe(() => {
      console.log(this.props.reduxData)
      this.setState({
        shopCarArr: this.props.reduxData.reduxStore.shopCarArr
      })
    })
  }

  componentDidMount () {
    this.setState({
      shopCarArr: this.props.reduxData.reduxStore.shopCarArr
    })


  }


  render () {
    return (
      <div>
        <h1>shopcar</h1>
        <ul>
          {this.state.shopCarArr.map((item, index) => {
            return (
              <li key={index}>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </li>
            )
          })}

        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    reduxData: state
  }
}
function mapDispatchToProps (dispatch) {
  return {
    actionEvent: bindActionCreators(ActionEvent, dispatch)
  }
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(ShopCar)