"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import Button from "../ui/Button";
import { facilitiesHero } from "@/data/facilities/facilitiesHero";


export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      {/* Background */}
      <Image
        src={facilitiesHero.image}
        alt="AIMS Facilities"
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
            {facilitiesHero.badge}
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            {facilitiesHero.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            {facilitiesHero.description}
          </p>

          <div className="mt-10">
            <Button href={facilitiesHero.button.href}>
              {facilitiesHero.button.text}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}