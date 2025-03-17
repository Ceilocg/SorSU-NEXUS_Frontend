import React from "react";
import { HomeIcon, SettingsIcon, MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`h-screen bg-gray-800 text-white transition-all duration-300 
      ${isOpen ? "w-64" : "w-16"} fixed flex flex-col`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4">
        {isOpen && <span className="text-xl font-bold">AdminLTE</span>}
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <MenuIcon size={24} />
        </button>
      </div>

      {/* Sidebar Items */}
      <nav className="mt-4 flex flex-col space-y-2">
        <Link
          to="/"
          className="flex items-center p-3 hover:bg-gray-700 transition-all"
        >
          <HomeIcon size={20} />
          <span className={`ml-3 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
            Dashboard
          </span>
        </Link>
        <Link
          to="/settings"
          className="flex items-center p-3 hover:bg-gray-700 transition-all"
        >
          <SettingsIcon size={20} />
          <span className={`ml-3 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
            Settings
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
