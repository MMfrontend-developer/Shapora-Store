// app/dashboard/inventory/page.tsx
"use client";

import React, { useState } from "react";
import { Search, TrendingUp, TrendingDown } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const inventoryItems = [
  { id: 1, name: "Classic Cotton Tee", sku: "SKU001", quantity: 150, reorderLevel: 50, status: "Optimal", trend: "up" },
  { id: 2, name: "Leather Crossbody Bag", sku: "SKU002", quantity: 12, reorderLevel: 30, status: "Low", trend: "down" },
  { id: 3, name: "Running Sneakers", sku: "SKU003", quantity: 82, reorderLevel: 40, status: "Optimal", trend: "up" },
  { id: 4, name: "Denim Jacket", sku: "SKU004", quantity: 5, reorderLevel: 25, status: "Critical", trend: "down" },
];

const inventoryTrend = [
  { month: "Jan", stock: 4000 },
  { month: "Feb", stock: 3800 },
  { month: "Mar", stock: 4200 },
  { month: "Apr", stock: 3900 },
  { month: "May", stock: 4500 },
];

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = inventoryItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sku.includes(searchTerm)
  );

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Optimal": return "bg-green-100 text-green-800";
      case "Low": return "bg-yellow-100 text-yellow-800";
      case "Critical": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="w-full space-y-6">
      <h1 className="text-2xl font-semibold">Inventory Management</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow p-4">
          <div className="text-sm text-gray-600 mb-2">Total Items</div>
          <div className="text-3xl font-bold">249</div>
          <div className="text-xs text-green-600 mt-2">↑ 5% from last month</div>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <div className="text-sm text-gray-600 mb-2">Low Stock Items</div>
          <div className="text-3xl font-bold text-yellow-600">3</div>
          <div className="text-xs text-gray-600 mt-2">Need reordering</div>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <div className="text-sm text-gray-600 mb-2">Critical Items</div>
          <div className="text-3xl font-bold text-red-600">1</div>
          <div className="text-xs text-red-600 mt-2">⚠ Urgent action needed</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-4 sm:p-6">
        <h2 className="text-lg font-semibold mb-4">Stock Trend</h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={inventoryTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="stock" stroke="#f97316" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-4 sm:p-6 space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Inventory Items</h2>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-sm text-gray-600 bg-gray-50">
              <tr>
                <th className="py-3 px-4 font-medium">Product Name</th>
                <th className="py-3 px-4 font-medium">SKU</th>
                <th className="py-3 px-4 font-medium">Quantity</th>
                <th className="py-3 px-4 font-medium">Reorder Level</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{item.name}</td>
                  <td className="py-3 px-4 text-gray-600">{item.sku}</td>
                  <td className="py-3 px-4 font-semibold">{item.quantity}</td>
                  <td className="py-3 px-4 text-gray-600">{item.reorderLevel}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {item.trend === "up" ? (
                      <TrendingUp className="text-green-600" size={18} />
                    ) : (
                      <TrendingDown className="text-red-600" size={18} />
                    )}
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