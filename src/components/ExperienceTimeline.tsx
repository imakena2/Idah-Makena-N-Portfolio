
import { Card, CardContent } from "@/components/ui/card";
import { 
  Briefcase
} from "lucide-react";

const experiences = [
  {
    title: "Educational Break",
    company: "Various Institutions",
    period: "Dec 2023 – Ongoing",
    description: "Took a professional break to complete certifications, gaining expertise in data analysis, AI & machine learning, cloud solutions, and secure software development for career advancement.",
    highlights: [],
  },
  {
    title: "Technology Banking Operations Manager",
    company: "Kenya Commercial Bank Group",
    period: "Jan 2023 – Aug 2023",
    description: "",
    highlights: [
      "Spearheaded ETL optimization projects, achieving a 99.7% uptime for critical financial systems.",
      "Automated COB processing, reducing processing time by 13%, significantly improving operational efficiency.",
      "Standardized IT operations across four countries, resulting in streamlined processes and improved cross-border collaboration.",
      "Led a team to integrate cloud-based tools, driving a 17% increase in system reliability.",
      "Developed cloud-driven workflows that enhanced reporting accuracy, meeting regulatory requirements with zero delays.",
      "Partnered with virtual teams to deploy a new financial application system, delivering the project two weeks ahead of schedule.",
      "Improved troubleshooting protocols, enabling the resolution of high-priority incidents within an average of 4 hours."
    ],
  },
  {
    title: "Desktop Applications Specialist",
    company: "Kenya Commercial Bank Group",
    period: "Aug 2018 – Dec 2022",
    description: "",
    highlights: [
      "Consistently delivered first-contact resolution for 94% of support tickets by efficiently diagnosing and addressing technical issues, ensuring seamless business operations with minimal downtime.",
      "Designed and implemented virtual training programs that reached over 200 users, leading to a 27% decrease in help desk inquiries and significantly improving user proficiency.",
      "Strengthened identity and access management (IAM) protocols by enforcing stringent security measures, which led to a 12% reduction in vulnerabilities identified during regular audits.",
      "Worked closely with cloud service providers to optimize application configurations, resulting in an 18% improvement in load times for critical business applications.",
      "Automated critical troubleshooting scripts, which reduced the average incident response time by approximately 6 minutes, enhancing service efficiency."
    ],
  },
  {
    title: "Manager, Service Desk Level 2 Support",
    company: "Kenya Commercial Bank Group",
    period: "Jan 2017 – Jul 2018",
    description: "",
    highlights: [
      "Spearheaded the introduction of root cause analysis frameworks, which reduced recurring incidents by 23% within just six months, improving service reliability.",
      "Implemented advanced cloud-based monitoring tools, increasing the rate of early incident detection by 39% and preventing critical service disruptions.",
      "Successfully managed and mentored a geographically distributed team of six IT specialists, ensuring consistent adherence to service level agreements (SLAs) across all supported locations."
    ],
  },
  {
    title: "Service Desk Analyst",
    company: "Kenya Commercial Bank Group",
    period: "Sept 2015 – Dec 2016",
    description: "",
    highlights: [
      "Maintained an impressive 98% SLA compliance rate by standardizing and refining incident response protocols across multiple departments, ensuring timely service delivery.",
      "Provided effective remote IT support for over 50 bank branches, ensuring uninterrupted business operations across the organization's wide network.",
      "Collaborated with team members to streamline processes, achieving a 19% reduction in ticket resolution times, which significantly enhanced overall user experience."
    ],
  },
  {
    title: "Customer Relationship Manager",
    company: "Kenya Commercial Bank Group",
    period: "Sept 2015 – Dec 2016",
    description: "",
    highlights: [
      "Spearheaded the adoption of cloud-based solutions, driving a 20% growth in the customer portfolio.",
      "Designed and implemented digital transformation strategies, elevating client retention and satisfaction through innovative cloud services.",
      "Enhanced customer engagement by leveraging data-driven insights to tailor banking solutions to client needs.",
      "Collaborated with cross-functional teams to streamline customer onboarding processes, reducing turnaround time by 30%."
    ],
  }
];

const ExperienceTimeline = () => {
  return (
    <section className="mb-16">
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <Card key={index} className="border-l-4 border-blue-600">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                  <Briefcase size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800">{experience.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 text-slate-600">
                    <span className="font-medium">{experience.company}</span>
                    <span className="hidden sm:inline text-slate-400">•</span>
                    <span className="text-sm text-slate-500">{experience.period}</span>
                  </div>
                  {experience.description && (
                    <p className="mt-3 text-slate-600">{experience.description}</p>
                  )}
                  {experience.highlights.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {experience.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
