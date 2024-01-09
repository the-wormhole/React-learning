// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {     

  // const [preState,stateChanger] = useState("joy");
  const what = useState("joy"); // see docs for notes
  
  
  useEffect(() => {   
    console.log(`it's ${what[0]} at the moment!`)
  },[what[0]]);

  return (
    <div className="App">
      <h1>The subject is feeling {what[0]} today!</h1>
      <button onClick = {() => {what[1]("anxious")}}>
        anxious
      </button>
      <button onClick = {() => {what[1]("joy")}}>
        joy
      </button>
      <button onClick = {() => {what[1]("lovely")}}>
        lovely
      </button>
    </div>

  );
}

export default App;
