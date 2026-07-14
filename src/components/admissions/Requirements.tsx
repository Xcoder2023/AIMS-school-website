"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import { admissionRequirements } from "@/data/addmission/admissionRequirements";

export default function Requirements() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          center
          title={admissionRequirements.badge}
          subtitle={admissionRequirements.title}
          description={admissionRequirements.description}
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {/* Eligibility */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h3 className="mb-8 text-2xl font-bold text-slate-900">
              Who Can Apply?
            </h3>

            <div className="space-y-5">
              {admissionRequirements.eligibility.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 flex-shrink-0 text-[#0F4C81]"
                  />

                  <p className="leading-7 text-slate-600">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Documents */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h3 className="mb-8 text-2xl font-bold text-slate-900">
              Required Documents
            </h3>

            <div className="space-y-5">
              {admissionRequirements.documents.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 flex-shrink-0 text-[#0F4C81]"
                  />

                  <p className="leading-7 text-slate-600">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}