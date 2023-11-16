import React from 'react';
import Login from "./components/profile/Login";
import Register from "./components/profile/Register";
import Home from "./components/home/Home";
import "./components/styles/app.css"
import Profile from "./components/profile/profile";
function App() {
  return (
    <div className="App">
      <Register/><Login/>
      <Home/>
      <Profile/>
      
      {/*<div style={{height:"100vh",display:'flex',alignItem:'center'}}>
      
  </div>*/}
    </div>
  );
}

export default App;
