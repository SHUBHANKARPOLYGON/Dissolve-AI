import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              About <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-cyan-500 bg-clip-text text-transparent">DissolveAI</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Bridging the gap between complex repositories and meaningful contributions
            </p>
          </div>

          {/* Mission */}
          <div className="mb-16 p-8 rounded-2xl border border-border bg-card">
            <div className="flex items-start gap-4 mb-4">
              <Target className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DissolveAI was created to solve a critical challenge in the open-source ecosystem. 
                  With over 420 million projects on GitHub, contributors—especially newcomers—often 
                  struggle to navigate complex codebases and contribute meaningfully. We're changing that.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="mb-16 p-8 rounded-2xl border border-border bg-card">
            <div className="flex items-start gap-4 mb-4">
              <Eye className="h-8 w-8 text-accent flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a world where every developer can contribute to open source, regardless 
                  of their experience level or familiarity with a codebase. By leveraging advanced AI 
                  and intelligent repository analysis, we're making open-source contribution accessible, 
                  efficient, and rewarding for everyone.
                </p>
              </div>
            </div>
          </div>

          {/* The Problem */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">The Challenge We're Solving</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="font-semibold text-lg mb-2">Repository Complexity Barrier</h3>
                <p className="text-muted-foreground">
                  Large projects like React (45,000+ files), Linux Kernel (70,000+ files), 
                  or TensorFlow (15,000+ files) overwhelm new contributors. Understanding file 
                  dependencies and architecture requires weeks of exploration.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="font-semibold text-lg mb-2">Issue Resolution Inefficiency</h3>
                <p className="text-muted-foreground">
                  Contributors spend 70-80% of their time understanding the problem context rather 
                  than solving it. GitHub issues often lack sufficient context about affected code areas.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="font-semibold text-lg mb-2">High Abandonment Rate</h3>
                <p className="text-muted-foreground">
                  New developers abandon contributions due to steep learning curves, turning what 
                  should take days into weeks of frustration.
                </p>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 bg-clip-text text-transparent">Approach</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              DissolveAI transforms the contribution experience by creating an AI-powered research 
              assistant that understands both repository structure and issue context. We provide 
              targeted, actionable guidance that cuts through complexity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Intelligent Mapping</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive understanding of file relationships and dependencies
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Context-Aware Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatic correlation of issues with relevant code sections
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Multi-Model Intelligence</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimal AI model selection based on repository complexity
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Actionable Output</h3>
                  <p className="text-sm text-muted-foreground">
                    Specific files, functions, and modification suggestions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className="p-8 rounded-2xl bg-gradient-primary text-primary-primary">
            <div className="flex items-start gap-4">
              <Heart className="h-8 w-8 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-3">Our Impact</h2>
                <p className="leading-relaxed opacity-90 mb-4">
                  We're not just building a tool—we're fostering a more inclusive, efficient, 
                  and vibrant open-source community. Every contribution made easier is a step 
                  toward a more collaborative future.
                </p>
                <ul className="space-y-2 opacity-90">
                  <li>• Lower barrier to entry for aspiring contributors</li>
                  <li>• Faster issue resolution for popular projects</li>
                  <li>• Better knowledge transfer between maintainers and contributors</li>
                  <li>• More diverse participation in open source</li>
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
