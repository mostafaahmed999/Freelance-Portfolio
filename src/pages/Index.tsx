import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import EducationSection from "@/components/EducationSection";
import Courses from "@/components/Courses";
import YouTubeVideos from "@/components/YouTubeVideos";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <EducationSection />
      </section>
      <section id="courses">
        <Courses />
      </section>
      <section id="youtube">
        <YouTubeVideos />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
