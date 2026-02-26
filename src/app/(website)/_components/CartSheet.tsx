"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import CartIcon from "./CartIcon";

// Mocked cart items 
const cartItems = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 25,
    quantity: 2,
    image: "/products/shirt1.jpg",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 60,
    quantity: 1,
    image: "/products/jacket1.jpg",
  },
];

const CartSheet = () => {
  const hasItems = cartItems.length > 0;

  return (
    <Sheet>
      {/* The trigger button (Cart Icon) */}
      <SheetTrigger asChild>
        <button className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-100">
          <CartIcon />
        </button>
      </SheetTrigger>

      {/* The cart drawer */}
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] flex flex-col [&>button.absolute]:hidden"
      >
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle>Your Cart</SheetTitle>
          <SheetClose asChild>
            <button className="p-1 rounded-full hover:bg-gray-100 active:bg-gray-100">
              <X size={20} />
            </button>
          </SheetClose>
        </SheetHeader>

        {/* Cart Items */}
        <div className="p-2 flex flex-col h-full">
          {hasItems ? (
            <div className="flex-1 overflow-y-auto space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 border-b pb-2"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">${item.price * item.quantity}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-500">No products in the cart</p>
            </div>
          )}

          {/* Footer buttons */}
          <div className="mt-auto space-y-2">
            <Button className="w-full btn">Checkout</Button>
            <Button
              //   variant="outline"
              className="w-full btn"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
