  import AboutHero from "@/components/about/AboutHero";
  import AdmissionsCTA from "@/components/about/AdmissionsCTA";
  import Facilities from "@/components/about/Facilities";
  import FAQ from "@/components/about/FAQ";
  import HistoryTimeline from "@/components/about/HistoryTimeline";
  import Leadership from "@/components/about/Leadership";
  import MissionVision from "@/components/about/MissionVision";
  import OurStory from "@/components/about/OurStory";
  import WhyParentsChoose from "@/components/about/WhyParentsChoose";

  export default function AboutPage() {
    return (
      <>
        <AboutHero />
        <OurStory />
        <MissionVision />
        <HistoryTimeline />
        <WhyParentsChoose />
        <Leadership />
        <Facilities />
        <FAQ />
        <AdmissionsCTA />
      </>
    );
  }



