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
  const profiles = [
    {
      name:"Jiro"
    },
    {
      name:"Taro",
      age:11
    },
    {
      name:"Hanako",
      age:6
    }
  ]
  return (
    <div>
      {
        profiles.map((profile,index)=>{
          return  <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
  // return <div>
  //   <User name={"Taro"} age={10}/>
  //   <User name={"Hanako"} age={5}/>
  // </div>
}

const User = (props) => {
  return <div>I am {props.name},age is {props.age}.</div>
}
User.defaultProps = {
  age:1
}
export default App;
