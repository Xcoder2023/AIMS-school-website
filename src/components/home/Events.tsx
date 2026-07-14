"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, MapPin } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";

import { events } from "@/data/events";

export default function Events() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          center
          title="Upcoming Events"
          subtitle="Experience Life at AIMS"
          description="Stay informed about our upcoming academic, sporting, spiritual and community events."
        />

        <div className="relative mx-auto mt-20 max-w-4xl">
          {/* Timeline Line */}
          <div className="absolute left-[42px] top-0 h-full w-1 rounded-full bg-slate-200" />

          <div className="space-y-10">
            {events.map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="relative flex gap-8"
              >
                {/* Date */}
                <div className="relative z-10 flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-2xl bg-[#0F4C81] text-white shadow-lg">
                  <span className="text-xs font-semibold tracking-widest">
                    {event.month}
                  </span>
                  <span className="text-3xl font-bold">
                    {event.day}
                  </span>
                </div>

                {/* Event Card */}
                <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="mb-3 text-2xl font-bold text-slate-900">
                    {event.title}
                  </h3>

                  <p className="mb-6 leading-8 text-slate-600">
                    {event.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Clock3 size={16} />
                      {event.time}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {event.location}
                    </div>
                  </div>

                  <Link
                    href={event.href}
                    className="inline-flex items-center gap-2 font-semibold text-[#0F4C81] transition-all duration-300 hover:gap-4"
                  >
                    View Details

                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-lg font-semibold text-[#0F4C81] transition-all duration-300 hover:gap-4"
            >
              View Full Events Calendar
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}