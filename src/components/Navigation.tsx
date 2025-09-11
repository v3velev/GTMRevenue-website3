import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-primary/20 shadow-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-mixed rounded-lg mr-3 flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              GTM Revenue
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#case-studies" className="text-foreground hover:text-primary transition-colors font-medium relative group">
              Case Studies
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#client-interview" className="text-foreground hover:text-primary transition-colors font-medium relative group">
              Client Interview
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#video-breakdown" className="text-foreground hover:text-accent transition-colors font-medium relative group">
              Video Breakdown
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="gradient-accent" className="px-6 py-2 font-semibold rounded-2xl shadow-accent">
            Book a Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;