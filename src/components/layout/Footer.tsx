"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

import Container from "../ui/Container";

const quickLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
];

const academics = [
  {
    title: "Curriculum",
    href: "/academics",
  },
  {
    title: "Departments",
    href: "/departments",
  },
  {
    title: "School Calendar",
    href: "/calendar",
  },
  {
    title: "Library",
    href: "/library",
  },
];

const admissions = [
  {
    title: "Apply Now",
    href: "/admissions",
  },
  {
    title: "Requirements",
    href: "/admissions",
  },
  {
    title: "School Fees",
    href: "/fees",
  },
  {
    title: "Scholarships",
    href: "/scholarships",
  },
];

const socials = [
  {
    icon: FaFacebookF,
    href: "#",
  },
  {
    icon: FaInstagram,
    href: "#",
  },
  {
    icon: FaYoutube,
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#071C33] text-white">
      <Container>
        {/* Top CTA */}
        <div className="border-b border-white/10 py-20 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Ready to Shape Your Future?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Join a community committed to academic excellence, Christian values
            and leadership development.
          </p>

          <Link
            href="/admissions"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#0F4C81] px-8 py-4 font-semibold transition hover:bg-[#0c3c66]"
          >
            Apply for Admission
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Main Footer */}
        <div className="grid gap-12 py-20 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <Image
                src="/logo/aims-logo.jpg"
                alt="AIMS Logo"
                width={70}
                height={70}
                className="object-contain"
              />

              <div>
                <h2 className="text-2xl font-bold">
                  Akanu Ibiam Memorial Seminary
                </h2>

                <p className="text-sm text-gray-400">
                  Academic Excellence • Christian Values
                </p>
              </div>
            </div>

            <p className="mt-6 leading-8 text-gray-300">
              Akanu Ibiam Memorial Seminary is committed to nurturing students
              through quality education, Christian values, discipline and
              leadership development.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+234 XXX XXX XXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@aimspresbyterian.com.ng</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1" />
                <span>
                  Akanu Ibiam Memorial Seminary,
                  <br />
                  Kpirikpiri, Abakaliki, Ebonyi State.
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Academics</h3>

            <ul className="space-y-4">
              {academics.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Admissions</h3>

            <ul className="space-y-4">
              {admissions.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="rounded-full bg-white/10 p-3 transition hover:bg-[#0F4C81]"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-gray-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} Akanu Ibiam Memorial Seminary. All
            Rights Reserved.
          </p>

          <p>Designed & Developed with ❤️ BY MC.</p>
        </div>
      </Container>
    </footer>
  );
}
