import Link from "next/link";
import { Heading, Text } from "@/components/ui/Typography";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative flex items-center justify-center h-10 w-10">
                <div className="absolute inset-0 bg-blue-600 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-80" />
                <div className="absolute inset-0 bg-[#1A14A5] rounded-xl -rotate-6 group-hover:-rotate-12 transition-transform duration-300" />
                <span className="relative text-white font-bold text-xl ml-1">
                  B
                </span>
              </div>
              <Heading as="h4" className="mb-0 text-white tracking-tight">
                Bilal Jadi
              </Heading>
            </Link>
            <Text className="max-w-sm">
              Full Stack Developer &{" "}
              <a
                href="https://bshsolutionss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Founder & CEO BSH SOLUTIONS
              </a>
              . Creating high-end digital experiences where creative design
              meets industry-level engineering standards.
            </Text>
          </div>

          <div>
            <Heading as="h6" className="text-white mb-6">
              Navigation
            </Heading>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#about"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Heading as="h6" className="text-white mb-6">
              Social
            </Heading>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <Text className="text-sm">
            © {currentYear} Bilal Jadi. All rights reserved.
          </Text>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </footer>
  );
};

export default Footer;
