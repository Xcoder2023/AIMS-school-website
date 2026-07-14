"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { ourStory } from "@/data/about/about";


export default function OurStory() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[550px] overflow-hidden rounded-3xl shadow-2xl"
          >
            <Image
              src={ourStory.image}
              alt="Students of Akanu Ibiam Memorial Seminary"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Heading
              title={ourStory.badge}
              subtitle={ourStory.title}
            />

            <div className="mt-6 space-y-6 text-lg leading-8 text-slate-600">
              <p>{ourStory.description1}</p>

              <p>{ourStory.description2}</p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {ourStory.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={22}
                    className="text-[#0F4C81]"
                  />

                  <span className="font-medium text-slate-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button href="/admissions">
                Become an AIMS Student
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}