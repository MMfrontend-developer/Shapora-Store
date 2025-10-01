"use client";

import { motion } from "framer-motion";
import FAQItem from "./_components/FAQItem";
import PromoBanner from "../_components/PromoBannerProps";
import Footer from "../_components/Footer";

const faqs = [
    {
    question: "What is Shapora?",
    answer:
      "Shapora is your go-to fashion e-commerce store offering timeless, stylish, and comfortable pieces designed for everyone.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders are typically processed within 1-2 business days. Delivery usually takes 5-7 business days depending on your location.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide! Shipping costs and delivery times vary by country.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Orders are typically processed within 1-2 business days. Delivery usually takes 5-7 business days depending on your location.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide! Shipping costs and delivery times vary by country.",
  },
    {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and other secure payment options.",
  },
  {
    question: "What is your return policy?",
    answer:
      "You can return any unused items within 30 days for a full refund. Items must be in original condition with tags attached.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you’ll receive a tracking link via email so you can follow your package in real-time.",
  },
];

export default function FAQsPage() {
  return (
    <div>
        
         {/* Promo Banner */}
                              <PromoBanner
                                prefix="Get"
                                highlight="15% off"
                                suffix="on your first order!"
                              />
   
    <main className="container mx-auto px-4 py-16">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Frequently Asked <span className="text-orange-500">Questions</span>
      </motion.h1>

      {/* FAQ List */}
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </main>

     {/* CTA */}
      <div className="mt-10 text-center mb-7">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-900 mb-4">
          Our team is here to help you find what you need.
        </p>
        <a
          href="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 active:bg-gray-800 transition"
        >
          Contact Us
        </a>
      </div>

      <Footer />
     </div>
  );
}
