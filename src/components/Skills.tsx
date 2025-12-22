import { Card } from "@/components/ui/card";
import { Zap, Settings, Cpu, Languages } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const Skills = () => {
  const skillCategories = [
    {
      icon: Zap,
      title: portfolioData.skills.electricalDesignBIM.category,
      skills: portfolioData.skills.electricalDesignBIM.skills,
    },
    {
      icon: Cpu,
      title: portfolioData.skills.automationControl.category,
      skills: portfolioData.skills.automationControl.skills,
    },
    {
      icon: Settings,
      title: portfolioData.skills.analysisSimulation.category,
      skills: portfolioData.skills.analysisSimulation.skills,
    },
    {
      icon: Languages,
      title: portfolioData.skills.languages.category,
      skills: portfolioData.skills.languages.skills,
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      <div className="max-w-6xl mx-auto w-full space-y-12 relative z-10">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tools and technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 group hover:scale-105 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4 flex flex-col h-full">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 group-hover:scale-110">
                    <category.icon className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{category.title}</h3>
                </div>
                
                <div className="space-y-2 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="text-sm text-muted-foreground py-2 px-3 bg-gradient-to-r from-secondary/50 to-transparent rounded-md hover:from-secondary hover:to-secondary/50 hover:text-foreground transition-all duration-300 hover:translate-x-2 cursor-default border border-border/50 hover:border-primary/30"
                    >
                      ✓ {skill}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
