"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Heading } from "@/components/ui/Typography";

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      href={href}
      className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 py-2 px-4 rounded-full hover:bg-white/5"
    >
      {children}
    </Link>
  </li>
);

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav
          className={`flex justify-between items-center transition-all duration-500 rounded-full px-6 py-3 ${
            scrolled
              ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl"
              : "bg-transparent"
          }`}
        >
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-3">
              <Heading
                as="h4"
                className="mb-0 text-white tracking-tight group-hover:text-blue-400 transition-colors"
              >
                Bilal Jadi
              </Heading>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-2">
              <NavItem href="#about">About</NavItem>
              <NavItem href="#projects">Projects</NavItem>
              <NavItem href="#services">Services</NavItem>
              <NavItem href="#contact">Contact</NavItem>
            </ul>
          </div>

          <div className="hidden lg:block">
            <Link href="#contact" className="btn-premium text-sm text-white">
              Get in touch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setOpenNavbar(!openNavbar)}
              className="p-2 text-white outline-none"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-white transition-all ${openNavbar ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`w-full h-0.5 bg-white transition-all ${openNavbar ? "opacity-0" : ""}`}
                />
                <span
                  className={`w-full h-0.5 bg-white transition-all ${openNavbar ? "-rotate-45 -translate-y-2.5" : ""}`}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`
          lg:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl transition-all duration-500
          ${openNavbar ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <ul className="flex flex-col items-center gap-6">
              <li onClick={() => setOpenNavbar(false)}>
                <Link
                  href="#about"
                  className="text-3xl font-heading text-white"
                >
                  About
                </Link>
              </li>
              <li onClick={() => setOpenNavbar(false)}>
                <Link
                  href="#projects"
                  className="text-3xl font-heading text-white"
                >
                  Projects
                </Link>
              </li>
              <li onClick={() => setOpenNavbar(false)}>
                <Link
                  href="#services"
                  className="text-3xl font-heading text-white"
                >
                  Services
                </Link>
              </li>
              <li onClick={() => setOpenNavbar(false)}>
                <Link
                  href="#contact"
                  className="text-3xl font-heading text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link
              href="#contact"
              onClick={() => setOpenNavbar(false)}
              className="btn-premium text-white mt-4"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
