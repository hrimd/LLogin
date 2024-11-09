// src/Login.js
import React, { useState } from 'react';

const Login = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`w-full max-w-md p-8 space-y-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <h2 className="text-2xl font-bold text-center">Login</h2>
        
        {/* Dark Mode Toggle */}
        <div className="flex justify-end">
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="hidden" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            <div className="relative">
              <div className={`w-10 h-6 rounded-full shadow-inner ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
              <div className={`absolute w-4 h-4 inset-1 bg-white rounded-full shadow inset-y- left- transition transform duration-200 ${darkMode ? 'translate-x-full bg-gray-200' : ''}`}></div>
            </div>
            <span className="ml-2 text-sm">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </label>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300'} focus:ring-blue-500`}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300'} focus:ring-blue-500`}
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 font-semibold rounded-md ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-600 text-white hover:bg-blue-500'}`}
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center">
          Don't have an account? <a href="#" className="text-blue-600 underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
