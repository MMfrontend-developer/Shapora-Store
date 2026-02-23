import type { Metadata } from "next";
import Header from "./_components/Header";
export const metadata: Metadata = {
  title: "Shapora E-Commerce Store",
  description: "An e-commerce website for fashion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shapora",
    "url": "https://shapora-ecommerce.vercel.app",
    "logo": "https://shapora-ecommerce.vercel.app/shapora-logo.png",
    "description": "Timeless fashion for the modern wardrobe.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-708-352-8377",
      "contactType": "customer service",
      "areaServed": "NG",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://twitter.com/shapora",
      "https://instagram.com/shapora"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Page content */}
      <main className=""> {children} </main>
    </div>
  );
}
