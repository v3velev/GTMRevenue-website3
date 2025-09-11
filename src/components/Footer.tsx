const Footer = () => {
  return (
    <footer className="bg-gradient-secondary border-t border-border py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                GTM Revenue
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Revenue growth and lasting competitive advantage delivered with Go-to-market expertise & custom AI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sales Campaigns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Market Intelligence</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">AI Growth Partner</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Book a Call</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Client Stories</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 GTM Revenue. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;