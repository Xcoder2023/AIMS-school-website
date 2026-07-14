"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";

import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <Section className="relative overflow-hidden bg-slate-100">
      <Container>
        <Heading
          center
          title="Testimonials"
          subtitle="What Parents & Alumni Say"
          description="The experiences of our parents and graduates reflect the values and excellence that define AIMS."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
          }}
          pagination={{
            clickable: true,
          }}
          loop
          spaceBetween={30}
          className="mt-20"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="mx-auto max-w-4xl rounded-[32px] border border-white/30 bg-white/80 p-10 shadow-2xl backdrop-blur-xl">
                <Quote
                  size={60}
                  className="mb-8 text-[#0F4C81]"
                />

                <p className="text-center text-xl leading-9 text-slate-700">
                  "{testimonial.message}"
                </p>

                <div className="mt-8 flex justify-center">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <div className="mt-10 flex flex-col items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={90}
                    height={90}
                    className="rounded-full object-cover ring-4 ring-[#0F4C81]/20"
                  />

                  <h3 className="mt-4 text-xl font-bold">
                    {testimonial.name}
                  </h3>

                  <p className="text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
}