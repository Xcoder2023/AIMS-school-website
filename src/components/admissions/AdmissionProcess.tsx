"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import { admissionProcess } from "@/data/addmission/admissionProcess";
export default function AdmissionProcess() {
  return (
    <Section className="bg-white">
      <Container>
        <Heading
          center
          title={admissionProcess.badge}
          subtitle={admissionProcess.title}
          description={admissionProcess.description}
        />

        <div className="relative mt-20">
          {/* Desktop Connecting Line */}
          <div className="absolute left-0 right-0 top-12 hidden h-1 bg-slate-200 lg:block" />

          <div className="relative grid gap-10 lg:grid-cols-4">
            {admissionProcess.steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className="relative text-center"
                >
                  {/* Number Circle */}
                  <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#0F4C81] shadow-xl">
                    <Icon size={34} className="text-white" />
                  </div>

                  {/* Step Number */}
                  <span className="mt-6 inline-block rounded-full bg-[#0F4C81]/10 px-4 py-1 text-sm font-bold text-[#0F4C81]">
                    Step {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}