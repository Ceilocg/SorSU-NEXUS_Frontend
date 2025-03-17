import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { LogOutIcon } from "lucide-react"; // Import LogOutIcon from Lucide
import { Link } from "react-router-dom";
import Dropdown from "../ui/DropDown";
// import Button from "../ui/Button";

const TopNav: React.FC = () => {
  return (
    <header className="bg-maroon text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Welcome, Admin</h1>

      <div className="flex items-center space-x-6">
        {/* Notifications Dropdown */}
        <Dropdown buttonContent={<FaBell className="text-2xl cursor-pointer" />}>
          <div className="p-3 border-b border-gray-200 flex justify-between">
            <h3 className="text-sm font-semibold text-gray-800">Notifications</h3>
          </div>
          <ul className="max-h-64 overflow-y-auto">
            <li className="px-4 py-3 text-center text-gray-700">No new notifications</li>
          </ul>
        </Dropdown>

        {/* Profile Dropdown */}
        <Dropdown buttonContent={<FaUserCircle className="text-2xl cursor-pointer" />}>
          <ul>
            <li>
              <Link to="/personal-information" 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Show Profile
              </Link>
            </li>
            <li>
              <Link to ="/log-out"
               className="w-full px-4 flex items-center space-x-2  hover:bg-gray-200 text-gray-800">
                <LogOutIcon size={16} /> <span>Logout</span>
              </Link>
            </li>
          </ul>
        </Dropdown>
      </div>
    </header>
  );
};

export default TopNav;
