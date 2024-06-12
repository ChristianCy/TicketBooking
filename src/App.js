import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Buses from  './pages/buses/Buses.jsx';
import List from  './pages/list/List.jsx';
import Login from './pages/login/login1.jsx';
import Signup from './pages/signup/signup1.jsx';
import PvCar from './pages/PvCar/pvcar.jsx';
import List2 from './pages/list/List2.jsx';
import LostPassword from './pages/lostpassword/Lostpassword.jsx';
import ResetPassword from './pages/resetpassword/Resetpassword.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buses/:id" element={<Buses />} />
        <Route path="/buses" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/PvCar" element={<List2/>} />
        <Route path="/PvCar/:id" element={<PvCar />} />
        <Route path="/lostpassword" element={<LostPassword />} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
      </Routes>
    </Router>
  );
}

export default App;
