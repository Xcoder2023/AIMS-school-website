"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";

const highlights = [
  "Christian Education",
  "Experienced Teachers",
  "Safe & Supportive Environment",
];

export default function AdmissionsCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Image */}
      <Image
        src="/images/about/admissions-cta.jpg"
        alt="Students at Akanu Ibiam Memorial Seminary"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#071C33]/80" />

      {/* Decorative Blur */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#0F4C81]/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center text-white"
        >
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-yellow-400 backdrop-blur">
            Admissions Open
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
            Begin Your Child's Journey at
            <br />
            Akanu Ibiam Memorial Seminary
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-200">
            Give your child the opportunity to grow academically,
            spiritually and personally in a nurturing Christian
            environment where excellence is a tradition and every
            student is prepared for a successful future.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Button href="/admissions">
              Apply for Admission
            </Button>

            <Button
              href="/contact"
            >
              Schedule a Campus Visit
            </Button>
          </div>

          {/* Highlights */}
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={22}
                  className="text-yellow-400"
                />

                <span className="text-slate-100">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}