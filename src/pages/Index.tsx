import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Sparkles, Zap, Shield, Code2, GitBranch, FileSearch, Brain, Users, TrendingUp, CheckCircle2, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 border-b-[3px] border-border overflow-hidden">
        {/* Swapped blurred blobs for brutalist geometric background accents */}
        <div className="absolute inset-0 bg-background opacity-50" />
        {/* Hidden on mobile to prevent horizontal overflow bugs */}
        <div className="hidden md:block absolute top-20 left-10 w-96 h-96 bg-secondary/20 border-[3px] border-border transform rotate-6" />
        <div className="hidden md:block absolute bottom-10 right-10 w-96 h-96 bg-primary/5 border-[3px] border-border transform -rotate-12" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8">
            
            <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-none bg-card border-[3px] border-border shadow-brutal-sm text-xs md:text-sm font-bold uppercase tracking-wider mb-2 md:mb-4 transform -rotate-1 mx-auto max-w-full">
              <Sparkles className="h-4 w-4 text-foreground flex-shrink-0" />
              <span className="text-foreground truncate">AI-Powered Open Source Assistant</span>
            </div>
            
            {/* Scaled down text for mobile (4xl) to tablet (6xl) to desktop (8xl) */}
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-tight uppercase flex flex-col items-center gap-2 md:gap-4 md:block">
              <span className="text-foreground block md:inline">Dissolve </span>
              <span className="bg-accent text-accent-foreground px-3 md:px-4 py-1 border-[3px] border-border shadow-brutal inline-block transform rotate-1 md:mx-2 whitespace-normal break-words max-w-full text-center">
                Complexity
              </span>
              <br className="hidden md:block" />
              <span className="text-foreground block md:inline mt-2 md:mt-0">Contribute with </span>
              <span className="bg-primary text-primary-foreground px-3 md:px-4 py-1 border-[3px] border-border shadow-brutal inline-block transform -rotate-1 md:mx-2 mt-2 whitespace-normal break-words max-w-full text-center">
                Confidence
              </span>
            </h1>
            
            {/* Added break-words and reduced padding/text-size for mobile */}
            <p className="text-lg md:text-xl lg:text-2xl text-foreground font-bold max-w-3xl mx-auto leading-relaxed border-[3px] border-border bg-card p-4 md:p-6 shadow-brutal-sm break-words">
              Transform complex repositories into actionable insights. Navigate massive codebases, 
              understand GitHub issues, and contribute meaningfully—all guided by advanced AI.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4 md:pt-6 w-full max-w-md mx-auto sm:max-w-none">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground md:hover:-translate-y-1 shadow-brutal md:hover:shadow-brutal-lg transition-all text-base md:text-lg px-6 md:px-10 py-6 md:py-7 group border-[3px] border-border rounded-none uppercase font-black"
                asChild
              >
                <a href="https://dissolve.ai.shubhankartiwary.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Try It Out
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6 md:group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base md:text-lg px-6 md:px-10 py-6 md:py-7 border-[3px] border-border bg-card text-card-foreground rounded-none shadow-brutal md:hover:-translate-y-1 md:hover:shadow-brutal-lg hover:bg-secondary transition-all uppercase font-black"
                asChild
              >
                <Link to="/about" className="flex justify-center">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 md:py-20 px-4 border-b-[3px] border-border bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            <div className="text-center space-y-2 md:space-y-3 bg-background border-[3px] border-border p-6 shadow-brutal transform md:-rotate-1">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground">
                70-80%
              </div>
              <p className="text-sm md:text-lg font-bold text-muted-foreground uppercase">Time saved on code context</p>
            </div>
            <div className="text-center space-y-2 md:space-y-3 bg-background border-[3px] border-border p-6 shadow-brutal transform md:rotate-1">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground">
                1-3 days
              </div>
              <p className="text-sm md:text-lg font-bold text-muted-foreground uppercase">Average contribution time</p>
            </div>
            <div className="text-center space-y-2 md:space-y-3 bg-background border-[3px] border-border p-6 shadow-brutal transform md:-rotate-1">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground">
                420M+
              </div>
              <p className="text-sm md:text-lg font-bold text-muted-foreground uppercase">GitHub projects accessible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 md:py-24 px-4 bg-background border-b-[3px] border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-16 px-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-foreground uppercase break-words">
              The Open Source Contribution Challenge
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-3xl mx-auto">
              With over 420 million projects on GitHub, contributing to open source has never been more important—or more intimidating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-card border-[3px] border-border rounded-none p-6 md:p-8 shadow-brutal md:hover:-translate-y-2 md:hover:shadow-brutal-lg transition-all group">
              <div className="w-14 h-14 md:w-16 md:h-16 border-[3px] border-border bg-secondary flex items-center justify-center mb-4 md:mb-6 shadow-brutal-sm transform -rotate-3 md:group-hover:rotate-0 transition-transform">
                <FileSearch className="h-6 w-6 md:h-8 md:w-8 text-foreground" />
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase mb-2 md:mb-3 text-foreground break-words">Repository Complexity</h3>
              <p className="text-muted-foreground font-medium leading-relaxed text-sm md:text-base">
                Large projects like React (45,000+ files) or Linux Kernel (70,000+ files) overwhelm new contributors. Critical files are buried deep within nested structures.
              </p>
            </div>

            <div className="bg-card border-[3px] border-border rounded-none p-6 md:p-8 shadow-brutal md:hover:-translate-y-2 md:hover:shadow-brutal-lg transition-all group">
              <div className="w-14 h-14 md:w-16 md:h-16 border-[3px] border-border bg-accent text-accent-foreground flex items-center justify-center mb-4 md:mb-6 shadow-brutal-sm transform rotate-3 md:group-hover:rotate-0 transition-transform">
                <Clock className="h-6 w-6 md:h-8 md:w-8" />
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase mb-2 md:mb-3 text-foreground break-words">Time Inefficiency</h3>
              <p className="text-muted-foreground font-medium leading-relaxed text-sm md:text-base">
                Contributors spend 70-80% of their time understanding problem context rather than solving it. GitHub issues often lack sufficient code area context.
              </p>
            </div>

            <div className="bg-card border-[3px] border-border rounded-none p-6 md:p-8 shadow-brutal md:hover:-translate-y-2 md:hover:shadow-brutal-lg transition-all group">
              <div className="w-14 h-14 md:w-16 md:h-16 border-[3px] border-border bg-primary text-primary-foreground flex items-center justify-center mb-4 md:mb-6 shadow-brutal-sm transform -rotate-3 md:group-hover:rotate-0 transition-transform">
                <Users className="h-6 w-6 md:h-8 md:w-8" />
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase mb-2 md:mb-3 text-foreground break-words">High Barrier to Entry</h3>
              <p className="text-muted-foreground font-medium leading-relaxed text-sm md:text-base">
                New developers abandon contributions due to steep learning curves. Understanding file dependencies requires weeks of exploration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 px-4 bg-secondary border-b-[3px] border-border">
        <div className="container mx-auto">
          <div className="text-center mb-10 md:mb-16 px-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-foreground uppercase flex flex-col md:inline-block items-center justify-center gap-2">
              <span>Powered by Advanced</span>
              <span className="bg-primary text-primary-foreground px-3 py-1 border-[3px] border-border shadow-brutal-sm inline-block transform md:rotate-2 md:ml-2">Intelligence</span>
            </h2>
            <p className="text-lg md:text-xl font-bold text-foreground max-w-3xl mx-auto mt-4 md:mt-0">
              Multi-model AI pipeline that understands both your repository structure and contribution goals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="group relative p-6 md:p-8 rounded-none border-[3px] border-border bg-background md:hover:-translate-y-2 md:hover:shadow-brutal-lg transition-all shadow-brutal">
              <Zap className="h-8 w-8 md:h-10 md:w-10 text-foreground mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-black uppercase mb-2 md:mb-3 text-foreground break-words">Instant Repository Analysis</h3>
              <p className="text-muted-foreground font-medium leading-relaxed text-sm md:text-base">
                Automatically maps dependencies, identifies architectural patterns, and highlights critical paths in seconds.
              </p>
            </div>

            <div className="group relative p-6 md:p-8 rounded-none border-[3px] border-border bg-background md:hover:-translate-y-2 md:hover:shadow-brutal-lg transition-all shadow-brutal">
              <Brain className="h-8 w-8 md:h-10 md:w-10 text-foreground mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-black uppercase mb-2 md:mb-3 text-foreground break-words">Context-Aware AI</h3>
              <p className="text-muted-foreground font-medium leading-relaxed text-sm md:text-base">
                Correlates GitHub issues with relevant code sections automatically using advanced language models.
              </p>
            </div>

            <div className="group relative p-6 md:p-8 rounded-none border-[3px] border-border bg-background md:hover:-translate-y-2 md:hover:shadow-brutal-lg transition-all shadow-brutal">
              <GitBranch className="h-8 w-8 md:h-10 md:w-10 text-foreground mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-black uppercase mb-2 md:mb-3 text-foreground break-words">Dependency Mapping</h3>
              <p className="text-muted-foreground font-medium leading-relaxed text-sm md:text-base">
                Creates visual graphs of file relationships and imports to understand code structure at a glance.
              </p>
            </div>

            <div className="group relative p-6 md:p-8 rounded-none border-[3px] border-border bg-background md:hover:-translate-y-2 md:hover:shadow-brutal-lg transition-all shadow-brutal">
              <Target className="h-8 w-8 md:h-10 md:w-10 text-foreground mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-black uppercase mb-2 md:mb-3 text-foreground break-words">Pinpoint Accuracy</h3>
              <p className="text-muted-foreground font-medium leading-relaxed text-sm md:text-base">
                Provides exact files, functions, and line numbers with concrete code modification recommendations.
              </p>
            </div>

            <div className="group relative p-6 md:p-8 rounded-none border-[3px] border-border bg-background md:hover:-translate-y-2 md:hover:shadow-brutal-lg transition-all shadow-brutal">
              <Code2 className="h-8 w-8 md:h-10 md:w-10 text-foreground mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-black uppercase mb-2 md:mb-3 text-foreground break-words">Pattern Recognition</h3>
              <p className="text-muted-foreground font-medium leading-relaxed text-sm md:text-base">
                Identifies coding conventions and suggests solutions following project-specific best practices.
              </p>
            </div>

            <div className="group relative p-6 md:p-8 rounded-none border-[3px] border-border bg-background md:hover:-translate-y-2 md:hover:shadow-brutal-lg transition-all shadow-brutal">
              <Shield className="h-8 w-8 md:h-10 md:w-10 text-foreground mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-black uppercase mb-2 md:mb-3 text-foreground break-words">Quality First</h3>
              <p className="text-muted-foreground font-medium leading-relaxed text-sm md:text-base">
                Ensures contributions follow project patterns with appropriate test cases and validation strategies.
              </p>
            </div>
          </div>

          <div className="text-center mt-10 md:mt-12">
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto border-[3px] border-border bg-card text-card-foreground text-base md:text-lg px-6 md:px-10 py-6 md:py-7 font-black uppercase rounded-none shadow-brutal md:hover:-translate-y-1 md:hover:shadow-brutal-lg transition-all">
              <Link to="/features" className="flex justify-center items-center">
                Explore All Features
                <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 bg-background border-b-[3px] border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-16 px-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-foreground uppercase break-words">
              Measurable Impact for Contributors
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-3xl mx-auto">
              See the quantifiable difference Dissolve makes in your open source journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-card border-[3px] border-border rounded-none p-6 md:p-8 shadow-brutal">
              <TrendingUp className="h-10 w-10 md:h-12 md:w-12 text-foreground mb-4 md:mb-6" />
              <h3 className="text-xl md:text-2xl font-black uppercase mb-4 md:mb-6 text-foreground">Dramatic Time Reduction</h3>
              <ul className="space-y-4 md:space-y-5">
                <li className="flex items-start gap-3 md:gap-4">
                  <CheckCircle2 className="h-6 w-6 md:h-7 md:w-7 text-primary flex-shrink-0 mt-1 md:mt-0" />
                  <span className="text-muted-foreground font-medium text-base md:text-lg"><strong className="text-foreground font-black uppercase block md:inline">Repository Understanding:</strong><br className="md:hidden"/> 3-4 days → 30-60 minutes</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <CheckCircle2 className="h-6 w-6 md:h-7 md:w-7 text-primary flex-shrink-0 mt-1 md:mt-0" />
                  <span className="text-muted-foreground font-medium text-base md:text-lg"><strong className="text-foreground font-black uppercase block md:inline">Issue Analysis:</strong><br className="md:hidden"/> 4-6 hours → 15-30 minutes</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <CheckCircle2 className="h-6 w-6 md:h-7 md:w-7 text-primary flex-shrink-0 mt-1 md:mt-0" />
                  <span className="text-muted-foreground font-medium text-base md:text-lg"><strong className="text-foreground font-black uppercase block md:inline">Overall Contribution:</strong><br className="md:hidden"/> 1-2 weeks → 1-3 days</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border-[3px] border-border rounded-none p-6 md:p-8 shadow-brutal">
              <Sparkles className="h-10 w-10 md:h-12 md:w-12 text-foreground mb-4 md:mb-6" />
              <h3 className="text-xl md:text-2xl font-black uppercase mb-4 md:mb-6 text-foreground">Quality Improvements</h3>
              <ul className="space-y-4 md:space-y-5">
                <li className="flex items-start gap-3 md:gap-4">
                  <CheckCircle2 className="h-6 w-6 md:h-7 md:w-7 text-primary flex-shrink-0 mt-1 md:mt-0" />
                  <span className="text-muted-foreground font-medium text-base md:text-lg"><strong className="text-foreground font-black uppercase block md:inline">Higher Success Rate:</strong><br className="md:hidden"/> More targeted, contextual contributions</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <CheckCircle2 className="h-6 w-6 md:h-7 md:w-7 text-primary flex-shrink-0 mt-1 md:mt-0" />
                  <span className="text-muted-foreground font-medium text-base md:text-lg"><strong className="text-foreground font-black uppercase block md:inline">Reduced Iterations:</strong><br className="md:hidden"/> Fewer review rounds due to better implementations</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <CheckCircle2 className="h-6 w-6 md:h-7 md:w-7 text-primary flex-shrink-0 mt-1 md:mt-0" />
                  <span className="text-muted-foreground font-medium text-base md:text-lg"><strong className="text-foreground font-black uppercase block md:inline">Code Consistency:</strong><br className="md:hidden"/> AI suggests solutions following project patterns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-16 md:py-24 px-4 bg-secondary border-b-[3px] border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-16 px-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-foreground uppercase break-words">
              Built for Every Contributor
            </h2>
            <p className="text-lg md:text-xl font-bold text-foreground max-w-3xl mx-auto">
              Whether you're just starting out or a seasoned developer, Dissolve accelerates your contribution journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-background border-[3px] border-border rounded-none p-6 md:p-8 text-center shadow-brutal md:hover:-translate-y-2 md:hover:shadow-brutal-lg transition-all">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary border-[3px] border-border rounded-none flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-brutal-sm transform -rotate-3">
                <Users className="h-8 w-8 md:h-10 md:w-10 text-primary-foreground" />
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase mb-2 md:mb-3 text-foreground break-words">New Contributors</h3>
              <p className="text-muted-foreground font-medium text-sm md:text-base">
                Junior developers, career switchers, and students seeking their first open source contributions
              </p>
            </div>

            <div className="bg-background border-[3px] border-border rounded-none p-6 md:p-8 text-center shadow-brutal md:hover:-translate-y-2 md:hover:shadow-brutal-lg transition-all">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-accent border-[3px] border-border rounded-none flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-brutal-sm transform rotate-3">
                <Code2 className="h-8 w-8 md:h-10 md:w-10 text-accent-foreground" />
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase mb-2 md:mb-3 text-foreground break-words">Experienced Developers</h3>
              <p className="text-muted-foreground font-medium text-sm md:text-base">
                Seasoned engineers contributing to unfamiliar codebases or exploring new domains
              </p>
            </div>

            <div className="bg-background border-[3px] border-border rounded-none p-6 md:p-8 text-center shadow-brutal md:hover:-translate-y-2 md:hover:shadow-brutal-lg transition-all sm:col-span-2 md:col-span-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-card border-[3px] border-border rounded-none flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-brutal-sm transform -rotate-3">
                <Shield className="h-8 w-8 md:h-10 md:w-10 text-foreground" />
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase mb-2 md:mb-3 text-foreground break-words">Project Maintainers</h3>
              <p className="text-muted-foreground font-medium text-sm md:text-base">
                Teams providing better guidance and onboarding for new contributors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-background border-b-[3px] border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-foreground uppercase break-words">
            Ready to Transform Your Contribution Experience?
          </h2>
          <p className="text-lg md:text-xl font-bold text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto">
            Join thousands of developers who are contributing to open source with confidence
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-md mx-auto sm:max-w-none">
            
            {/* FIXED: Removed Button asChild wrapper for raw <a> tag mobile compatibility */}
            <a 
              href="https://dissolve.ai.shubhankartiwary.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground md:hover:-translate-y-1 shadow-brutal md:hover:shadow-brutal-lg transition-all text-base md:text-lg px-6 md:px-10 py-6 md:py-7 group border-[3px] border-border rounded-none uppercase font-black"
            >
              Get Started Now
              <ArrowRight className="h-5 w-5 md:h-6 md:w-6 md:group-hover:translate-x-1 transition-transform" />
            </a>
            
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base md:text-lg px-6 md:px-10 py-6 md:py-7 border-[3px] border-border bg-card text-card-foreground rounded-none shadow-brutal md:hover:-translate-y-1 md:hover:shadow-brutal-lg hover:bg-secondary transition-all uppercase font-black"
              asChild
            >
              <Link to="/contact" className="flex justify-center">
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