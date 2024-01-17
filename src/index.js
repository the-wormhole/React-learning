import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App, About, Contact, History, Future} from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/about' element={<About/>}>
        <Route path='history' element={<History/>}/>
        <Route path='future' element={<Future/>}/>
      </Route>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </BrowserRouter>
);


