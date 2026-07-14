"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import { historyTimeline } from "@/data/about/about";


export default function HistoryTimeline() {
  return (
    <Section className="bg-white">
      <Container>
        <Heading
          center
          title="Our Heritage"
          subtitle="A Legacy of Faith, Learning & Excellence"
          description="For decades, Akanu Ibiam Memorial Seminary has remained committed to raising disciplined, academically excellent and God-fearing young men and women."
        />

        <div className="relative mx-auto mt-24 max-w-6xl">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-slate-200 lg:block" />

          <div className="space-y-24">
            {historyTimeline.map((item, index) => {
              const left = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    left ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-[320px] overflow-hidden rounded-3xl shadow-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[68px] top-6 hidden h-6 w-6 rounded-full border-4 border-white bg-[#0F4C81] shadow lg:block" />

                    <span className="inline-block rounded-full bg-[#0F4C81]/10 px-5 py-2 font-bold text-[#0F4C81]">
                      {item.year}
                    </span>

                    <h3 className="mt-6 text-3xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}