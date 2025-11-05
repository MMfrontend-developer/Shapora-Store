// app/dashboard/payments/page.tsx
"use client";

import React from "react";
import { CreditCard, Download } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const paymentData = [
  { month: "Jan", amount: 12000 },
  { month: "Feb", amount: 19000 },
  { month: "Mar", amount: 15000 },
  { month: "Apr", amount: 22000 },
  { month: "May", amount: 28000 },
];

const paymentMethods = [
  { id: 1, method: "Credit Card", transactions: 1245, amount: "$89,450", percentage: 65 },
  { id: 2, method: "Debit Card", transactions: 423, amount: "$32,100", percentage: 23 },
  { id: 3, method: "PayPal", transactions: 312, amount: "$18,900", percentage: 12 },
];

const recentTransactions = [
  { id: "TXN001", order: "#9821", amount: "$120.50", method: "Credit Card", status: "Completed", date: "Oct 5" },
  { id: "TXN002", order: "#9822", amount: "$89.00", method: "PayPal", status: "Completed", date: "Oct 5" },
  { id: "TXN003", order: "#9823", amount: "$45.99", method: "Debit Card", status: "Failed", date: "Oct 4" },
  { id: "TXN004", order: "#9824", amount: "$260.10", method: "Credit Card", status: "Completed", date: "Oct 3" },
];

export default function PaymentsPage() {
  return (
    <div className="w-full space-y-6">
      <h1 className="text-2xl font-semibold">Payments</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow p-4">
          <div className="text-sm text-gray-500 font-bold mb-2">Total Revenue</div>
          <div className="text-3xl font-bold">$138,450</div>
          <div className="text-xs text-green-600 mt-2">↑ 12% from last month</div>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <div className="text-sm text-gray-500 font-bold mb-2">Transactions</div>
          <div className="text-3xl font-bold">2,980</div>
          <div className="text-xs text-gray-600 mt-2">This month</div>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <div className="text-sm text-gray-500 font-bold mb-2">Avg Transaction</div>
          <div className="text-3xl font-bold">$46.40</div>
          <div className="text-xs text-gray-600 mt-2">Per order</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-4 sm:p-6">
        <h2 className="text-lg font-semibold mb-4">Revenue Trend</h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={paymentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {paymentMethods.map((pm) => (
          <div key={pm.id} className="bg-white rounded-xl shadow p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <CreditCard className="text-orange-600" size={20} />
              </div>
              <h3 className="font-semibold">{pm.method}</h3>
            </div>
            <div className="space-y-2 mb-3">
              <div className="text-sm text-gray-600">Transactions: {pm.transactions}</div>
              <div className="text-lg font-semibold">{pm.amount}</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${pm.percentage}%` }}></div>
            </div>
            <div className="text-xs text-gray-600 mt-2">{pm.percentage}% of total</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <button className="flex items-center gap-2 px-3 py-2 border rounded-lg hover:bg-gray-50">
            <Download size={16} /> Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead className="border-b text-sm text-gray-600 bg-gray-100">
              <tr>
                <th className="py-3 px-4 font-medium">Transaction ID</th>
                <th className="py-3 px-4 font-medium">Order</th>
                <th className="py-3 px-4 font-medium">Amount</th>
                <th className="py-3 px-4 font-medium">Method</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {recentTransactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-100">
                  <td className="py-3 px-4 font-medium text-orange-600">{txn.id}</td>
                  <td className="py-3 px-4">{txn.order}</td>
                  <td className="py-3 px-4 font-semibold">{txn.amount}</td>
                  <td className="py-3 px-4">{txn.method}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      txn.status === "Completed" ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {txn.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{txn.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}