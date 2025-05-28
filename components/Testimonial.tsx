"use client";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Tesfa Tegegne",
    role: "Faculty Dean, Bahir Dar Institute of Technology",
    content:
      "Esubalew demonstrated exceptional technical skills during his time at the university. His final year project, Suk-Bederete, showcased innovative thinking and strong implementation capabilities that stood out among his peers.",
    avatar: "/avatars/tesfa.jpg",
  },
  {
    name: "AddisPay CTO",
    role: "Technical Lead, AddisPay Financial Technology",
    content:
      "Esubalew's work on our payment gateway was instrumental in meeting our scalability goals. His expertise in Golang and event-driven architecture helped us process transactions 40% faster while maintaining system reliability.",
    avatar: "/avatars/cto.jpg",
  },
  {
    name: "Qemer Project Manager",
    role: "Product Manager, Qemer",
    content:
      "Working with Esubalew on our real-time communication features was a pleasure. He consistently delivered clean, well-documented code and offered valuable insights on system architecture improvements.",
    avatar: "/avatars/pm.jpg",
  },
  {
    name: "Engida Travel CEO",
    role: "Founder, Engida Travel",
    content:
      "The booking platform Esubalew developed exceeded our expectations. His attention to detail in both backend logic and frontend UX resulted in a 30% increase in completed bookings within the first month.",
    avatar: "/avatars/ceo.jpg",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 px-4 bg-gradient-to-br from-background to-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            What Others Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from colleagues, managers, and clients
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 text-primary/20">
                <FaQuoteLeft size={60} />
              </div>
              <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <p className="text-lg text-muted-foreground mb-6 relative z-10">
                  {testimonial.content}
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary bg-muted flex items-center justify-center relative">
                    {/* <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      style={{ display: testimonial.avatar ? "block" : "none" }}
                      onError={e => (e.currentTarget.style.display = "none")}
                    /> */}
                    <span className="absolute inset-0 flex items-center justify-center">
                      <User className="w-8 h-8 text-primary/60" />
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
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
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors duration-300 font-medium shadow-lg hover:shadow-primary/30"
          >
            Get in Touch
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
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
