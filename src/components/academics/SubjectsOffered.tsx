"use client";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { subjects } from "@/data/academics/subjects";
import { motion } from "framer-motion";
import { Check } from "lucide-react";


export default function SubjectsOffered() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          center
          title="Our Learning Areas"
          subtitle="A Broad & Balanced Curriculum"
          description="Our curriculum equips students with the knowledge, critical thinking, creativity and practical skills needed for higher education and lifelong success."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {subjects.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0F4C81] hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F4C81]/10 transition-colors duration-300 group-hover:bg-[#0F4C81]">
                  <Icon
                    size={30}
                    className="text-[#0F4C81] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mb-6 text-2xl font-bold text-slate-900">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.items.map((subject) => (
                    <div
                      key={subject}
                      className="flex items-center gap-3"
                    >
                      <Check
                        size={18}
                        className="text-[#0F4C81]"
                      />

                      <span className="text-slate-700">
                        {subject}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}