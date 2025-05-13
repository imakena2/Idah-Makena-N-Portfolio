
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProjectShowcase from "@/components/ProjectShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Projects = () => {
  const [activeSection, setActiveSection] = useState("projects");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-800">Projects & Ventures</h1>
        <ProjectShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
