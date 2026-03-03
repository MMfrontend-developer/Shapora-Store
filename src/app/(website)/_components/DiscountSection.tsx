"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function DiscountSection() {
  const router = useRouter();
  const { addToCart, setIsCartOpen } = useCart();
  const [isExpired, setIsExpired] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2026-06-27T23:59:59").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setIsExpired(true);
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

  const handleShopNow = () => {
    if (!isExpired) {
      // Add a special Summer Sale product to the cart so it shows up at checkout
      addToCart({
        id: "summer-sale-special",
        name: "Summer Sale Collection",
        price: 49.99,
        image: "/full-shot-discount-img.jpg",
      });
      // Close cart drawer since we're going straight to checkout
      setIsCartOpen(false);
      router.push("/checkout");
    }
  };

  return (
    <section
      onClick={handleShopNow}
      className={`relative w-full h-[80vh] flex items-center justify-center overflow-hidden transition-all duration-300 ${!isExpired ? "cursor-pointer group/section" : "cursor-default"
        }`}
    >
      {/* Background Image */}
      <Image
        src="/full-shot-discount-img.jpg"
        alt="Summer Sale"
        fill
        className="object-cover transition-transform duration-700 group-hover/section:scale-105 ease-in-out"
        priority
      />

      {/* Overlay - lightened for better background visibility */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-colors duration-300 group-hover/section:bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl animate-in fade-in zoom-in duration-1000">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Hurry Up! Get Up to{" "}
          <span className="text-orange-500">50% Off</span>
        </h2>
        <p className="mb-8 text-lg md:text-xl text-zinc-100 drop-shadow-md">
          Step into summer with sun-ready styles at can&apos;t-miss prices.
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 md:gap-6 justify-center mb-10">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Mins", value: timeLeft.minutes },
            { label: "Sec", value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white/20 backdrop-blur-md border border-white/30 px-3 py-2 md:px-6 md:py-4 rounded-xl shadow-xl min-w-[70px] md:min-w-[100px]"
            >
              <span className="text-2xl md:text-4xl font-bold font-mono">{item.value}</span>
              <span className="text-[10px] md:text-xs uppercase tracking-wider font-semibold opacity-90">{item.label}</span>
            </div>
          ))}
        </div>

        <Button
          disabled={isExpired}
          className={`px-10 py-6 text-lg rounded-full font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${isExpired
            ? "bg-zinc-600 cursor-not-allowed grayscale"
            : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
          onClick={(e) => {
            e.stopPropagation(); // Prevent double trigger since section also has onClick
            handleShopNow();
          }}
        >
          {isExpired ? "Sale Ended" : "Shop the Summer Sale"}
        </Button>
      </div>
    </section>
  );
}
