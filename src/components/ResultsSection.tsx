import { Button } from "@/components/ui/button";
import LuxuryVideoPlayer from "./LuxuryVideoPlayer";
import LuxuryCard from "./LuxuryCard";

const CaseStudyCard = ({ title, onClick }: { title: string; onClick?: () => void }) => (
  <div 
    className="group cursor-pointer bg-gradient-card rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 hover:shadow-glow transition-all duration-500 hover:scale-105"
    onClick={onClick}
  >
    <div className="p-8 space-y-6 relative">
      {/* Luxury corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-accent opacity-20 rounded-bl-3xl"></div>
      
      <h3 className="text-xl font-bold text-foreground group-hover:bg-gradient-mixed group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative z-10">
        {title}
      </h3>
      <div className="aspect-[25/10] bg-gradient-to-br from-primary/20 via-background to-accent/20 rounded-2xl flex items-center justify-center border-2 border-primary/10 group-hover:border-primary/30 transition-colors relative overflow-hidden">
        {/* Luxury background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(158,64%,52%,0.1),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(15,58%,68%,0.08),transparent_60%)]"></div>
        <span className="text-muted-foreground font-medium relative z-10">Premium Case Study</span>
      </div>
      <Button variant="gradient-outline" className="w-full group-hover:bg-gradient-mixed group-hover:text-white transition-all duration-300 rounded-2xl font-semibold">
        Discover More →
      </Button>
    </div>
  </div>
);

const ClientStory = () => (
  <LuxuryCard variant="premium" className="shadow-glow">
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Story Content */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <span className="bg-accent/20 text-accent px-4 py-2 rounded-2xl text-sm font-bold border border-accent/30">
            Customer Story
          </span>
          <span className="bg-gradient-accent text-accent-foreground px-4 py-2 rounded-xl text-sm font-bold shadow-accent">
            zoominfo
          </span>
        </div>

        <blockquote className="text-2xl lg:text-4xl font-bold text-foreground leading-tight">
          "We saw value from day one."
        </blockquote>

        <p className="text-muted-foreground text-lg leading-relaxed">
          Docket delivered value from day one. Questions started flowing within 
          an hour, and it quickly became one of our most active Slack channels. 
          Even our CRO checks it before bed.
        </p>

        <div className="grid grid-cols-2 gap-8">
          <div className="text-center p-4 bg-gradient-card rounded-2xl border border-primary/20">
            <div className="text-4xl lg:text-5xl font-bold bg-gradient-mixed bg-clip-text text-transparent mb-2">
              12%
            </div>
            <div className="text-muted-foreground font-medium">Average increase in win-rates</div>
          </div>
          <div className="text-center p-4 bg-gradient-card rounded-2xl border border-accent/20">
            <div className="text-4xl lg:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
              10%
            </div>
            <div className="text-muted-foreground font-medium">Shorter sales cycle</div>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-gradient-card p-4 rounded-2xl border border-primary/10">
          <div className="w-12 h-12 bg-gradient-mixed rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-glow">
            LM
          </div>
          <div>
            <div className="font-bold text-foreground text-lg">Luke Martin</div>
            <div className="text-muted-foreground text-sm">Head of Revenue Enablement Tech Stack at ZoomInfo</div>
          </div>
        </div>

        <Button variant="gradient-accent" className="rounded-2xl font-semibold px-6 py-3">
          Read case study →
        </Button>
      </div>

      {/* Video */}
      <div>
        <LuxuryVideoPlayer />
      </div>
    </div>
  </LuxuryCard>
);

const ResultsSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 space-y-24 relative z-10">
        {/* First Results Section */}
        <div>
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-20">
            <span className="bg-gradient-mixed bg-clip-text text-transparent">Actual results</span>{" "}
            <span className="text-foreground">with real numbers.</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-mixed mx-auto rounded-full mb-16"></div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            <CaseStudyCard title="GTM Revenue outperforming 6 sales people" />
            <CaseStudyCard title="1.1 million in closed deals from 1 campaign" />
          </div>
        </div>

        {/* Client Story */}
        <ClientStory />

        {/* Second Results Section */}
        <div>
          <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            <CaseStudyCard title="$2.8M+ in lifetime value generated over 17 months" />
            <CaseStudyCard title="AI Agent Ecosystem - 60-90 Sales Opportunities per month" />
          </div>

          <ClientStory />
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;