import React from 'react';
import { BrowserRouter , Router, Routes, Route, Link } from 'react-router-dom';
import Profile from '@/Pages/Profile';
import Settings from '@/Pages/Settings';

const Dashboard = () => {
  return (
    <Router>
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <nav>
          <ul>
            <li><Link to="/dashboard/profile">Profile</Link></li>
            <li><Link to="/dashboard/settings">Settings</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Dashboard;


