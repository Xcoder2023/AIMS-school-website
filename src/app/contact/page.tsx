import CampusLocation from "@/components/contact/CampusLocation";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import CTA from "@/components/contact/CTA";
import Hero from "@/components/contact/Hero";



export default function NewsPage() {
  return (
    <main>
      <Hero />
     <ContactInfo/>
     <ContactForm/>
     <CampusLocation/>
     <CTA/>
    </main>
  );
}