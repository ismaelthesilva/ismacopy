// apps/web/src/pages/Dashboard.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Dashboard sub-pages
const DashboardHome = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-2">Users</h3>
        <p className="text-3xl font-bold">1,234</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-2">Revenue</h3>
        <p className="text-3xl font-bold">$12,345</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-2">Orders</h3>
        <p className="text-3xl font-bold">567</p>
      </div>
    </div>
  </div>
);

const Settings = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Settings</h2>
    <p>Manage your account settings here.</p>
  </div>
);

const Profile = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">User Profile</h2>
    <p>Edit your profile information here.</p>
  </div>
);

export default function Dashboard() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow">
          <nav>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="block p-2 hover:bg-gray-100 rounded">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/dashboard/profile" className="block p-2 hover:bg-gray-100 rounded">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/dashboard/settings" className="block p-2 hover:bg-gray-100 rounded">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/" className="block p-2 hover:bg-gray-100 rounded">
                  Back to Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="flex-1 bg-white p-6 rounded-lg shadow">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}