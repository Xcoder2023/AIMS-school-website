"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";
import Section from "../ui/Section";

export default function CTA() {
  return (
    <Section className="relative overflow-hidden bg-[#0F4C81] py-24">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center text-white"
        >
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
            Admissions Open
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Give Your Child the Best Start for the Future
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Join Akanu Ibiam Memorial Seminary and become part of a community
            committed to academic excellence, Christian values, discipline,
            leadership and holistic development.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/apply"
            >
              Apply Now
              <ArrowRight size={18} />
            </Button>

            <Button
              href="/contact"
            >
              <PhoneCall size={18} />
              Contact Admissions
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}