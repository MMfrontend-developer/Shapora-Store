"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Footer from "../_components/Footer";

const products = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: 89.99,
    image: "/jacket1.jpg",
    isNew: true,
  },
  {
    id: 2,
    name: "Summer Linen Shirt",
    price: 49.99,
    image: "/summer-dress1.jpg",
  },
  {
    id: 3,
    name: "Kids Hoodie",
    price: 69.99,
    image: "/kid's-hoodie (1).jpg",
    isNew: true,
  },
  {
    id: 4,
    name: "Combo Jacket",
    price: 119.99,
    image: "/Jack-Main.png",
  },
  {
    id: 5,
    name: "Polo Tshirt",
    price: 89.99,
    image: "/polo-tshirt.jpg",
    isNew: true,
  },
  {
    id: 6,
    name: "Hoodie",
    price: 49.99,
    image: "/princess-hoodie.jpg",
  },
  {
    id: 7,
    name: "Mini Jacket",
    price: 69.99,
    image: "/mini-jacket.jpg",
    isNew: true,
  },
  {
    id: 8,
    name: "Solid Tshirt",
    price: 119.99,
    image: "/solid-shirt.jpg",
  },
  {
    id: 9,
    name: "Fashion Sneakers",
    price: 89.99,
    image: "/fashion-sneakers.jpg",
  },
  {
    id: 10,
    name: "Black Sneakers",
    price: 49.99,
    image: "/black-sneakers.jpg",
    isNew: true,
  },
  {
    id: 11,
    name: "Baseball-trucker-hat",
    price: 69.99,
    image: "/baseball-trucker-hat.jpg",
  },
  {
    id: 12,
    name: "Set-Two-trucker-hat",
    price: 119.99,
    image: "/set-two-trucker-hat.jpg",
    isNew: true,
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <main className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Our Products</h1>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="bg-gray-100 shadow-md rounded-lg overflow-hidden group hover:shadow-lg"
            >
              <Link href={`/products/${product.id.toString()}`}>
                <div className="relative w-full h-64 overflow-hidden cursor-pointer">
                  {/* New Badge */}
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10 shadow-md">
                      New
                    </span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="p-4 flex flex-col items-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-orange-500 font-bold mt-2">
                  ${product.price.toFixed(2)}
                </p>
                <Button className="mt-4 w-full btn">Add to Cart</Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No products found matching your search.
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}
