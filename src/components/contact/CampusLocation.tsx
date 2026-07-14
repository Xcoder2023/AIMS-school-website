"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Car,
  Navigation,
  School,
} from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";

export default function CampusLocation() {
  return (
    <Section className="bg-white">
      <Container>
        <Heading
          center
          title="Visit Our Campus"
          subtitle="Find Us Easily"
          description="We welcome prospective parents, students and visitors to experience our beautiful campus and learning environment."
        />

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <iframe
              title="AIMS Location"
              src="https://www.google.com/maps?q=Akanu+Ibiam+Memorial+Seminary,+Unwana,+Ebonyi+State&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              className="border-0"
            />
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold text-slate-900">
              Plan Your Visit
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Visiting our campus is one of the best ways to experience
              the welcoming atmosphere, excellent facilities and quality
              education that define Akanu Ibiam Memorial Seminary.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F4C81]/10">
                  <MapPin
                    className="text-[#0F4C81]"
                    size={28}
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Address
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Akanu Ibiam Memorial Seminary,
                    <br />
                    Kpirikpiri,
                    <br />
                    Abakaliki,
                    <br />
                    Ebonyi State, Nigeria.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F4C81]/10">
                  <Navigation
                    className="text-[#0F4C81]"
                    size={28}
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Easy Navigation
                  </h3>

                  <p className="mt-2 text-slate-600">
                    The school is easily accessible by road and can be
                    located using Google Maps.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F4C81]/10">
                  <Car
                    className="text-[#0F4C81]"
                    size={28}
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Visitor Parking
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Secure parking is available for parents and visitors
                    during official school hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F4C81]/10">
                  <School
                    className="text-[#0F4C81]"
                    size={28}
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Campus Tours
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Schedule a campus visit to meet our staff, explore our
                    facilities and experience student life firsthand.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}