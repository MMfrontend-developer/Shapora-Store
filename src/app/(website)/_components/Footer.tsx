// components/Footer.tsx
"use client";

import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
      
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            Shapora
          </h2>
          <p className="text-gray-400">
            Classic looks for Men, Women & Kids.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4 mt-6">
            <Link href="#">
              <FaInstagram className="w-6 h-6 hover:text-orange-500 transition" />
            </Link>
            <Link href="#">
              <FaFacebook className="w-6 h-6 hover:text-orange-500 transition" />
            </Link>
            <Link href="#">
              <FaLinkedin className="w-6 h-6 hover:text-orange-500 transition" />
            </Link>
            <Link href="#">
              <FaTwitter className="w-6 h-6 hover:text-orange-500 transition" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link href="/products" className="hover:text-orange-500">Products</Link></li>
            <li><Link href="/about" className="hover:text-orange-500">About</Link></li>
            <li><Link href="/faq's" className="hover:text-orange-500">Faq's</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>

        {/* Shop Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Shop
          </h3>
          <ul className="space-y-2">
            <li><Link href="/products/men" className="hover:text-orange-500">Men's Wear</Link></li>
            <li><Link href="/products/women" className="hover:text-orange-500">Women's Wear</Link></li>
            <li><Link href="/products/kids" className="hover:text-orange-500">Kids' Wear</Link></li>
            <li><Link href="/products/accessories" className="hover:text-orange-500">Accessories</Link></li>
          </ul>
        </div>

        {/* Help & Account */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Help & Account
          </h3>
          <ul className="space-y-2">
            <li><Link href="/faq" className="hover:text-orange-500">FAQ’s</Link></li>
            <li><Link href="/returns" className="hover:text-orange-500">Return Policy</Link></li>
            <li><Link href="/orders" className="hover:text-orange-500">Order Status</Link></li>
            <li><Link href="/shipping" className="hover:text-orange-500">Shipping & Delivery</Link></li>
            <li><Link href="/account" className="hover:text-orange-500">My Account</Link></li>
            <li><Link href="/track" className="hover:text-orange-500">Track Order</Link></li>
            <li><Link href="/cart" className="hover:text-orange-500">My Cart</Link></li>
            <li><Link href="/history" className="hover:text-orange-500">Order History</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
  <div className="mt-10 border-t-4 border-gray-700 pt-6 text-center text-sm text-gray-200 font-bold">
        © {new Date().getFullYear()} Shapora. All rights reserved.
      </div>
    </footer>
  );
}
