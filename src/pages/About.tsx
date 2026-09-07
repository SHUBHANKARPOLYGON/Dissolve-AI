import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 border-b-[3px] border-border">
        <div className="container mx-auto max-w-4xl">
          
          {/* Header */}
          <div className="text-center mb-20 space-y-6">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight">
              About <span className="bg-primary text-primary-foreground px-4 py-1 border-[3px] border-border shadow-brutal-sm inline-block transform rotate-1">Dissolve-AI</span>
            </h1>
            <p className="text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              Bridging the gap between complex repositories and meaningful contributions.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-16 p-8 border-[3px] border-border bg-card shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 flex-shrink-0 border-[3px] border-border bg-secondary flex items-center justify-center shadow-brutal-sm transform -rotate-3">
                <Target className="h-8 w-8 text-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-black uppercase mb-4 text-foreground">Our Mission</h2>
                <p className="text-muted-foreground font-medium leading-relaxed text-lg">
                  DissolveAI was created to solve a critical challenge in the open-source ecosystem. 
                  With over 420 million projects on GitHub, contributors—especially newcomers—often 
                  struggle to navigate complex codebases and contribute meaningfully. We're changing that.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="mb-24 p-8 border-[3px] border-border bg-card shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 flex-shrink-0 border-[3px] border-border bg-accent text-accent-foreground flex items-center justify-center shadow-brutal-sm transform rotate-3">
                <Eye className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-3xl font-black uppercase mb-4 text-foreground">Our Vision</h2>
                <p className="text-muted-foreground font-medium leading-relaxed text-lg">
                  We envision a world where every developer can contribute to open source, regardless 
                  of their experience level or familiarity with a codebase. By leveraging advanced AI 
                  and intelligent repository analysis, we're making open-source contribution accessible, 
                  efficient, and rewarding for everyone.
                </p>
              </div>
            </div>
          </div>

          {/* The Problem */}
          <div className="mb-24">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-10 text-center">
              The Challenge We're <span className="bg-secondary text-secondary-foreground px-3 py-1 border-[3px] border-border shadow-brutal-sm inline-block transform -rotate-2">Solving</span>
            </h2>
            <div className="space-y-6">
              <div className="p-6 border-[3px] border-border bg-background shadow-brutal-sm hover:shadow-brutal hover:-translate-y-1 transition-all">
                <h3 className="font-black text-xl uppercase mb-3 text-foreground">Repository Complexity Barrier</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  Large projects like React (45,000+ files), Linux Kernel (70,000+ files), 
                  or TensorFlow (15,000+ files) overwhelm new contributors. Understanding file 
                  dependencies and architecture requires weeks of exploration.
                </p>
              </div>

              <div className="p-6 border-[3px] border-border bg-background shadow-brutal-sm hover:shadow-brutal hover:-translate-y-1 transition-all">
                <h3 className="font-black text-xl uppercase mb-3 text-foreground">Issue Resolution Inefficiency</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  Contributors spend 70-80% of their time understanding the problem context rather 
                  than solving it. GitHub issues often lack sufficient context about affected code areas.
                </p>
              </div>

              <div className="p-6 border-[3px] border-border bg-background shadow-brutal-sm hover:shadow-brutal hover:-translate-y-1 transition-all">
                <h3 className="font-black text-xl uppercase mb-3 text-foreground">High Abandonment Rate</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  New developers abandon contributions due to steep learning curves, turning what 
                  should take days into weeks of frustration.
                </p>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-24 p-8 border-[3px] border-border bg-background shadow-brutal">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
              Our <span className="underline decoration-4 underline-offset-4 decoration-primary">Approach</span>
            </h2>
            <p className="text-muted-foreground font-bold text-lg mb-10 leading-relaxed max-w-3xl">
              DissolveAI transforms the contribution experience by creating an AI-powered research 
              assistant that understands both repository structure and issue context. We provide 
              targeted, actionable guidance that cuts through complexity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4 p-4 border-[3px] border-border bg-card shadow-brutal-sm">
                <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-black uppercase mb-2 text-foreground">Intelligent Mapping</h3>
                  <p className="text-muted-foreground font-medium">
                    Comprehensive understanding of file relationships and dependencies
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 border-[3px] border-border bg-card shadow-brutal-sm">
                <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-black uppercase mb-2 text-foreground">Context-Aware Analysis</h3>
                  <p className="text-muted-foreground font-medium">
                    Automatic correlation of issues with relevant code sections
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 border-[3px] border-border bg-card shadow-brutal-sm">
                <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-black uppercase mb-2 text-foreground">Multi-Model Intelligence</h3>
                  <p className="text-muted-foreground font-medium">
                    Optimal AI model selection based on repository complexity
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 border-[3px] border-border bg-card shadow-brutal-sm">
                <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-black uppercase mb-2 text-foreground">Actionable Output</h3>
                  <p className="text-muted-foreground font-medium">
                    Specific files, functions, and modification suggestions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className="p-8 md:p-12 border-[3px] border-border bg-primary text-primary-foreground shadow-brutal transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-16 h-16 flex-shrink-0 border-[3px] border-border bg-card text-card-foreground flex items-center justify-center shadow-brutal-sm transform rotate-6">
                <Heart className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-3xl font-black uppercase mb-4">Our Impact</h2>
                <p className="font-bold text-lg leading-relaxed mb-6">
                  We're not just building a tool—we're fostering a more inclusive, efficient, 
                  and vibrant open-source community. Every contribution made easier is a step 
                  toward a more collaborative future.
                </p>
                <ul className="space-y-4 font-bold text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-card">→</span> Lower barrier to entry for aspiring contributors
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-card">→</span> Faster issue resolution for popular projects
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-card">→</span> Better knowledge transfer between maintainers and contributors
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-card">→</span> More diverse participation in open source
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;