import HeroSection from "../components/HeroSection";
import ProcessSection from "../components/ProcessSection";
import GTMProcessSection from "../components/GTMProcessSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import WorkTogetherSection from "../components/WorkTogetherSection";
import CalendarSection from "../components/CalendarSection";
import FAQSection from "../components/FAQSection";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import LuxuryCard from "../components/LuxuryCard";
import LuxuryVideoPlayer from "../components/LuxuryVideoPlayer";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// Import images
import vesselinMalinovsky from "../assets/case-studies/vesselin-malinovsky.jpg";
import linkedinMeetings from "../assets/case-studies/linkedin-meetings.jpg";
import aiAgentEcosystem from "../assets/case-studies/ai-agent-ecosystem.jpg";
import aleksandarVelev from "../assets/case-studies/aleksandar-velev.jpg";

const MarketIntelligence = () => {
  useEffect(() => {
    // Show video breakdown button on pages that have the section
    const videoBreakdownNav = document.getElementById('video-breakdown-nav');
    if (videoBreakdownNav) {
      videoBreakdownNav.classList.remove('hidden');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent mb-8">
                Market Intelligence & Data Solutions
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed">
                GTM Revenue has generated over <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent font-bold">$53 million in sales pipeline</span> for clients by delivering contextual market intelligence and data insights that boost go-to-market effectiveness and sales-team performance.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
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
                    Watch 8 minute tour
                  </a>
                </div>
              </div>

              {/* Trust Indicator */}
              <a href="#case-studies" className="inline-flex items-center gap-2 px-4 py-2 border-2 border-primary/40 rounded-xl bg-background/50 backdrop-blur-sm hover:border-primary/60 hover:bg-background/70 transition-all duration-300 cursor-pointer group shadow-glow">
                <span className="text-sm sm:text-base md:text-lg font-medium">
                  Trusted by 75+ B2B companies | <span className="text-accent">(View Case Studies)</span>
                </span>
                <div className="text-primary group-hover:translate-x-1 transition-transform duration-300">→</div>
              </a>
            </div>
          </div>
        </section>

        {/* Video Sales Letter */}
        <section id="video-breakdown" className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <LuxuryVideoPlayer 
              title="See how our team can help you 3x your go-to-market performance" 
              youtubeId="DP2ANxPN6x0"
              autoplay={true}
            />
          </div>
        </section>

        {/* Case Studies Section */}
        <CaseStudiesSection />

        {/* First Customer Story - Yamasoft */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <LuxuryCard id="client-interview" variant="premium" className="shadow-glow">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Story Content */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="bg-accent/20 text-accent px-4 py-2 rounded-2xl text-sm font-bold border border-accent/30">
                      Customer Story
                    </span>
                    <span className="bg-gradient-accent text-accent-foreground px-4 py-2 rounded-xl text-sm font-bold shadow-accent">
                      Yamasoft
                    </span>
                  </div>

                  <blockquote className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground leading-tight">
                    "GTM Revenue did what no one else could"
                  </blockquote>

                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    We'd tried several agencies and been frustrated by surface-level fixes. GTM Revenue was different: they diagnosed root causes, rebuilt our go-to-market strategy, and delivered real, lasting improvements. <span className="text-accent font-semibold">Their depth of expertise and hands-on experience set them apart from every go-to-market partner we've worked with.</span>
                  </p>

                  <div className="flex items-center gap-3 sm:gap-4 bg-gradient-card p-3 sm:p-4 rounded-2xl border border-primary/10">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl overflow-hidden shadow-glow">
                      <img 
                        src={vesselinMalinovsky} 
                        alt="Vesselin Malinovsky"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-mixed rounded-2xl flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-glow" style={{ display: 'none' }}>
                        VM
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-base sm:text-lg">Vesselin Malinovsky</div>
                      <div className="text-muted-foreground text-xs sm:text-sm">CEO and Co-Founder</div>
                    </div>
                  </div>
                </div>

                {/* Video */}
                <div>
                  <LuxuryVideoPlayer 
                    youtubeId="0W-50QdAop8"
                    autoplay={true}
                  />
                  <div className="mt-12">
                    <Link to="/case-study-6" onClick={() => window.scrollTo(0, 0)}>
                      <Button variant="gradient-accent" className="w-full rounded-2xl font-semibold px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base hover:scale-105 transition-transform duration-300 shadow-accent">
                        Read case study →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </LuxuryCard>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Our different market intelligence & data solutions
              </h2>
            </div>

            <div className="space-y-12 max-w-6xl mx-auto">
              {/* Solution 1: CRM Data */}
              <LuxuryCard number={1} title="CRM Data" variant="accent" className="max-w-6xl mx-auto">
                <div className="space-y-8">
                  <p className="text-foreground text-lg sm:text-xl font-semibold">
                    <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">Augment data in your CRM with AI</span> - categorize companies according to your specific industry definitions, segment accounts, and more. Feel more confident than ever about the data in your CRM.
                  </p>
                  
                  <ul className="space-y-4 text-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span className="text-base sm:text-lg font-medium">Well-researched accounts and contacts, without manual research</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span className="text-base sm:text-lg font-medium">Reflect real-time target account changes in your CRM</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span className="text-base sm:text-lg font-medium">Keep data enriched and accurate at scale</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span className="text-base sm:text-lg font-medium">Treat CRM hygiene as a process: schedule automated enrichment, deduplication, validation rules and event-driven updates so data stays reliable month after month</span>
                    </li>
                  </ul>
                </div>
              </LuxuryCard>

              {/* Solution 2: Inbound Leads */}
              <LuxuryCard number={2} title="Inbound Leads" variant="accent" className="max-w-6xl mx-auto">
                <div className="space-y-8">
                  <p className="text-foreground text-lg sm:text-xl font-semibold">
                    <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">Automate inbound lead enrichment, qualification, and routing</span>
                  </p>
                  
                  <ul className="space-y-4 text-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span className="text-base sm:text-lg font-medium">Intercept inbound leads before they hit your CRM</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span className="text-base sm:text-lg font-medium">Enrich them with 100+ data sources and use AI to automate inbound research</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span className="text-base sm:text-lg font-medium">Route only the hottest, sales-ready leads into the CRM and block low-fit records from ever cluttering your database</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span className="text-base sm:text-lg font-medium">Get detailed insight reports for every lead so you're maximally relevant on first contact</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span className="text-base sm:text-lg font-medium">Boost conversion/close rates while saving hours of research</span>
                    </li>
                  </ul>
                </div>
              </LuxuryCard>

              {/* Solution 3: Sales Team Efficiency */}
              <LuxuryCard number={3} title="Sales Team Efficiency" variant="accent" className="max-w-6xl mx-auto">
                <div className="space-y-8">
                  <p className="text-foreground text-lg sm:text-xl font-semibold">
                    <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">Everything is Integrated with your team processes & CRM</span>, allowing your team to spend more time on revenue generating activities.
                  </p>
                  
                  <ul className="space-y-4 text-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span className="text-base sm:text-lg font-medium">Across clients the average salesperson can spend <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent font-bold">40% more of their time</span> on revenue generating activities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span className="text-base sm:text-lg font-medium">Allow salespeople to open new deals with immediate relevance and deep understanding</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span className="text-base sm:text-lg font-medium">Give them ready detailed AI reports on contacts and accounts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span className="text-base sm:text-lg font-medium">Raise close rates while cutting hours of prep</span>
                    </li>
                  </ul>
                </div>
              </LuxuryCard>

              {/* Solution 4: Outbound Data */}
              <LuxuryCard number={4} title="Outbound Data" variant="accent" className="max-w-6xl mx-auto">
                <div className="space-y-8">
                  <p className="text-lg sm:text-xl font-semibold">
                    <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent font-bold">Get 2-3x more data coverage at 1/5 the cost</span>
                  </p>
                  
                  <ul className="space-y-4 text-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span className="text-base sm:text-lg font-medium"><span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent font-bold">3x sales</span> by sending the same message to a better list (seen on the case studies on this page)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span className="text-base sm:text-lg font-medium">Unlock superior data coverage and quality - on anything from work emails and mobile numbers to company fundraising data, news, open jobs, and 100+ more</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span className="text-base sm:text-lg font-medium">Create your own custom intent data, talk to companies that have the budget and need your product right now</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span className="text-base sm:text-lg font-medium">Fuel GTM outreach with live, contextual insights</span>
                    </li>
                  </ul>
                </div>
              </LuxuryCard>
            </div>
          </div>
        </section>

        {/* GTM Process Section */}
        <GTMProcessSection />

        {/* Process Section */}
        <ProcessSection />

        {/* More Case Studies */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-16 sm:mb-20">
                <span className="bg-gradient-mixed bg-clip-text text-transparent">Actual results</span>{" "}
                <span className="text-foreground">with real numbers.</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-mixed mx-auto rounded-full mb-16"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              <a href="/case-study-3" className="group relative bg-gradient-to-br from-card to-card/50 rounded-3xl shadow-glow border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 flex flex-col h-full">
                {/* Luxury corner accent */}
                <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-accent opacity-20 rounded-bl-3xl"></div>
                
                {/* Content area - grows to fill available space */}
                <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6 p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:bg-gradient-mixed group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative z-10">
                    Booking 35+ qualified meetings per month with LinkedIn content + AI multi-channel outreach
                  </h3>
                  <div className="aspect-[25/10] bg-gradient-to-br from-primary/20 via-background to-accent/20 rounded-2xl flex items-center justify-center border-2 border-primary/10 group-hover:border-primary/30 transition-colors relative overflow-hidden">
                    <img 
                      src={linkedinMeetings} 
                      alt="Booking 35+ qualified meetings per month with LinkedIn content + AI multi-channel outreach"
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(158,64%,52%,0.1),transparent_60%)]" style={{ display: 'none' }}></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(15,58%,68%,0.08),transparent_60%)]" style={{ display: 'none' }}></div>
                    <span className="text-sm sm:text-base text-muted-foreground font-medium relative z-10" style={{ display: 'none' }}>Premium Case Study</span>
                  </div>
                </div>
                
                {/* Button - always at bottom */}
                <div className="relative p-[2px] bg-gradient-to-r from-primary to-accent rounded-2xl hover:shadow-glow transition-shadow duration-300 group-hover:shadow-glow mt-4 sm:mt-6 mx-6 sm:mx-8 mb-6 sm:mb-8">
                  <div className="w-full px-4 py-2 rounded-2xl font-semibold text-sm sm:text-base hover:scale-105 transition-transform duration-300 hover:bg-background border-0 bg-background text-white flex items-center justify-center">
                    Discover More →
                  </div>
                </div>
              </a>

              <a href="/case-study-4" className="group relative bg-gradient-to-br from-card to-card/50 rounded-3xl shadow-glow border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 flex flex-col h-full">
                {/* Luxury corner accent */}
                <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-accent opacity-20 rounded-bl-3xl"></div>
                
                {/* Content area - grows to fill available space */}
                <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6 p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:bg-gradient-mixed group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative z-10">
                    AI Agent Ecosystem - 60-90 Sales Opportunities per month
                  </h3>
                  <div className="aspect-[25/10] bg-gradient-to-br from-primary/20 via-background to-accent/20 rounded-2xl flex items-center justify-center border-2 border-primary/10 group-hover:border-primary/30 transition-colors relative overflow-hidden">
                    <img 
                      src={aiAgentEcosystem} 
                      alt="AI Agent Ecosystem - 60-90 Sales Opportunities per month"
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(158,64%,52%,0.1),transparent_60%)]" style={{ display: 'none' }}></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(15,58%,68%,0.08),transparent_60%)]" style={{ display: 'none' }}></div>
                    <span className="text-sm sm:text-base text-muted-foreground font-medium relative z-10" style={{ display: 'none' }}>Premium Case Study</span>
                  </div>
                </div>
                
                {/* Button - always at bottom */}
                <div className="relative p-[2px] bg-gradient-to-r from-primary to-accent rounded-2xl hover:shadow-glow transition-shadow duration-300 group-hover:shadow-glow mt-4 sm:mt-6 mx-6 sm:mx-8 mb-6 sm:mb-8">
                  <div className="w-full px-4 py-2 rounded-2xl font-semibold text-sm sm:text-base hover:scale-105 transition-transform duration-300 hover:bg-background border-0 bg-background text-white flex items-center justify-center">
                    Discover More →
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Internal Strategies - GTM Revenue */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <LuxuryCard id="internal-strategies" variant="premium" className="shadow-glow">
              <div className="flex lg:flex-row flex-col gap-8 items-stretch min-h-[400px]">
                {/* Story Content */}
                <div className="lg:w-[44%] flex flex-col h-full">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="bg-accent/20 text-accent px-4 py-2 rounded-2xl text-sm font-bold border border-accent/30">
                        Internal Strategies
                      </span>
                      <span className="bg-gradient-accent text-accent-foreground px-4 py-2 rounded-xl text-sm font-bold shadow-accent">
                        GTM Revenue
                      </span>
                    </div>

                    <blockquote className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground leading-tight">
                      See GTM Revenue's internal AI Agents
                    </blockquote>

                    <ul className="text-white text-base sm:text-lg leading-relaxed space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Relevant, scalable GTM sales campaigns: win prospects' trust immediately, shorten the sales cycle, and close more deals.
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Increase GTM efficiency by 80%
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Run creative campaigns at scale
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 items-stretch">
                    {/* Meetings Card */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm rounded-3xl px-4 py-3 border border-primary/30 shadow-2xl group-hover:shadow-primary/20 group-hover:scale-105 transition-all duration-500 h-full flex flex-col justify-center">
                        <div className="flex items-center justify-between mb-1">
                          <div className="w-7 h-7 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div className="text-right">
                            <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-none">
                              110+
                            </div>
                            <div className="font-semibold text-primary/80 uppercase tracking-wider" style={{ fontSize: '17px' }}>
                              Meetings
                            </div>
                          </div>
                        </div>
                        <div className="font-medium text-white leading-tight" style={{ fontSize: '15px' }}>
                          Qualified sales meetings per month
                        </div>
                      </div>
                    </div>

                    {/* Time Card */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm rounded-3xl px-4 py-3 border border-accent/30 shadow-2xl group-hover:shadow-accent/20 group-hover:scale-105 transition-all duration-500 h-full flex flex-col justify-center">
                        <div className="flex items-center justify-between mb-1">
                          <div className="w-7 h-7 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center shadow-lg">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="text-right">
                            <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent leading-none">
                              4h
                            </div>
                            <div className="font-semibold text-accent/80 uppercase tracking-wider" style={{ fontSize: '17px' }}>
                              Monthly
                            </div>
                          </div>
                        </div>
                        <div className="font-medium text-white leading-tight" style={{ fontSize: '15px' }}>
                          Time to manage and optimize our AI agent ecosystem
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 bg-gradient-card p-3 sm:p-4 rounded-2xl border border-primary/10 mt-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl overflow-hidden shadow-glow">
                      <img 
                        src={aleksandarVelev} 
                        alt="Aleksandar Velev"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-mixed rounded-2xl flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-glow" style={{ display: 'none' }}>
                        AV
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-base sm:text-lg">Aleksandar Velev</div>
                      <div className="text-muted-foreground text-xs sm:text-sm">CRO & Founder</div>
                    </div>
                  </div>
                </div>

                {/* Video */}
                <div className="lg:w-[56%]">
                  <LuxuryVideoPlayer 
                    youtubeId="ecDrbaj0x5Y"
                    autoplay={true}
                  />
                  <div className="mt-12">
                    <Link to="/case-study-5" onClick={() => window.scrollTo(0, 0)}>
                      <Button variant="gradient-accent" className="w-full rounded-2xl font-semibold px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base hover:scale-105 transition-transform duration-300 shadow-accent">
                        Read case study →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </LuxuryCard>
          </div>
        </section>

        {/* Calendar Section */}
        <section id="book-a-call">
          <CalendarSection />
        </section>

        {/* FAQ Section */}
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default MarketIntelligence;
