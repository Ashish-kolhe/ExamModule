import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from "./user/components/Footer";


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
          {/* Footer visible on all pages */}
    <Footer />

    </Router>
  );
}

export default App;
