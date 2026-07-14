"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import { eventIcons, events } from "@/data/news/events";


const { CalendarDays, Clock, MapPin } = eventIcons;

export default function UpcomingEvents() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          center
          title={events.badge}
          subtitle={events.title}
          description={events.description}
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {events.items.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0F4C81] hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F4C81]/10">
                <CalendarDays
                  size={28}
                  className="text-[#0F4C81]"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {event.title}
              </h3>

              <div className="mt-6 space-y-4 text-slate-600">
                <div className="flex items-center gap-3">
                  <CalendarDays size={18} />
                  <span>{event.date}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={18} />
                  <span>{event.time}</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  <span>{event.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}