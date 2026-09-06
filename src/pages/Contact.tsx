import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const developers = [
    {
      name: "Soubhagya Srivastava",
      role: "AI/ML Engineer",
      email: "soubhagyasrivastava240@gmail.com",
      github: "shubh-soubhagya",
      linkedin: "alexchen",
      location: "Patna, Bihar"
    },
    {
      name: "Suman Kumari",
      role: "AI/ML Engineer",
      email: "sumank.ds1@gmail.com",
      github: "ssumankumari",
      linkedin: "sarahmartinez",
      location: "Patna, Bihar"
    },
    {
      name: "Shubhankar Tiwary",
      role: "Backend Developer",
      email: "shubhankarvishal@gmail.com",
      github: "SHUBHANKARPOLYGON",
      linkedin: "jameswilson",
      location: "Patna, Bihar"
    },
    {
      name: "Navin Raj",
      role: "Frontend Developer",
      email: "rajnavin903@gmail.com",
      github: "navinraj12",
      linkedin: "jameswilson",
      location: "Patna, Bihar"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Get in <span className="bg-gradient-primary bg-clip-text ">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions or want to contribute? Our team is here to help.
            </p>
          </div>

          {/* Developer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {developers.map((dev, index) => (
              <Card key={index} className="p-8 hover:border-primary/50 transition-all group">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-primary-primary text-2xl font-bold">
                    {dev.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{dev.name}</h3>
                    <p className="text-sm text-muted-foreground">{dev.role}</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <a
                      href={`mailto:${dev.email}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="truncate">{dev.email}</span>
                    </a>

                    <a
                      href={`https://github.com/${dev.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>@{dev.github}</span>
                    </a>

                    <a
                      href={`https://linkedin.com/in/${dev.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span>@{dev.linkedin}</span>
                    </a>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{dev.location}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* General Contact Info */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-card to-card/50">
              <h2 className="text-2xl font-bold mb-6 text-center">General Inquiries</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a
                      href="mailto:hello@dissolveai.dev"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@dissolveai.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
                  <Github className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">GitHub</p>
                    <a
                      href="https://github.com/dissolveai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      github.com/dissolveai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Headquarters</p>
                    <p className="text-muted-foreground">
                      123 Open Source Avenue<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
