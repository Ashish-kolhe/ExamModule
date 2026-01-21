import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import { Home } from './user/pages/Home';

import { Dashboard } from './admin/pages/Dashboard';
import { Students } from './admin/pages/Students';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>

        <Route path='/admin/dashboard' element={<Dashboard/>}></Route>
         <Route path='/admin/students' element={<Students/>}></Route>
      </Routes>
         

    </Router>
  );
}

export default App;
