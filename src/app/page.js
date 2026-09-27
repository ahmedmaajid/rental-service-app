import FanHighlight from "@/components/layout/FanHighlight";
import Hero from "@/components/layout/Hero";
import HowItWorks from "@/components/layout/HowItWorks";
import CategoryGrid from "@/components/listings/CategoryGrid";
import FeaturedRentals from "@/components/listings/FeaturedRentals";
import NewListings from "@/components/listings/NewListings";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <CategoryGrid />
      <FeaturedRentals />
      <HowItWorks />
      <NewListings />
      <FanHighlight />
    </main>
  );
}
