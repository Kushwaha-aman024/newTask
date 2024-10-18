import React, { useState } from 'react';
import { FaTachometerAlt, FaBoxOpen, FaShoppingCart, FaUsers, FaEnvelope, FaCog, FaSignOutAlt, FaClipboardList, FaFileContract, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="flex">
      <div className="lg:hidden p-4">
        <button
          className="text-white bg-gray-800 p-2 rounded-md focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={24} />
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:block w-64 h-screen bg-gray-800 text-white fixed lg:relative transition-all duration-300 ease-in-out`}
      >
  
        <div className="flex items-center justify-start h-16 bg-gray-900 px-4">
        
          <img
            src="/path/to/your/logo.png" 
            alt="Logo"
            className="w-12 h-12 object-contain mr-2"
          />
          <h1 className="text-xl font-bold">Sell Tech Ind.</h1>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2">
          <NavItem icon={<FaTachometerAlt />} label="Dashboard" />
          <br></br>
          <NavItem icon={<FaClipboardList />} label="Categories" />
          <br></br>
          <NavItem icon={<FaBoxOpen />} label="Product" />
          <br></br>
          <NavItem icon={<FaShoppingCart />} label="Orders" />
          <br></br>
          <NavItem icon={<FaUsers />} label="Employee" />
          <br></br>
          <NavItem icon={<FaFileContract />} label="Subscription" />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <NavItem icon={<FaEnvelope />} label="Contact" />
          <br></br>
          <NavItem icon={<FaCog />} label="Settings" />
          <br></br>
          <br></br>
        </nav>

       
        <div className="px-4 py-4">
          <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700">
            <FaSignOutAlt className="mr-2" />
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <div className="flex items-center px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-700">
  
      <span className="flex items-center">
        {icon}
        <span className="ml-3">{label}</span> 
      </span>
    </div>
  );
};

export default Sidebar;
