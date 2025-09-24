/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import CartIcon from "./CartIcon";
import { usePathname } from "next/navigation";
import { User, X, Eye, EyeOff } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ’s" },
    { href: "/contact", label: "Contact" },
  ];

  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className="w-full border-b bg-white shadow-md sticky top-0 z-50">
        <header className="container flex items-center justify-between px-4 py-1 sm:px-6 sm:py-4 mx-auto">
        {/* Logo */}
        <img
          src="/shapora-logo.png"
          className="h-20 w-auto sm:h-16 sm:w-20"
          alt="Shapora Logo"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-semibold transition-colors ${
                pathname === link.href
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-base-700 hover:text-orange-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile icons and menu button */}
        <div className="flex md:hidden items-center space-x-2">
          {/* User Modal */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <User size={24} />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm w-full p-6 rounded-lg [&>button.absolute]:hidden">
              <DialogHeader className="flex flex-row items-center justify-between">
                <DialogTitle className="text-xl font-semibold">
                  Login
                </DialogTitle>
                <DialogClose asChild>
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <X size={20} />
                  </button>
                </DialogClose>
              </DialogHeader>
              <DialogDescription className="text-sm  text-center">
                Enter your credentials to access your account
              </DialogDescription>

              <form className="space-y-4 mt-4">
                <div>
                  <Label
                    htmlFor="email"
                    className="mb-2 block font-medium text-gray-800"
                  >
                    Username or Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="border-2 border-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  />
                </div>

                <div className="relative">
                  <Label
                    htmlFor="password"
                    className="mb-2 block font-medium text-gray-800"
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="border-2 border-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 pr-10"
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-2 top-10 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    tabIndex={0}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      className="border-2 border-gray-400"
                      id="remember"
                    />
                    <Label htmlFor="remember">Remember Me</Label>
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Lost your password?
                  </a>
                </div>

                <Button type="submit" className="w-full btn">
                  Login
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          {/* Cart Drawer */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-full hover:bg-gray-100">
                 <CartIcon />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] flex flex-col [&>button.absolute]:hidden"
            >
              <SheetHeader className="flex flex-row items-center justify-between">
                <SheetTitle>Your Cart</SheetTitle>
                <SheetClose asChild>
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <X size={20} />
                  </button>
                </SheetClose>
              </SheetHeader>

              {/* Empty cart message centered */}
              <div className="p-2 flex flex-col h-full">
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-gray-500">No products in the cart</p>
                </div>

                {/* Continue Shopping button at bottom */}
                <div className="mt-auto">
                  <Button className="w-full btn">Continue Shopping</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Hamburger menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 flex flex-col">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6 p-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-semibold transition-all duration-300 ${
                      pathname === link.href
                        ? "text-orange-500 border-l-3 border-orange-500 pl-1 hover:translate-x-2"
                        : "text-base-700 hover:text-orange-500 hover:translate-x-2"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/*Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* User Modal */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <User size={24} />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm w-full p-6 rounded-lg [&>button.absolute]:hidden">
              <DialogHeader className="flex flex-row items-center justify-between">
                <DialogTitle className="text-xl font-semibold">
                  Login
                </DialogTitle>
                <DialogClose asChild>
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <X size={20} />
                  </button>
                </DialogClose>
              </DialogHeader>
              <DialogDescription className="text-sm  text-center">
                Enter your credentials to access your account
              </DialogDescription>

              <form className="space-y-4 mt-4">
                <div>
                  <Label
                    htmlFor="email"
                    className="mb-2 block font-medium text-gray-800"
                  >
                    Username or Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="border-2 border-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  />
                </div>

                <div className="relative">
                  <Label
                    htmlFor="password"
                    className="mb-2 block font-medium text-gray-800"
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="border-2 border-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 pr-10"
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-2 top-10 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    tabIndex={0}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      className="border-2 border-gray-400"
                      id="remember"
                    />
                    <Label htmlFor="remember">Remember Me</Label>
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Lost your password?
                  </a>
                </div>

                <Button type="submit" className="w-full btn">
                  Login
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          {/* Cart Drawer */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-full hover:bg-gray-100">
                 <CartIcon />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] flex flex-col [&>button.absolute]:hidden"
            >
              <SheetHeader className="flex flex-row items-center justify-between">
                <SheetTitle>Your Cart</SheetTitle>
                <SheetClose asChild>
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <X size={20} />
                  </button>
                </SheetClose>
              </SheetHeader>

              {/* Empty cart message centered */}
              <div className="p-2 flex flex-col h-full">
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-gray-500">No products in the cart</p>
                </div>

                {/* Continue Shopping button at bottom */}
                <div className="mt-auto">
                  <Button className="w-full btn">Continue Shopping</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
};

export default Header;
