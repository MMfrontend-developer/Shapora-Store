"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FeaturedCloth() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        {/* Left Side - Image */}
        <div className="md:col-span-3 relative w-full h-[500px] rounded-lg overflow-hidden shadow-md">
          <Image
            src="/men’s-wear.jpg" // replace with your cloth image
            alt="Featured Outfit"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side - Write-up Card */}
        <div className="md:col-span-2 relative">
          <div className="bg-gray-200 p-8 rounded-lg shadow-xl border border-gray-200 relative z-10 -mt-12 md:-ml-12 transform hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-4">Up & Down Outfit</h2>
            <p className="text-gray-900 mb-6 leading-relaxed">
              Elevate your style with our premium up and down set — designed for
              comfort and sophistication. Perfect for casual outings or special
              occasions.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-md">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
