"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import { contactInfo } from "@/data/contact/contactInfo";

export default function ContactInfo() {
  return (
    <Section
      className="bg-white"
    >
      <Container>
        <Heading
          center
          title={contactInfo.badge}
          subtitle={contactInfo.title}
          description={contactInfo.description}
        />

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0F4C81] hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F4C81]/10 transition duration-300 group-hover:bg-[#0F4C81]">
                  <Icon
                    size={30}
                    className="text-[#0F4C81] transition duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 whitespace-pre-line leading-7 text-slate-600">
                  {item.value}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}