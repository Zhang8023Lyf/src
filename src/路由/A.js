import React, { Component } from 'react'

export class A extends Component {
  componentDidMount () {
    console.log(this.props.match.params.id)
  }
  render () {
    return (
      <div>
        A
      </div>
    )
  }
}

export default A
