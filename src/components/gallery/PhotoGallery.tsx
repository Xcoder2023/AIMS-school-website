"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import { gallery } from "@/data/gallery/gallery";

export default function PhotoGallery() {
  return (
    <Section  className="bg-slate-50">
      <Container>
        <Heading
          center
          title="Photo Gallery"
          subtitle="Capturing Moments That Matter"
          description="Explore memorable moments from academics, worship, sports, campus life and special events."
        />

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((photo, index) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                    <Camera className="text-white" size={22} />
                  </div>

                  <span className="inline-block w-fit rounded-full bg-[#0F4C81] px-3 py-1 text-xs font-semibold text-white">
                    {photo.category}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-white">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}