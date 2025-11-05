"use client";

import React from "react";
import { Menu, Bell, Search, User } from "lucide-react";

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => {
  return (
    <header className="flex items-center justify-between px-6 py-5 bg-white border-b shadow-sm  md:sticky top-0 z-40">
      {/* Left section (hamburger for mobile) */}
      <div className="flex items-center gap-3">
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={onMenuClick}
        >
          <Menu size={24} />    
        </button>
        <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
      </div>

      {/* Search bar (hidden on small screens) */}
      <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500
rounded-full w-72">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent border-none rounded-full outline-none px-2 text-sm text-gray-700 w-full"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <User size={20} />
        </button>
      </div>
    </header>
  );
};

export default Topbar;
