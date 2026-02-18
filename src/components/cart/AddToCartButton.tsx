"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";
import { Minus, Plus, ShoppingBag } from "lucide-react";

interface AddToCartButtonProps {
    product: Product;
    showQuantity?: boolean;
    className?: string;
}

export const AddToCartButton = ({
    product,
    showQuantity = false,
    className
}: AddToCartButtonProps) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, quantity);
        setQuantity(1);
    };

    const increment = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setQuantity(prev => prev + 1);
    };

    const decrement = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (quantity > 1) setQuantity(prev => prev - 1);
    };

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {showQuantity && (
                <div className="flex items-center border rounded-md mr-2 bg-background">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-none"
                        onClick={decrement}
                        disabled={quantity <= 1}
                    >
                        <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm">{quantity}</span>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-none"
                        onClick={increment}
                    >
                        <Plus className="h-3 w-3" />
                    </Button>
                </div>
            )}
            <Button
                onClick={handleAddToCart}
                className="flex-1 gap-2  hover:bg-orange-600 active:bg-orange-600 text-white ease-in-out duration-500"
            >
                <ShoppingBag className="h-4 w-4" />
                Add to Cart
            </Button>
        </div>
    );
};
