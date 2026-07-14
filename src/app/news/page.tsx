import FeaturedNews from "@/components/news/FeaturedNews";
import Hero from "@/components/news/Hero";
import LatestNews from "@/components/news/LatestNews";
import UpcomingEvents from "@/components/news/UpcomingEvents";


export default function NewsPage() {
  return (
    <main>
      <Hero />
      <FeaturedNews />
      <LatestNews />
      <UpcomingEvents />
      {/* <CTA /> */}
    </main>
  );
}