"use client";
import { motion } from "framer-motion";
import { FaCode, FaMoneyBillWave, FaPlane } from "react-icons/fa";

const experiences = [
  {
    company: "Addispay Financial Technology S.C.",
    role: "Backend Developer",
    duration: "Oct 2024 – Present",
    points: [
      "Specialized in integrating Telebirr, M-Pesa, and CBE payment systems for secure transactions",
      "Developed scalable payment gateway APIs using Golang and gRPC",
      "Implemented event-driven architecture with Apache Pulsar for real-time updates",
      "Optimized system performance and ensured compliance with financial industry standards",
    ],
    icon: <FaMoneyBillWave className="text-green-500" />,
    tech: ["Golang", "gRPC", "NestJS", "Apache Pulsar", "PostgreSQL"],
  },
  {
    company: "Engida Travel",
    role: "Full-Stack Developer",
    duration: "Jun 2024 – Sep 2024",
    points: [
      "Architected and developed the booking management system using NestJS",
      "Built responsive admin dashboards with React and Ant Design",
      "Implemented real-time updates for travel itineraries using WebSockets",
      "Optimized frontend performance with Tailwind CSS and component lazy loading",
    ],
    icon: <FaPlane className="text-blue-500" />,
    tech: ["NestJS", "React", "Ant Design", "Tailwind CSS", "MongoDB"],
  },
  {
    company: "Qemer",
    role: "Backend Developer",
    duration: "Jan 2024 – May 2024",
    points: [
      "Developed real-time communication features using Socket.io",
      "Contributed to microservices architecture with Express.js and NestJS",
      "Integrated Firebase for real-time database and authentication",
      "Collaborated on frontend development using Next.js and shadcn/ui",
    ],
    icon: <FaCode className="text-purple-500" />,
    tech: ["Express.js", "NestJS", "Socket.io", "Firebase", "Next.js"],
  },
  {
    company: "Suk-Bederete (University Project)",
    role: "Lead Developer",
    duration: "2023",
    points: [
      "Built e-commerce platform as final year project at Bahir Dar University",
      "Implemented template-based store customization system",
      "Developed complete product management and order processing flows",
      "Designed customer-facing pages for browsing, cart, and checkout",
    ],
    tech: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Work Experience
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          My professional journey and key contributions
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mt-6"></div>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 to-transparent transform -translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative mb-12 pl-10 md:pl-0 ${
              index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
            }`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute top-1.5 left-0 w-4 h-4 rounded-full bg-primary transform ${
                index % 2 === 0
                  ? "md:left-1/2 md:-translate-x-1/2"
                  : "md:left-1/2 md:-translate-x-1/2"
              }`}
            ></div>

            <div
              className={`bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${
                index % 2 === 0 ? "md:mr-6" : "md:ml-6"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:order-2 md:text-right" : ""
                  }`}
                >
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-muted-foreground">{exp.role}</p>
                </div>
                {exp.icon && (
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {exp.icon}
                  </div>
                )}
              </div>

              <div
                className={`mb-4 ${
                  index % 2 === 0 ? "md:order-1 md:text-right" : ""
                }`}
              >
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">
                  {exp.duration}
                </span>
              </div>

              <ul
                className={`space-y-2 ${
                  index % 2 === 0 ? "md:pr-6" : "md:pl-6"
                }`}
              >
                {exp.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    viewport={{ once: true }}
                    className="relative pl-4 text-muted-foreground"
                  >
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {point}
                  </motion.li>
                ))}
              </ul>

              {exp.tech && (
                <div
                  className={`mt-4 flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
