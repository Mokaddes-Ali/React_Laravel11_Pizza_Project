import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <nav className="flex flex-col p-4">
        <NavLink to="/dashboard" className="mb-4" activeClassName="text-blue-500">
          Dashboard
        </NavLink>
        <NavLink to="/profile" className="mb-4" activeClassName="text-blue-500">
          Profile
        </NavLink>
        <NavLink to="/settings" className="mb-4" activeClassName="text-blue-500">
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
