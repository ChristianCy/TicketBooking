import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Buses from  './pages/buses/Buses.jsx';
import List from  './pages/list/List.jsx';
import Login from './pages/login/login1.jsx';
import Signup from './pages/signup/signup1.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buses/:id" element={<Buses />} />
        <Route path="/buses" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
