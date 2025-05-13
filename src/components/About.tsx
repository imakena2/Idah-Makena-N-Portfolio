
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">About Me</h2>
            <div className="space-y-4 text-slate-600">
              <p>
                Experienced IT and Service Management Professional with 7+ years in IT operations, cloud computing, 
                and system administration, combined with another 7 years as a Relationship Manager in the banking industry.
              </p>
              <p>
                This unique blend of technical expertise and customer-facing experience has shaped a strong ability 
                to understand client needs, manage expectations, and deliver tailored solutions. Adept at enhancing 
                service delivery, streamlining support processes, and implementing secure, scalable systems.
              </p>
              <p>
                Throughout my career at Kenya Commercial Bank Group, I've held various roles of increasing responsibility, 
                from Service Desk Analyst to Technology Banking Operations Manager. I've demonstrated a proven ability to monitor 
                critical infrastructure, coordinate preventive maintenance, and generate detailed operational reports.
              </p>
              <p>
                I'm also the founder of Tech Ace Solutions, where we provide innovative IT solutions to businesses. My team and I 
                are committed to leveraging technology to solve real-world problems and enhance operational efficiency.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/experience">
                <Button className="bg-blue-600 hover:bg-blue-700">View My Experience</Button>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Tech Ace Solutions</h2>
            <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center mb-6">
                <img 
                  src="/lovable-uploads/704c97b6-2b36-4210-b9d4-da25146deef8.png" 
                  alt="Tech Ace Solutions Logo" 
                  className="h-16"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Founder & CEO</h3>
              <div className="space-y-4 text-slate-600">
                <p>
                  "My mission is to bring smart digital solutions to businesses and equip rural youth and women with tech skills for a brighter future."
                </p>
                <p>
                  As the founder of Tech Ace Solutions, I lead a team of dedicated IT professionals providing enterprise-grade 
                  solutions to businesses across various sectors.
                </p>
                <p>
                  Our services include:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>IT Infrastructure Management</li>
                  <li>Cloud Migration & Optimization</li>
                  <li>Cybersecurity Consulting</li>
                  <li>Custom Software Development</li>
                  <li>IT Service Desk Solutions</li>
                  <li>Data Analytics & Business Intelligence</li>
                </ul>
                <p>
                  We take pride in our client-centered approach, delivering solutions that not only meet technical requirements 
                  but also align with business objectives to drive growth and efficiency.
                </p>
              </div>
              <div className="mt-6">
                <a href="https://imakena2.github.io/techace-website/index.html" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">Visit Tech Ace Website</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
