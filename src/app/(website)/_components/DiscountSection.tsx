"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DiscountSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-15T15:59:59").getTime(); // set your end date here

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
      const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/full-shot-discount-img.jpg" // replace with your discount bg image
        alt="Summer Sale"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Hurry Up! Get Up to{" "}
          <span className="text-orange-500">50% Off</span>
        </h2>
        <p className="mb-8 text-lg md:text-xl">
          Step into summer with sun-ready styles at can&apos;t-miss prices.
        </p>

        {/* Countdown Timer */}
       <div className="grid grid-cols-4 gap-6 justify-center mb-8">
          <div className="flex flex-col items-center bg-white/30 px-4 py-3 rounded-lg">
            <span className="text-2xl md:text-3xl font-bold">{timeLeft.days}</span>
            <span className="text-sm md:text-base opacity-80">Days</span>
          </div>
          <div className="flex flex-col items-center bg-white/30 px-4 py-3 rounded-lg">
            <span className="text-2xl md:text-3xl font-bold">{timeLeft.hours}</span>
            <span className="text-sm md:text-base opacity-80">Hours</span>
          </div>
          <div className="flex flex-col items-center bg-white/30 px-4 py-3 rounded-lg">
            <span className="text-2xl md:text-3xl font-bold">{timeLeft.minutes}</span>
            <span className="text-sm md:text-base opacity-80">Mins</span>
          </div>
          <div className="flex flex-col items-center bg-white/30 px-4 py-3 rounded-lg">
            <span className="text-2xl md:text-3xl font-bold">{timeLeft.seconds}</span>
            <span className="text-sm md:text-base opacity-80">Sec</span>
          </div>
        </div>

        <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-full shadow-md">
          Shop the Summer Sale
        </Button>
      </div>
    </section>
  );
}
