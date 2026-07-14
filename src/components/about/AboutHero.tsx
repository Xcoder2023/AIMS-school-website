"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import Container from "../ui/Container";
import { aboutHero } from "@/data/about/about";

export default function AboutHero() {
  return (
    <section className="relative flex h-[65vh] min-h-[520px] items-center overflow-hidden">
      {/* Background */}
      <Image
        src={aboutHero.image}
        alt="Students at Akanu Ibiam Memorial Seminary"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#071C33]/75" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-white"
        >
          <span className="inline-block rounded-full bg-[#F4B400] px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#071C33]">
            {aboutHero.badge}
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            {aboutHero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            {aboutHero.description}
          </p>

          {/* Breadcrumb */}
          <div className="mt-10 flex items-center gap-2 text-sm text-slate-300">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>

            <ChevronRight size={16} />

            <span className="font-medium text-white">
              About Us
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}