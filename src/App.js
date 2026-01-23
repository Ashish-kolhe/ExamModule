import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./user/pages/Home";
import AdminLogin from "./user/components/admin/AdminLogin";

import { Dashboard } from "./admin/pages/Dashboard";
import { Students } from "./admin/pages/Students";
import RequireAdmin from "./admin/components/RequireAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/dashboard"
          element={
            <RequireAdmin>
              <Dashboard />
            </RequireAdmin>
          }
        />

        <Route
          path="/admin/students"
          element={
            <RequireAdmin>
              <Students />
            </RequireAdmin>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
