"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
 

export default function Hero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [displayName, setDisplayName] = useState("");
  const fullName = "Esubalew Sintie";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Continuous floating animation
  const floatingVariants = {
    float: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Pulsing glow animation
  const glowVariants = {
    pulse: {
      opacity: [0.2, 0.3, 0.2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      // Start typing animation when in view
      const typingInterval = setInterval(() => {
        if (currentIndex < fullName.length) {
          setDisplayName((prev) => prev + fullName[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else {
          clearInterval(typingInterval);
          setIsTypingComplete(true);

          // Add a completion effect
          setTimeout(() => {
            controls.start({
              color: ["#3b82f6", "#8b5cf6", "#3b82f6"],
              transition: { duration: 1.5, repeat: 1, repeatType: "reverse" },
            });
          }, 300);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    } else {
      controls.start("hidden");
      // Reset typing animation when out of view
      setDisplayName("");
      setCurrentIndex(0);
      setIsTypingComplete(false);
    }
  }, [isInView, controls, currentIndex]);

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 bg-gradient-to-br from-background via-background to-gray-100/50 dark:to-gray-900/50 overflow-hidden"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Side */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                staggerChildren: 0.1,
                when: "beforeChildren",
              },
            },
          }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="space-y-4">
            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.8 },
                },
              }}
              className="text-lg md:text-xl font-medium text-primary"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Typewriter Animated Name */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 leading-tight min-h-[1.2em]"
              animate={
                isTypingComplete
                  ? {
                      backgroundPosition: ["0% 50%", "100% 50%"],
                      transition: {
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }
                  : {}
              }
            >
              {displayName}
              <motion.span
                animate={{ opacity: isTypingComplete ? 0 : [0, 1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: isTypingComplete ? 0 : Infinity,
                  repeatDelay: 0.2,
                }}
                className="ml-1"
              >
                |
              </motion.span>
            </motion.h1>

            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                    type: "spring",
                    stiffness: 100,
                  },
                },
              }}
              className="text-xl sm:text-2xl font-medium text-muted-foreground"
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-gray-500 bg-[length:200%_200%]"
              >
                Full-Stack Developer
              </motion.span>
            </motion.div>
          </div>

          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 },
              },
            }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0"
          >
            I architect and build scalable backend systems and beautiful,
            responsive interfaces with modern technologies.
          </motion.p>

          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.4,
                  staggerChildren: 0.1,
                },
              },
            }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <motion.div
              variants={{
                hidden: { scale: 0.9, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 300 },
                },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#projects"
                className="px-8 py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2"
              >
                <span>View Projects</span>
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
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              variants={{
                hidden: { scale: 0.9, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.1,
                    type: "spring",
                    stiffness: 300,
                  },
                },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/esubalew-sintie-cv-Go.pdf"
                download
                className="px-8 py-3.5 rounded-xl border-2 border-primary/30 hover:border-primary text-primary hover:text-white font-medium hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
              >
                <span>Download Resume</span>
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
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Visual Side */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { scale: 0.9, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="flex justify-center"
        >
          <Tilt
            scale={1.05}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            glareEnable
            glareMaxOpacity={0.2}
            glareColor="#ffffff"
            glarePosition="all"
            className="w-full max-w-md"
          >
            <motion.div
              variants={floatingVariants}
              animate="float"
              className="relative"
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur-lg opacity-20"
                variants={glowVariants}
                animate="pulse"
              />
              <div className="relative overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl">
                <img
                  src="/main-esubalew.JPG"
                  alt="Esubalew Sintie"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <motion.div
                  className="absolute bottom-6 left-6"
                  initial={{ x: -20 }}
                  animate={{
                    x: 0,
                    transition: {
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100,
                    },
                  }}
                >
                  <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="h-2 w-2 rounded-full bg-green-400"
                    />
                    <span className="text-sm font-medium text-white">
                      Available for work
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Tilt>
        </motion.div>
      </div>

      {/* Floating background elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-primary/20 blur-sm"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-20 w-6 h-6 rounded-full bg-purple-600/20 blur-sm"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
}
