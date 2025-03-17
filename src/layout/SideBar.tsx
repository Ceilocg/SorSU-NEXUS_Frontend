import React from "react";
import { HomeIcon, SettingsIcon, MenuIcon } from "lucide-react";
import { Link } from "react-router-dom"; 

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`h-screen bg-gray-800 text-white transition-all ${isOpen ? "w-64" : "w-16"} fixed`}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4">
        {isOpen && <span className="text-xl font-bold">AdminLTE</span>}
        <button onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon size={24} />
        </button>
      </div>

      {/* Sidebar Items */}
      <nav className="mt-4">
        <Link to="/" className="flex items-center p-3 hover:bg-gray-700 transition">
          <HomeIcon size={20} className="mr-3" />
          {isOpen && <span>Dashboard</span>}
        </Link>
        <Link to="/settings" className="flex items-center p-3 hover:bg-gray-700 transition">
          <SettingsIcon size={20} className="mr-3" />
          {isOpen && <span>Settings</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
