import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Building, Sun } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const Projects = () => {
  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    "Building": Building,
    "Sun": Sun
  };

  const projects = portfolioData.projects.map((proj, index) => ({
    ...proj,
    icon: index === 0 ? Building : Sun
  }));

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-4 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="max-w-6xl mx-auto w-full space-y-12 relative z-10">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 group animate-fade-in-up hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-sm rounded-full">
                  {project.type}
                </div>
              </div>
              
              <div className="p-6 space-y-4 flex flex-col flex-grow">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 flex-grow">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded h-fit"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2 mt-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    onClick={() => {}}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
