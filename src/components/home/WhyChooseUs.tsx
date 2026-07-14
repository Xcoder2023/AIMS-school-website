"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

import { whyChooseUs } from "@/data/whyChooseUs";

export default function WhyChooseUs() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          center
          title={whyChooseUs.badge}
          subtitle={whyChooseUs.title}
          description={whyChooseUs.description}
        />

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">
          {/* Image */}
          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid h-[650px] grid-cols-2 gap-5"
          >
            {/* Large Image */}
            <div className="relative col-span-2 overflow-hidden rounded-3xl">
              <Image
                src={whyChooseUs.images[0]}
                alt="Students at AIMS"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Bottom Left */}
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={whyChooseUs.images[1]}
                alt="AIMS Campus"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Bottom Right */}
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={whyChooseUs.images[2]}
                alt="Students Learning"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {whyChooseUs.features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0F4C81] hover:shadow-xl"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F4C81]/10 transition duration-300 group-hover:bg-[#0F4C81]">
                      <Icon
                        size={28}
                        className="text-[#0F4C81] transition duration-300 group-hover:text-white" 
                      />
                    </div>

                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="text-sm leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <Button href="/admissions">Apply for Admission</Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
