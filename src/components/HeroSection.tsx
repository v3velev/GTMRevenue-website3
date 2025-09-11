import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import luxuryHeroBg from "@/assets/luxury-hero-bg.jpg";
import floatingElements from "@/assets/floating-elements.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-background"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${luxuryHeroBg})` }}
      ></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${floatingElements})` }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(158,64%,52%,0.2),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(15,58%,68%,0.15),transparent_50%)]"></div>
      
      {/* Luxury Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-primary rounded-full animate-glow-pulse shadow-glow"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-accent rounded-full animate-glow-pulse shadow-accent" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-2.5 h-2.5 bg-primary-glow rounded-full animate-glow-pulse shadow-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-accent-glow rounded-full animate-glow-pulse shadow-accent" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-1/4 right-10 w-3 h-3 bg-primary-dark rounded-full animate-glow-pulse shadow-glow" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          {/* Main Headlines */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Revenue growth</span>{" "}
            <span className="text-foreground">and lasting</span>
            <br />
            <span className="text-foreground">competitive advantage</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto font-medium">
            delivered with Go-to-market expertise & custom AI solutions.
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            GTM Revenue gives you an unfair competitive advantage in your B2B sales. Generating 
            over $53M+ in sales pipeline for our clients with our AI sales solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="gradient-mixed" size="lg" className="px-10 py-4 text-lg font-semibold rounded-2xl">
              Book a call →
            </Button>
            <Button 
              variant="gradient-outline" 
              size="lg" 
              className="px-10 py-4 text-lg font-semibold rounded-2xl border-2 bg-gradient-to-r from-transparent to-transparent hover:from-primary/5 hover:to-accent/5"
            >
              Watch 8 minute tour
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors cursor-pointer group animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <span className="text-lg font-medium">
              Trusted by 75+ B2B companies | (View Case Studies)
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;