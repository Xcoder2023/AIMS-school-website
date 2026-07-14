"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";
import Section from "../ui/Section";

export default function AdmissionCTA() {
  return (
    <Section className="relative overflow-hidden bg-[#0F4C81] py-24">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_35%)]" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center text-white"
        >
          <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide backdrop-blur-sm">
            Admissions Open
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Begin Your Child's Journey to Excellence
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Join Akanu Ibiam Memorial Seminary and become part of a community
            committed to academic excellence, Christian values, leadership, and
            character development.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              href="/admissions"
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