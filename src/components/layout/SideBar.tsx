import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, SettingsIcon, MenuIcon } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Dashboard", icon: <HomeIcon size={isOpen ? 24 : 18} /> },
    { path: "/settings", label: "Settings", icon: <SettingsIcon size={isOpen ? 24 : 18} /> },
  ];

  return (
    <aside
      className={`bg-gray-900 text-white h-screen shadow-lg transition-all fixed top-0 left-0 z-50 ${
        isOpen ? "w-64" : "w-20"
      } overflow-y-auto p-2`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-3">
        {isOpen && <span className="text-xl font-bold">AdminLTE</span>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-10 h-10 hover:bg-gray-800 transition rounded-lg"
        >
          <MenuIcon size={24} />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center p-3 rounded-lg transition ${
              location.pathname === item.path ? "bg-gray-800" : "hover:bg-gray-700"
            } ${isOpen ? "" : "justify-center"}`}
          >
            <div className="flex items-center justify-center w-12 h-12">
              {item.icon}
            </div>
            {isOpen && (
              <span className="ml-3 text-lg font-medium text-gray-300">
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
