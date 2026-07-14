"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";


import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import { news } from "@/data/news/news";

export default function LatestNews() {
  const latestNews = news.filter((item) => !item.featured);

  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          center
          title="Latest News"
          subtitle="Recent Stories & Announcements"
          description="Stay informed with the latest activities, achievements and important updates from Akanu Ibiam Memorial Seminary."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {latestNews.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute left-5 top-5 rounded-full bg-[#0F4C81] px-4 py-2 text-sm font-semibold text-white">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="text-sm text-slate-500">
                  {item.date}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-slate-900 transition-colors group-hover:text-[#0F4C81]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.excerpt}
                </p>

                <Link
                  href={`/news/${item.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0F4C81] transition-all duration-300 hover:gap-3"
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