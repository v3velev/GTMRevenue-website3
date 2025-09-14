import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

const Navigation = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-primary/20 shadow-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              GTM Revenue
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => {
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                  timeoutRef.current = null;
                }
                setIsSolutionsOpen(true);
              }}
              onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => {
                  setIsSolutionsOpen(false);
                }, 150);
              }}
            >
              <button className="text-foreground hover:text-primary transition-colors font-medium relative group text-sm lg:text-base flex items-center gap-1">
                Solutions
                <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></div>
              </button>
              
              {/* Dropdown Menu */}
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-background/95 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl py-4 z-50">
                  <div className="space-y-2">
                    <a 
                      href="/gtm-campaigns" 
                      className="block px-6 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors font-medium text-sm"
                    >
                      <div className="font-semibold text-primary">Go-to-market sales campaigns</div>
                      <div className="text-xs text-muted-foreground mt-1">Generate predictable sales pipeline with GTM campaigns</div>
                    </a>
                    <a 
                      href="/market-intelligence" 
                      className="block px-6 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors font-medium text-sm"
                    >
                      <div className="font-semibold text-primary">Market Intelligence & Data Solutions</div>
                      <div className="text-xs text-muted-foreground mt-1">Leverage unique data sets for better GTM performance</div>
                    </a>
                    <a 
                      href="/case-study-6" 
                      className="block px-6 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors font-medium text-sm"
                    >
                      <div className="font-semibold text-primary">Growth Partner - AI & Go-to-market</div>
                      <div className="text-xs text-muted-foreground mt-1">AI-powered growth strategies and implementation</div>
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <a href="#case-studies" className="text-foreground hover:text-primary transition-colors font-medium relative group text-sm lg:text-base">
              Case Studies
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#client-interview" className="text-foreground hover:text-primary transition-colors font-medium relative group text-sm lg:text-base">
              Client Interview
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#video-breakdown" className="text-foreground hover:text-accent transition-colors font-medium relative group text-sm lg:text-base hidden" id="video-breakdown-nav">
              Video Breakdown
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>

          {/* CTA Button */}
          <div className="relative p-[2px] bg-gradient-to-r from-primary to-accent rounded-2xl hover:shadow-glow transition-shadow duration-300">
            <a href="#book-a-call" className="px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-2xl border-0 bg-background text-white hover:scale-105 transition-transform duration-300 hover:bg-background flex items-center justify-center">
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;