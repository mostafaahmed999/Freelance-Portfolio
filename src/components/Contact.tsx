import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Linkedin, Mail, MessageSquare, Download, Send, CheckCircle2, Phone, Youtube, MapPin, Calendar } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

const contactFormSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  subject: z.string().trim().min(3, { message: "Subject must be at least 3 characters" }).max(200, { message: "Subject must be less than 200 characters" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000, { message: "Message must be less than 1000 characters" })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${encodeURIComponent(data.name)}%0A*Email:* ${encodeURIComponent(data.email)}%0A*Subject:* ${encodeURIComponent(data.subject)}%0A%0A*Message:*%0A${encodeURIComponent(data.message)}`;
      
      window.open(`https://wa.me/${portfolioData.personal.phone.replace(/\s/g, '')}?text=${whatsappMessage}`, '_blank');
      
      toast({
        title: "Message Sent Successfully! ✓",
        description: "Thank you for reaching out. I'll get back to you soon!",
        duration: 5000,
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Ahmed Noury",
      href: portfolioData.personal.linkedin,
    },
    {
      icon: Youtube,
      label: "YouTube",
      value: "@electricalworld188",
      href: portfolioData.personal.youtube,
    },
  ];

  const personalInfo = [
    { icon: MapPin, label: "Location", value: portfolioData.personal.location },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="max-w-4xl mx-auto w-full space-y-12 relative z-10">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-500 animate-scale-in">
            <div className="space-y-6">
              <div className="text-center md:text-left space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center md:mx-0 mx-auto animate-float">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Send a Message</h3>
                <p className="text-muted-foreground text-sm">
                  Fill out the form and I'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    className={`bg-secondary/50 border-border focus:border-primary transition-colors ${errors.name ? 'border-destructive' : ''}`}
                    {...register("name")}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className={`bg-secondary/50 border-border focus:border-primary transition-colors ${errors.email ? 'border-destructive' : ''}`}
                    {...register("email")}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject *</Label>
                  <Input
                    id="subject"
                    placeholder="What is this about?"
                    className={`bg-secondary/50 border-border focus:border-primary transition-colors ${errors.subject ? 'border-destructive' : ''}`}
                    {...register("subject")}
                    disabled={isSubmitting}
                  />
                  {errors.subject && (
                    <p className="text-destructive text-sm">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    className={`bg-secondary/50 border-border focus:border-primary transition-colors resize-none ${errors.message ? 'border-destructive' : ''}`}
                    {...register("message")}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-500 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-center md:text-left space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center md:mx-0 mx-auto animate-float" style={{ animationDelay: "0.5s" }}>
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently open to new opportunities and interesting projects. Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <info.icon className="w-4 h-4 text-primary" />
                      <span>{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg animate-fade-in-up"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <method.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">{method.label}</div>
                    <div className="font-medium group-hover:text-primary transition-colors">{method.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <Button 
              size="lg"
              variant="outline"
              className="w-full border-border hover:bg-secondary hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
              asChild
            >
              <a href="/Ahmed_Noury_CV.pdf" download>
                <Download className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
                Download CV
              </a>
            </Button>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p>© 2024 Ahmed Noury. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
