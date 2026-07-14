"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";

import { campusLife } from "@/data/campusLife";

export default function CampusLife() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          center
          title={campusLife.badge}
          subtitle={campusLife.title}
          description={campusLife.description}
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid h-[600px] grid-cols-2 gap-5"
          >
            <div className="relative col-span-2 overflow-hidden rounded-3xl">
              <Image
                src={campusLife.images[0]}
                alt="Campus"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={campusLife.images[1]}
                alt="Students"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={campusLife.images[2]}
                alt="Activities"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Activities */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {campusLife.activities.map((activity) => {
                const Icon = activity.icon;

                return (
                  <div
                    key={activity.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0F4C81] hover:shadow-xl"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F4C81]/10 transition duration-300 group-hover:bg-[#0F4C81]">
                      <Icon
                        size={28}
                        className="text-[#0F4C81] transition duration-300 group-hover:text-white"
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900">
                      {activity.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}