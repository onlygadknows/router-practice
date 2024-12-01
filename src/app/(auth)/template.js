"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }) {
  const [input, setInput] = useState("");
  const pathName = usePathname();
  return (
    <>
      <div className="flex items-center justify-between w-[30%]">
        <Input
          type="text"
          placeholder="Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {navLinks.map((links) => {
          const isActive = pathName.startsWith(links.href);

          return (
            <div
              className={`m-2 p-4 ${
                isActive
                  ? "font-bold border bg-gray-100 rounded-md p-4 border-gray-100"
                  : "font-normal"
              }`}
              key={links.name}
            >
              <Link
                href={links.href}
                className={buttonVariants({ variant: "outline" })}
              >
                {links.name}
              </Link>
            </div>
          );
        })}
      </div>
      {children}
    </>
  );
}
