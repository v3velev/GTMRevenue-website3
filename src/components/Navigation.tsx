import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              GTM Revenue
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#case-studies" className="text-foreground hover:text-primary transition-colors font-medium">
              Case Studies
            </a>
            <a href="#client-interview" className="text-foreground hover:text-primary transition-colors font-medium">
              Client Interview
            </a>
            <a href="#video-breakdown" className="text-foreground hover:text-primary transition-colors font-medium">
              Video Breakdown
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="gradient" className="px-6 py-2">
            Book a Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;