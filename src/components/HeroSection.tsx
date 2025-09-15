import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-background"></div>
      
      {/* Primary Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-accent/15 via-accent/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-primary-glow/12 via-primary/6 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      
      {/* Secondary Accent Gradients */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-accent-glow/10 via-accent/5 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-tl from-primary-dark/8 via-primary/4 to-transparent rounded-full blur-2xl" style={{ animationDelay: '3s' }}></div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-2xl rotate-12 animate-spin-slow"></div>
      <div className="absolute top-1/3 right-16 w-24 h-24 border border-accent/25 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-1/3 left-16 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl rotate-45 animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary rounded-full animate-glow-pulse shadow-glow"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-accent rounded-full animate-glow-pulse shadow-accent" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-3.5 h-3.5 bg-primary-glow rounded-full animate-glow-pulse shadow-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent-glow rounded-full animate-glow-pulse shadow-accent" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-1/4 right-10 w-4 h-4 bg-primary-dark rounded-full animate-glow-pulse shadow-glow" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-3/4 left-1/2 w-2.5 h-2.5 bg-accent rounded-full animate-glow-pulse shadow-accent" style={{ animationDelay: '5s' }}></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(158,64%,52%,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(158,64%,52%,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:20px_20px] opacity-30"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          {/* Main Headlines */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">Revenue growth</span>{" "}
            <span className="text-foreground">and lasting</span>
            <br />
            <span className="text-foreground">competitive advantage</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground mb-8 max-w-4xl mx-auto font-semibold">
            delivered with Go-to-market expertise & custom AI solutions.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            GTM Revenue gives you an unfair competitive advantage in your B2B sales. Generating 
            over <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent font-bold">$53M+ in sales pipeline</span> for our clients with our AI sales solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative p-[3px] bg-gradient-to-r from-primary to-accent rounded-2xl hover:shadow-glow transition-shadow duration-300 h-14">
              <a 
                href="#book-a-call"
                className="w-full h-full px-8 sm:px-10 py-4 text-base sm:text-lg font-semibold rounded-2xl border-0 bg-background text-white hover:scale-105 transition-transform duration-300 hover:bg-background flex items-center justify-center"
              >
                Book a call →
              </a>
            </div>
            <div className="relative p-[3px] bg-gradient-to-r from-primary to-accent rounded-2xl hover:shadow-glow transition-shadow duration-300 h-14">
              <a 
                href="#video-breakdown"
                className="w-full h-full px-8 sm:px-10 py-4 text-base sm:text-lg font-semibold rounded-2xl border-0 bg-background text-white hover:scale-105 transition-transform duration-300 hover:bg-background flex items-center justify-center"
              >
                Watch video breakdown
              </a>
            </div>
          </div>

          {/* Trust Indicator */}
          <a href="#case-studies" className="inline-flex items-center gap-2 px-4 py-2 border-2 border-primary/40 rounded-xl bg-background/50 backdrop-blur-sm hover:border-primary/60 hover:bg-background/70 transition-all duration-300 cursor-pointer group animate-fade-in shadow-glow" style={{ animationDelay: '0.6s' }}>
            <span className="text-sm sm:text-base md:text-lg font-bold">
              Trusted by 75+ B2B companies | <span className="text-accent">(View Case Studies)</span>
            </span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;