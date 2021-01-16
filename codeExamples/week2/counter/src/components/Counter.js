import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log(e.target)
    this.setState({
      counter: this.state.counter + 1
    })
  }

  
  render() {
    return (
    <div>  
     <button onClick={this.handleClick}>{this.state.counter}</button>
    </div>
    )
  }
}

export default Counter