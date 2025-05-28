import About from "@/components/About";
import { BlogSection } from "@/components/Blog";
import { ContactSection } from "@/components/ContactUs";
import Experience from "@/components/Experiance";
import Home from "@/components/Home";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skill";
import { Testimonials } from "@/components/Testimonial";

const Page = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero - Gradient background */}
      <section
        id="home"
        className="min-h-[calc(100vh-5rem)] flex items-center bg-gradient-to-br from-[#7c3aed]/10 via-[#f8fafc] to-[#06b6d4]/5"
      >
        <Home />
      </section>

      {/* About - Soft background */}
      <section id="about" className="py-16 bg-[#f8fafc]">
        <About />
      </section>

      {/* Skills - Cards on white */}
      <section id="skills" className="py-16 bg-white border-t border-[#e2e8f0]">
        <Skills />
      </section>

      {/* Projects - Gradient accent */}
      <section
        id="projects"
        className="py-16 bg-gradient-to-br from-[#f8fafc] to-[#7c3aed]/5 border-t border-[#e2e8f0]"
      >
        <Projects />
      </section>

      {/* Experience - Timeline on white */}
      <section
        id="experience"
        className="py-16 bg-white border-t border-[#e2e8f0]"
      >
        <Experience />
      </section>

      {/* Testimonials - Vibrant accent */}
      <section
        id="testimonials"
        className="py-16 bg-[#7c3aed]/5 border-t border-[#e2e8f0]"
      >
        <Testimonials />
      </section>

      {/* Blog - Clean background */}
      <section
        id="blog"
        className="py-16 bg-[#f8fafc] border-t border-[#e2e8f0]"
      >
        <BlogSection />
      </section>

      {/* Contact - Strong CTA section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-br from-[#06b6d4]/10 to-[#7c3aed]/10 border-t border-[#e2e8f0]"
      >
        <ContactSection />
      </section>
    </div>
  );
};

export default Page;
