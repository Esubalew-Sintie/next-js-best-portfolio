"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ModeToggle } from "./ThemeToggle";
import {
  Home,
  User,
  Code,
  Contact,
  BookOpen,
  Briefcase,
  MessageSquare,
  Newspaper,
  Menu,
} from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home", icon: <Home className="h-4 w-4" /> },
  { href: "#about", label: "About", icon: <User className="h-4 w-4" /> },
  { href: "#skills", label: "Skills", icon: <BookOpen className="h-4 w-4" /> },
  {
    href: "#experience",
    label: "Experience",
    icon: <Briefcase className="h-4 w-4" />,
  },
  { href: "#projects", label: "Projects", icon: <Code className="h-4 w-4" /> },
  {
    href: "#testimonials",
    label: "Testimonials",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  { href: "#blog", label: "Blog", icon: <Newspaper className="h-4 w-4" /> },
  { href: "#contact", label: "Contact", icon: <Contact className="h-4 w-4" /> },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>("#home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navLinks.map(({ href }) => {
        const el = document.querySelector(href);
        if (!el) return { href, top: Infinity };

        return {
          href,
          top: el.getBoundingClientRect().top,
          bottom: el.getBoundingClientRect().bottom,
        };
      });

      const visibleSection =
        sections.find((sec) => sec.top <= 100 && sec?.bottom >= 100) ||
        sections[0];

      if (visibleSection && visibleSection.href !== currentSection) {
        setCurrentSection(visibleSection.href);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={clsx(
        "fixed top-0 z-50 w-full backdrop-blur-md transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-zinc-900/80 shadow-sm border-b"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="#home"
            className="flex items-center gap-2 text-xl font-semibold tracking-tight"
          >
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Esubalew.dev
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href={link.href}
                className={clsx(
                  "relative px-3 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-1.5",
                  currentSection === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <motion.span
                  animate={{
                    scale: currentSection === link.href ? 1.1 : 1,
                    opacity: currentSection === link.href ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {link.icon}
                </motion.span>
                <span>{link.label}</span>
                {currentSection === link.href && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute left-3 right-3 bottom-1 h-[2px] bg-gradient-to-r from-primary to-purple-600 rounded-full"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <div className="ml-3">
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] bg-background/95 backdrop-blur"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col h-full pt-16"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: 0.05 * navLinks.indexOf(link),
                      },
                    }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={clsx(
                        "flex items-center gap-3 px-4 py-3 text-lg font-medium transition-colors",
                        currentSection === link.href
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <span
                        className={clsx(
                          "transition-colors",
                          currentSection === link.href
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        {link.icon}
                      </span>
                      {link.label}
                      {currentSection === link.href && (
                        <motion.span
                          layoutId="mobileActiveIndicator"
                          className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                          transition={{ type: "spring", bounce: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
