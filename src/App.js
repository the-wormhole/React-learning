// import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from "react-router-dom";

function Home(){

  return(
    <div>
      <nav>
        <Link to="/about">About</Link>&nbsp;
        <Link to="/contact">Contact</Link>&nbsp;
      </nav>
      <h1>Website Home</h1>
    </div>
  )

}

export function About(){

    // Line 28 is for Nested links to include all the child routes
    // the Link component added in line 30 - 31 will only work in this About component 
    // definition and in no other 
  return(
    <div>
      <nav>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/contact">Contact</Link>&nbsp;
      </nav>
      <h1>About</h1>
      <Link to="history">History</Link>&nbsp;
      <Link to="future">Future</Link>
      <Outlet/> 
    </div>
  )

}

export function History(){

  return(
    <div>
      <h1>Our History</h1>
    </div>
  )
}

export function Future(){

  return(
    <div>
      <h1>Future prospects</h1>
    </div>
  )
}

export function Contact(){

  return(
    <div>
      <nav>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/about">About</Link>&nbsp;
      </nav>
      <h1>Contact</h1>
    </div>
  )

}

export function App() {   

  return <Home />;
}

//export default App;