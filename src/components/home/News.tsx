"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";

import { news } from "@/data/news";

export default function News() {
  const featured = news.find((item) => item.featured);
  const others = news.filter((item) => !item.featured);

  return (
    <Section className="bg-white">
      <Container>
        <Heading
          center
          title="Latest News"
          subtitle="Stay Updated with AIMS"
          description="Discover the latest stories, achievements and announcements from Akanu Ibiam Memorial Seminary."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {/* Featured */}
          {featured && (
            <motion.article
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:col-span-2"
            >
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute left-6 top-6 rounded-full bg-[#0F4C81] px-4 py-2 text-sm font-semibold text-white">
                  Featured
                </div>
              </div>

              <div className="p-8">
                <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
                  <Calendar size={16} />

                  {featured.date}
                </div>

                <h3 className="mb-4 text-3xl font-bold text-slate-900">
                  {featured.title}
                </h3>

                <p className="mb-8 leading-8 text-slate-600">
                  {featured.excerpt}
                </p>

                <Link
                  href={featured.href}
                  className="inline-flex items-center gap-2 font-semibold text-[#0F4C81] transition-all duration-300 hover:gap-4"
                >
                  Read Story

                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.article>
          )}

          {/* Side News */}
          <div className="space-y-8">
            {others.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .2,
                }}
                className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                    <Calendar size={14} />

                    {item.date}
                  </div>

                  <h4 className="mb-3 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h4>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F4C81] transition-all duration-300 hover:gap-3"
                  >
                    Read More

                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}