"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import { news } from "@/data/news/news";


export default function FeaturedNews() {
  const featured = news.find((item) => item.featured);

  if (!featured) return null;

  return (
    <Section  className="bg-white">
      <Container>
        <Heading
          center
          title="Featured Story"
          subtitle="Latest Highlights from AIMS"
          description="Stay informed with the latest achievements, announcements and events happening in our school community."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl lg:grid lg:grid-cols-2"
        >
          {/* Image */}
          <div className="relative h-80 lg:h-full">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <span className="inline-block w-fit rounded-full bg-[#0F4C81]/10 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
              {featured.category}
            </span>

            <h2 className="mt-6 text-3xl font-bold text-slate-900">
              {featured.title}
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              {featured.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <span>{featured.date}</span>
              <span>•</span>
              <span>{featured.author}</span>
            </div>

            <Link
              href={`/news/${featured.slug}`}
              className="mt-8 inline-flex w-fit items-center gap-2 font-semibold text-[#0F4C81] transition hover:gap-3"
            >
              Read Full Story
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}