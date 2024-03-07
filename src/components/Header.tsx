"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const routes = [
  {
    label: "Dashboard",
    path: "/app/dashboard",
  },
  {
    label: "Account",
    path: "/app/account",
  },
];
const Header = () => {
  const pathname = usePathname();
  const realPathname = pathname.split("/")[2];
  return (
    <header className="flex justify-between items-center border-b border-white/10 py-2">
      <Logo />

      <nav>
        <ul className="flex gap-2 text-xs">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={cn(
                  "text-white/70  px-2 py-1 hover:text-white transition",
                  {
                    "bg-black/10 text-white rounded-sm":
                      realPathname === route.path.split("/")[2],
                  }
                )}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
