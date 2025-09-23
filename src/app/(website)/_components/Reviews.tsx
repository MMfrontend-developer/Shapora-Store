// components/Reviews.tsx
"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      text: "Absolutely love the quality of the clothes! Delivery was super fast and the packaging was neat, every piece feels thoughtfully designed and incredibly comfortable, i can’t get enough of it.",
      name: "Doe Johnson",
      image: "/doe-johnson.jpg",
    },
    {
      id: 2,
      text: "Great customer service and the fit was perfect. I’ve already ordered twice and will keep coming back.  I picked up a few items from their Men’s collection and was blown away by the craftsmanship..",
      name: "David Lee",
      image: "/david.jpg",
    },
    {
      id: 3,
      text: "I loved the quality of the dresses I ordered, and my daughter adored her Mini Mode pieces. Stylish, affordable, and comfortable! Got so many compliments on my outfit, i like it so much.",
      name: "Aisha Bello",
      image: "/aisha.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10"> ⭐ What Our Shoppers Say</h2>

        <Carousel className="w-full">
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-indigo-50 rounded-2xl shadow-md p-6 flex flex-col min-h-[360px] h-full">
                  <p className="text-gray-900 italic flex-grow">
                    “{review.text}”
                  </p>

                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-15 h-15 rounded-full overflow-hidden border-2 border-gray-200">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={58}
                        height={58}
                        className="object-cover"
                        style={{ width: 58, height: 58 }}
                      />
                    </div>
                    <span className="font-semibold text-gray-900">
                      {review.name}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation buttons - hidden on mobile */}
          <CarouselPrevious className="flex md:hidden left-0" />
          <CarouselNext className="flex md:hidden right-0" />
        </Carousel>
      </div>
    </section>
  );
}
