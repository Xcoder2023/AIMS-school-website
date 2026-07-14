import AdmissionProcess from "@/components/admissions/AdmissionProcess";
import CTA from "@/components/admissions/CTA";
import FAQ from "@/components/admissions/FAQ";
import Hero from "@/components/admissions/Hero";
import Requirements from "@/components/admissions/Requirements";
import WhyChoose from "@/components/admissions/WhyChoose";


export default function AdmissionsPage() {
  return (
    <main>
      <Hero />
      <WhyChoose />
      <AdmissionProcess />
      <Requirements />
      <FAQ />
      <CTA />
    </main>
  );
}