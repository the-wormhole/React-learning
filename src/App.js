// import logo from './logo.svg';
import './App.css';
import { useRef, useState, useEffect } from 'react';

function DispUser({name,dp}){

  return(
    <div>
      <p>{name}</p>
      <img src = {dp} height = "150"/>
    </div>
  );

}
function App() {   

const [data,setData] = useState(null);

useEffect(() => {
  fetch("https://api.github.com/users/the-wormhole")
  .then((res) => res.json())
  .then(setData);
},[])

if(data){                       
  return (
      <div>
          <DispUser name = {data.name} dp = {data.avatar_url}/>
      </div>
  );
}

return <h1>No Data</h1>
}

export default App;
