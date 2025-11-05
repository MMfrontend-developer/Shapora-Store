// app/dashboard/content/page.tsx
"use client";

import React, { useState } from "react";
import { Plus, Edit, Trash2, Eye, Search } from "lucide-react";

const contentItems = [
  { id: 1, title: "Summer Collection Launch", type: "Blog Post", status: "Published", date: "Oct 5, 2025", views: 1240 },
  { id: 2, title: "Customer Testimonials", type: "Page", status: "Published", date: "Sep 28, 2025", views: 580 },
  { id: 3, title: "How to Care for Your Items", type: "Guide", status: "Draft", date: "Oct 2, 2025", views: 0 },
  { id: 4, title: "New Payment Methods Available", type: "Announcement", status: "Scheduled", date: "Oct 10, 2025", views: 0 },
];

export default function ContentPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContent = contentItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Published": return "bg-green-100 text-green-800";
      case "Draft": return "bg-gray-100 text-gray-800";
      case "Scheduled": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold">Content Management</h1>
        <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 w-fit">
          <Plus size={18} /> Create Content
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-4 sm:p-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b text-sm text-gray-600 bg-gray-100">
              <tr>
                <th className="py-3 px-4 font-medium">Title</th>
                <th className="py-3 px-4 font-medium">Type</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium">Date</th>
                <th className="py-3 px-4 font-medium">Views</th>
                <th className="py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredContent.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="py-3 px-4 font-medium">{item.title}</td>
                  <td className="py-3 px-4 text-gray-600">{item.type}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{item.date}</td>
                  <td className="py-3 px-4 font-semibold">{item.views}</td>
                  <td className="py-3 px-4 flex gap-2">
                    <button className="p-1 hover:bg-gray-200 rounded"><Eye size={16} /></button>
                    <button className="p-1 hover:bg-gray-200 rounded"><Edit size={16} /></button>
                    <button className="p-1 hover:bg-gray-200 rounded text-red-600"><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}