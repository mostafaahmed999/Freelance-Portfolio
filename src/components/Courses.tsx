import { Card } from "@/components/ui/card";
import { Sun, Cpu, Building, Briefcase } from "lucide-react";

const Courses = () => {
  const training = [
    {
      degree: "Solar Energy Training – Eco Solar",
      institution: "Cairo, Egypt",
      period: "Off-Grid Systems",
      description: "Hands-on training in solar power systems. Participated in the implementation of a complete solar power project for Al-Zahra School, El-Marg El-Gedida. Worked on system sizing, component selection, installation concepts.",
      icon: Sun
    },
    {
      degree: "Electrical Revit Course",
      institution: "Cairo, Egypt",
      period: "BIM Training",
      description: "Designed complete electrical systems using Revit, including lighting, power, and HVAC systems. Prepared quantity take-offs and BOQs. Designed light current systems such as fire alarm, data, telephone, and sound systems.",
      icon: Building
    },
    {
      degree: "Electrical Distribution Diploma",
      institution: "Professional Training",
      period: "2022",
      description: "Executed a complete electrical distribution project (Call Center) using AutoCAD. Designed lighting systems using DIALux Evo. Performed socket layouts, HVAC load calculations, and quantity take-offs.",
      icon: Briefcase
    },
    {
      degree: "Classic Control & PLC Course",
      institution: "Hassan Ali (HA)",
      period: "Industrial Automation",
      description: "Comprehensive training in industrial automation and control systems. Learned PLC programming, troubleshooting, and control circuit design using TIA Portal. Designed and simulated classic control systems using EKTS and CADE software.",
      icon: Cpu
    }
  ];

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full space-y-8 relative z-10">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Courses & <span className="text-primary">Training</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional development and certifications
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {training.map((item, index) => (
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

export default Courses;
