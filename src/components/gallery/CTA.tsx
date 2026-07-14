"use client";

import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <Section className="relative overflow-hidden bg-[#0F4C81] py-24">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-300/10 blur-3xl" />
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
            <Camera size={16} className="mr-2" />
            Discover AIMS
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Every Picture Tells Our Story
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Experience the vibrant learning environment, Christian values,
            student activities and memorable moments that make Akanu Ibiam
            Memorial Seminary a place where students grow academically,
            spiritually and personally.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/admissions"
            >
              Apply for Admission
              <ArrowRight size={18} />
            </Button>

            <Button
              href="/contact"
            >
              Schedule a Visit
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}