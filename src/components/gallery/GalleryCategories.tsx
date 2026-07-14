"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import { galleryCategories } from "@/data/gallery/galleryCategories";

export default function GalleryCategories() {
  return (
    <Section className="bg-white">
      <Container>
        <Heading
          center
          title={galleryCategories.badge}
          subtitle={galleryCategories.title}
          description={galleryCategories.description}
        />

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryCategories.categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0F4C81] hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F4C81]/10 transition-all duration-300 group-hover:bg-[#0F4C81]">
                  <Icon
                    size={30}
                    className="text-[#0F4C81] transition-all duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {category.title}
                </h3>

                <p className="mt-2 text-slate-500">
                  {category.count}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}