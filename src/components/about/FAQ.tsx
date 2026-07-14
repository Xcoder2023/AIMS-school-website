"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import Button from "../ui/Button";
import { faqs } from "@/data/about/about";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="bg-white">
      <Container className="max-w-4xl">
        <Heading
          center
          title={faqs.badge}
          subtitle={faqs.title}
          description={faqs.description}
        />

        <div className="mt-14 space-y-5">
          {faqs.items.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <p className="px-8 pb-6 leading-8 text-slate-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-16 rounded-3xl bg-[#0F4C81] p-10 text-center text-white">
          <h3 className="text-3xl font-bold">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Our admissions team is always available to answer your questions and guide you through the admission process.
          </p>

          <Button
            href="/contact"
          >
            Contact Us
          </Button>
        </div>
      </Container>
    </Section>
  );
}