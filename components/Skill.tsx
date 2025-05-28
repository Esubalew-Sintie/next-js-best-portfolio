"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiNestjs,
  SiExpress,
  SiGo,
  SiMongodb,
  SiPostgresql,
  SiSocketdotio,
  SiFirebase,
  SiTailwindcss,
  SiAntdesign,
  SiElasticsearch,
  SiApachepulsar,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-blue-500" size={24} />,
      skills: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
        {
          name: "JavaScript",
          icon: <SiTypescript className="text-yellow-400" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
        { name: "Ant Design", icon: <SiAntdesign className="text-red-500" /> },
        {
          name: "shadcn/ui",
          icon: <div className="w-4 h-4 bg-primary rounded-sm" />,
        },
      ],
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-green-500" size={24} />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
        { name: "Golang", icon: <SiGo className="text-cyan-500" /> },
        {
          name: "gRPC",
          icon: <div className="w-4 h-4 bg-blue-600 rounded-sm" />,
        },
        {
          name: "Microservices",
          icon: <div className="w-4 h-4 bg-purple-500 rounded-sm" />,
        },
        {
          name: "Payment Integration",
          icon: <div className="w-4 h-4 bg-green-600 rounded-sm" />,
        },
      ],
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-yellow-500" size={24} />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-700" />,
        },
        { name: "MySQL", icon: <FaDatabase className="text-blue-400" /> },
        {
          name: "ElasticSearch",
          icon: <SiElasticsearch className="text-yellow-600" />,
        },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      ],
    },
    {
      title: "DevOps & Others",
      icon: <FaGitAlt className="text-orange-500" size={24} />,
      skills: [
        { name: "Docker", icon: <FaGitAlt className="text-blue-400" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "Socket.io", icon: <SiSocketdotio /> },
        {
          name: "Apache Pulsar",
          icon: <SiApachepulsar className="text-purple-600" />,
        },
        {
          name: "Event-Driven Arch",
          icon: <div className="w-4 h-4 bg-pink-500 rounded-sm" />,
        },
        {
          name: "Hexagonal Arch",
          icon: <div className="w-4 h-4 bg-indigo-500 rounded-sm" />,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Technical Skills
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Technologies I&apos;ve worked with across full-stack development
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mt-6"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-5 border-b border-border bg-gradient-to-r from-card to-card/50 flex items-center gap-3">
              {category.icon}
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <div className="p-5">
              <ul className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      delay: 0.1 + catIdx * 0.05 + skillIdx * 0.03,
                    }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="text-foreground">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
