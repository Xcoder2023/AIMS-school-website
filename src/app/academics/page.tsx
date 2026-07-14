import AcademicOverview from "@/components/academics/AcademicOverview";
import AdmissionCTA from "@/components/academics/AdmissionCTA";
import BeyondAcademics from "@/components/academics/BeyondAcademics";
import Hero from "@/components/academics/Hero";
import LearningEnvironment from "@/components/academics/LearningEnvironment";
import SubjectsOffered from "@/components/academics/SubjectsOffered";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <AcademicOverview />
      <SubjectsOffered />
       <LearningEnvironment />
      <BeyondAcademics/>
       <AdmissionCTA />
    </>
  );
}
