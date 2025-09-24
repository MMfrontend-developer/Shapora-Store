// components/Partners.tsx
import Image from "next/image"

export default function Partners() {
  const partners = [
    { id: 1, name: "Nike", logo: "/Nike-logo.png" },
    { id: 2, name: "Adidas", logo: "/Addidas-logo.png" },
    { id: 3, name: "Zara", logo: "/Zara-Logo.png" },
    { id: 4, name: "H&M", logo: "/hm-logo.png" },
    { id: 5, name: "Gucci", logo: "/Gucci-Logo.png" },
  ]

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-8">
          Trusted by Top Brands
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <div key={partner.id} className="grayscale hover:grayscale-0 transition">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
