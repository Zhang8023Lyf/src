import React, { Component } from 'react'

export class List extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render () {
    return (
      <div>
        {
          this.props.ListData.map((i, index) => {
            return (
              <div key={index}>
                <img src={this.state.img} alt="" />
                <p>
                  价格{i.currencyFormat}
                  {i.price}
                  尺寸:{i.availableSizes}
                </p>
              </div>
            )

          })
        }
      </div>
    )
  }
}

export default List
