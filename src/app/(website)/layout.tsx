import type { Metadata } from "next";
import Header from "./_components/Header";
export const metadata: Metadata = {
  title: "My E-Commerce Store",
  description: "An e-commerce website built with Next.js and TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* Page content */}
        <main className=""> {children} </main>
      </div>
  );
}
