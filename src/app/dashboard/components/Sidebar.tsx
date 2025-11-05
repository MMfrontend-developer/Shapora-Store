// app/dashboard/components/Sidebar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  X,
  LayoutDashboard,
  ShoppingBag,
  Box,
  Users,
  DollarSign,
  BarChart2,
  Tag,
  Truck,
  Settings,
  LogOut,
  FileText,
  Zap
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const links = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/orders", label: "Orders", icon: FileText },
  { href: "/dashboard/products", label: "Products", icon: ShoppingBag },
  { href: "/dashboard/categories", label: "Categories", icon: Box },
  { href: "/dashboard/customers", label: "Customers", icon: Users },
  { href: "/dashboard/discounts", label: "Discounts", icon: Tag },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/dashboard/inventory", label: "Inventory", icon: Zap },
  { href: "/dashboard/shipping", label: "Shipping", icon: Truck },
  { href: "/dashboard/payments", label: "Payments", icon: DollarSign },
  { href: "/dashboard/content", label: "Content", icon: FileText },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname() || "/";

  return (
    <>
      {/* Overlay for mobile when sidebar open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/40"
          onClick={() => setIsOpen(false)}
          aria-hidden
        />
      )}

      <aside
        className={`fixed md:relative z-50 flex flex-col bg-white border-r border-gray-200 w-64 min-h-screen transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        aria-label="Sidebar"
      >
        <div className="flex items-center justify-between px-6 py-5.5 border-b">
          <h1 className="text-2xl font-bold text-orange-600">Shapora</h1>
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col mt-4 space-y-1 px-1" aria-label="Main navigation">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-5 py-2 rounded-r-full transition-colors text-sm font-medium
                  ${isActive
                    ? "bg-orange-500 !text-white hover:!bg-orange-500 hover:!text-white"
                    : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"}
                `}
              >
                <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-gray-600"}`} />
                <span className="truncate">{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto border-t p-4">
          <button
            className="flex items-center gap-3 w-full px-5 py-2 text-red-600 hover:bg-red-100 rounded-r-full font-medium"
            type="button"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
