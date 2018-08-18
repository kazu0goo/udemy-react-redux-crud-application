//import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';


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
      name:"4",
      age:4

    },
    {
      name:"3",
      age:3
    },
    {
      name:"Jiro",
      age:33
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

User.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number.isRequired
}
// User.defaultProps = {
//   age:1
// }
export default App;
