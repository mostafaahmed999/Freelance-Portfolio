import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Building, Sun, Cable, CheckCircle, Lightbulb, Wrench, Target } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();

  const projects = [
    {
      id: "jazal-cable",
      title: "Jazal Cable Rehabilitation Project",
      description: "Cable rehabilitation project involving IR testing using Megger, installing earth systems, and earth resistance testing.",
      longDescription: "This comprehensive cable rehabilitation project focused on ensuring the integrity and safety of electrical infrastructure. The project involved detailed inspection and testing of existing cables using advanced Megger testing equipment to measure insulation resistance. Earth systems were designed and installed following international standards to ensure proper grounding and protection against electrical faults.",
      type: "Site Project",
      icon: Cable,
      tech: ["IR Test (Megger)", "Earth System Installation", "Earth Resistance Test", "Cable Testing", "Site Supervision"],
      features: [
        "Conducted comprehensive Insulation Resistance (IR) testing using Megger equipment",
        "Designed and installed complete earthing systems as per IEC standards",
        "Performed earth resistance measurements to verify system effectiveness",
        "Supervised cable laying and termination activities",
        "Prepared detailed test reports and documentation",
        "Ensured compliance with safety regulations and standards",
        "Coordinated with civil and mechanical teams for integrated works"
      ],
      challenges: [
        "Working in challenging site conditions with limited access",
        "Coordinating multiple teams for synchronized testing activities",
        "Ensuring minimal disruption to existing operations during rehabilitation",
        "Meeting tight project deadlines while maintaining quality standards"
      ],
      learnings: [
        "Practical experience with Megger testing equipment and interpretation of results",
        "Understanding of earthing system design principles and installation techniques",
        "Project coordination and site supervision skills",
        "Technical documentation and reporting standards"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
      ],
    },
    {
      id: "hotel-revit",
      title: "Hotel Electrical Design Project",
      description: "Executed a full hotel electrical design using Revit with a collaborative BIM workflow.",
      longDescription: "A comprehensive electrical design project for a hotel facility utilizing Building Information Modeling (BIM) through Autodesk Revit. The project encompassed all aspects of electrical system design including lighting layouts, power distribution networks, panel schedules, and detailed Bill of Quantities preparation. This project demonstrated proficiency in BIM coordination and collaborative design workflows.",
      type: "Graduation Project",
      icon: Building,
      tech: ["Revit", "BIM Workflow", "Lighting Design", "Power Distribution", "Panel Schedules", "BOQ"],
      features: [
        "Complete electrical system design using Autodesk Revit MEP",
        "Lighting design with calculations for different hotel areas (rooms, lobbies, corridors)",
        "Power distribution system design with load calculations",
        "Panel schedule preparation and circuit design",
        "Bill of Quantities (BOQ) generation for procurement",
        "Cable sizing calculations based on load requirements",
        "Emergency lighting and fire alarm system integration",
        "Coordination with architectural and mechanical systems"
      ],
      challenges: [
        "Coordinating electrical routing with other MEP systems in confined spaces",
        "Meeting diverse lighting requirements for different hotel zones",
        "Balancing aesthetic requirements with functional lighting design",
        "Ensuring code compliance while optimizing system costs"
      ],
      learnings: [
        "Advanced Revit MEP modeling and family creation",
        "BIM coordination workflows and clash detection",
        "Electrical load calculations and system sizing",
        "Professional documentation standards for construction projects"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
      ],
    },
    {
      id: "solar-school",
      title: "Al-Zahra School Solar Project",
      description: "Complete solar power project implementation for Al-Zahra School, El-Marg El-Gedida.",
      longDescription: "This hands-on training project involved the complete implementation of a solar power system for Al-Zahra School in El-Marg El-Gedida. The project covered all phases from initial system sizing and component selection through installation and commissioning. Working on an off-grid solar solution provided practical experience in renewable energy system design and implementation.",
      type: "Training Project",
      icon: Sun,
      tech: ["Solar Energy", "Off-Grid System", "System Sizing", "Component Selection", "Installation"],
      features: [
        "Solar system sizing based on load analysis and energy requirements",
        "Selection of appropriate solar panels, inverters, and batteries",
        "Off-grid system design with battery storage for continuous power",
        "Solar panel mounting structure design and installation",
        "Electrical wiring and connection of all system components",
        "System testing and commissioning",
        "Operation and maintenance training for school staff",
        "Documentation of system specifications and procedures"
      ],
      challenges: [
        "Sizing the system to meet school's varying energy demands",
        "Optimizing panel orientation for maximum energy harvest",
        "Designing battery backup for continuous power supply",
        "Ensuring system safety and protection against faults"
      ],
      learnings: [
        "Practical solar PV system design and installation",
        "Understanding of solar energy calculations and system optimization",
        "Hands-on experience with solar components and equipment",
        "Off-grid system design principles and battery management"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
        "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80"
      ],
    },
  ];

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Project Not Found</h1>
          <p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = project.icon;

  return (
    <main className="min-h-screen bg-background text-foreground py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Back Button */}
        <Link to="/#projects">
          <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary transition-all">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        {/* Project Header */}
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/10 rounded-xl">
              <IconComponent className="w-10 h-10 text-primary" />
            </div>
            <div>
              <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-sm rounded-full">
                {project.type}
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </div>

        {/* Technologies */}
        <Card className="p-6 bg-card border-border animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">Technologies & Skills Used</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>

        {/* Screenshots */}
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold">Project Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <Card key={index} className="overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <img 
                  src={screenshot} 
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </Card>
            ))}
          </div>
        </div>

        {/* Long Description */}
        <Card className="p-6 bg-card border-border animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">About This Project</h2>
          </div>
          <p className="text-foreground/80 leading-relaxed text-lg">{project.longDescription}</p>
        </Card>

        {/* Features */}
        <Card className="p-6 bg-card border-border animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">Key Deliverables & Activities</h2>
          </div>
          <ul className="space-y-3">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 group">
                <span className="text-primary mt-1 group-hover:scale-110 transition-transform">✓</span>
                <span className="text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Challenges */}
        <Card className="p-6 bg-card border-border animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-semibold">Challenges Overcome</h2>
          </div>
          <ul className="space-y-3">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">⚡</span>
                <span className="text-foreground/80">{challenge}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Learnings */}
        <Card className="p-6 bg-card border-border animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-semibold">Key Learnings</h2>
          </div>
          <ul className="space-y-3">
            {project.learnings.map((learning, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">💡</span>
                <span className="text-foreground/80">{learning}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Back to Projects */}
        <div className="text-center pt-8">
          <Link to="/#projects">
            <Button size="lg" className="hover:scale-105 transition-transform">
              <ArrowLeft className="w-4 h-4 mr-2" />
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;