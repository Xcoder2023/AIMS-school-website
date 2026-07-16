"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  const heroImages = [
    "/images/hero/carosual-1.jpg",
    "/images/hero/carosual-2.jpg",
    "/images/hero/carosual-3.jpg",
    "/images/hero/carosual-4.jpg",
    "/images/hero/carosual-5.jpg",
    "/images/hero/carosual-6.jpg",
    "/images/hero/carosual-7.jpg",
    "/images/hero/carosual-8.jpg",
    "/images/hero/carosual-9.jpg",
    "/images/hero/carosual-10.jpg",
    "/images/hero/carosual-11.jpg",
    "/images/hero/carosual-12.jpg",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`Hero ${index + 1}`}
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
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
              Building leaders through academic excellence, Christian values,
              discipline, innovation, and lifelong learning in a nurturing
              environment where students grow spiritually, intellectually, and
              morally.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/admissions">Apply Now</Button>

              <Button href="/about" variant="secondary">
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

      <div className="absolute left-6 top-1/2 z-20 -translate-y-1/2">
        <button
          onClick={() =>
            setCurrent(current === 0 ? heroImages.length - 1 : current - 1)
          }
          className="rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/40"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="absolute right-6 top-1/2 z-20 -translate-y-1/2">
        <button
          onClick={() => setCurrent((current + 1) % heroImages.length)}
          className="rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/40"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index ? "bg-yellow-400 w-8" : "bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white">
          <div className="mt-2 h-3 w-1 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}
