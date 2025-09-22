
import React, { useState } from 'react';
import { Link, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { FaBars, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const navLinks = [
  { name: 'Dashboard', path: '/admin-login/dashboard' },
  { name: 'Students', path: '/admin-login/student' },
  { name: 'Jobs', path: '/admin/jobs' },
  { name: 'Settings', path: '/admin/settings' },
];

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    console.log('Logged out');
    navigate('/admin-login');
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className='fixed top-0 left-0 h-full'>
      <div 
        className={`bg-blue-900 text-white h-screen p-4 flex flex-col transition-all duration-300 
        ${isCollapsed ? 'w-16' : 'w-64'}`}
      >
        {/* Collapse button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white mb-6 focus:outline-none"
        >
          <FaBars />
        </button>

        {/* Profile / Logo */}
        <div className="flex items-center mb-8 ">
          <FaUserCircle className="text-3xl mr-2" />
          {!isCollapsed && <span className="font-bold text-lg">Welcome Arvind</span>}
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 flex-grow">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`flex items-center gap-2 px-2 py-2 rounded-md transition 
                ${
                  location.pathname === path
                    ? 'bg-amber-500 text-white font-semibold'
                    : 'hover:bg-blue-700'
                }`}
            >
              {!isCollapsed && name}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-2 py-2 rounded-md bg-red-600 hover:bg-red-700 transition mt-auto"
        >
          <FaSignOutAlt />
          {!isCollapsed && 'Logout'}
        </button>
      </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 bg-gray-100 min-h-screen ml-16" style={{ marginLeft: isCollapsed ? '4rem' : '16rem', transition: 'margin-left 0.3s' }}>
       <Outlet />
      </div>
    </div>
  );
};

export default AdminSidebar;
