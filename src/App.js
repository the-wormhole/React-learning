// import logo from './logo.svg';
import './App.css';
import { useState, useEffect,useReducer } from 'react';

function Checker(){

  const [checked, setChecked] = useReducer(
    checked => !checked,
    false);
    
  return (
    <div>
      <input type="checkbox" value="checked" onChange={setChecked}/>
      <label>
        {checked ? "Checked" : "Not Checked"}
      </label>
    </div> 
  )
}

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

      <Checker/>
    </div>  

  );
}

export default App;
