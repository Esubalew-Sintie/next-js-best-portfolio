"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Esubalew Sintie</h3>
            <p className="text-muted-foreground">
              Full-Stack Developer specializing in scalable systems and
              beautiful interfaces.
            </p>
            <div className="flex gap-4">
              <a
                href="www.linkedin.com/in/esubalew-sintie"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/Esubalew-Sintie"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </motion.div>

          {[
            {
              title: "Navigation",
              links: [
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ],
            },
            {
              title: "Resources",
              links: [
                { href: "/blog", label: "Blog" },
                { href: "/resume", label: "Resume" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms" },
              ],
            },
            {
              title: "Contact",
              links: [
                {
                  href: "mailto:esubalewsintie1302@gmail.com",
                  label: "Email",
                  icon: <FiMail className="mr-2" />,
                },
                { href: "tel:+251953604964", label: "+251 953 604 964" },
                { href: "tel:+251975529786", label: "+251 975 529 786" },
                { label: "Addis Ababa, Ethiopia" },
              ],
            },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    ) : (
                      <span className="text-muted-foreground">
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground"
        >
          <p>
            © {new Date().getFullYear()} Esubalew Sintie. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
