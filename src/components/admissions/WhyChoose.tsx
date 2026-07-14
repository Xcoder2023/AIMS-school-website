"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import { admissionBenefits } from "@/data/addmission/admissionHero";

export default function WhyChoose() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          center
          title={admissionBenefits.badge}
          subtitle={admissionBenefits.title}
          description={admissionBenefits.description}
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {admissionBenefits.benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0F4C81] hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F4C81]/10 transition-all duration-300 group-hover:bg-[#0F4C81]">
                  <Icon
                    size={30}
                    className="text-[#0F4C81] transition-all duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}