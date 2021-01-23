import React from 'react';
import Child from './Child'
import './App.css';

class Parent extends React.Component {
  constructor(props) {
    super(props)

    this.handler = this.handler.bind(this)

    this.state = {
      displayMessage: false
    }
  }

  handler() {
    this.setState({
      displayMessage: !(this.state.displayMessage)
    })
  }
  
  render() {
    let { displayMessage } = this.state

    const message = 'Sending state back to the parent'
    return (
      <div>
        { displayMessage ? message: ''}
        <br />
        <Child action={this.handler} />
       
      </div>
    )
  }
}
 
export default Parent;
