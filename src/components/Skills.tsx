
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    name: "IT Operations",
    skills: ["IT Support (Level 1 & 2)", "Service Delivery", "IT Troubleshooting", "Ticketing Systems", "Remote Support", "System Administration", "Incident Management"]
  },
  {
    name: "Cloud & Infrastructure",
    skills: ["AWS", "Cloud Security", "Cloud Computing", "System Monitoring", "Configuration Management", "IAM"]
  },
  {
    name: "Data & Analytics",
    skills: ["Data Analysis", "ETL Optimization", "Root Cause Analysis", "Performance Monitoring", "Reporting"]
  },
  {
    name: "Security & Operations",
    skills: ["DevSecOps", "SLA Adherence", "Process Improvement", "Identity Management", "Cybersecurity"]
  },
  {
    name: "Development",
    skills: ["Automation Scripting", "Python", "HTML", "CSS", "SQL", "Web Development"]
  },
  {
    name: "Customer Relations",
    skills: ["User Experience", "Customer Engagement", "Digital Transformation", "Client Communication", "Process Optimization"]
  }
];

const Skills = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-slate-800 mb-8">Skills & Expertise</h2>
      
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-blue-600 mb-3">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
