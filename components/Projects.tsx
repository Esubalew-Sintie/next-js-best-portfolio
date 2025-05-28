"use client";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaComments,
  FaHotel,
  FaLock,
  FaMoneyBillWave,
  FaPlane,
} from "react-icons/fa";

const projects = [
  {
    title: "Suk-Bederete",
    description:
      "No-code e-commerce platform enabling merchants to create customizable online stores with  product management, and integrated payment processing with delivery system",
    tags: [
      "Next.js",
      "NestJS",
      "Tailwind CSS",
      "PostgreSQL",
      "Payment Integration",
    ],
    icon: <FaShoppingCart className="text-blue-500" size={24} />,
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "E-commerce dashboard with product management interface",
    imageCredit: "Photo by Shopify Partners from Burst",
    link: "#",
    accentColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    title: "Secret Deal",
    description:
      "Anonymous social network with real-time chat, ephemeral content, and community features while maintaining user privacy through pseudonymous identities.",
    tags: ["React", "Firebase", "Socket.io", "Ant Design", "MongoDB"],
    icon: <FaLock className="text-purple-500" size={24} />,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Mobile chat interface with blurred user identities",
    imageCredit: "Photo by Przemek Sztuczyński on Unsplash",
    link: "#",
    accentColor: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    title: "Hotel Management System",
    description:
      "Comprehensive solution for hotel operations including reservations, room management, staff coordination, and analytics dashboard.",
    tags: ["NestJS", "React", "Tailwind CSS", "MySQL", "Redis"],
    icon: <FaHotel className="text-emerald-500" size={24} />,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Hotel reservation system dashboard",
    imageCredit: "Photo by Roberto Nickson on Unsplash",
    link: "#",
    accentColor: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    title: "AddisPay Gateway",
    description:
      "Secure payment processing system supporting multiple payment methods (Telebirr, M-Pesa, CBE) with fraud detection and reporting.",
    tags: ["Golang", "gRPC", "Apache Pulsar", "PostgreSQL", "Microservices"],
    icon: <FaMoneyBillWave className="text-green-500" size={24} />,
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Digital payment transaction interface",
    imageCredit: "Photo by Clay Banks on Unsplash",
    link: "#",
    accentColor: "bg-green-100 dark:bg-green-900/30",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Feature-rich messaging platform with channels, direct messages, file sharing, and end-to-end encryption using modern web technologies.",
    tags: ["Next.js", "NestJS", "Socket.io", "Tailwind CSS", "MongoDB"],
    icon: <FaComments className="text-rose-500" size={24} />,
    image:
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Modern chat application interface",
    imageCredit: "Photo by Bram Naus on Unsplash",
    link: "#",
    accentColor: "bg-rose-100 dark:bg-rose-900/30",
  },
  {
    title: "Engida Travel",
    description:
      "Travel booking platform with itinerary management, real-time availability, and integrated payment processing for Ethiopian destinations.",
    tags: ["NestJS", "React", "Ant Design", "MongoDB", "Redis"],
    icon: <FaPlane className="text-amber-500" size={24} />,
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Travel booking website showing Ethiopian destinations",
    imageCredit: "Photo by Simon English on Unsplash",
    link: "#",
    accentColor: "bg-amber-100 dark:bg-amber-900/30",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          My hands-on experience building diverse web applications
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mt-6"></div>
      </motion.div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div
              className={`h-full rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 ${project.accentColor}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4 p-3 rounded-lg bg-background/80 backdrop-blur-sm">
                  {project.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-full bg-background text-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline group-hover:text-primary/80 transition-colors"
                >
                  View project details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 font-medium"
        >
          View All Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};
