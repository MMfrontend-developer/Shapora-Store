// app/dashboard/settings/page.tsx
"use client";

import React, { useState } from "react";
import { Save, Key, Bell, Lock, User } from "lucide-react";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    storeName: "Shapora",
    email: "admin@shapora.com",
    phone: "+1 234 567 8900",
    address: "123 Business St, City, State 12345",
    currency: "USD",
    timezone: "UTC-5",
    notifications: true,
    emailAlerts: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="w-full space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>

      <div className="space-y-4">
        {/* Store Settings */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6 space-y-4">
          <div className="flex items-center gap-3 pb-4 border-b">
            <User className="text-orange-500" size={20} />
            <h2 className="text-lg font-semibold">Store Information</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Store Name</label>
              <input
                type="text"
                name="storeName"
                value={formData.storeName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Currency</label>
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
                <option>CAD</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6 space-y-4">
          <div className="flex items-center gap-3 pb-4 border-b">
            <Lock className="text-orange-500" size={20} />
            <h2 className="text-lg font-semibold">Security</h2>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50">
              <Key size={20} className="text-orange-500" />
              <div className="text-left">
                <div className="font-medium">Change Password</div>
                <div className="text-sm text-gray-600">Update your password regularly</div>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50">
              <Lock size={20} className="text-orange-500" />
              <div className="text-left">
                <div className="font-medium">Two-Factor Authentication</div>
                <div className="text-sm text-gray-600">Enable 2FA for extra security</div>
              </div>
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6 space-y-4">
          <div className="flex items-center gap-3 pb-4 border-b">
            <Bell className="text-orange-500" size={20} />
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Order Notifications</div>
                <div className="text-sm text-gray-600">Get notified about new orders</div>
              </div>
              <input
                type="checkbox"
                name="notifications"
                checked={formData.notifications}
                onChange={handleChange}
                className="w-4 h-4 rounded"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Email Alerts</div>
                <div className="text-sm text-gray-600">Receive email alerts for important events</div>
              </div>
              <input
                type="checkbox"
                name="emailAlerts"
                checked={formData.emailAlerts}
                onChange={handleChange}
                className="w-4 h-4 rounded"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
            <Save size={18} /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
