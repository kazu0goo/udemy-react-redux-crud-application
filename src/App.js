import React, { Component } from 'react';


class App extends Component {
  render() {
    // const greeting = "HI!"
    // const dom = <h1 className="foo">{greeting} DOM</h1>;
    // return dom;

    //return <input type="text" onClick={()=>{console.log("WOOO! I'm clicked!")}} />;
    //return <input type="text" onChange={()=>{console.log("WOOO! I'm changed!")}} />;
    // return(
    //   <div>
    //     <label htmlFor="bar">bar</label>
    //     <input type="text" onChange={()=>{console.log("WOOO! I'm changed!")}}></input>
    //   </div>
    // );
    return(
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={()=>{console.log("WOOO! I'm changed!")}}></input>
      </React.Fragment>
    );

    //return React.createElement(
    //   "div",
    //   null,
    //   "HELLO WORLD!"
    // )
  }
}

export default App;
