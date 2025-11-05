// app/dashboard/shipping/page.tsx
"use client";

import React from "react";
import { Truck, Edit, Trash2 } from "lucide-react";

const shippingMethods = [
  { id: 1, name: "Standard Shipping", provider: "FedEx", cost: "$5.99", delivery: "5-7 business days", active: true },
  { id: 2, name: "Express Shipping", provider: "UPS", cost: "$12.99", delivery: "2-3 business days", active: true },
  { id: 3, name: "Overnight Shipping", provider: "DHL", cost: "$24.99", delivery: "Next business day", active: false },
  { id: 4, name: "Local Pickup", provider: "In-Store", cost: "Free", delivery: "Same day", active: true },
];

const recentShipments = [
  { id: "#9821", order: "#9821", carrier: "FedEx", tracking: "794692818742", status: "In Transit", date: "Oct 5" },
  { id: "#9822", order: "#9822", carrier: "UPS", tracking: "1Z999AA10123456784", status: "Delivered", date: "Oct 4" },
  { id: "#9823", order: "#9823", carrier: "DHL", tracking: "1088623122", status: "Out for Delivery", date: "Oct 3" },
];

export default function ShippingPage() {
  return (
    <div className="w-full space-y-6">
      <h1 className="text-2xl font-semibold">Shipping Management</h1>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Shipping Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {shippingMethods.map((method) => (
            <div key={method.id} className="bg-white rounded-xl shadow p-4 border-l-4 border-orange-500">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold">{method.name}</h3>
                  <p className="text-sm text-gray-600">{method.provider}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${method.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {method.active ? "Active" : "Inactive"}
                </span>
              </div>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Truck size={16} /> Delivery: {method.delivery}
                </div>
                <div className="text-lg font-semibold text-orange-600">{method.cost}</div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 hover:bg-gray-100 rounded border text-sm"><Edit size={16} /></button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 hover:bg-red-100 text-red-600 rounded border border-red-200 text-sm"><Trash2 size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-4 sm:p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Shipments</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b text-sm text-gray-600 bg-gray-100">
              <tr>
                <th className="py-3 px-4 font-medium">Shipment ID</th>
                <th className="py-3 px-4 font-medium">Order</th>
                <th className="py-3 px-4 font-medium">Carrier</th>
                <th className="py-3 px-4 font-medium">Tracking</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {recentShipments.map((shipment) => (
                <tr key={shipment.id} className="hover:bg-gray-100">
                  <td className="py-3 px-4 font-medium text-orange-600">{shipment.id}</td>
                  <td className="py-3 px-4">{shipment.order}</td>
                  <td className="py-3 px-4">{shipment.carrier}</td>
                  <td className="py-3 px-4 font-mono text-sm text-gray-600">{shipment.tracking}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      shipment.status === "Delivered" ? 'bg-green-100 text-green-800' :
                      shipment.status === "In Transit" ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {shipment.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{shipment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}