// app/dashboard/discounts/page.tsx
"use client";

import React from "react";
import { Plus, Edit, Trash2, Calendar } from "lucide-react";

const discounts = [
  { id: 1, code: "SAVE20", discount: "20%", type: "Percentage", active: true, used: 145, expiry: "Dec 31, 2025" },
  { id: 2, code: "WELCOME10", discount: "$10", type: "Fixed", active: true, used: 823, expiry: "Nov 30, 2025" },
  { id: 3, code: "SUMMER50", discount: "50%", type: "Percentage", active: false, used: 320, expiry: "Sep 30, 2025" },
];

export default function DiscountsPage() {
  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold">Discounts & Coupons</h1>
        <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 w-fit">
          <Plus size={18} /> Create Discount
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b text-sm text-gray-600 bg-gray-100">
              <tr>
                <th className="py-3 px-4 font-medium">Code</th>
                <th className="py-3 px-4 font-medium">Discount</th>
                <th className="py-3 px-4 font-medium">Type</th>
                <th className="py-3 px-4 font-medium">Times Used</th>
                <th className="py-3 px-4 font-medium">Expiry Date</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm">
              {discounts.map((disc) => (
                <tr key={disc.id} className="hover:bg-gray-100">
                  <td className="py-3 px-4 font-semibold text-orange-600">{disc.code}</td>
                  <td className="py-3 px-4">{disc.discount}</td>
                  <td className="py-3 px-4 text-gray-600">{disc.type}</td>
                  <td className="py-3 px-4">{disc.used}</td>
                  <td className="py-3 px-4 flex items-center gap-2 text-gray-600"><Calendar size={16} /> {disc.expiry}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${disc.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {disc.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex gap-2">
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