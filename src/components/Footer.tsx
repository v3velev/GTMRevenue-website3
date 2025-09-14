const Footer = () => {
  return (
    <footer className="bg-gradient-secondary border-t border-border py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                GTM Revenue
              </span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md">
              Revenue growth and lasting competitive advantage delivered with Go-to-market expertise & custom AI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm sm:text-base font-semibold text-foreground">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">Sales Campaigns</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">Market Intelligence</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">AI Growth Partner</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm sm:text-base font-semibold text-foreground">Contact</h4>
            <ul className="space-y-2">
              <li><a href="#book-a-call" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">Book a Call</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">Client Stories</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © 2025 GTM Revenue. All rights reserved.
            </p>
            
            {/* Social Media Buttons */}
            <div className="flex items-center gap-4">
              <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Exclusive go-to-market & AI content
              </span>
              
              <a 
                href="https://www.youtube.com/@VelevAleksandar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 hover:border-primary/50 hover:bg-gradient-to-r hover:from-primary/30 hover:to-accent/30 transition-all duration-300 hover:scale-110"
              >
                <svg 
                  className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/v3velev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 hover:border-primary/50 hover:bg-gradient-to-r hover:from-primary/30 hover:to-accent/30 transition-all duration-300 hover:scale-110"
              >
                <svg 
                  className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;