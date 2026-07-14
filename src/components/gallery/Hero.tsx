"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import Button from "../ui/Button";
import { galleryHero } from "@/data/gallery/galleryHero";


export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={galleryHero.image}
        alt="AIMS Gallery"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81]/90 via-[#0F4C81]/70 to-black/60" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-white"
        >
          <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
            {galleryHero.badge}
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            {galleryHero.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            {galleryHero.description}
          </p>

          <div className="mt-10">
            <Button href={galleryHero.button.href}>
              {galleryHero.button.text}
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
            }}
            className="mt-2 h-3 w-3 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}