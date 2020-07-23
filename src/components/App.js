import React from 'react';

const App = () => (<Counter />)

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  hundlePlusButton = () => {
    this.setState({count: this.state.count + 1})
  }

  hundleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }
  
  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.hundlePlusButton}>+1</button>
        <button onClick={this.hundleMinusButton}>-1</button>
      </React.Fragment>);
    }
};

export default App;
