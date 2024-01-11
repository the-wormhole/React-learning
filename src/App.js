// import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function useInput(initialValue){

  const [value,setValue] = useState(initialValue);
  return [
    {
      value,
      onChange:(e) => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ];
}

function App() {     

  const [titleProps,resetText] = useInput("");
  const [colorProps,resetColor] = useInput("#000000");
  
  const submit = (e) =>{
    e.preventDefault();

    alert(`${titleProps.value},${colorProps.value}`)
    resetText("");
    resetColor("#000000");
  }

  return (
    <form onSubmit={submit}>

      <input 
      type="text" 
      placeholder="Select color..."
      {...titleProps}
      />
      <input type="color" {...colorProps}/>
      <input type="submit" />
    </form>
  );
}

export default App;
