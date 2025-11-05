// app/dashboard/analytics/page.tsx
"use client";

import React from "react";
import { TrendingUp, Users, ShoppingCart, DollarSign } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const analyticsData = [
  { month: "Jan", visitors: 4000, sales: 2400, conversion: 9.4 },
  { month: "Feb", visitors: 3000, sales: 1398, conversion: 8.2 },
  { month: "Mar", visitors: 2000, sales: 9800, conversion: 12.1 },
  { month: "Apr", visitors: 2780, sales: 3908, conversion: 10.5 },
  { month: "May", visitors: 1890, sales: 4800, conversion: 13.2 },
];

const deviceData = [
  { name: "Mobile", value: 55, color: "#f97316" },
  { name: "Desktop", value: 35, color: "#60a5fa" },
  { name: "Tablet", value: 10, color: "#34d399" },
];

export default function AnalyticsPage() {
  return (
    <div className="w-full space-y-6">
      <h1 className="text-2xl font-semibold">Analytics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">Visitors</div>
            <Users className="text-blue-500" size={20} />
          </div>
          <div className="text-3xl font-bold">24,580</div>
          <div className="text-xs text-green-600 mt-2">↑ 8.5% this month</div>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">Total Orders</div>
            <ShoppingCart className="text-orange-500" size={20} />
          </div>
          <div className="text-3xl font-bold">1,245</div>
          <div className="text-xs text-green-600 mt-2">↑ 12.3% this month</div>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">Revenue</div>
            <DollarSign className="text-green-500" size={20} />
          </div>
          <div className="text-3xl font-bold">$45,230</div>
          <div className="text-xs text-green-600 mt-2">↑ 15.2% this month</div>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">Conversion Rate</div>
            <TrendingUp className="text-purple-500" size={20} />
          </div>
          <div className="text-3xl font-bold">11.2%</div>
          <div className="text-xs text-green-600 mt-2">↑ 2.1% this month</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-4 sm:p-6">
          <h2 className="text-lg font-semibold mb-4">Traffic & Conversion</h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="visitors" stroke="#60a5fa" strokeWidth={2} name="Visitors" />
                <Line type="monotone" dataKey="conversion" stroke="#f97316" strokeWidth={2} name="Conversion %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4 sm:p-6">
          <h2 className="text-lg font-semibold mb-4">Device Breakdown</h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={deviceData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={100}>
                  {deviceData.map((entry, idx) => (
                    <Cell key={idx} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {deviceData.map((device) => (
              <div key={device.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: device.color }}></div>
                  <span className="text-sm">{device.name}</span>
                </div>
                <span className="font-semibold">{device.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-4 sm:p-6">
        <h2 className="text-lg font-semibold mb-4">Sales vs Revenue</h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#34d399" strokeWidth={3} name="Sales" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
