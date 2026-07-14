"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";

export default function CTA() {
  return (
    <Section className="relative overflow-hidden py-28">
      {/* Background Image */}
      <Image
        src="/images/cta/campus.jpg"
        alt="AIMS Campus"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F4C81]/85" />

      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81] via-[#0F4C81]/70 to-transparent" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center text-white"
        >
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] backdrop-blur-md">
            Admissions Open
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
            Ready to Begin
            <br />
            Your Journey at AIMS?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-200">
            Join a community where academic excellence, Christian values,
            leadership and character development come together to prepare
            students for a bright future.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button href="/admissions">
              Apply Now
            </Button>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0F4C81]"
            >
              <CalendarDays size={20} />
              Schedule a Visit
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/20 pt-10 md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="mt-2 text-sm text-gray-300">
                Years of Excellence
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="mt-2 text-sm text-gray-300">
                Christian Values
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Qualified</h3>
              <p className="mt-2 text-sm text-gray-300">
                Teaching Staff
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Safe</h3>
              <p className="mt-2 text-sm text-gray-300">
                Learning Environment
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}