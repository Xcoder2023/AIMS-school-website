"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import { campusHighlights } from "@/data/facilities/campusHighlights";


export default function CampusHighlights() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          center
          title={campusHighlights.badge}
          subtitle={campusHighlights.title}
          description={campusHighlights.description}
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[550px] overflow-hidden rounded-3xl shadow-xl"
          >
            <Image
              src={campusHighlights.image}
              alt="AIMS Campus"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {campusHighlights.highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#0F4C81] hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#0F4C81]/10 transition-colors duration-300 group-hover:bg-[#0F4C81]">
                    <Icon
                      size={28}
                      className="text-[#0F4C81] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}