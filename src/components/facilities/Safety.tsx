"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import { safety } from "@/data/facilities/safety";


export default function Safety() {
  return (
    <Section className="bg-white">
      <Container>
        <Heading
          center
          title={safety.badge}
          subtitle={safety.title}
          description={safety.description}
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {safety.features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group flex items-start gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-[#0F4C81] hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#0F4C81]/10 transition-colors duration-300 group-hover:bg-[#0F4C81]">
                    <Icon
                      size={28}
                      className="text-[#0F4C81] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] overflow-hidden rounded-3xl shadow-xl"
          >
            <Image
              src={safety.image}
              alt="Student Safety"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}