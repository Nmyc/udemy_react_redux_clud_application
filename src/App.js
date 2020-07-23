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
  return (
    <div>
      <Dog />
      <Dog />
      <Dog />
      <Dog />
      <Dog />
    </div>
  )
}

const Dog = () => {
  return <div>Bow-wow!!</div>
}

export default App;
