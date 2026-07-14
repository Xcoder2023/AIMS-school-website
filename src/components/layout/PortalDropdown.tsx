"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { portalLinks } from "@/data/portal";

export default function PortalDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 font-medium text-white transition hover:text-[#0F4C81]"
      >
        Portal

        <ChevronDown
          size={18}
          className={`transition duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute right-0 top-12 w-80 rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-4 opacity-0"
        }`}
      >
        <div className="p-3">
          {portalLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                target="_blank"
                className="flex items-start gap-4 rounded-xl p-4 transition hover:bg-slate-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F4C81]/10">
                  <Icon
                    size={22}
                    className="text-[#0F4C81]"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}