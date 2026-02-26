import NewArrivals from "./_components/NewArrivals";
import Categories from "./_components/Categories";
import FeaturedCloth from "./_components/FeaturedCloth";
import DiscountSection from "./_components/DiscountSection";
import Reviews from "./_components/Reviews";
import HowItWorks from "./_components/HowItWorks";
import StoreBenefits from "./_components/StoreBenefits";
import Footer from "./_components/Footer";
import Partners from "./_components/Partners";
import PromoBanner from "./_components/PromoBannerProps";
import HeroSlideshow from "./_components/HeroSlideshow";


export default function HomePage() {
  const images = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"];

  return (
    <main>
      {/* Promo Banner */}
      <PromoBanner
        prefix="Get"
        highlight="15% off"
        suffix="on your first order!"
      />

      {/* Hero Slideshow (Client Component) */}
      <HeroSlideshow images={images} />

      {/* New Arrivals */}
      <NewArrivals />

      {/* Categories Section */}
      <Categories />

      {/* FeaturedCloth Section */}
      <FeaturedCloth />

      {/* Discount Section */}
      <DiscountSection />

      {/* Reviews Section */}
      <Reviews />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Store Benefits Section */}
      <StoreBenefits />

      {/* Partners Section */}
      <Partners />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
