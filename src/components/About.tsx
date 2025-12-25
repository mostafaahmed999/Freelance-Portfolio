import { Card } from "@/components/ui/card";
import { Zap, Lightbulb, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Electrical Systems",
      description: "Expert in power systems and automation",
    },
    {
      icon: Lightbulb,
      title: "Renewable Energy",
      description: "Solar energy and off-grid systems",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Effective communication and teamwork",
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
      
      <div className="max-w-6xl mx-auto w-full space-y-12 relative z-10">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-500 animate-scale-in">
          <p className="text-lg text-foreground/90 leading-relaxed mb-8">
            <span className="text-primary font-semibold">Junior Electrical Engineer</span> with 2 years of experience in electrical design and site engineering within the UAE construction sector. 
            Strong background in power systems, electrical installations, site supervision, and BIM-based design, with hands-on experience using <span className="text-primary font-semibold">Revit, AutoCAD, DIALux, ETAP, MATLAB, and PLC</span>. 
            Proven ability to coordinate with contractors and consultants while ensuring compliance with safety standards, quality requirements, and project deadlines.
            Currently working as <span className="text-primary font-semibold">Electrical Site Engineer</span> at Jazal Engineering & Contracting L.L.C in Abu Dhabi, UAE.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
