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
const [loading,setLoading] = useState(false);
const [error,setError] = useState(null);

useEffect(() => {

  setLoading(true);
  fetch("https://api.github.com/users/the-wormhole")
  .then((res) => res.json())
  .then(setData)
  .then(() => setLoading(false))
  .catch(setError);
},[])

if(loading){
  return(
    <div>Loading....</div>
  )
}
if(error){
  <pre>{JSON.stringify(error,null,2)}</pre>
}
if(!data)return null;                      
  return (
      <div>
          <DispUser name = {data.name} dp = {data.avatar_url}/>
      </div>
  );

}

export default App;
