"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";
import Section from "../ui/Section";

export default function CTA() {
  return (
    <Section className="relative overflow-hidden bg-[#0F4C81] py-24">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center text-white"
        >
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
            Visit Our Campus
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Experience the AIMS Environment First-Hand
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            We invite you to visit our campus, explore our facilities, meet our
            dedicated staff, and discover why Akanu Ibiam Memorial Seminary is
            the ideal place for your child's academic, spiritual and personal
            development.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
            >
              <MapPin size={18} />
              Schedule a Visit
            </Button>

            <Button
              href="/admissions"
            >
              Apply for Admission
              <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}