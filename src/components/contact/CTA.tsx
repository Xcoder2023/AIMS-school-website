"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <Section className="relative overflow-hidden bg-[#0F4C81] py-24">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center text-white"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
            <PhoneCall size={36} />
          </div>

          <h2 className="mt-8 text-4xl font-bold md:text-5xl">
            Ready to Join the AIMS Family?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Discover a learning environment where academic excellence,
            Christian values, leadership and character development come
            together to prepare students for a successful future.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
            <Button
              href="/admissions"
            >
              Apply for Admission
            </Button>

            <Button
              href="/about"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}