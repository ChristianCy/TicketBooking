import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import List from  './pages/list/List.jsx';
import Buses from  './pages/buses/Buses.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buses" element={<List />} />
        <Route path="/buses/:id" element={<Buses />} />
      </Routes>
    </Router>
  );
}

export default App;
