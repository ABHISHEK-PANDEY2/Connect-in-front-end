import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import TopNav from "./top-nav";
import Home from "./component/Home";
import Connect from "./component/Connect";
import Event from "./component/Event";
import Society from "./component/Society";
import Help from "./component/Help";
import Profile from "./component/profile";
import Login from "./component/login";
import Signup from "./component/signUp";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <div className="App">
        <TopNav />
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/connect" element={<Connect />}></Route>
            <Route path="/event" element={<Event />}></Route>
            <Route path="/society" element={<Society />}></Route>
            <Route path="/help" element={<Help />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
