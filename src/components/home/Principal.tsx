"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

import { principal } from "@/data/principal";

export default function Principal() {
  return (
    <Section className="bg-white">
      <Container>
        <Heading
          center
          title={principal.badge}
          subtitle={principal.title}
          description="Meet the leader guiding AIMS with dedication, integrity, and a passion for academic and spiritual excellence."
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          {/* Principal Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto h-[600px] w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl"
          >
            <Image
              src={principal.image}
              alt={principal.name}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#0F4C81]/10">
              <Quote className="h-8 w-8 text-[#0F4C81]" />
            </div>

            <blockquote className="border-l-4 border-[#0F4C81] pl-6 text-2xl font-semibold italic leading-relaxed text-slate-900">
              "{principal.quote}"
            </blockquote>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              {principal.message}
            </p>

            <div className="mt-10">
              <h3 className="text-2xl font-bold text-slate-900">
                {principal.name}
              </h3>

              <p className="mt-1 text-[#0F4C81]">
                {principal.position}
              </p>
            </div>

            <div className="mt-10">
              <Button href={principal.button.href}>
                {principal.button.text}
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}