// components/CartIcon.tsx
import { ShoppingCart } from "lucide-react";

export default function CartIcon() {
  // Temporary hardcoded cart count
  const cartCount = 0;

  return (
    <div className="relative">
      <ShoppingCart className="w-6 h-6" />
      <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-medium px-1.5 py-0.5 rounded-full">
        {cartCount}
      </span>
    </div>
  );
}
