"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PromoBanner from "../_components/PromoBannerProps";
import { Users, ShieldCheck, Star, Palette } from "lucide-react";
import WhyUs from "./_components/WhyUs";
import Reviews from "../_components/Reviews";
import Footer from "../_components/Footer";
export default function AboutPage() {

      const features = [
    {
      title: "Premium Quality",
      description:
        "Crafted with care using soft, durable fabrics designed to last and feel amazing.",
      icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Timeless Style",
      description:
        "Clean silhouettes and versatile pieces you can wear season after season.",
      icon: <Star className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "In-House Design",
      description:
        "Every detail is imagined by our in-house design team to bring you standout staples.",
      icon: <Palette className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "For Every Body",
      description:
        "Inclusive fits and sizes designed to flatter all shapes, ages, and styles.",
      icon: <Users className="w-8 h-8 text-orange-500" />,
    },
  ];
  
  return (
    <div>
         {/* Promo Banner */}
                      <PromoBanner
                        prefix="Get"
                        highlight="15% off"
                        suffix="on your first order!"
                      />

    <main className="container mx-auto px-4 py-16">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        About <span className="text-orange-500">Shapora</span>
      </motion.h1>

      {/* Intro Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-900 leading-relaxed font-semibold">
            At <span className="font-semibold text-orange-500">Shapora</span>, we
            believe fashion is more than just clothing—it’s a lifestyle. Our
            mission is to bring timeless, affordable, and high-quality fashion to
            men, women, and kids across the globe.
          </p>
          <p className="text-gray-900 mt-4 leading-relaxed font-semibold">
            Whether you’re looking for classic styles or the latest trends, we’ve
            got you covered with pieces that combine comfort and elegance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="/about-us.jpg" 
            alt="About Shapora"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="grid md:grid-cols-3 gap-8 text-center mb-20">
        {[
          {
            title: "Quality First",
            desc: "We prioritize durable, sustainable, and premium materials in every collection.",
            icon: "🧵",
          },
          {
            title: "Customer Focused",
            desc: "Our team is dedicated to providing top-notch service and quick support.",
            icon: "🤝",
          },
          {
            title: "Fast Delivery",
            desc: "Wherever you are, we ensure your order gets to you quickly and securely.",
            icon: "🚚",
          },
        ].map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg active:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{value.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
            <p className="text-base font-medium">{value.desc}</p>
          </motion.div>
        ))}
      </section>

            {/* Meet the Team */}
       <section>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Meet Our <span className="text-orange-500">Team</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              name: "Jane Wright",
              role: "Founder & CEO",
              image: "/Jane Wright.jpg",
              bio: "Visionary leader with a passion for building sustainable fashion brands.",
            },
            {
              name: "Michael Smith",
              role: "Head of Design",
              image: "/Michael Smith.jpg",
              bio: "Creates modern, sleek, and user-focused fashion designs.",
            },
            {
              name: "Noora Jadeed",
              role: "Marketing Lead",
              image: "/Noora Jadeed.jpg",
              bio: "Expert in branding and marketing strategies that engage audiences.",
            },
          ].map((member, index) => {
            const [flipped, setFlipped] = useState(false);


            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group [perspective:1000px]"
                onClick={() => setFlipped(!flipped)} // mobile toggle
              >
                <div
                  className={`relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d]
                    ${flipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"}`}
                >
                  {/* Front */}
                  <div className="absolute inset-0 bg-gray-100 rounded-xl shadow-md overflow-hidden backface-hidden">
                    <div className="relative w-full h-48">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-semibold text-xl">{member.name}</h3>
                      <p className="text-gray-600">{member.role}</p>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 bg-gray-900 text-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] backface-hidden">
                    <h3 className="font-semibold text-xl mb-2">{member.name}</h3>
                    <p className="text-sm">{member.bio}</p>
                    <div className="flex justify-center gap-4 mt-4">
                      <a href="#" className="hover:underline active:underline">LinkedIn</a>
                      <a href="#" className="hover:underline active:underline">Twitter</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      
        {/* Why Us Section */}
     <div>
      <WhyUs heading="Why Shapora" subheading="Style, Comfort & More – Here’s Why You’ll Love Us" features={features} />
    </div>

 {/* Reviews Section */}
      <Reviews />
       </main>
     <Footer />
     </div>
  );
}
