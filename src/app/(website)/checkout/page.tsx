"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import { Trash2, CheckCircle } from "lucide-react";

export default function CheckoutPage() {
    const { cartItems, cartTotal, removeFromCart, updateQuantity, clearCart } =
        useCart();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderCompleted, setOrderCompleted] = useState(false);

    // Open modal only
    const handlePlaceOrder = () => {
        setIsModalOpen(true);
    };

    // Confirm modal → clear cart → show success state
    const handleConfirmModal = () => {
        clearCart();
        setIsModalOpen(false);
        setOrderCompleted(true);
    };

    // ✅ After order confirmed
    if (orderCompleted) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <CheckCircle className="mx-auto text-green-600 mb-4" size={60} />
                <h1 className="text-3xl font-bold mb-4">
                    Order Placed Successfully! (This is a demo)
                </h1>
                <p className="text-gray-600 mb-6">
                    Thank you for your purchase.
                </p>

                <Link href="/products">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        Continue Shopping
                    </Button>
                </Link>
            </div>
        );
    }

    // ✅ Show empty cart only if NOT in success flow
    if (cartItems.length === 0 && !isModalOpen) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl font-bold mb-6">Your cart is empty</h1>
                <Link href="/products">
                    <Button>Continue Shopping</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-10">Checkout</h1>

            <div className="grid lg:grid-cols-3 gap-10">
                {/* Cart Items */}
                <div className="lg:col-span-2 overflow-x-auto">
                    <div className="hidden md:block">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Product</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead>Total</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {cartItems.map((item) => (
                                    <TableRow key={item.cartItemId}>
                                        <TableCell className="flex items-center gap-4">
                                            <div className="relative h-16 w-16 overflow-hidden rounded-md border">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <span className="font-medium">{item.name}</span>
                                            {item.selectedSize && (
                                                <span className="text-xs text-gray-500 ml-1">(Size: {item.selectedSize})</span>
                                            )}
                                        </TableCell>
                                        <TableCell>${item.price.toFixed(2)}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center border rounded-md w-fit">
                                                <button
                                                    className="px-3 py-1"
                                                    onClick={() =>
                                                        updateQuantity(item.cartItemId, item.quantity - 1)
                                                    }
                                                    disabled={item.quantity <= 1}
                                                >
                                                    -
                                                </button>
                                                <span className="px-3">{item.quantity}</span>
                                                <button
                                                    className="px-3 py-1"
                                                    onClick={() =>
                                                        updateQuantity(item.cartItemId, item.quantity + 1)
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="text-destructive"
                                                onClick={() => removeFromCart(item.cartItemId)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 p-6 rounded-lg h-fit sticky top-6">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between mb-4">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>

                    <div className="border-t pt-4 mb-6">
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                    </div>

                    <Button
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                        onClick={handlePlaceOrder}
                    >
                        Place Order
                    </Button>
                </div>
            </div>

            {/* Success Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 w-[90%] max-w-md text-center shadow-xl">
                        <CheckCircle
                            className="mx-auto text-green-600 mb-4"
                            size={50}
                        />
                        <h2 className="text-2xl font-bold mb-2">
                            Confirm Order
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Are you sure you want to place this order?
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-4">
                            <Button
                                variant="outline"
                                className="sm:flex-1"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel
                            </Button>

                            <Button
                                className="sm:flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                                onClick={handleConfirmModal}
                            >
                                Confirm Order
                            </Button>
                        </div>



                    </div>
                </div>
            )}
        </div>
    );
}
