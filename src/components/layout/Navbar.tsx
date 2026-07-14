"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import PortalDropdown from "./PortalDropdown";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/">
          {/* <h2 className="text-2xl font-bold text-blue-900">
            AIMS
          </h2> */}
          <Image
            src="/images/header.jpg"
            alt="AIMS Logo"
            width={200}
            height={100}
            className="object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="font-medium transition hover:text-blue-700"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block rounded-lg bg-blue-900 px-5 py-3 text-white transition hover:bg-blue-800">
          <PortalDropdown />
          {/* <Link href="/admissions" className="rounded-lg bg-blue-900 px-5 py-3 text-white transition hover:bg-blue-800">
            Apply Now
          </Link > */}
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="bg-white lg:hidden">
          <nav className="flex flex-col p-6">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="border-b py-4"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            ))}

            <button className="mt-6 rounded-lg bg-blue-900 py-3 text-white">
              Apply Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
