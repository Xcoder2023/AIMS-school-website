"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import { facilities } from "@/data/academics/facilities";

export default function LearningEnvironment() {
  return (
    <Section className="bg-white">
      <Container>
        <Heading
          center
          title="Our Learning Environment"
          subtitle="Spaces Designed for Excellence"
          description="Our facilities provide students with a safe, inspiring and well-equipped environment where learning thrives."
        />

        <div className="mt-20 space-y-24">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div>
                <span className="inline-block rounded-full bg-[#0F4C81]/10 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
                  Facility {facility.id}
                </span>

                <h3 className="mt-5 text-3xl font-bold text-slate-900">
                  {facility.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}