// app/dashboard/products/page.tsx
"use client";

import React, { useState } from "react";
import { Search, Plus, Edit, Trash2, Eye } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Classic Cotton Tee",
    category: "Clothing",
    price: "$29.99",
    stock: 150,
    sales: 430,
    image: "/classic-white-Tshirt.jpg",
  },
  {
    id: 2,
    name: "Leather Crossbody Bag",
    category: "Bags",
    price: "$89.99",
    stock: 45,
    sales: 312,
    image: "/leather-bag.jpg",
  },
  {
    id: 3,
    name: "Running Sneakers",
    category: "Shoes",
    price: "$69.99",
    stock: 82,
    sales: 280,
    image: "/black-sneakers.jpg",
  },
  {
    id: 4,
    name: "Denim Jacket",
    category: "Clothing",
    price: "$79.99",
    stock: 65,
    sales: 156,
    image: "/denim-jacket.jpg",
  },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold">Products</h1>
        <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 w-fit">
          <Plus size={18} /> Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-4 sm:p-6 space-y-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
  <thead className="border-b text-sm text-gray-600 bg-gray-100">
    <tr>
      <th className="py-4 px-4 font-medium">Product</th>
      <th className="py-4 px-4 font-medium">Category</th>
      <th className="py-4 px-4 font-medium">Price</th>
      <th className="py-4 px-4 font-medium">Stock</th>
      <th className="py-4 px-4 font-medium">Sales</th>
      <th className="py-4 px-4 font-medium text-center">Actions</th>
    </tr>
  </thead>

            <tbody className="divide-y">
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-100 text-sm align-middle"
                >
                  <td className="py-1 px-4 flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium">{product.name}</span>
                  </td>
                  <td className="py-1 px-4 text-gray-600">
                    {product.category}
                  </td>
                  <td className="py-1 px-4 font-semibold">{product.price}</td>
                  <td className="py-1 px-4">
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        product.stock > 50
                          ? "bg-green-100 text-green-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {product.stock}
                    </span>
                  </td>
                  <td className="py-1 px-4">{product.sales}</td>
                  <td className="py-1 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 hover:bg-gray-200 rounded">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 hover:bg-gray-200 rounded">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 hover:bg-gray-200 rounded text-red-600">
                        <Trash2 size={16} />
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
