import React from 'react';
import "./App.css";
import PropTypes from 'prop-types';

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
    {name: "Jessica", age: 20},
    {name: "Josef", age: 15}
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

// User.defaultProps = {
//   age: 1
// }

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
