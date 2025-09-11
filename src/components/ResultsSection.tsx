import { Button } from "@/components/ui/button";
import VideoPlayer from "./VideoPlayer";

const CaseStudyCard = ({ title, onClick }: { title: string; onClick?: () => void }) => (
  <div 
    className="group cursor-pointer bg-gradient-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300"
    onClick={onClick}
  >
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <div className="aspect-[25/10] bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center border border-border">
        <span className="text-muted-foreground">picture</span>
      </div>
      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
        Discover More →
      </Button>
    </div>
  </div>
);

const ClientStory = () => (
  <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 border border-border shadow-premium">
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Story Content */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
            Customer Story
          </span>
          <span className="bg-primary text-white px-3 py-1 rounded-md text-sm font-medium">
            zoominfo
          </span>
        </div>

        <blockquote className="text-2xl lg:text-3xl font-bold text-foreground">
          "We saw value from day one."
        </blockquote>

        <p className="text-muted-foreground text-lg">
          Docket delivered value from day one. Questions started flowing within 
          an hour, and it quickly became one of our most active Slack channels. 
          Even our CRO checks it before bed.
        </p>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              12%
            </div>
            <div className="text-muted-foreground">Average increase in win-rates</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              10%
            </div>
            <div className="text-muted-foreground">Shorter sales cycle</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
            LM
          </div>
          <div>
            <div className="font-semibold text-foreground">Luke Martin</div>
            <div className="text-muted-foreground text-sm">Head of Revenue Enablement Tech Stack at ZoomInfo</div>
          </div>
        </div>

        <Button variant="outline" className="mt-4">
          Read case study
        </Button>
      </div>

      {/* Video */}
      <div>
        <VideoPlayer />
      </div>
    </div>
  </div>
);

const ResultsSection = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8 space-y-20">
        {/* First Results Section */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
            Actual results with real numbers.
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            <CaseStudyCard title="GTM Revenue outperforming 6 sales people" />
            <CaseStudyCard title="1.1 million in closed deals from 1 campaign" />
          </div>
        </div>

        {/* Client Story */}
        <ClientStory />

        {/* Second Results Section */}
        <div>
          <div className="grid lg:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
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