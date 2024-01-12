// import logo from './logo.svg';
import './App.css';
import { useRef, useState, useEffect } from 'react';

function App() {   

const [data,setData] = useState(null);
useEffect(() => {
  //console.log("hey")
  fetch("https://api.github.com/users/the-wormhole")
  .then((res) => res.json())
  .then(setData);
},[])

if(data){                         // null and 2 in the code below are gping 
  return (
      <div>
        <pre>{JSON.stringify(data,null,2)}</pre>
      </div>
  );
}

return <h1>No Data</h1>
}

export default App;
