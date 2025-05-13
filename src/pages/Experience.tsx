
import Navbar from "@/components/Navbar";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import { useState } from "react";

const Experience = () => {
  const [activeSection, setActiveSection] = useState("experience");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-800">Professional Experience</h1>
        <ExperienceTimeline />
        <Skills />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
