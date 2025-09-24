// components/StoreBenefits.tsx
"use client";

import { Truck, ShieldCheck, Headphones } from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Free Standard Delivery",
    description: "On all Orders Over $100",
    icon: Truck,
  },
  {
    id: 2,
    title: "Secure Payments",
    description: "Trusted & Secure Payment Methods",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Top Rated Support",
    description: "Quick Responses & Helpful Solutions",
    icon: Headphones,
  },
];

export default function StoreBenefits() {
  return (
    <section className="w-full bg-gray-900 py-16">
      <div className="container mx-auto px-6 text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why Shop With Us
        </h2>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center 
                         transition-all duration-500 ease-in-out 
                         hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 mb-6">
                <benefit.icon size={32} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>

              {/* Description */}
              <p className="text-gray-200">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
