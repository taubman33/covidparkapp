import React from 'react';
import { Link, Route } from 'react-router-dom'
import './styles/output.css';
import Layout from './components/Layout'


function App() {
  return (
    <div className="App">
      <div className=" bg-blue-400 p-3 m-3 sm: bg-pink-600">
        <Layout/>
      </div>
    </div>
  );
}

export default App;
