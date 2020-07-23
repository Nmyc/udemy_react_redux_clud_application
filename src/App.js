import React from 'react';
import "./App.css"
class App extends React.Component {
  render() {
    return (    
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked.")}} />
    </React.Fragment>
    )
  }
}

export default App;
