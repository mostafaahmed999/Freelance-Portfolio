import { Card } from "@/components/ui/card";
import { Zap, Lightbulb, Users } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const About = () => {
  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    Zap,
    Lightbulb,
    Users
  };

  const highlights = portfolioData.highlights.map(item => ({
    icon: iconMap[item.icon] || Zap,
    title: item.title,
    description: item.description
  }));

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
            {portfolioData.personal.summary}
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
