// components/Partners.tsx
"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Partners() {
  const partners = [
    { id: 1, name: "Nike", logo: "/Nike-logo.png" },
    { id: 2, name: "Adidas", logo: "/Addidas-logo.png" },
    { id: 3, name: "Zara", logo: "/Zara-logo.png" },
    { id: 4, name: "H&M", logo: "/hm-logo.png" },
    { id: 5, name: "Gucci", logo: "/Gucci-logo.png" },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-8">
          Trusted by Top Brands
        </h2>

        {/* Mobile: Auto-sliding Horizontal Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
              Autoplay({
                delay: 2000, // autoplay every 2s
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {partners.map((partner) => (
                <CarouselItem
                  key={partner.id}
                  className="basis-1/2 sm:basis-1/3 flex justify-center"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="object-contain grayscale hover:grayscale-0 transition"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        {/* Desktop: Grid */}
        <div className="hidden md:flex  flex-wrap justify-center items-center gap-12">
          {partners.map((partner) => (
            <div key={partner.id} className="grayscale hover:grayscale-0 transition">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
