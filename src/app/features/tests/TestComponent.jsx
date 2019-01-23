import React, { Component } from 'react'
import { connect } from 'react-redux'
import { iCounter, dCounter } from './actions';
import { Button } from 'semantic-ui-react';

const mapState = (state)=>({
    data:state.test.data
})

const actions = {
    iCounter,
    dCounter,
}

class TestComponent extends Component {
  render() {
      const {iCounter,dCounter,data} = this.props
    return (
      <div>
        <h4>Test Area</h4>
        <p>Data from store is {data}</p>
        <Button onClick={iCounter} content='INCREMENT' color='green' />
        <Button onClick={dCounter} content='DECREMENT' color='red' />
      </div>
    )
  }
}

export default connect(mapState, actions)(TestComponent)