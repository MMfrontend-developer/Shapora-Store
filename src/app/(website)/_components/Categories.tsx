"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";


const categories = [
  {
    id: 1,
    name: "Men's Wear",
    href: "/products/men",
    image: "/men’s-wear.jpg",
  },
  {
    id: 2,
    name: "Women's Wear",
    href: "/products/women",
    image: "/women’s-wear.jpg",
  },
  {
    id: 3,
    name: "Kids' Wear",
    href: "/products/kids",
    image: "/kid’s-wear.jpg",
  },
  {
    id: 4,
    name: "Accessories",
    href: "/products/accessories",
    image: "/accessories.jpg",
  },
];

export default function Categories() {
  return (
    <section className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">
          🛍️ Shop by Category
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition bg-black/70 text-white flex flex-col justify-between items-center h-52 group"
              style={{ backgroundImage: `url(${category.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                <h3 className="text-xl font-semibold drop-shadow-lg">{category.name}</h3>
                <Link href={category.href}>
                  <Button className="mt-4 btn">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
