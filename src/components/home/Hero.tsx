"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/aims-hero.jpg"
        alt="Akanu Ibiam Memorial Seminary Campus"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/30" />

      <Container className="relative z-10">
        <div className="grid min-h-screen items-center gap-16 py-32 lg:grid-cols-2">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            {/* Welcome Badge */}
            <div className="mb-6 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 backdrop-blur-sm">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
                Welcome to AIMS
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Akanu Ibiam
              <br />
              Memorial Seminary
            </h1>

            {/* Description */}
            <p className="mb-10 text-lg leading-8 text-slate-200 md:text-xl">
              Building leaders through academic excellence, Christian
              values, discipline, innovation, and lifelong learning in a
              nurturing environment where students grow spiritually,
              intellectually, and morally.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/admissions">
                Apply Now 
              </Button>

              <Button
                href="/about"
                variant="secondary"
              >
                Explore Campus
              </Button>
            </div>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="hidden justify-center lg:flex"
          >
            <div className="rounded-3xl border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-xl">
              <Image
                src="/logo/aims-logo.jpg"
                alt="AIMS Logo"
                width={260}
                height={260}
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white">
          <div className="mt-2 h-3 w-1 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}