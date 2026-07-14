"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

interface NewsItem {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

interface Props {
  news: NewsItem[];
}

export default function RelatedNews({ news }: Props) {
  if (news.length === 0) return null;

  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          center
          title="More Stories"
          subtitle="Related News"
          description="Continue exploring more stories and updates from AIMS."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <span className="text-sm font-semibold text-[#0F4C81]">
                  {item.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.excerpt}
                </p>

                <p className="mt-5 text-sm text-slate-500">
                  {item.date}
                </p>

                <Link
                  href={`/news/${item.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0F4C81] transition hover:gap-3"
                >
                  Read More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}