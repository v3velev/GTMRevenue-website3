import { Button } from "@/components/ui/button";
import LuxuryVideoPlayer from "./LuxuryVideoPlayer";
import LuxuryCard from "./LuxuryCard";

const SolutionsSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-mixed bg-clip-text text-transparent mb-6">
            GTM Revenue solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-mixed mx-auto rounded-full"></div>
        </div>

        <div className="space-y-20">
          {/* Solution 1: Go-to-market sales campaigns */}
          <LuxuryCard number={1} title="Go-to-market sales campaigns" variant="premium" className="max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg">
                  We create sophisticated GTM campaigns to generate new sales opportunities:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shadow-glow"></div>
                    <span>Leverage unique data sets combined with deep context on your brand and company</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shadow-glow"></div>
                    <span>Run scalable, creative campaigns</span>
                  </li>
                </ul>
              </div>

              {/* Case Studies Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "$1.1M in Closed Deals from 1 Campaign", subtitle: "case study 1" },
                  { title: "103 Sales Opportunities in 1 month", subtitle: "case study 2" },
                  { title: "GTM Revenue outperforming 3 Sales Reps & 2 Agencies", subtitle: "case study 2" }
                ].map((study, index) => (
                  <div key={index} className="space-y-4 group">
                    <h4 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{study.title}</h4>
                    <div className="aspect-[16/10] bg-gradient-card rounded-2xl border border-primary/20 flex items-center justify-center group-hover:border-primary/50 transition-colors shadow-card">
                      <span className="text-muted-foreground font-medium">{study.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="gradient-mixed" className="px-8 py-3 rounded-2xl font-semibold">
                Discover More →
              </Button>
            </div>
          </LuxuryCard>

          {/* Solution 2: Market Intelligence & Data Solutions */}
          <LuxuryCard number={2} title="Market Intelligence & Data Solutions" variant="accent" className="max-w-6xl mx-auto">
            <div className="space-y-8">
              <ul className="space-y-4 text-muted-foreground text-lg">
                {[
                  "Keep data enriched and accurate at scale.",
                  "Reflect real-time target account changes in your CRM",
                  "Get Deep Research at Scale for all leads in your CRM, instead of relying on manual research.",
                  "Reduce wasted efforts by prioritizing high-intent leads",
                  "Fuel GTM outreach with live, contextual insights"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-3 shadow-accent"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-3">
                  <LuxuryVideoPlayer />
                </div>
                <div className="lg:col-span-2 space-y-4">
                  <div className="bg-gradient-card rounded-2xl p-6 border border-accent/20 shadow-accent">
                    <h4 className="font-semibold text-foreground mb-4 bg-gradient-accent bg-clip-text text-transparent">Outcomes</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                        <span>%30 more market coverage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                        <span>40% increase in meetings booked per rep per month</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                        <span>17% of total Pipeline coming from this platform</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button variant="gradient-accent" className="px-8 py-3 rounded-2xl font-semibold">
                Discover More →
              </Button>
            </div>
          </LuxuryCard>

          {/* Solution 3: AI & Go-to-market growth Partner */}
          <LuxuryCard number={3} title="AI & Go-to-market growth Partner" variant="default" className="max-w-6xl mx-auto">
            <div className="space-y-8">
              <ul className="space-y-4 text-muted-foreground text-lg">
                {[
                  "Partnering with B2B companies and transforming them into faster, leaner, more profitable organizations.",
                  "Get a team of AI and go-to-market experts to help orchestrate your entire go-to-market process from Ideation → Execution → Optimisation",
                  "build any AI Agent or automation you need"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 shadow-glow"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="gradient" className="px-8 py-3 rounded-2xl font-semibold">
                Discover More →
              </Button>
            </div>
          </LuxuryCard>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;