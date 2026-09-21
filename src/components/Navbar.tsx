import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Theme initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  // 🚨 ADDED: Scroll Lock Effect for Mobile Menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-[3px] border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="DissolveAI Logo"
                  className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
              <span className="text-2xl font-black tracking-tight uppercase mt-1">
                Dissolve<span className="text-primary">-AI</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-4 py-2 text-sm font-bold uppercase tracking-wider border-[3px] border-transparent hover:border-border hover:bg-secondary hover:text-secondary-foreground transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="border-[3px] border-border rounded-none shadow-brutal-sm hover:-translate-y-0.5 hover:shadow-brutal active:translate-y-0 active:shadow-none transition-all"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>

              <a
                href="https://dissolve.ai.shubhankartiwary.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 px-4 py-2 border-[3px] border-border rounded-none bg-primary text-primary-foreground font-bold shadow-brutal md:hover:-translate-y-0.5 hover:shadow-brutal-lg active:translate-y-0 active:shadow-none transition-all uppercase"
              >
                Try It Out
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="border-[3px] border-border rounded-none shadow-brutal-sm"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="border-[3px] border-border rounded-none shadow-brutal-sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown (z-index inherits from parent nav) */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t-[3px] border-border bg-background relative z-10">
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-lg font-bold uppercase tracking-wider border-[3px] border-transparent hover:border-border hover:bg-secondary transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t-[3px] border-border">
                <a
                  href="https://dissolve.ai.shubhankartiwary.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-4 border-[3px] border-border rounded-none bg-primary text-primary-foreground font-bold shadow-brutal-sm active:translate-y-0.5 active:shadow-none transition-all uppercase"
                >
                  Try It Out
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* 🚨 ADDED: Glassmorphism Blur Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[64px] z-40 bg-background/30 backdrop-blur-md md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};