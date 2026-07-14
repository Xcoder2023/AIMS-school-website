import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300",
        variant === "primary" &&
          "bg-[#0F4C81] text-white hover:bg-[#0c3d67]",
        variant === "secondary" &&
          "border border-white bg-transparent text-white hover:bg-white hover:text-[#0F4C81]"
      )}
    >
      {children}
    </Link>
  );
}