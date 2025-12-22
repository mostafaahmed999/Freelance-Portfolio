import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Sun, Cpu, Building, HardHat } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const Education = () => {
  const experience = portfolioData.experience.map(exp => ({
    degree: exp.position,
    institution: exp.company,
    period: `${exp.startDate} – ${exp.endDate}`,
    description: exp.description,
    type: "work",
    icon: HardHat
  }));

  const education = portfolioData.education.map(edu => ({
    degree: edu.degree,
    institution: `${edu.institution}, ${edu.location}`,
    period: `Graduated with ${edu.honors}`,
    description: edu.description,
    type: "education",
    icon: GraduationCap
  }));

  const training = portfolioData.training.map(train => ({
    degree: train.title,
    institution: train.location,
    period: train.focus,
    description: train.description,
    type: "training",
    icon: Sun
  }));

  const renderCard = (item: typeof experience[0], index: number) => (
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
  );

  return (
    <section id="education" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="max-w-6xl mx-auto w-full space-y-16 relative z-10">
        {/* Professional Experience */}
        <div className="space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Professional <span className="text-primary">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              My work experience in the field
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((item, index) => renderCard(item, index))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-primary">Education</span>
            </h2>
          </div>
          <div className="flex justify-center">
            {education.map((item, index) => (
              <div key={index} className="max-w-2xl w-full">
                {renderCard(item, index)}
              </div>
            ))}
          </div>
        </div>

        {/* Training */}
        <div className="space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Courses & <span className="text-primary">Training</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Professional development and certifications
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {training.map((item, index) => renderCard(item, index))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
