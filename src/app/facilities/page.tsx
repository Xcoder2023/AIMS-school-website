import CampusHighlights from "@/components/facilities/CampusHighlights";
import CTA from "@/components/facilities/CTA";
import Hero from "@/components/facilities/Hero";
import OurFacilities from "@/components/facilities/OurFacilities";
import Safety from "@/components/facilities/Safety";


export default function FacilitiesPage() {
  return (
    <main>
      <Hero />
      <OurFacilities />
      <CampusHighlights />
      <Safety />
      <CTA />
    </main>
  );
}