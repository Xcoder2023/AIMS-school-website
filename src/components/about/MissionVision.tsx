"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import { missionVision } from "@/data/about/about";

export default function MissionVision() {
  const MissionIcon = missionVision.mission.icon;
  const VisionIcon = missionVision.vision.icon;

  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          center
          title="Mission • Vision • Values"
          subtitle="The Principles That Guide AIMS"
          description="Everything we do is built on a commitment to academic excellence, Christian values and the holistic development of every student."
        />

        {/* Mission & Vision */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {[missionVision.mission, missionVision.vision].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="rounded-3xl bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F4C81]/10">
                  <Icon size={32} className="text-[#0F4C81]" />
                </div>

                <h3 className="mt-6 text-3xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Core Values */}
        <div className="mt-24">
          <Heading
            center
            title="Core Values"
            subtitle="What Defines Every AIMS Student"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {missionVision.values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#0F4C81] hover:shadow-2xl"
                >
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0F4C81]/10 transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#0F4C81]">
                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#0F4C81]/5 transition-all duration-500 group-hover:scale-125" />
                    <Icon
                      size={30}
                      className="text-[#0F4C81] transition-all duration-500 group-hover:text-white"
                    />
                  </div>

                  <h4 className="mt-6 text-xl font-bold text-slate-900">
                    {value.title}
                  </h4>

                  <p className="mt-3 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto mt-20 max-w-4xl rounded-3xl bg-[#0F4C81] p-10 text-center text-white"
            >
              <p className="text-2xl italic leading-10">
                "Train up a child in the way he should go, and when he is old he
                will not depart from it."
              </p>

              <span className="mt-6 block font-semibold tracking-widest text-yellow-300">
                Proverbs 22:6
              </span>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
