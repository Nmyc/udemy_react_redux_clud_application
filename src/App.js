import React from 'react';
import "./App.css"

// class App extends React.Component {
//   render() {
//     return (    
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("I am clicked.")}} />
//     </React.Fragment>
//     )
//   }
// }

const App = () => {
  const profiles = [
    {name: "James", age: 10}, 
    {name: "Mike", age: 5},
    {name: "Jessica"}
  ];

  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name = {profile.name} age={profile.age} key={index}/>
      })}
    </div>
  )
}

const User = (props) => {
return <div>Hi, I am {props.name}. I am {props.age} years old.</div>
}

User.defaultProps = {
  age: 1
}

export default App;
