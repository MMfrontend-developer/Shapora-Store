"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import NewArrivals from "./_components/NewArrivals";
import Categories from "./_components/Categories";
import FeaturedCloth from "./_components/FeaturedCloth";
import DiscountSection from "./_components/DiscountSection";
import Reviews from "./_components/Reviews";
import HowItWorks from "./_components/HowItWorks";
import StoreBenefits from "./_components/StoreBenefits";
import Footer from "./_components/Footer";
import Partners from "./_components/Partners";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/hero-1.jpg",
    "/hero-2.jpg",
    "/hero-3.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      3000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main>
        {/* Promo Banner */}
      <div className="w-full bg-black text-white text-center py-3 text-sm font-medium">
        🎉 Get <span className="text-orange-500 font-bold">15% off</span> on your first order!
      </div>

       {/* Hero Slideshow */}
      <section className="relative w-full h-[80vh]">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "top" }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Timeless Fashion for the Modern Wardrobe
          </h1>
          <p className="mt-5 text-lg md:text-xl max-w-2xl">
            Discover timeless fashion for <span className="font-semibold">Men</span>,{" "}
            <span className="font-semibold">Women</span>, and{" "}
            <span className="font-semibold">Kids</span> – crafted for comfort,
            designed for confidence.
          </p>
          <Button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 py-5 rounded-full">
            Explore the Collection
          </Button>
        </div>
      </section>

       {/* New Arrivals */}
            <NewArrivals />

              {/* Categories Section */}
      <Categories />

       {/* FeaturedCloth Section */}
       <FeaturedCloth />

       {/* Discount Section */}
       <DiscountSection />

        {/* Reviews Section */}
       <Reviews />  

        {/* How It Works Section */}
       <HowItWorks />

        {/* Store Benefits Section */}
       <StoreBenefits /> 

 {/* Partners Section */}
       <Partners />

        {/* Footer Section */}
       <Footer /> 
    </main>
  );
}
