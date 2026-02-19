"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { products } from "../../data";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import Footer from "../../../_components/Footer";
import PromoBanner from "../../../_components/PromoBannerProps";

const categoryMeta: Record<string, { title: string; description: string }> = {
    men: {
        title: "Men's Collection",
        description: "Discover our premium men's wear — from classic jackets to everyday essentials.",
    },
    women: {
        title: "Women's Collection",
        description: "Elegant and modern styles designed for the confident woman.",
    },
    kids: {
        title: "Kids' Collection",
        description: "Fun, comfy, and durable clothing for your little ones.",
    },
    footwear: {
        title: "Footwear",
        description: "Step up your style with our latest sneakers and shoes.",
    },
    accessories: {
        title: "Accessories",
        description: "Complete your look with our curated collection of hats, bags, and more.",
    },
};

export default function CategoryPage() {
    const params = useParams();
    const slug = (params.category as string).toLowerCase();

    const meta = categoryMeta[slug] || {
        title: slug.charAt(0).toUpperCase() + slug.slice(1),
        description: "Browse our collection.",
    };

    const filtered = products.filter((p) =>
  p.category.map((c) => c.toLowerCase()).includes(slug)
);


    return (
        <div>
            <PromoBanner prefix="Get" highlight="15% off" suffix="on your first order!" />

            <main className="container mx-auto px-4 py-10">
                {/* Back Link */}
                <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition mb-6"
                >
                    <ArrowLeft size={16} /> Back to All Products
                </Link>

                {/* Category Header */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold">{meta.title}</h1>
                    <p className="text-gray-500 mt-2 max-w-xl">{meta.description}</p>
                    <p className="text-sm text-gray-400 mt-1">
                        {filtered.length} {filtered.length === 1 ? "product" : "products"} found
                    </p>
                </div>

                {/* Product Grid */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {filtered.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                                className="bg-gray-100 shadow-md rounded-lg overflow-hidden group hover:shadow-lg"
                            >
                                <Link href={`/products/${product.id}`}>
                                    <div className="relative w-full h-64 overflow-hidden cursor-pointer">
                                        <Image
                                            src={product.images[0]}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </Link>
                                <div className="p-4 flex flex-col items-center">
                                    <h3 className="text-lg font-semibold">{product.name}</h3>
                                    <p className="text-orange-500 font-bold mt-2">
                                        ${product.price.toFixed(2)}
                                    </p>
                                    <AddToCartButton
                                        product={{ ...product, image: product.images[0] }}
                                        className="mt-4 w-full"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No products found in this category.</p>
                        <Link
                            href="/products"
                            className="inline-block mt-4 text-orange-500 hover:underline font-medium"
                        >
                            Browse All Products
                        </Link>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
