"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Amenities", href: "#amenities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

<Link href="#" className="flex items-center">
  <Image
    src="/images/logo.png"
    alt="Hero Homes"
    width={170}
    height={55}
    priority
    className="h-auto w-[140px] md:w-[170px]"
  />
</Link>

        {/* Desktop Menu */}
        <nav className="hidden gap-8 text-white md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition hover:text-red-500"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button className="hidden rounded-lg bg-red-600 px-5 py-2 text-white md:block">
          Book Visit
        </button>

        {/* Mobile Menu Button */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 md:hidden">
          <div className="flex justify-end p-6">
            <button
              className="text-4xl text-white"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="mt-10 flex flex-col items-center gap-8 text-2xl text-white">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-500"
              >
                {link.name}
              </Link>
            ))}

            <button className="mt-6 rounded-xl bg-red-600 px-8 py-3">
              Book Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}