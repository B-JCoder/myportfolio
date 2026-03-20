"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    // Mouse Blob Follower
    const blob = document.getElementById("cursor-blob");
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (blob) {
        blob.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    // Parallax Effect
    const handleScroll = () => {
      const scroll = window.pageYOffset;

      // Hero parallax
      const parallaxTexts = document.querySelectorAll(".parallax-text");
      parallaxTexts.forEach((text) => {
        const speed = text.getAttribute("data-speed");
        if (speed) {
          (text as HTMLElement).style.transform =
            `translateX(${scroll * Number.parseFloat(speed) * 0.1}px)`;
        }
      });

      const heroImg = document.getElementById("hero-img");
      if (heroImg) {
        heroImg.style.transform = `translate(-50%, calc(-50% + ${scroll * 0.2}px)) scale(${1 + scroll * 0.0005})`;
      }

      // Floating labels in project section
      const labels = document.querySelectorAll(".floating-label");
      labels.forEach((label, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        (label as HTMLElement).style.transform =
          `translateY(${scroll * 0.1 * direction}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);

    // Simple reveal on enter (Intersection Observer)
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal-text").forEach((text) => {
      observer.observe(text);
    });

    // Add smooth scrolling for anchor links
    document
      .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
      .forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const href = anchor.getAttribute("href");
          if (href) {
            document.querySelector(href)?.scrollIntoView({
              behavior: "smooth",
            });
          }
        });
      });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
