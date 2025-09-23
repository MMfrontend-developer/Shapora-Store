"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const newArrivals = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 25,
    image: "/classic-white-Tshirt.jpg", // put inside /public/products
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 60,
    image: "/denim-jacket.jpg",
  },
  {
    id: 3,
    name: "Slim Fit Jeans",
    price: 45,
    image: "/slim-fit-jeans1.jpg",
  },
  {
    id: 4,
    name: "Casual Sneakers",
    price: 70,
    image: "/casual-sneakers.jpg",
  },
];

export default function NewArrivals() {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Section Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        ✨ New Arrivals
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {newArrivals.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 shadow-md rounded-lg overflow-hidden group hover:shadow-lg transition"
          >
            <div className="relative w-full h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-orange-500 font-bold mt-2">
                ${product.price.toFixed(2)}
              </p>
              <Button className="mt-4 w-full btn">
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
