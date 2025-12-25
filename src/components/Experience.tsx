import { Card } from "@/components/ui/card";
import { HardHat, Building } from "lucide-react";

const Experience = () => {
  const experience = [
    {
      degree: "Electrical Site Engineer",
      institution: "Jazal Engineering & Contracting L.L.C",
      period: "05/2025 – Present",
      description: "Supervise electrical installation works on site including lighting, power, and low-current systems. Review shop drawings and ensure execution aligns with approved drawings and specifications. Coordinate with subcontractors, suppliers, and site teams to ensure timely project delivery. Monitor work quality, safety compliance, and material usage on site.",
      icon: HardHat
    },
    {
      degree: "Electrical Design Engineer",
      institution: "KEM Consultant Group",
      period: "12/2024 – 05/2025",
      description: "Assisted in electrical design review for residential and commercial projects. Reviewed lighting, power layouts, and load calculations in compliance with IEC and local standards. Supported coordination between electrical, mechanical, and architectural disciplines. Prepared technical documentation and assisted in BOQs and drawing revisions.",
      icon: Building
    },
  ];

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="max-w-6xl mx-auto w-full space-y-8 relative z-10">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My work experience in the field
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {experience.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 group hover:scale-105 hover:shadow-xl hover:shadow-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <item.icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{item.degree}</h3>
                  <p className="text-primary font-medium">{item.institution}</p>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                  <p className="text-sm text-foreground/80 mt-3 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
