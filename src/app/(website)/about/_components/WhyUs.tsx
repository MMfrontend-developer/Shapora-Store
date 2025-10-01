"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

interface WhyUsProps {
  heading?: string;
  subheading?: string;
  features: Feature[];
}

export default function WhyUs({
  heading = "Why Shapora",
  subheading = "Style, Comfort & More – Here’s Why You’ll Love Us",
  features,
}: WhyUsProps) {
  return (
    <section className="bg-gray-200 py-20 mt-20 rounded-md">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-4"
        >
          {heading.split(" ").map((word, i) =>
            word.toLowerCase() === "shapora" ? (
              <span key={i} className="text-orange-500">
                {word}{" "}
              </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </motion.h2>
        <p className="text-center text-gray-800 font-semibold mb-12 max-w-2xl mx-auto">
          {subheading}
        </p>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg active:shadow-lg transition duration-300 h-full"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-800 font-medium text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
