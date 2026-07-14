"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

import { about } from "@/data/about";

export default function About() {
  return (
    <Section className="bg-white">
      <Container>
        <Heading
          center
          title={about.badge}
          subtitle="Discover the vision, values, and legacy that make AIMS a place of excellence."
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] overflow-hidden rounded-3xl"
          >
            <Image
              src={about.image}
              alt="Students at AIMS"
              fill
              className="object-cover transition duration-700 hover:scale-110"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-4xl font-bold text-slate-900">
              {about.title}
            </h3>

            <p className="mb-8 text-lg leading-8 text-slate-600">
              {about.description}
            </p>

            <div className="mb-10 grid gap-4">
              {about.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-[#0F4C81]"
                    size={22}
                  />

                  <span className="font-medium text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button href={about.button.href}>
              {about.button.text}
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}