"use client";

import { useState } from "react";

import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import { whyParentsChooseAims } from "@/data/about/about";

export default function WhyParentsChoose() {
  const [active, setActive] = useState(0);

  const current = whyParentsChooseAims.tabs[active];

  const Icon = current.icon;

  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          center
          title={whyParentsChooseAims.badge}
          subtitle={whyParentsChooseAims.title}
          description={whyParentsChooseAims.description}
        />

        {/* Tabs */}

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {whyParentsChooseAims.tabs.map((tab, index) => (
            <button
              key={tab.title}
              onClick={() => setActive(index)}
              className={`rounded-full px-6 py-3 transition

              ${
                active === index
                  ? "bg-[#0F4C81] text-white"
                  : "bg-white hover:bg-slate-100"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content */}

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: .5,
            }}
            className="mt-16 grid items-center gap-20 lg:grid-cols-2"
          >
            {/* Image */}

            <div className="relative h-[600px] overflow-hidden rounded-3xl shadow-2xl">

              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover"
              />

              <div className="absolute bottom-8 left-8 rounded-2xl bg-white p-6 shadow-xl">

                <h2 className="text-4xl font-bold text-[#0F4C81]">

                  {current.stat}

                </h2>

                <p className="mt-1 text-slate-600">

                  {current.statLabel}

                </p>

              </div>

            </div>

            {/* Right */}

            <div>

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#0F4C81]/10">

                <Icon
                  size={40}
                  className="text-[#0F4C81]"
                />

              </div>

              <h2 className="mt-8 text-4xl font-bold">

                {current.title}

              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-600">

                {current.description}

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