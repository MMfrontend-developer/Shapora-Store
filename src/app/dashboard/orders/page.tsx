// app/dashboard/orders/page.tsx
"use client";

import React, { useState } from "react";
import { Search, Eye, Edit, Plus, Download } from "lucide-react";

const orders = [
  { id: "#9821", customer: "Sarah Johnson", date: "Oct 5, 2025", total: "$120.50", items: 3, status: "Delivered" },
  { id: "#9822", customer: "David Brown", date: "Oct 5, 2025", total: "$89.00", items: 2, status: "Pending" },
  { id: "#9823", customer: "Emily Davis", date: "Oct 4, 2025", total: "$45.99", items: 1, status: "Cancelled" },
  { id: "#9824", customer: "James Miller", date: "Oct 3, 2025", total: "$260.10", items: 5, status: "Delivered" },
  { id: "#9825", customer: "Lisa Anderson", date: "Oct 3, 2025", total: "$175.75", items: 3, status: "Processing" },
];

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.includes(searchTerm) || order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Delivered": return "bg-green-100 text-green-800";
      case "Processing": return "bg-blue-100 text-blue-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold">Orders</h1>
        <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 w-fit">
          <Plus size={18} /> New Order
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-4 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1 relative min-w-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option>All</option>
            <option>Delivered</option>
            <option>Processing</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>
          <button className="flex-shrink-0 flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Download size={18} /> Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead className="border-b text-sm text-gray-600 bg-gray-100">
              <tr>
                <th className="py-3 px-4 font-medium">Order ID</th>
                <th className="py-3 px-4 font-medium">Customer</th>
                <th className="py-3 px-4 font-medium">Date</th>
                <th className="py-3 px-4 font-medium">Items</th>
                <th className="py-3 px-4 font-medium">Total</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>

         <tbody className="divide-y">
  {filteredOrders.map((order) => (
    <tr
      key={order.id}
      className="hover:bg-gray-100 text-sm align-middle"
    >
      <td className="py-1 px-4 font-medium text-orange-600">{order.id}</td>
      <td className="py-1 px-4">{order.customer}</td>
      <td className="py-1 px-4 text-gray-600">{order.date}</td>
      <td className="py-1 px-4">{order.items}</td>
      <td className="py-1 px-4 font-semibold">{order.total}</td>

      {/* Status — perfectly centered */}
      <td className="py-1 px-4 text-center">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
            order.status
          )}`}
        >
          {order.status}
        </span>
      </td>

      {/* Actions — perfectly centered under header */}
      <td className="py-1 px-4 text-center">
        <div className="inline-flex items-center justify-center gap-2">
          <button
            className="p-2 w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded"
            aria-label="View"
          >
            <Eye size={16} />
          </button>
          <button
            className="p-2 w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded"
            aria-label="Edit"
          >
            <Edit size={16} />
          </button>
        </div>
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