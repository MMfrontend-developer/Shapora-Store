// app/dashboard/customers/page.tsx
"use client";

import React, { useState } from "react";
import { Search, Mail, Phone, MapPin, Eye } from "lucide-react";

const customers = [
  { id: 1, name: "Sarah Johnson", email: "sarah@example.com", phone: "+1 234 567 8900", location: "New York, USA", totalSpent: "$2,450", joinDate: "Jan 2024" },
  { id: 2, name: "David Brown", email: "david@example.com", phone: "+1 234 567 8901", location: "Los Angeles, USA", totalSpent: "$1,890", joinDate: "Mar 2024" },
  { id: 3, name: "Emily Davis", email: "emily@example.com", phone: "+1 234 567 8902", location: "Chicago, USA", totalSpent: "$3,200", joinDate: "Feb 2024" },
  { id: 4, name: "James Miller", email: "james@example.com", phone: "+1 234 567 8903", location: "Houston, USA", totalSpent: "$1,560", joinDate: "Apr 2024" },
];

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full space-y-6">
      <h1 className="text-2xl font-semibold">Customers</h1>

      <div className="bg-white rounded-xl shadow p-4 sm:p-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCustomers.map((customer) => (
            <div key={customer.id} className="border rounded-lg p-4 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{customer.name}</h3>
                  <p className="text-sm text-gray-500">Joined {customer.joinDate}</p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded"><Eye size={18} /></button>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail size={16} /> {customer.email}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone size={16} /> {customer.phone}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} /> {customer.location}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-600">Total Spent</p>
                <p className="text-lg font-semibold text-orange-600">{customer.totalSpent}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}