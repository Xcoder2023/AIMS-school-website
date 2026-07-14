"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { principal } from "@/data/principal";
import { leadershipTeam } from "@/data/about/about";


export default function Leadership() {
  // const PrincipalIcon = principal.icon;

  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          center
          title="School Leadership"
          subtitle="Experienced Leaders Dedicated to Every Student's Success"
          description="Our leadership team works together to provide quality education, Christian guidance and a nurturing environment where every student can thrive."
        />

        {/* Principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mt-20 grid items-center gap-16 rounded-[40px] bg-white p-8 shadow-xl lg:grid-cols-2 lg:p-14"
        >
          <div className="relative h-[520px] overflow-hidden rounded-3xl">
            <Image
              src={principal.image}
              alt={principal.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="rounded-full bg-[#0F4C81]/10 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
              Principal's Welcome
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              {principal.name}
            </h2>

            <p className="mt-2 text-lg font-semibold text-[#0F4C81]">
              {principal.position}
            </p>

            <p className="mt-8 text-lg leading-9 text-slate-600 italic">
              "{principal.message}"
            </p>

            {/* <p className="mt-10 font-semibold text-slate-900">
              {principal.signature}
            </p> */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact">
                Contact School
              </Button>

              {/* <Link
                href={`mailto:${principal.email}`}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition hover:bg-[#0F4C81] hover:text-white"
              >
                <PrincipalIcon size={20} />
              </Link> */}
            </div>
          </div>
        </motion.div>

        {/* Leadership Team */}
        <div className="mt-24">
          <Heading
            center
            title="Leadership Team"
            subtitle="Supporting Excellence Across Every Department"
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {leadershipTeam.map((leader, index) => {
              const Icon = leader.icon;

              return (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .5,
                    delay: index * .15,
                  }}
                  className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold">
                      {leader.name}
                    </h3>

                    <p className="mt-2 text-[#0F4C81] font-semibold">
                      {leader.position}
                    </p>

                    <Link
                      href={`mailto:${leader.email}`}
                      className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0F4C81]/10 text-[#0F4C81] transition-all duration-300 hover:bg-[#0F4C81] hover:text-white"
                    >
                      <Icon size={18} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}