"use client";

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* === Sidebar === */}
      <div className="fixed inset-y-0 left-0 z-50">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      </div>

      {/* === Main Content Area === */}
      <div className="flex flex-col flex-1 ml-0 md:ml-64 min-w-0">
        {/* === Topbar === */}
        <div className="fixed top-0 left-0 md:left-64 right-0 z-40 bg-white border-b">
          <Topbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        </div>

        {/* === Scrollable Content === */}
        <main className="flex-1 p-4 sm:p-6 overflow-x-hidden mt-16">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}