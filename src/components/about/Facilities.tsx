"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import Button from "../ui/Button";
import { facilities } from "@/data/about/about";


export default function Facilities() {
  const [active, setActive] = useState(0);

  const facility = facilities.items[active];

  const Icon = facility.icon;

  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          center
          title={facilities.badge}
          subtitle={facilities.title}
          description={facilities.description}
        />

        {/* Facility Tabs */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {facilities.items.map((item, index) => {
            const TabIcon = item.icon;

            return (
              <button
                key={item.title}
                onClick={() => setActive(index)}
                className={`flex items-center gap-3 rounded-full px-5 py-3 transition-all duration-300 ${
                  active === index
                    ? "bg-[#0F4C81] text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                <TabIcon size={18} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="mt-16 grid items-center gap-16 lg:grid-cols-2"
          >
            {/* Image */}
            <div className="relative h-[550px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <span className="inline-block rounded-full bg-[#0F4C81]/10 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
                {facility.badge}
              </span>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F4C81]/10">
                  <Icon size={32} className="text-[#0F4C81]" />
                </div>

                <h2 className="text-4xl font-bold text-slate-900">
                  {facility.title}
                </h2>
              </div>

              <p className="mt-8 text-lg leading-9 text-slate-600">
                {facility.description}
              </p>

              <Button
                href="/admissions"
              >
                Apply for Admission
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  );
}