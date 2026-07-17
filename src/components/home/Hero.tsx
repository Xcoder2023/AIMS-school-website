"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "../ui/Button";
import Container from "../ui/Container";

const heroImages = [
  "/images/hero/carosual-1.jpg",
  "/images/hero/carosual-2.JPG",
  "/images/hero/carosual-3.jpg",
  "/images/hero/carosual-4.JPG",
  "/images/hero/carosual-5.JPG",
  "/images/hero/carosual-6.JPG",
  "/images/hero/carosual-7.jpg",
  "/images/hero/carosual-8.JPG",
  "/images/hero/carosual-9.JPG",
  "/images/hero/carosual-10.jpg",
  "/images/hero/carosual-11.JPG",
  "/images/hero/carosual-12.JPG",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
  heroImages.forEach((src) => {
    const img = new window.Image();
    img.src = src;
  });
}, []);

  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === heroImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-900">

      {/* Background Slider */}
      {/* <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{
          width: `${heroImages.length * 100}%`,
          transform: `translateX(-${current * (100 / heroImages.length)}%)`,
        }}
      >
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="relative h-screen flex-shrink-0"
            style={{
              width: `${100 / heroImages.length}%`,
            }}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              priority={index < 2}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div> */}

      <div
  className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
  style={{
    width: `${heroImages.length * 100}%`,
    transform: `translateX(-${current * (100 / heroImages.length)}%)`,
  }}
>
  {heroImages.map((image, index) => (
    <div
      key={index}
      className="h-full flex-shrink-0 bg-cover bg-center bg-no-repeat"
      style={{
        width: `${100 / heroImages.length}%`,
        backgroundImage: `url(${image})`,
      }}
    />
  ))}
</div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/30" />

      <Container className="relative z-10">
        <div className="grid min-h-screen items-center gap-16 py-32 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="max-w-2xl text-white"
          >
            <div className="mb-6 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 backdrop-blur-sm">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
                Welcome to AIMS
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Akanu Ibiam
              <br />
              Memorial Seminary
            </h1>

            <p className="mb-10 text-lg leading-8 text-slate-200 md:text-xl">
              Building leaders through academic excellence,
              Christian values, discipline, innovation,
              and lifelong learning.
            </p>

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

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: .8,
              delay: .3,
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

      {/* Previous */}
      <button
        onClick={previousSlide}
        className="absolute left-6 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/40"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/40"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-24 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all ${
              current === index
                ? "w-8 bg-yellow-400"
                : "w-3 bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 animate-bounce">
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white">
          <div className="mt-2 h-3 w-1 rounded-full bg-white" />
        </div>
      </div>

    </section>
  );
}