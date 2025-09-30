"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Footer from "../_components/Footer";

export default function ContactPage() {
  return (
    <div>
    <main className="container mx-auto px-6 py-16">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">
          Get in <span className="text-orange-500">Touch</span>
        </h1>
        <p className="text-gray-800 font-semibold max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have a question, feedback, or
          just want to say hello — our team is here for you.
        </p>
      </motion.div>

      {/* Split Layout */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-200 p-8 rounded-xl shadow-md flex flex-col justify-center"
        >
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <p className="text-gray-800  font-semibold mb-4">
            📍 123 Fashion Street, Ibadan, Nigeria
          </p>
          <p className="text-gray-800 font-semibold mb-4">📧 support@shapora.com</p>
          <p className="text-gray-800 font-semibold mb-6">📞 +234 708 352 8377</p>

          <div className="flex gap-4 text-gray-800 foont-semibold">
            <a href="#" className="hover:text-orange-500 transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              Twitter
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              Instagram
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-xl shadow-md space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          <Button type="submit" className="w-full btn">
            Send Message
          </Button>
        </motion.form>
      </div>
    </main>
     <Footer />
     </div>
  );
}
