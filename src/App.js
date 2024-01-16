// import logo from './logo.svg';
import './App.css';
import { useRef, useState, useEffect } from 'react';
//import { query } from 'express';

const Gquery = `
query{
  allLifts{
    name
    status
    capacity
    elevationGain
  }
}
`;

const opts = {
  method: "POST",
  headers: {"Content-Type":"application/json"},
  body: JSON.stringify({Gquery})
};

function LiftsDisp({name,elevationGain,status,capacity}){

  return(
    <div>
      <h1>{name}</h1>
      <p>{elevationGain} {status} {capacity}</p>
    </div>
  );

}
function App() {   

const [data,setData] = useState(null);
const [loading,setLoading] = useState(false);
const [error,setError] = useState(null);

useEffect(() => {

  setLoading(true);
  fetch("https://snowtooth.moonhighway.com",opts)   // Fetch request is throwing an error
  .then((res) => res.json())  //parses the body and generates 
  .then(setData)
  .then(() => setLoading(false))
  .catch((err) => {
    console.log(err);
    setError(err);
  });
},[])

if(loading){
  return(
    <h1>Loading....</h1>
  )
}
if(error){

  return(
     <pre>{JSON.stringify(error)}</pre>
    // <p>{error}</p>
  );
}
if(!data)return null;
console.log(data);
  return (
      <div>
          {data.data.allLifts.map((lift) => (
            <LiftsDisp name = {lift.name} 
            elevationGain = {lift.elevationGain} 
            capacity = {lift.capacity}
            status = {lift.status}
            />
          ))}
      </div>
  );

}

export default App;
