"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";

import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          center
          title="AIMS at a Glance"
          subtitle="For decades, Akanu Ibiam Memorial Seminary has remained committed to academic excellence, Christian values, discipline, and raising transformational leaders."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0F4C81] hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#0F4C81]/10 transition-colors duration-300 group-hover:bg-[#0F4C81]">
                  <Icon
                    size={36}
                    className="text-[#0F4C81] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mb-3 text-5xl font-bold text-slate-900">
                  {stat.value}
                </h3>

                <p className="text-base font-medium text-slate-600">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}