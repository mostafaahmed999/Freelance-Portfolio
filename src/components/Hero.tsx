import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail, Download, Youtube, Phone } from "lucide-react";
import profilePic from "@/assets/Noury.png";
import { portfolioData } from "@/data/portfolio";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50 -z-10" />
      
      {/* Animated circles in background */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{
        animationDelay: "1s"
      }} />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Profile Picture section */}
        <div className="flex justify-center mb-8 animate-scale-in">
          <div className="relative w-48 h-48 md:w-56 md:h-56 animate-float">
            {/* Profile Image with gradient border */}
            <div className="w-full h-full rounded-full border-4 border-primary/30 bg-card/80 backdrop-blur-sm relative overflow-hidden group hover:border-primary/60 transition-all duration-500">
              {/* Profile Image */}
              <img src={profilePic} alt="Ahmed Noury" className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500" />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-background animate-pulse-glow" />
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>
        </div>

        {/* Name with animation */}
        <div className="space-y-4 animate-fade-in-up" style={{
          animationDelay: "0.2s"
        }}>
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-primary animate-gradient-shift bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
              {portfolioData.personal.name.split(' ')[0]}
            </span>
            {" "}
            <span className="text-foreground">{portfolioData.personal.name.split(' ')[1]}</span>
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-semibold">
            {portfolioData.personal.title}
          </p>
        </div>

        {/* CTA Buttons with animation */}
        <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up" style={{
          animationDelay: "0.6s"
        }}>
          <Button onClick={() => scrollToSection("contact")} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 group">
            <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Get In Touch
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-secondary hover:border-primary/50 transition-all duration-300 hover:scale-105 group" onClick={() => scrollToSection("projects")}>
            <Download className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Projects
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-secondary hover:border-primary/50 transition-all duration-300 hover:scale-105 group" asChild>
            <a href="/Ahmed_Noury_CV.pdf" download>
              <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
              Download CV
            </a>
          </Button>
        </div>

        {/* Social Links with animation */}
        <div style={{
          animationDelay: "0.8s"
        }} className="gap-6 pt-8 pb-16 animate-slide-in-right flex-row flex items-start justify-center py-[10px] my-0">
          <a href={portfolioData.personal.youtube} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1" aria-label="YouTube Channel">
            <Youtube className="w-6 h-6" />
          </a>
          <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1" aria-label="LinkedIn Profile">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={`mailto:${portfolioData.personal.email}`} className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1" aria-label="Email Contact">
            <Mail className="w-6 h-6" />
          </a>
          <a href={`tel:${portfolioData.personal.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1" aria-label="Phone Contact">
            <Phone className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection("skills")}>
          <ArrowDown className="w-6 h-6 text-primary mx-0 py-0 my-0" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
