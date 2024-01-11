// import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {     

  const [textTitle,setText] = useState("");
  const [hexColor,setColor] = useState("#000000");
  
  const submit = (e) =>{
    e.preventDefault();

    alert(`${textTitle},${hexColor}`)
    setText("");
    setColor("#000000");
  }

  return (
    <form onSubmit={submit}>

      <input 
      type="text" 
      placeholder="Select color..."
      value={textTitle}
      onChange={event => {setText(event.target.value)}}
      />
      <input type="color" value={hexColor} onChange={event =>{setColor(event.target.value)}}/>
      <input type="submit" />
    </form>
  );
}

export default App;
