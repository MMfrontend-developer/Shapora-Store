// app/dashboard/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import Image from "next/image";

const stats = [
  { title: "Revenue", value: "$45,230", change: "+12.5%" },
  { title: "Orders", value: "1,245", change: "+8.3%" },
  { title: "Customers", value: "320", change: "+5.2%" },
  { title: "Pending", value: "56", change: "-3.8%" },
];

const salesData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4800 },
  { month: "May", revenue: 7000 },
  { month: "Jun", revenue: 6500 },
  { month: "Jul", revenue: 7200 },
];

const pieData = [
  { name: "Clothing", value: 400 },
  { name: "Accessories", value: 300 },
  { name: "Shoes", value: 200 },
  { name: "Bags", value: 100 },
];

const COLORS = ["#f97316", "#facc15", "#60a5fa", "#34d399"];

const recentOrders = [
  { id: "#9821", customer: "Sarah Johnson", date: "Oct 5, 2025", total: "$120.50", status: "Delivered" },
  { id: "#9822", customer: "David Brown", date: "Oct 5, 2025", total: "$89.00", status: "Pending" },
  { id: "#9823", customer: "Emily Davis", date: "Oct 4, 2025", total: "$45.99", status: "Cancelled" },
  { id: "#9824", customer: "James Miller", date: "Oct 3, 2025", total: "$260.10", status: "Delivered" },
];

const topProducts = [
  { id: 1, name: "Classic Cotton Tee", price: "$29.99", sales: "430", image: "/classic-white-Tshirt.jpg" },
  { id: 2, name: "Leather Crossbody Bag", price: "$89.99", sales: "312", image: "/leather-bag.jpg" },
  { id: 3, name: "Running Sneakers", price: "$69.99", sales: "280", image: "/black-sneakers.jpg" },
];

export default function DashboardHome() {
  return (
    <div className="w-full space-y-6">
      <h1 className="text-2xl font-semibold px-4 sm:px-0">Dashboard Overview</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-0">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="p-4 bg-white rounded-xl shadow"
          >
            <div className="text-sm text-gray-500 font-bold">{s.title}</div>
            <div className="mt-2 text-xl font-bold">{s.value}</div>
            <div className={`mt-1 text-sm ${s.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
              {s.change}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-0">
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-3">Revenue Growth</h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#f97316" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-3">Sales Breakdown</h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} fill="#8884d8">
                  {pieData.map((_, idx) => (
                    <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Orders - Fully Responsive */}
      <div className="bg-white rounded-xl shadow overflow-hidden mx-4 sm:mx-0">
        <div className="p-4 sm:p-6 border-b">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead className="border-b  text-sm text-gray-600 bg-gray-100">
              <tr>
                <th className="py-3 px-4 font-medium whitespace-nowrap">Order</th>
                <th className="py-3 px-4 font-medium whitespace-nowrap">Customer</th>
                <th className="py-3 px-4 font-medium whitespace-nowrap">Date</th>
                <th className="py-3 px-4 font-medium whitespace-nowrap">Total</th>
                <th className="py-3 px-4 font-medium whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentOrders.map((o, idx) => (
                <tr key={idx} className="hover:bg-gray-100 text-sm">
                  <td className="py-3 px-4 whitespace-nowrap font-medium text-orange-600">{o.id}</td>
                  <td className="py-3 px-4 whitespace-nowrap">{o.customer}</td>
                  <td className="py-3 px-4 whitespace-nowrap text-gray-600">{o.date}</td>
                  <td className="py-3 px-4 whitespace-nowrap font-semibold">{o.total}</td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        o.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : o.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow mx-4 sm:mx-0">
        <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topProducts.map((p) => (
            <div key={p.id} className="flex items-center gap-4 bg-gray-300 p-3 rounded-lg hover:shadow-md  transition">
              <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold truncate">{p.name}</div>
                <div className="text-sm text-gray-500">{p.price}</div>
                <div className="text-sm text-orange-500">{p.sales} sales</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}