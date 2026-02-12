// app/(website)/products/[id]/page.tsx
"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { products } from "../data";
import { Button } from "@/components/ui/button";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import Footer from "../../_components/Footer";
import PromoBanner from "../../_components/PromoBannerProps";

export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);

  const [selectedImage, setSelectedImage] = useState(
    product ? product.images[0] : ""
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) return notFound();

  return (
    <div>
      {/* Promo Banner */}
      <PromoBanner
        prefix="Get"
        highlight="15% off"
        suffix="on your first order!"
      />

      <main className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-12">
        {/* Product Gallery */}
        <div>
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-md">
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex gap-4 mt-4">
            {product.images.map((img) => (
              <div
                key={img}
                onClick={() => setSelectedImage(img)}
                className={`relative w-24 h-24 cursor-pointer rounded-md overflow-hidden border-2 ${selectedImage === img
                  ? "border-orange-500"
                  : "border-gray-200"
                  }`}
              >
                <Image src={img} alt="thumb" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <p className="text-2xl text-orange-600 font-semibold mb-6">
            ${product.price}
          </p>
          <p className="text-gray-900 font-medium mb-6">{product.description}</p>

          {/* Size Selector */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Choose Size:</h3>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-md border transition ${selectedSize === size
                    ? "bg-orange-500 text-white border-orange-500"
                    : "border-gray-300 hover:border-orange-500 active:border-orange-500"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <AddToCartButton
              product={{
                ...product,
                image: product.images[0]
              }}
              className="w-full md:w-auto"
            />
            <Button className="bg-black hover:bg-gray-900 active:bg-gray-900 text-white px-6 py-3">
              Buy Now
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
