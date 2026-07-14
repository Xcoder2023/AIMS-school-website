"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

interface HeroProps {
  article: {
    title: string;
    image: string;
    category: string;
    author: string;
    date: string;
  };
}

export default function Hero({ article }: HeroProps) {
  return (
    <section className="relative flex min-h-[75vh] items-center overflow-hidden">
      <Image
        src={article.image}
        alt={article.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81]/90 via-[#0F4C81]/70 to-black/60" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-white"
        >
          <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
            {article.category}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            {article.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-blue-100">
            <span>By {article.author}</span>

            <span className="h-2 w-2 rounded-full bg-white" />

            <span>{article.date}</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}