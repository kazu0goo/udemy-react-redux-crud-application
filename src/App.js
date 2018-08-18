//import React, { Component } from 'react';
import React from 'react';


// class App extends Component {
//   render() {
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={()=>{console.log("WOOO! I'm changed!")}}></input>
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  // return <div>HI!</div>
  return <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>
}

const Cat = () => {
  return <div>Meow!</div>
}
export default App;
