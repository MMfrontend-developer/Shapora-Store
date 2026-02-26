"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSlideshow({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setCurrentIndex((prev) => (prev + 1) % images.length),
            3000
        );
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative w-full h-[80vh]">
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Hero ${index + 1}`}
                        fill
                        className="object-cover object-top"
                        priority={index === 0}
                        sizes="100vw"
                    />
                </div>
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Hero Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
                    Timeless Fashion for the Modern Wardrobe
                </h1>
                <p className="mt-5 text-lg md:text-xl max-w-2xl">
                    Discover timeless fashion for{" "}
                    <span className="font-semibold">Men</span>,{" "}
                    <span className="font-semibold">Women</span>, and{" "}
                    <span className="font-semibold">Kids</span> – crafted for comfort,
                    designed for confidence.
                </p>
                <Link href="/products">
                    <Button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 py-5 rounded-full">
                        Shop All Products
                    </Button>
                </Link>
            </div>
        </section>
    );
}
