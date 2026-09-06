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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Powerful <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-cyan-500 bg-clip-text text-transparent">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to navigate complex repositories and contribute meaningfully to open source projects
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl border border-border bg-card text-center group hover:border-primary/50 transition-all"
              >
                <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {benefit.stat}
                </div>
                <p className="text-muted-foreground">{benefit.label}</p>
              </div>
            ))}
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border border-border bg-card hover:border-${feature.color}/50 transition-all hover:shadow-glow-${feature.color}`}
              >
                <div className={`absolute inset-0 bg-gradient-${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                <feature.icon className={`h-10 w-10 text-${feature.color} mb-4`} />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className={`text-${feature.color} mt-1`}>•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div className="mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Perfect for <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-cyan-500 bg-clip-text text-transparent">Every Developer</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">New Contributors</h3>
                <p className="text-muted-foreground">
                  Lower the barrier to entry for junior developers, career switchers, and students 
                  seeking their first meaningful open-source contributions.
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Experienced Developers</h3>
                <p className="text-muted-foreground">
                  Save time when contributing to unfamiliar codebases. Get up to speed quickly 
                  and focus on solving problems rather than understanding context.
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Project Maintainers</h3>
                <p className="text-muted-foreground">
                  Provide better guidance to contributors automatically. Reduce time spent 
                  on issue clarification and review cycles.
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Enterprise Teams</h3>
                <p className="text-muted-foreground">
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
