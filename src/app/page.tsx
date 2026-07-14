
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Programs from "@/components/home/Programs";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Principal from "@/components/home/Principal";
import CampusLife from "@/components/home/CampusLife";
import News from "@/components/home/News";
import Events from "@/components/home/Events";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <WhyChooseUs />
        <Principal />
        <CampusLife />
        <News />
        <Events />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>

    </>
  );
}