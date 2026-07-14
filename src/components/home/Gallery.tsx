"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Expand } from "lucide-react";

import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";

import "yet-another-react-lightbox/styles.css";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";

import { gallery } from "@/data/gallery";

const layout = [
  "lg:col-span-2 lg:row-span-2",
  "",
  "",
  "lg:col-span-2",
  "lg:row-span-2",
  "",
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  const slides = gallery.map((image) => ({
    src: image.image,
  }));

  return (
    <>
      <Section className="bg-white">
        <Container>
          <Heading
            center
            title="Gallery"
            subtitle="Moments That Define AIMS"
            description="Take a glimpse into life at Akanu Ibiam Memorial Seminary through our classrooms, events, worship, sports and memorable student experiences."
          />

          <div className="mt-20 grid auto-rows-[220px] gap-6 md:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item, i) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setIndex(i)}
                initial={{
                  opacity: 0,
                  scale: 0.92,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                className={`group relative overflow-hidden rounded-3xl ${layout[i]}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="mb-4 rounded-full bg-white/20 p-5 backdrop-blur-lg">
                    <Expand
                      size={34}
                      className="text-white"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <span className="mt-2 text-sm text-gray-200">
                    Click to view
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-lg font-semibold text-[#0F4C81] transition-all duration-300 hover:gap-4"
            >
              View Complete Gallery

              <ArrowRight size={20} />
            </Link>
          </div>
        </Container>
      </Section>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        plugins={[Counter]}
      />
    </>
  );
}