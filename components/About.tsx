"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid md:grid-cols-5 gap-8 items-start"
      >
        <div className="md:col-span-3 space-y-6">
          <p className="text-lg leading-relaxed">
            I&apos;m a passionate Full-Stack Developer with a Computer Science
            degree from Bahir Dar University (GPA: 3.91), specializing in
            building scalable systems and intuitive interfaces.
          </p>

          <p className="text-lg leading-relaxed">
            My journey in tech began with my final year project developing
            Suk-Bederete, an e-commerce platform, which sparked my love for
            solving real-world problems through code. Since then, I&apos;ve
            worked across fintech, e-commerce, and travel tech domains.
          </p>

          {/* <p className="text-lg leading-relaxed">
            What drives me is creating efficient solutions that bridge business
            needs with technical excellence. Whether architecting microservices
            or crafting responsive UIs, I approach every project with attention
            to detail and a focus on performance.
          </p> */}

          <div className="pt-4">
            <h3 className="text-xl font-semibold mb-3">Currently</h3>
            <p className="text-lg leading-relaxed">
              Building secure payment solutions at Addispay Financial
              Technology, while continuously expanding my expertise in system
              design and modern web technologies.
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-card p-1 rounded-2xl shadow-lg border border-border"
          >
            <img
              src="/esub.jpg"
              alt="Esubalew Sintie"
              className="w-full rounded-xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
