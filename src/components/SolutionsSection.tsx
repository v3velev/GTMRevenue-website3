import { Button } from "@/components/ui/button";
import VideoPlayer from "./VideoPlayer";

const SolutionCard = ({ 
  number, 
  title, 
  children, 
  className = "" 
}: { 
  number: number; 
  title: string; 
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`relative bg-gradient-card rounded-3xl p-8 lg:p-12 shadow-premium border border-border hover:shadow-glow transition-all duration-300 ${className}`}>
    {/* Number Badge */}
    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-border flex items-center justify-center">
      <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
        <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          {number}
        </span>
      </div>
    </div>
    
    <div className="space-y-6">
      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{title}</h3>
      {children}
    </div>
  </div>
);

const SolutionsSection = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            GTM Revenue solutions
          </h2>
        </div>

        <div className="space-y-16">
          {/* Solution 1: Go-to-market sales campaigns */}
          <SolutionCard number={1} title="Go-to-market sales campaigns" className="max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg">
                  We create sophisticated GTM campaigns to generate new sales opportunities:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Leverage unique data sets combined with deep context on your brand and company</li>
                  <li>• Run scalable, creative campaigns</li>
                </ul>
              </div>

              {/* Case Studies Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "$1.1M in Closed Deals from 1 Campaign", subtitle: "case study 1" },
                  { title: "103 Sales Opportunities in 1 month", subtitle: "case study 2" },
                  { title: "GTM Revenue outperforming 3 Sales Reps & 2 Agencies", subtitle: "case study 2" }
                ].map((study, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="font-semibold text-foreground text-lg">{study.title}</h4>
                    <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl border border-border flex items-center justify-center">
                      <span className="text-muted-foreground">{study.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="gradient" className="px-6 py-3">
                Discover More →
              </Button>
            </div>
          </SolutionCard>

          {/* Solution 2: Market Intelligence & Data Solutions */}
          <SolutionCard number={2} title="Market Intelligence & Data Solutions" className="max-w-6xl mx-auto">
            <div className="space-y-8">
              <ul className="space-y-3 text-muted-foreground text-lg">
                <li>• Keep data enriched and accurate at scale.</li>
                <li>• Reflect real-time target account changes in your CRM</li>
                <li>• Get Deep Research at Scale for all leads in your CRM, instead of relying on manual research.</li>
                <li>• Reduce wasted efforts by prioritizing high-intent leads</li>
                <li>• Fuel GTM outreach with live, contextual insights</li>
              </ul>

              <div className="grid lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-3">
                  <VideoPlayer />
                </div>
                <div className="lg:col-span-2 space-y-4">
                  <div className="bg-gradient-card rounded-xl p-6 border border-border">
                    <h4 className="font-semibold text-foreground mb-4">Outcomes</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• %30 more market coverage</li>
                      <li>• 40% increase in meetings booked per rep per month</li>
                      <li>• 17% of total Pipeline coming from this platform</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button variant="gradient" className="px-6 py-3">
                Discover More →
              </Button>
            </div>
          </SolutionCard>

          {/* Solution 3: AI & Go-to-market growth Partner */}
          <SolutionCard number={3} title="AI & Go-to-market growth Partner" className="max-w-6xl mx-auto">
            <div className="space-y-8">
              <ul className="space-y-3 text-muted-foreground text-lg">
                <li>• Partnering with B2B companies and transforming them into faster, leaner, more profitable organizations.</li>
                <li>• Get a team of AI and go-to-market experts to help orchestrate your entire go-to-market process from Ideation → Execution → Optimisation</li>
                <li>• build any AI Agent or automation you need</li>
              </ul>

              <Button variant="gradient" className="px-6 py-3">
                Discover More →
              </Button>
            </div>
          </SolutionCard>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;