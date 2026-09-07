import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Github, MapPin, MessageSquare, ExternalLink } from "lucide-react";

const Contact = () => {
  const developers = [
    {
      name: "Soubhagya Srivastava",
      role: "AI/ML Engineer",
      email: "soubhagyasrivastava240@gmail.com",
      github: "shubh-soubhagya",
      linkedin: "https://www.linkedin.com/in/soubhagya-srivastava-611408267/",
      location: "India",
      image: "https://github.com/shubh-soubhagya.png"
    },
    {
      name: "Suman Kumari",
      role: "AI/ML Engineer",
      email: "sumank.ds1@gmail.com",
      github: "ssumankumari",
      linkedin: "https://www.linkedin.com/in/sumaninsights/",
      location: "India",
      image: "https://github.com/ssumankumari.png"
    },
    {
      name: "Shubhankar Tiwary",
      role: "Backend Developer",
      email: "shubhankarvishal@gmail.com",
      github: "SHUBHANKARPOLYGON",
      linkedin: "https://www.linkedin.com/in/shubhankar-tiwary-5805bb266/",
      location: "India",
      image: "https://github.com/SHUBHANKARPOLYGON.png"
    }
  ];

  // Helper to alternate colors for brutalist avatars
  const getAvatarColor = (index: number) => {
    const colors = [
      "bg-primary text-primary-foreground",
      "bg-secondary text-secondary-foreground",
      "bg-accent text-accent-foreground"
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <div className="pt-32 pb-20 px-4 border-b-[3px] border-border">
        <div className="container mx-auto max-w-7xl">

          {/* Header */}
          <div className="text-center mb-20 space-y-6">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight">
              Get in <span className="bg-accent text-accent-foreground px-4 py-1 border-[3px] border-border shadow-brutal-sm inline-block transform rotate-2">Touch</span>
            </h1>
            <p className="text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              Have questions or want to contribute? Our team is here to help.
            </p>
          </div>

          {/* Developer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
            {developers.map((dev, index) => (
              <div
                key={index}
                className="p-6 border-[3px] border-border bg-card shadow-brutal hover:-translate-y-2 hover:shadow-brutal-lg transition-all flex flex-col group"
              >
                <div className="text-center space-y-4 flex-grow">

                  {/* Brutalist Image Avatar */}
                  <div className={`w-24 h-24 mx-auto border-[3px] border-border shadow-brutal-sm overflow-hidden bg-secondary transform ${index % 2 === 0 ? '-rotate-3 group-hover:rotate-0' : 'rotate-3 group-hover:rotate-0'} transition-transform`}>
                    <img
                      src={dev.image}
                      alt={`${dev.name} profile`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${dev.name}&background=random&color=fff&font-weight=bold`;
                      }}
                    />
                  </div>

                  <div className="pt-4">
                    {/* Name is now the clickable LinkedIn Link */}
                    <a
                      href={dev.linkedin.startsWith('http') ? dev.linkedin : `https://www.linkedin.com/in/${dev.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors group/link"
                      title="View LinkedIn Profile"
                    >
                      <h3 className="text-xl font-black uppercase tracking-tight mb-1 group-hover/link:underline decoration-[3px] underline-offset-4">
                        {dev.name}
                      </h3>
                      <ExternalLink className="h-4 w-4 opacity-0 -ml-2 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                    </a>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{dev.role}</p>
                  </div>

                  <div className="space-y-2 pt-6 mt-auto text-left">
                    <a
                      href={`mailto:${dev.email}`}
                      className="flex items-center gap-3 p-2 -mx-2 border-2 border-transparent hover:border-border hover:bg-secondary hover:text-secondary-foreground transition-all font-medium"
                    >
                      <Mail className="h-5 w-5 flex-shrink-0" />
                      <span className="truncate text-sm">{dev.email}</span>
                    </a>

                    <a
                      href={dev.github.startsWith('http') ? dev.github : `https://github.com/${dev.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2 -mx-2 border-2 border-transparent hover:border-border hover:bg-secondary hover:text-secondary-foreground transition-all font-medium"
                    >
                      <Github className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">@{dev.github.split('/').pop()}</span>
                    </a>

                    <div className="flex items-center gap-3 p-2 -mx-2 font-medium text-muted-foreground">
                      <MapPin className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">{dev.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* General Contact Info */}
          <div className="max-w-3xl mx-auto w-full">
            <div className="p-6 md:p-12 border-[3px] border-border bg-background shadow-brutal overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-10 text-center">
                <MessageSquare className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">General Inquiries</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* Email Block */}
                <div className="flex items-start gap-4 p-4 md:p-6 border-[3px] border-border bg-card shadow-brutal-sm hover:shadow-brutal hover:-translate-y-1 transition-all overflow-hidden">
                  <Mail className="h-6 w-6 text-foreground mt-1 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-black uppercase mb-1">Email</p>
                    <a
                      href="mailto:contact.dissolveai@gmail.com"
                      className="text-muted-foreground font-medium hover:text-primary transition-colors break-all block"
                    >
                      contact.dissolveai@gmail.com
                    </a>
                  </div>
                </div>

                {/* GitHub Block */}
                <div className="flex items-start gap-4 p-4 md:p-6 border-[3px] border-border bg-card shadow-brutal-sm hover:shadow-brutal hover:-translate-y-1 transition-all overflow-hidden">
                  <Github className="h-6 w-6 text-foreground mt-1 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-black uppercase mb-1">GitHub</p>
                    <a
                      href="https://github.com/shubh-soubhagya/DissolveAI-beta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground font-medium hover:text-primary transition-colors break-all block"
                    >
                      github.com/dissolveai
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;