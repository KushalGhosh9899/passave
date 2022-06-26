import React from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Link, 
  Route } from "react-router-dom";
import Signup from "./Components/Singup.js/Signup";
import Login from "./Components/Login/Login";
import Home from "./Components/Homepage/Home";

function App() {
  return (
      <>
      <Router>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/" element={<Home />}/>
            </Routes>
        </Router>
      
      </>
  );
}

export default App;
