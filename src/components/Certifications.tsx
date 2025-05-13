
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    name: "Certificate in Data Science",
    issuer: "Techsavanna Software Institute",
    year: "2024",
    type: "certification"
  },
  {
    name: "Development, Security and Operations (DevSecOps)",
    issuer: "Innovate Systems",
    year: "2024",
    type: "certification"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    year: "2024",
    type: "certification"
  },
  {
    name: "Certificate in Web Development",
    issuer: "E-mobilis Technology Institute",
    year: "2024",
    type: "certification"
  },
  {
    name: "Data Analytics",
    issuer: "Women Techsters",
    year: "2024",
    type: "certification"
  },
  {
    name: "CyberOpsAssoc",
    issuer: "Cisco Network Academy",
    year: "2025",
    type: "training",
    status: "Ongoing"
  },
  {
    name: "Development, Security and Operations (DevSecOps)",
    issuer: "Strathmore",
    year: "2025",
    type: "training",
    status: "Ongoing"
  },
  {
    name: "Cyber Security & Ethical Hacking Internship Program",
    issuer: "Edureka",
    year: "2025",
    type: "training",
    status: "Ongoing"
  },
  {
    name: "Cybersecurity and Emerging Technologies Awareness Training",
    issuer: "",
    year: "2025",
    type: "training"
  },
  {
    name: "AWS Solutions Architect",
    issuer: "Edureka",
    year: "2025",
    type: "training",
    status: "Ongoing"
  },
  {
    name: "Cybersecurity Training for Financial Institutions",
    issuer: "",
    year: "2023",
    type: "training"
  },
  {
    name: "ITIL Foundation",
    issuer: "",
    year: "2022",
    type: "training"
  },
  {
    name: "Administering System Center Configuration Manager",
    issuer: "",
    year: "2019",
    type: "training"
  },
  {
    name: "A+ (Hardware & Software)",
    issuer: "",
    year: "2005",
    type: "training"
  }
];

const Certifications = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-slate-800 mb-8">Certifications & Training</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <Card key={index} className={cert.type === "certification" ? "border-l-4 border-green-500" : "border-l-4 border-blue-400"}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-slate-800">
                    {cert.name}
                    {cert.status && <span className="ml-2 text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full">{cert.status}</span>}
                  </h3>
                  {cert.issuer && <p className="text-sm text-slate-500">{cert.issuer}</p>}
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-600">{cert.year}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Education</h3>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium text-slate-800">BSc. Information Technology</h4>
              <p className="text-sm text-slate-500">Jomo Kenyatta University of Agriculture & Technology | 2004</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium text-slate-800">Diploma in Information Technology</h4>
              <p className="text-sm text-slate-500">Jomo Kenyatta University of Agriculture & Technology | Dec 2000</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
