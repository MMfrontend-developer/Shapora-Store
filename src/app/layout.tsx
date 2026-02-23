import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
export const metadata: Metadata = {
  metadataBase: new URL("https://shapora-ecommerce.vercel.app"),
  title: {
    default: "Shapora | Timeless Fashion for Everyone",
    template: "%s | Shapora"
  },
  description: "Discover timeless fashion for Men, Women, and Kids at Shapora. Quality clothing crafted for comfort and confidence.",
  keywords: ["fashion", "e-commerce", "clothing", "menswear", "womenswear", "kids fashion", "Shapora store"],
  authors: [{ name: "Shapora Team" }],
  creator: "Shapora",
  publisher: "Shapora",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shapora-ecommerce.vercel.app",
    siteName: "Shapora",
    title: "Shapora | Timeless Fashion for Everyone",
    description: "Discover timeless fashion for Men, Women, and Kids at Shapora. Quality clothing crafted for comfort and confidence.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shapora E-Commerce Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shapora | Timeless Fashion for Everyone",
    description: "Discover timeless fashion for Men, Women, and Kids at Shapora. Quality clothing crafted for comfort and confidence.",
    images: ["/og-image.jpg"],
    creator: "@shapora",
  },
  icons: {
    icon: '/shapora-logo.png',
    shortcut: '/shapora-logo.png',
    apple: '/shapora-logo.png',
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
