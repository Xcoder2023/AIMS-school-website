"use client";

import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";

export default function ContactForm() {
  return (
    <Section  className="bg-slate-50">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full bg-[#0F4C81]/10 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
              <MessageCircle size={16} className="mr-2" />
              Send Us a Message
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              We'd Love to Hear From You
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you're making an admission enquiry, requesting
              information, or simply want to know more about life at
              Akanu Ibiam Memorial Seminary, our team is ready to assist you.
            </p>

            <div className="mt-10 rounded-2xl border border-[#0F4C81]/20 bg-[#0F4C81]/5 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Response Time
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We usually respond to enquiries within one business day.
                For urgent enquiries, kindly contact the school directly by
                phone during working hours.
              </p>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white p-8 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0F4C81]"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0F4C81]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0F4C81]"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="+234..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0F4C81]"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Admission Enquiry"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0F4C81]"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0F4C81]"
                />
              </div>

              <Button
                href="#"
              >
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}