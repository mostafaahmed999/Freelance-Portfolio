import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const education = {
    degree: "Bachelor of Science in Electrical Engineering",
    institution: "Helwan University, Cairo, Egypt",
    period: "2018 – 2023 | Graduated with Excellent Honors",
    description: "Specialization: Power Systems, Automation, Control Systems, and Renewable Energy. Strong foundation in circuit analysis, electrical machines, power distribution, and automation. Applied theoretical knowledge through practical labs, projects, and software-based simulations.",
    icon: GraduationCap
  };

  return (
    <section className="py-20 px-4 bg-card/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full space-y-8 relative z-10">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">Education</span>
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <Card 
              className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 group hover:scale-105 hover:shadow-xl hover:shadow-primary/20 animate-fade-in-up"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <education.icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{education.degree}</h3>
                  <p className="text-primary font-medium">{education.institution}</p>
                  <p className="text-sm text-muted-foreground">{education.period}</p>
                  <p className="text-sm text-foreground/80 mt-3 leading-relaxed">{education.description}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
