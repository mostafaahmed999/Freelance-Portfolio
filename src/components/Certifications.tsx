import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const Certifications = () => {
  const certifications = portfolioData.certifications;

  return (
    <section id="certifications" className="min-h-screen flex items-center py-20 px-4 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
      
      <div className="max-w-6xl mx-auto w-full space-y-12 relative z-10">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional certifications and achievements
          </p>
        </div>

        {certifications.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 group hover:scale-105 hover:shadow-xl hover:shadow-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Award className="w-6 h-6" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{cert.title}</h3>
                    <p className="text-primary font-medium">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                    {cert.description && (
                      <p className="text-xs text-muted-foreground">
                        {cert.description}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 bg-card/80 backdrop-blur-sm border-border text-center hover:border-primary/30 transition-all duration-500 animate-scale-in">
            <div className="animate-float">
              <Award className="w-12 h-12 mx-auto mb-4 text-primary/50" />
            </div>
            <p className="text-muted-foreground">
              Certifications will be displayed here once added
            </p>
          </Card>
        )}
      </div>
    </section>
  );
};

export default Certifications;
