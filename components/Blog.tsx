"use client";
import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";

const blogPosts = [
  {
    title: "Building Scalable Microservices with Golang and gRPC",
    excerpt:
      "Learn how to design high-performance microservices architecture using Golang's concurrency model and gRPC's efficient communication protocol.",
    date: "May 15, 2024",
    readTime: "8 min read",
    tags: ["Golang", "Microservices", "gRPC"],
    slug: "https://nasriadzlani.medium.com/building-scalable-microservices-with-grpc-in-golang-a-step-by-step-guide-5d0aab2cd819",
  },
  {
    title: "Implementing Real-Time Features with Socket.io and NestJS",
    excerpt:
      "A deep dive into building responsive applications using WebSockets with practical examples from my work on Qemer's chat system.",
    date: "April 28, 2024",
    readTime: "6 min read",
    tags: ["NestJS", "Socket.io", "Real-time"],
    slug: "https://medium.com/nestjs-ninja/real-time-chat-with-nestjs-and-socket-io-642d10044201",
  },
  {
    title: "Payment Gateway Integration Patterns in Ethiopian Fintech",
    excerpt:
      "Exploring the challenges and solutions for integrating Telebirr, M-Pesa, and CBE payments in scalable financial systems.",
    date: "March 10, 2024",
    readTime: "10 min read",
    tags: ["Fintech", "Payment Integration", "AddisPay"],
    slug: "https://psi.org.et/index.php/blog/266-ethiopia-s-digital-finance-sector-overcoming-challenges-and-driving-financial-inclusion",
  },
  {
    title: "From Monolith to Microservices: Lessons Learned",
    excerpt:
      "My journey refactoring Suk-Bederete's architecture and the key decisions that improved our scalability by 300%.",
    date: "February 22, 2024",
    readTime: "12 min read",
    tags: ["Architecture", "Refactoring", "E-commerce"],
    slug: "https://medium.com/@dagde.kalyani/from-monolith-to-microservices-lessons-learned-in-the-real-world-fe9e28f9a73d",
  },
  {
    title: "Optimizing React Performance with Next.js and shadcn/ui",
    excerpt:
      "Practical techniques I used to reduce load times by 40% in Engida Travel's booking interface.",
    date: "January 15, 2024",
    readTime: "7 min read",
    tags: ["React", "Next.js", "Performance"],
    slug: " https://medium.com/@programmingAi/user-interfaces-with-shadcn-and-next-js-14-979740578556",
  },
  {
    title: "Event-Driven Architecture with Apache Pulsar",
    excerpt:
      "How we implemented EDA at AddisPay to handle 10,000+ transactions per second reliably.",
    date: "December 5, 2023",
    readTime: "9 min read",
    tags: ["Apache Pulsar", "EDA", "Backend"],
    slug: "https://streamnative.io/blog/developing-event-driven-microservices-apache-pulsar-part-i",
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Technical Blog
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sharing knowledge and experiences from my development journey
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mt-6"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="h-full bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex gap-3 mb-4 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-6">{post.excerpt}</p>
              </div>

              <div className="px-6 pb-6 mt-auto">
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-2">
                    <FiCalendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiClock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline group-hover:text-primary/80 transition-colors"
                >
                  Read article
                  <FiArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </motion.article>
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
          href="/blog"
          className="inline-flex items-center px-6 py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 font-medium"
        >
          View All Articles
          <FiArrowRight className="ml-2" />
        </a>
      </motion.div>
    </section>
  );
};
