"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";

import { programs } from "@/data/programs";

export default function Programs() {
  return (
    <Section className="bg-gradient-to-b from-white to-slate-50">
      <Container>
        <Heading
          center
          title="Academics"
          subtitle="Learning Today. Leading Tomorrow."
          description="Our academic programmes are designed to develop intellectually sound, spiritually grounded and morally upright students who are prepared to excel in an ever-changing world."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.article
                key={program.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className={`
                  group
                  relative
                  flex
                  min-h-[420px]
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-[#0F4C81]
                  hover:shadow-2xl

                  ${
                    index === 1
                      ? "xl:translate-y-12"
                      : ""
                  }
                `}
              >
                {/* Number */}
                <span className="absolute right-8 top-6 text-6xl font-black text-slate-100 transition duration-300 group-hover:text-[#0F4C81]/10">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0F4C81]/10 transition-all duration-300 group-hover:bg-[#0F4C81]">
                  <Icon
                    size={36}
                    className="text-[#0F4C81] transition-all duration-300 group-hover:text-white"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-5 text-2xl font-bold text-slate-900">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="flex-1 leading-8 text-slate-600">
                  {program.description}
                </p>

                {/* Divider */}
                <div className="my-8 h-px bg-slate-200" />

                {/* Link */}
                <Link
                  href={program.href}
                  className="inline-flex items-center gap-2 font-semibold text-[#0F4C81] transition-all duration-300 group-hover:gap-4"
                >
                  Learn More

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}