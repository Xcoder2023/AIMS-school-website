"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import { studentLife } from "@/data/academics/studentLife";


export default function BeyondAcademics() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          center
          title={studentLife.badge}
          subtitle={studentLife.title}
          description={studentLife.description}
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {studentLife.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#0F4C81] hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F4C81]/10 transition-all duration-300 group-hover:bg-[#0F4C81]">
                  <Icon
                    size={30}
                    className="text-[#0F4C81] transition-all duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}