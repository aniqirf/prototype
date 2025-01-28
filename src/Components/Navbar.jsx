import React from 'react';
import { FaBars } from 'react-icons/fa';
import { IoLogInOutline } from 'react-icons/io5';
import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Navbar = ({ breadcrumb }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <nav className="flex items-center justify-between p-5 fixed bg-white w-[calc(100vw-20rem)] z-30">
      <div className="flex flex-row items-center gap-5">
        <FaBars className="text-gray-500 cursor-pointer" />
        <div className="flex items-center gap-2 text-sm">
          <FaHome
            className="text-gray-400 cursor-pointer hover:text-blue-500"
            size={18}
            onClick={() => navigate('/')} // Navigate to the home route
          />
          {breadcrumb.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-gray-400">/</span>
              {item.link ? (
                <span
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={() => navigate(item.link)}
                >
                  {item.label}
                </span>
              ) : (
                <span className="text-gray-700 font-bold">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 mr-8">
        <div className="flex items-center gap-4 text-red-500">
          <div
            className="flex items-center gap-2 cursor-pointer text-sm"
            onClick={handleLogout}
          >
            <IoLogInOutline size={24} />
            <span>Log Keluar</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
