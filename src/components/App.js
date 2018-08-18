import React, { Component } from "react";

const App = () => <Counter />;

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 };
  }
  handlePlusButton = () => {
    console.log('handlePlusButton')
    console.log(this.state.count)
    // const currentCount = this.state.count;
    // this.setState({count:currentCount+1})
    this.setState({count:this.state.count+1})

  }
  handleMinusButton = () => {
    console.log('handleMinusButton')
    console.log(this.state.count)
    // const currentCount = this.state.count;
    // this.setState({count:currentCount+1})
    this.setState({count:this.state.count-1})

  }
  render() {
//    console.log(this.state);
    console.log("render");
    return (
      <React.Fragment>
        <div>
          count:
          {this.state.count}
        </div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
