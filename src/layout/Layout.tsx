import React, { useState } from "react";
import Sidebar from "./SideBar";
import TopNav from "./TopNav";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <div className={`flex flex-col flex-1 transition-all ${isSidebarOpen ? "ml-64" : "ml-16"}`}>
        {/* Top Navigation Bar */}
        <TopNav />

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
