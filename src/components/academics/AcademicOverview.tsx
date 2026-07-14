"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import { academicOverview } from "@/data/academics/academicOverview";


export default function AcademicOverview() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading
              title={academicOverview.badge}
              subtitle={academicOverview.title}
              description={academicOverview.description}
            />

            <div className="mt-8 space-y-4">
              {academicOverview.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-[#0F4C81]"
                    size={22}
                  />

                  <span className="text-lg text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[550px] overflow-hidden rounded-3xl shadow-xl"
          >
            <Image
              src={academicOverview.image}
              alt="Academic Excellence at AIMS"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}