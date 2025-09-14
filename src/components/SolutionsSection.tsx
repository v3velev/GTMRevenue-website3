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
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent mb-4 sm:mb-6">
            GTM Revenue solutions
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-mixed mx-auto rounded-full"></div>
        </div>

        <div className="space-y-20">
          {/* Solution 1: Go-to-market sales campaigns */}
          <LuxuryCard id="solution-1" number={1} title="Go-to-market sales campaigns" variant="accent" className="max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-foreground text-lg sm:text-xl font-semibold">
                  We create sophisticated GTM campaigns to generate new sales opportunities:
                </p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                    <span className="text-base sm:text-lg font-medium">Leverage unique data sets combined with deep context on your brand and company</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                    <span className="text-base sm:text-lg font-medium">Run scalable, creative campaigns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                    <span className="text-base sm:text-lg font-medium">Generate predictable sales pipeline</span>
                  </li>
                </ul>
              </div>

              {/* Case Studies Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { 
                    title: "19 enterprise sales opportunities and $1,1M in contract value from 1 campaign", 
                    subtitle: "case study 1",
                    image: "/src/assets/case-studies/enterprise-sales-opportunities.jpg"
                  },
                  { 
                    title: "$2.8M+ in lifetime value generated over 17 months", 
                    subtitle: "case study 2",
                    image: "/src/assets/case-studies/lifetime-value.jpg"
                  },
                  { 
                    title: "AI Agent Ecosystem - 60-90 Sales Opportunities per month", 
                    subtitle: "case study 3",
                    image: "/src/assets/case-studies/ai-agent-ecosystem.jpg"
                  }
                ].map((study, index) => (
                  <a key={index} href={study.title.includes("$2.8M+") ? "/case-study-1" : study.title.includes("19 enterprise") ? "/case-study-2" : study.title.includes("AI Agent Ecosystem") ? "/case-study-4" : "#"} className="group flex flex-col cursor-pointer hover:scale-105 transition-transform duration-300 border border-white/10 rounded-2xl p-4 hover:border-white/20 transition-colors duration-300">
                    <h4 className="font-bold text-white text-base sm:text-lg group-hover:text-primary transition-colors text-center leading-tight mb-4 sm:mb-6 line-clamp-2">{study.title}</h4>
                    <div className="aspect-[16/8] bg-gradient-card rounded-2xl border border-accent/20 flex items-center justify-center group-hover:border-accent/50 group-hover:shadow-glow transition-all duration-300 overflow-hidden">
                      {study.image ? (
                        <img 
                          src={study.image} 
                          alt={study.title}
                          className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            // Fallback to text if image fails to load
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'block';
                          }}
                        />
                      ) : null}
                      <span 
                        className="text-sm sm:text-base text-muted-foreground font-medium group-hover:text-accent transition-colors duration-300"
                        style={{ display: study.image ? 'none' : 'block' }}
                      >
                        {study.subtitle}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="relative p-[2px] bg-gradient-to-r from-primary to-accent rounded-2xl hover:shadow-glow transition-shadow duration-300">
                <a
                  href="/gtm-campaigns"
                  className="w-full px-6 sm:px-8 py-2 sm:py-3 rounded-2xl font-semibold text-sm sm:text-base hover:scale-105 transition-transform duration-300 hover:bg-background border-0 bg-background text-white flex items-center justify-center"
                >
                  Discover More →
                </a>
              </div>
            </div>
          </LuxuryCard>

          {/* Solution 2: Market Intelligence & Data Solutions */}
          <LuxuryCard id="solution-2" number={2} title="Market Intelligence & Data Solutions" variant="accent" className="max-w-6xl mx-auto">
            <div className="space-y-8">
              <ul className="space-y-4 text-foreground text-base sm:text-lg">
                {[
                  "Keep data enriched and accurate at scale.",
                  "Reflect real-time target account changes in your CRM",
                  "Get Deep Research at Scale for all leads in your CRM, instead of relying on manual research.",
                  "Reduce wasted efforts by prioritizing high-intent leads",
                  "Fuel GTM outreach with live, contextual insights",
                  "Win cold prospects' trust instantly by leading with deep research and clear market insight."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 sm:mt-3 shadow-accent"></div>
                    <span className="text-base sm:text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-3">
                  <LuxuryVideoPlayer 
                    youtubeId="DP2ANxPN6x0"
                    autoplay={true}
                  />
                </div>
                <div className="lg:col-span-2 space-y-4">
                  <div className="bg-gradient-card rounded-2xl p-6 sm:p-8 border border-accent/20 shadow-accent">
                    <h4 className="font-bold text-foreground mb-6 bg-gradient-accent bg-clip-text text-transparent text-lg sm:text-xl">Outcomes</h4>
                    <ul className="space-y-4 text-foreground">
                      <li className="flex items-start gap-4">
                        <div className="text-accent mt-1 font-bold text-lg">→</div>
                        <span className="font-semibold text-base sm:text-lg">3x better conversions by sending the same message to a better list</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="text-accent mt-1 font-bold text-lg">→</div>
                        <span className="font-semibold text-base sm:text-lg">60% increase in meetings booked per salesperson per month</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="text-accent mt-1 font-bold text-lg">→</div>
                        <span className="font-semibold text-base sm:text-lg">2x more market coverage</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative p-[2px] bg-gradient-to-r from-primary to-accent rounded-2xl hover:shadow-glow transition-shadow duration-300">
                <a
                  href="/market-intelligence"
                  className="w-full px-6 sm:px-8 py-2 sm:py-3 rounded-2xl font-semibold text-sm sm:text-base hover:scale-105 transition-transform duration-300 hover:bg-background border-0 bg-background text-white flex items-center justify-center"
                >
                  Discover More →
                </a>
              </div>
            </div>
          </LuxuryCard>

          {/* Solution 3: AI & Go-to-market growth Partner */}
          <LuxuryCard id="solution-3" number={3} title="Growth Partner - AI & Go-to-market" variant="accent" className="max-w-6xl mx-auto">
            <div className="space-y-8">
              <ul className="space-y-4 text-foreground text-base sm:text-lg">
                {[
                  "Partnering with B2B companies and transforming them into faster, leaner, more profitable organizations.",
                  "Get a team of AI and go-to-market experts to help orchestrate your entire go-to-market process:"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 sm:mt-3 shadow-accent"></div>
                    <span className="text-base sm:text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Process Flow - directly under the text */}
              <div className="ml-8 mb-4">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                  <span className="text-base sm:text-lg font-semibold bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">Ideation</span>
                  <div className="text-primary text-lg sm:text-xl font-bold">→</div>
                  <span className="text-base sm:text-lg font-semibold bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">Execution</span>
                  <div className="text-primary text-lg sm:text-xl font-bold">→</div>
                  <span className="text-base sm:text-lg font-semibold bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">Optimisation</span>
                </div>
              </div>
              
              <ul className="space-y-4 text-foreground text-base sm:text-lg">
                {[
                  "Build any AI Agent or automation you need"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 sm:mt-3 shadow-accent"></div>
                    <span className="text-base sm:text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="relative p-[2px] bg-gradient-to-r from-primary to-accent rounded-2xl hover:shadow-glow transition-shadow duration-300">
                <button className="w-full px-6 sm:px-8 py-2 sm:py-3 rounded-2xl font-semibold text-sm sm:text-base hover:scale-105 transition-transform duration-300 hover:bg-background border-0 bg-background text-white flex items-center justify-center">
                  See a real example and results of our partnership - video breakdown →
                </button>
              </div>
            </div>
          </LuxuryCard>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;