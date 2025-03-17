import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-3">
      © {new Date().getFullYear()} AdminLTE - All rights reserved.
    </footer>
  );
};

export default Footer;
