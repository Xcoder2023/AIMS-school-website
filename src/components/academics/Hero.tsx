"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Mouse } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";
import { academicsHero } from "@/data/about/about";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <Image
        src={academicsHero.image}
        alt="Academic Excellence"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071C33]/90 via-[#071C33]/75 to-[#071C33]/55" />

      {/* Decorative Blur */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#0F4C81]/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-3xl"
        >
          {/* Breadcrumb */}

          <div className="mb-8 flex items-center gap-2 text-sm text-gray-300">
            <Link
              href="/"
              className="transition hover:text-yellow-400"
            >
              Home
            </Link>

            <ChevronRight size={16} />

            <span className="text-yellow-400">
              Academics
            </span>
          </div>

          {/* Badge */}

          <motion.span
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .2,
            }}
            className="inline-flex rounded-full bg-yellow-400/15 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-yellow-400 backdrop-blur-sm"
          >
            {academicsHero.badge}
          </motion.span>

          {/* Title */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .3,
            }}
            className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl"
          >
            {academicsHero.title}
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .5,
            }}
            className="mt-8 max-w-2xl text-lg leading-9 text-gray-200"
          >
            {academicsHero.description}
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .7,
            }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <Button href={academicsHero.buttons[0].href}>
              {academicsHero.buttons[0].text}
            </Button>

            <Button
              href={academicsHero.buttons[1].href}
            >
              {academicsHero.buttons[1].text}
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center text-white"
      >
        <Mouse size={26} />

        <span className="mt-2 text-xs uppercase tracking-[3px]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}