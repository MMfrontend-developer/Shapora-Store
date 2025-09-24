// components/HowItWorks.tsx
"use client";

import { ShoppingBag, Ruler, CreditCard } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Shop Styles",
    description:
      "Browse our curated collections for Men, Women, Kids & Accessories.",
    icon: ShoppingBag,
  },
  {
    id: 2,
    title: "Pick Your Fit",
    description:
      "Find your perfect size with our detailed fit guides and style notes for every piece.",
    icon: Ruler,
  },
  {
    id: 3,
    title: "Checkout Fast",
    description:
      "Enjoy a quick and secure checkout experience with flexible payment options.",
    icon: CreditCard,
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-gray-300 py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          How It Works
        </h2>
        <p className="text-gray-900 mb-12 max-w-2xl mx-auto font-bold">
          Just Pick, Pack and Ship
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center  transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 mb-6">
                <step.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-900 font-medium">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
