"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaShoppingCart,
  FaComments,
  FaHotel,
  FaLock,
  FaMoneyBillWave,
  FaPlane,
  FaTruck,
} from "react-icons/fa";

const allProjects = [
  {
    title: "Suk-Bederete",
    description:
      "No-code e-commerce platform enabling merchants to create customizable online stores with product management, and integrated payment processing with delivery system.",
    fullDescription: `
      <p>A comprehensive e-commerce solution featuring:</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li>Drag-and-drop store builder with template marketplace</li>
        <li>Integrated payment processing (Telebirr, CBE, M-Pesa)</li>
        <li>Real-time inventory management</li>
        <li>Automated order fulfillment workflow</li>
        <li>Customer analytics dashboard</li>
        <li>Mobile-responsive storefronts</li>
      </ul>
      <p class="mt-4">Built with modern microservices architecture handling 10,000+ concurrent users.</p>
    `,
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
    fullDescription: `
      <p>Privacy-focused social platform featuring:</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li>End-to-end encrypted messaging</li>
        <li>Disappearing content (24hr stories)</li>
        <li>Pseudonymous user profiles</li>
        <li>Community moderation tools</li>
        <li>Content recommendation engine</li>
        <li>Cross-platform synchronization</li>
      </ul>
      <p class="mt-4">Implemented zero-knowledge authentication for maximum privacy.</p>
    `,
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
    fullDescription: `
      <p>Enterprise hotel management platform with:</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li>Dynamic room pricing engine</li>
        <li>Housekeeping workflow automation</li>
        <li>Integrated channel manager</li>
        <li>Guest experience mobile app</li>
        <li>Revenue analytics dashboard</li>
        <li>Multi-property management</li>
      </ul>
      <p class="mt-4">Reduced operational costs by 30% for partner hotels.</p>
    `,
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
    fullDescription: `
      <p>Payment infrastructure platform featuring:</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li>Unified API for multiple payment methods</li>
        <li>Real-time fraud detection</li>
        <li>Automated reconciliation</li>
        <li>Merchant dashboard</li>
        <li>PCI-DSS compliant architecture</li>
        <li>99.99% uptime SLA</li>
      </ul>
      <p class="mt-4">Processes 50,000+ transactions daily with sub-second latency.</p>
    `,
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
    fullDescription: `
      <p>Secure communication platform with:</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li>End-to-end encrypted messaging</li>
        <li>File sharing (up to 2GB)</li>
        <li>Message reactions and threads</li>
        <li>Voice/video calling</li>
        <li>Custom emoji and stickers</li>
        <li>Cross-device synchronization</li>
      </ul>
      <p class="mt-4">Achieved 99.9% message delivery reliability across unstable networks.</p>
    `,
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
    fullDescription: `
      <p>Complete travel solution featuring:</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li>Multi-supplier inventory aggregation</li>
        <li>Dynamic packaging engine</li>
        <li>Personalized recommendation system</li>
        <li>Mobile itinerary management</li>
        <li>Real-time availability updates</li>
        <li>Local payment method integration</li>
      </ul>
      <p class="mt-4">Increased booking conversions by 40% through UX optimizations.</p>
    `,
    tags: ["NestJS", "React", "Ant Design", "MongoDB", "Redis"],
    icon: <FaPlane className="text-amber-500" size={24} />,
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Travel booking website showing Ethiopian destinations",
    imageCredit: "Photo by Simon English on Unsplash",
    link: "#",
    accentColor: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    title: "Delivery Tracking System",
    description:
      "Real-time logistics platform with route optimization, driver tracking, and customer notifications for efficient last-mile delivery operations.",
    fullDescription: `
      <p>Comprehensive delivery management system including:</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li>Real-time GPS tracking of delivery vehicles</li>
        <li>AI-powered route optimization reducing delivery times by 25%</li>
        <li>Automated customer notifications via SMS and email</li>
        <li>Driver performance analytics dashboard</li>
        <li>Proof-of-delivery with digital signatures and photo capture</li>
        <li>Integration with e-commerce platforms and payment systems</li>
      </ul>
      <p class="mt-4">Built with microservices architecture for scalability across multiple regions.</p>
    `,
    tags: ["Node.js", "React Native", "Google Maps API", "Redis", "Firebase"],
    icon: <FaTruck className="text-indigo-500" size={24} />,
    image:
      "https://images.unsplash.com/photo-1601006049905-0d5e3358c05f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Delivery tracking dashboard with maps",
    imageCredit: "Photo by Austin Distel on Unsplash",
    link: "#",
    accentColor: "bg-indigo-100 dark:bg-indigo-900/30",
  },
];

type Project = typeof allProjects[number];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Display only 6 projects initially, show all when clicked
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 6);

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
        {displayedProjects.map((project, index) => (
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
                  alt={project.imageAlt}
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
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProject(project);
                  }}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline group-hover:text-primary/80 transition-colors cursor-pointer"
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
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center px-6 py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 font-medium"
        >
          {showAll ? "Show Less" : "View All Projects"}
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
        </button>
      </motion.div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-background rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative h-64 w-full">
              <img
                src={selectedProject.image}
                alt={selectedProject.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-background/80 backdrop-blur-sm">
                {selectedProject.icon}
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-wrap gap-2 my-4">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-muted text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="prose prose-sm dark:prose-invert mt-4"
                dangerouslySetInnerHTML={{
                  __html:
                    selectedProject.fullDescription ||
                    selectedProject.description,
                }}
              />

              {/* <div className="mt-6 flex gap-4">
                <a
                  href={selectedProject.link}
                  className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={selectedProject.link}
                  className="px-6 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  View Code
                </a>
              </div> */}

              {/* {selectedProject.imageCredit && (
                <p className="text-xs text-muted-foreground mt-6">
                  {selectedProject.imageCredit}
                </p>
              )} */}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
