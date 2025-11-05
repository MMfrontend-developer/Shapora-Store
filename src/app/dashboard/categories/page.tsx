// app/dashboard/categories/page.tsx
"use client";

import React from "react";
import { Plus, Edit, Trash2, } from "lucide-react";

const categories = [
  { id: 1, name: "Clothing", products: 45, icon: "👕" },
  { id: 2, name: "Accessories", products: 28, icon: "⌚" },
  { id: 3, name: "Shoes", products: 32, icon: "👟" },
  { id: 4, name: "Bags", products: 15, icon: "👜" },
];

export default function CategoriesPage() {
  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold">Categories</h1>
        <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 w-fit">
          <Plus size={18} /> Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-4">{cat.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{cat.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{cat.products} products</p>
            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 hover:bg-gray-100 rounded border"><Edit size={16} /></button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 hover:bg-red-100 text-red-600 rounded border border-red-200"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}