import React from 'react';

class Child extends React.Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.action}> Click Me!</button>
      </div>
    )
  }
}

export default Child;