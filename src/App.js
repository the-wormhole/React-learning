// import logo from './logo.svg';
import './App.css';
//import { Link, Outlet } from "react-router-dom";
import {useEffect, useState} from 'react'

const Gquery = `
query{
	users{
    name,
    email
  }
}
`;

const opts = {
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({ query:Gquery })
};
//elevationGain,status,capacity
function LiftsDisp({name,email}){

  return(
    <div>
      <h1>{name}:<small>{email}</small></h1>
      {/* <p>{elevationGain} {status} {capacity}</p> */}
    </div>
  );

}

function App() {   

const [data,setData] = useState(null);
const [loading,setLoading] = useState(false);
const [error,setError] = useState(null);

useEffect(() => {

  async function makeRequest(){
    setLoading(true);
    try{
    const res = await fetch("https://graphql-demo.mead.io/",opts);
    //.then((res) => res.json())  //parses the body and generates javascript object from the response
    var resJson = await res.json();

    if(resJson.data){

      console.log("Request successful!");
      setData(resJson);
      setLoading(false);

    }
    
    }catch(err){
      console.log(err);
      setError(err);
      return;
    }
  }
  makeRequest();
},[])

if(loading){
  return(
    <h1>Loading....</h1>
  )
}
if(error){

  return(
     <pre>{JSON.stringify(error)}</pre>
  );
}
if(!data)return null;  

  return (
      <div>
          {data.data.users.map((user) => (
            <LiftsDisp name = {user.name} 
            email = {user.email}
            key={user.name}/>
          ))}
      </div>
  );

}

export default App;