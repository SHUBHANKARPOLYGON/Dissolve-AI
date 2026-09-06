import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Sparkles, Zap, Shield, Code2, GitBranch, FileSearch, Brain, Users, TrendingUp, CheckCircle2, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border shadow-glow-card text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4 text-foreground" />
              <span className="text-foreground">AI-Powered Open Source Assistant</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
              <span className="text-foreground">Dissolve </span>
              <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-cyan-500 bg-clip-text text-transparent">Complexity</span>
              <br />
              <span className="text-foreground">Contribute with </span>
              <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-cyan-500 bg-clip-text text-transparent">Confidence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform complex repositories into actionable insights. Navigate massive codebases, 
              understand GitHub issues, and contribute meaningfully—all guided by advanced AI.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary transition-all text-lg px-10 py-7 group"
                asChild
              >
                <a href={import.meta.env.VITE_APP_URL} className="flex items-center gap-2">
                  Try It Out
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 border-2 hover:bg-muted transition-all"
                asChild
              >
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 border-y border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-3">
              <div className="text-5xl md:text-6xl font-bold text-foreground">
                70-80%
              </div>
              <p className="text-lg text-muted-foreground">Time saved on understanding code context</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl md:text-6xl font-bold text-foreground">
                1-3 days
              </div>
              <p className="text-lg text-muted-foreground">Average contribution time (down from 1-2 weeks)</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl md:text-6xl font-bold text-foreground">
                420M+
              </div>
              <p className="text-lg text-muted-foreground">GitHub projects you can navigate with ease</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              The Open Source Contribution Challenge
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 420 million projects on GitHub, contributing to open source has never been more important—or more intimidating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 shadow-glow-card hover:shadow-glow-primary transition-all">
              <FileSearch className="h-12 w-12 text-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Repository Complexity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Large projects like React (45,000+ files) or Linux Kernel (70,000+ files) overwhelm new contributors. Critical files are buried deep within nested structures.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 shadow-glow-card hover:shadow-glow-primary transition-all">
              <Clock className="h-12 w-12 text-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Time Inefficiency</h3>
              <p className="text-muted-foreground leading-relaxed">
                Contributors spend 70-80% of their time understanding problem context rather than solving it. GitHub issues often lack sufficient code area context.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 shadow-glow-card hover:shadow-glow-primary transition-all">
              <Users className="h-12 w-12 text-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">High Barrier to Entry</h3>
              <p className="text-muted-foreground leading-relaxed">
                New developers abandon contributions due to steep learning curves. Understanding file dependencies requires weeks of exploration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Powered by Advanced <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-cyan-500 bg-clip-text text-transparent">Intelligence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multi-model AI pipeline that understands both your repository structure and contribution goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative p-8 rounded-2xl border border-border bg-card hover:border-foreground/20 transition-all hover:shadow-glow-card">
              <Zap className="h-12 w-12 text-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Instant Repository Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automatically maps dependencies, identifies architectural patterns, and highlights critical paths in seconds.
              </p>
            </div>

            <div className="group relative p-8 rounded-2xl border border-border bg-card hover:border-foreground/20 transition-all hover:shadow-glow-card">
              <Brain className="h-12 w-12 text-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Context-Aware AI</h3>
              <p className="text-muted-foreground leading-relaxed">
                Correlates GitHub issues with relevant code sections automatically using advanced language models.
              </p>
            </div>

            <div className="group relative p-8 rounded-2xl border border-border bg-card hover:border-foreground/20 transition-all hover:shadow-glow-card">
              <GitBranch className="h-12 w-12 text-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Dependency Mapping</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creates visual graphs of file relationships and imports to understand code structure at a glance.
              </p>
            </div>

            <div className="group relative p-8 rounded-2xl border border-border bg-card hover:border-foreground/20 transition-all hover:shadow-glow-card">
              <Target className="h-12 w-12 text-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Pinpoint Accuracy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Provides exact files, functions, and line numbers with concrete code modification recommendations.
              </p>
            </div>

            <div className="group relative p-8 rounded-2xl border border-border bg-card hover:border-foreground/20 transition-all hover:shadow-glow-card">
              <Code2 className="h-12 w-12 text-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Pattern Recognition</h3>
              <p className="text-muted-foreground leading-relaxed">
                Identifies coding conventions and suggests solutions following project-specific best practices.
              </p>
            </div>

            <div className="group relative p-8 rounded-2xl border border-border bg-card hover:border-foreground/20 transition-all hover:shadow-glow-card">
              <Shield className="h-12 w-12 text-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Quality First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ensures contributions follow project patterns with appropriate test cases and validation strategies.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild className="border-2 text-lg px-8 py-6">
              <Link to="/features">
                Explore All Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-gradient-subtle border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Measurable Impact for Contributors
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the quantifiable difference Dissolve makes in your open source journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 shadow-glow-card">
              <TrendingUp className="h-10 w-10 text-foreground mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Dramatic Time Reduction</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Repository Understanding:</strong> 3-4 days → 30-60 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Issue Analysis:</strong> 4-6 hours → 15-30 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Overall Contribution:</strong> 1-2 weeks → 1-3 days</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 shadow-glow-card">
              <Sparkles className="h-10 w-10 text-foreground mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Quality Improvements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Higher Success Rate:</strong> More targeted, contextual contributions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Reduced Iterations:</strong> Fewer review rounds due to better implementations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Code Consistency:</strong> AI suggests solutions following project patterns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Built for Every Contributor
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're just starting out or a seasoned developer, Dissolve accelerates your contribution journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 text-center shadow-glow-card hover:shadow-glow-primary transition-all">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">New Contributors</h3>
              <p className="text-muted-foreground">
                Junior developers, career switchers, and students seeking their first open source contributions
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 text-center shadow-glow-card hover:shadow-glow-primary transition-all">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Experienced Developers</h3>
              <p className="text-muted-foreground">
                Seasoned engineers contributing to unfamiliar codebases or exploring new domains
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 text-center shadow-glow-card hover:shadow-glow-primary transition-all">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Project Maintainers</h3>
              <p className="text-muted-foreground">
                Teams providing better guidance and onboarding for new contributors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-subtle border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Transform Your Contribution Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of developers who are contributing to open source with confidence
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary transition-all text-lg px-10 py-7 group"
              asChild
            >
              <a href={import.meta.env.VITE_APP_URL} className="flex items-center gap-2">
                Get Started Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 border-2 hover:bg-muted transition-all"
              asChild
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
