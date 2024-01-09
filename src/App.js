// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {     

  const what = useState("joy");
  console.log(what);
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
