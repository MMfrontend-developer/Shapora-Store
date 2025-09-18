"use client";

import { useState } from "react";
import { addProduct } from "../../lib/api";

export default function DashboardPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price) return;

    addProduct({ name, price: Number(price), image: "/placeholder.jpg" });

    setName("");
    setPrice("");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
        <input
          className="border p-2 w-full"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 w-full"
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
          Add Product
        </button>
      </form>
    </div>
  );
}
