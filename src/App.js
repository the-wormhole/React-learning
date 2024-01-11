// import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {     

  const textTitle = useRef();
  const hexColor = useRef();
  
  const submit = (e) =>{
    e.preventDefault();
    console.log(textTitle);
    alert(`${textTitle.current.value},${hexColor.current.value}`)
    textTitle.current.value = "";
    hexColor.current.value = "#000000";
  }
  console.log("Test flag1");
  return (
    <form onSubmit={submit}>

      <input 
      type="text" 
      placeholder="Select color..."
      ref={textTitle}
      />
      <input type="color" ref={hexColor}/>
      <input type="submit" placeholder='Add'/>
    </form>
  );
}

export default App;
