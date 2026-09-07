import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  GitBranch, 
  Brain, 
  Target, 
  Layers, 
  Code2, 
  Sparkles,
  TrendingUp,
  Users,
  Clock
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: GitBranch,
      title: "Intelligent Repository Mapping",
      description: "Creates comprehensive understanding of file relationships and dependencies",
      details: [
        "Dependency graph visualization",
        "Code pattern recognition",
        "Critical path detection"
      ],
      color: "primary"
    },
    {
      icon: Brain,
      title: "Multi-Model AI Integration",
      description: "Automatically selects optimal AI models based on repository complexity",
      details: [
        "Smart model selection",
        "Context window optimization",
        "Incremental processing for large repos"
      ],
      color: "accent"
    },
    {
      icon: Target,
      title: "Context-Aware Issue Analysis",
      description: "Correlates GitHub issues with relevant code sections automatically",
      details: [
        "Issue-to-code mapping",
        "Impact assessment",
        "Related file identification"
      ],
      color: "primary"
    },
    {
      icon: Code2,
      title: "File-Specific Guidance",
      description: "Pinpoints exact files, functions, and line numbers for modifications",
      details: [
        "Precise location targeting",
        "Function-level analysis",
        "Line-by-line recommendations"
      ],
      color: "accent"
    },
    {
      icon: Layers,
      title: "Architecture Understanding",
      description: "Identifies architectural patterns and coding conventions",
      details: [
        "Pattern detection",
        "Convention analysis",
        "Best practice suggestions"
      ],
      color: "primary"
    },
    {
      icon: Sparkles,
      title: "Implementation Suggestions",
      description: "Provides concrete code modification recommendations",
      details: [
        "Code snippets",
        "Testing strategies",
        "Validation approaches"
      ],
      color: "accent"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      stat: "3-4 days → 30-60 min",
      label: "Repository Understanding Time"
    },
    {
      icon: TrendingUp,
      stat: "70-80%",
      label: "Faster Context Analysis"
    },
    {
      icon: Users,
      stat: "2x",
      label: "Contribution Success Rate"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 border-b-[3px] border-border">
        <div className="container mx-auto max-w-6xl">
          
          {/* Header */}
          <div className="text-center mb-20 space-y-6">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight">
              Powerful <span className="bg-primary text-primary-foreground px-4 py-1 border-[3px] border-border shadow-brutal-sm inline-block transform rotate-2">Features</span>
            </h1>
            <p className="text-xl font-bold text-muted-foreground max-w-3xl mx-auto">
              Everything you need to navigate complex repositories and contribute meaningfully to open source projects.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative p-8 rounded-none border-[3px] border-border bg-card text-center shadow-brutal hover:-translate-y-2 hover:shadow-brutal-lg transition-all"
              >
                <div className="w-16 h-16 border-[3px] border-border bg-secondary flex items-center justify-center mx-auto mb-6 shadow-brutal-sm transform -rotate-3 hover:rotate-0 transition-transform">
                  <benefit.icon className="h-8 w-8 text-foreground" />
                </div>
                <div className="text-3xl font-black text-foreground mb-3">
                  {benefit.stat}
                </div>
                <p className="text-muted-foreground font-bold uppercase tracking-wider text-sm">
                  {benefit.label}
                </p>
              </div>
            ))}
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-none border-[3px] border-border bg-background hover:-translate-y-2 hover:shadow-brutal-lg transition-all shadow-brutal"
              >
                <div className={`w-14 h-14 border-[3px] border-border flex items-center justify-center mb-6 shadow-brutal-sm ${feature.color === 'primary' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'}`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black uppercase mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-medium mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground font-medium">
                      <span className={`font-black mt-0.5 ${feature.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                        →
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div className="mt-32 pt-20 border-t-[3px] border-border">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase tracking-tight">
              Perfect for <span className="bg-secondary text-secondary-foreground px-4 py-1 border-[3px] border-border shadow-brutal-sm inline-block transform -rotate-1">Every Developer</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-none border-[3px] border-border bg-card shadow-brutal">
                <h3 className="text-2xl font-black uppercase mb-4 text-foreground">New Contributors</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  Lower the barrier to entry for junior developers, career switchers, and students 
                  seeking their first meaningful open-source contributions.
                </p>
              </div>

              <div className="p-8 rounded-none border-[3px] border-border bg-card shadow-brutal">
                <h3 className="text-2xl font-black uppercase mb-4 text-foreground">Experienced Developers</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  Save time when contributing to unfamiliar codebases. Get up to speed quickly 
                  and focus on solving problems rather than understanding context.
                </p>
              </div>

              <div className="p-8 rounded-none border-[3px] border-border bg-card shadow-brutal">
                <h3 className="text-2xl font-black uppercase mb-4 text-foreground">Project Maintainers</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  Provide better guidance to contributors automatically. Reduce time spent 
                  on issue clarification and review cycles.
                </p>
              </div>

              <div className="p-8 rounded-none border-[3px] border-border bg-card shadow-brutal">
                <h3 className="text-2xl font-black uppercase mb-4 text-foreground">Enterprise Teams</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  Contribute to upstream dependencies more effectively. Understand and modify 
                  third-party code with confidence.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Features;