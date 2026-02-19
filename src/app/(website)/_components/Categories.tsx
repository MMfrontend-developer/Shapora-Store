"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    name: "Men's Wear",
    href: "/products/category/men",
    image: "/mens-wear.jpg",
    count: 8,
  },
  {
    id: 2,
    name: "Women's Wear",
    href: "/products/category/women",
    image: "/womens-wear.jpg",
    count: 8,
  },
  {
    id: 3,
    name: "Kids' Wear",
    href: "/products/category/kids",
    image: "/kids-wear.jpg",
    count: 3,
  },
  {
    id: 4,
    name: "Footwear",
    href: "/products/category/footwear",
    image: "/fashion-sneakers.jpg",
    count: 4,
  },
  {
    id: 5,
    name: "Accessories",
    href: "/products/category/accessories",
    image: "/baseball-trucker-hat.jpg",
    count: 6,
  },
];

export default function Categories() {
  return (
    <section className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-center text-white mb-10"
        >
          🛍️ Shop by Category
        </motion.h2>

        {/* Categories Grid — first row 3 cols, second row 2 cols centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.slice(0, 3).map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
          {categories.slice(3).map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  category,
  index,
}: {
  category: (typeof categories)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link href={category.href} className="block">
        <div
          className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 text-white h-56 group cursor-pointer"
          style={{
            backgroundImage: `url(${category.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/50 group-hover:via-black/20 transition-all duration-300" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-end h-full w-full pb-6">
            <h3 className="text-xl font-bold drop-shadow-lg">{category.name}</h3>
            <p className="text-sm text-gray-300 mt-1">
              {category.count} {category.count === 1 ? "product" : "products"}
            </p>
            <Button className="mt-3 bg-orange-500 hover:bg-orange-600 text-white text-sm px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              Shop Now
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
