import { Github, Twitter, Linkedin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t-[3px] border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">

          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="DissolveAI Logo"
                  className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
              <span className="text-3xl font-black tracking-tight uppercase mt-1">
                Dissolve<span className="text-primary">-AI</span>
              </span>
            </div>
            <p className="text-base font-medium text-foreground/80 max-w-xs leading-relaxed">
              Empowering developers to contribute to open source with AI-powered insights.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-black text-lg uppercase tracking-wider mb-6 text-foreground">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="inline-block px-2 py-1 -ml-2 font-bold border-[3px] border-transparent hover:border-border hover:bg-secondary hover:text-secondary-foreground transition-all">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-block px-2 py-1 -ml-2 font-bold border-[3px] border-transparent hover:border-border hover:bg-secondary hover:text-secondary-foreground transition-all">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="font-black text-lg uppercase tracking-wider mb-6 text-foreground">Connect</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="inline-block px-2 py-1 -ml-2 font-bold border-[3px] border-transparent hover:border-border hover:bg-secondary hover:text-secondary-foreground transition-all">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-black text-lg uppercase tracking-wider mb-6 text-foreground">Support Us</h3>
            <Button
              asChild
              className="w-full border-[3px] border-border rounded-none shadow-brutal-sm md:hover:-translate-y-0.5 hover:shadow-brutal active:translate-y-0 active:shadow-none transition-all font-black uppercase bg-card text-card-foreground hover:bg-[#E8D44D] hover:text-black"
            >
              <a
                href="https://github.com/shubh-soubhagya/DissolveAI-beta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-6"
              >
                <Star className="h-5 w-5 fill-current" />
                Star on GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-[3px] border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-base font-black uppercase tracking-wide text-foreground">
            © 2026 Dissolve-AI. All rights reserved.
          </p>

          {/* Brutalist Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/shubh-soubhagya/DissolveAI-beta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-12 w-12 border-[3px] border-border bg-card text-card-foreground shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};