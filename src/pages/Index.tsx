
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow">
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
