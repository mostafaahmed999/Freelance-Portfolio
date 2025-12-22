import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();

  const projects = [
    {
      id: "ecommerce-electronics",
      title: "E-Commerce Platform for Electronics",
      description: "Built an Admin Panel with authentication and Role-Based Authorization (Customer, Buyer, Admin) to manage products, categories, and orders. Enhanced UI with Bootstrap and jQuery. Deployed on Microsoft Azure.",
      longDescription: "A comprehensive e-commerce solution featuring a complete admin panel with role-based access control. The platform allows administrators to manage products, categories, and orders efficiently. Customers can browse products, add items to cart, and complete purchases. The application implements secure authentication and authorization mechanisms to protect sensitive operations.",
      tech: ["ASP.NET Core", "MVC", "SQL Server", "Bootstrap", "jQuery", "Azure"],
      features: [
        "Role-Based Authorization (Customer, Buyer, Admin)",
        "Product and Category Management",
        "Order Processing and Tracking",
        "Shopping Cart Functionality",
        "Secure Authentication System",
        "Responsive Admin Panel",
        "Deployed on Microsoft Azure"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
      ],
      github: "https://github.com/mostafaahmed999",
      live: "#",
    },
    {
      id: "ecommerce-angular",
      title: "E-Commerce Web Application",
      description: "Built an online store with authentication, cart, and product management using Angular and Fake REST API.",
      longDescription: "A modern e-commerce web application built with Angular framework. The application demonstrates proficiency in Angular components, services, and routing. It features a clean and responsive user interface with smooth navigation and real-time cart updates. The application consumes a REST API for product data and implements client-side state management.",
      tech: ["Angular", "TypeScript", "REST API", "Responsive Design"],
      features: [
        "User Authentication and Authorization",
        "Shopping Cart Management",
        "Product Browsing and Search",
        "Responsive Design for All Devices",
        "Integration with REST API",
        "State Management with Angular Services",
        "Modern UI/UX Design"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
      ],
      github: "https://github.com/mostafaahmed999",
      live: "#",
    }
  ];

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
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

  return (
    <main className="min-h-screen bg-background text-foreground py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Back Button */}
        <Link to="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Project Header */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
          <p className="text-xl text-muted-foreground">{project.description}</p>
          
          <div className="flex gap-4 flex-wrap">
            <Button asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </Button>
            {project.live !== "#" && (
              <Button variant="outline" asChild>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Technologies */}
        <Card className="p-6 bg-card border-border">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>

        {/* Screenshots */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <Card key={index} className="overflow-hidden border-border">
                <img 
                  src={screenshot} 
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </Card>
            ))}
          </div>
        </div>

        {/* Long Description */}
        <Card className="p-6 bg-card border-border">
          <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
          <p className="text-foreground/80 leading-relaxed">{project.longDescription}</p>
        </Card>

        {/* Features */}
        <Card className="p-6 bg-card border-border">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </main>
  );
};

export default ProjectDetails;
