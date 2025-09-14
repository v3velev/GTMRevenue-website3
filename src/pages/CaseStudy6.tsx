import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import LuxuryVideoPlayer from "../components/LuxuryVideoPlayer";
import LuxuryCard from "../components/LuxuryCard";
import CalendarSection from "../components/CalendarSection";
import FAQSection from "../components/FAQSection";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

// Import images
import aleksandarVelev from "../assets/case-studies/aleksandar-velev.jpg";
import lifetimeValue from "../assets/case-studies/lifetime-value.jpg";
import enterpriseSalesOpportunities from "../assets/case-studies/enterprise-sales-opportunities.jpg";
import linkedinMeetings from "../assets/case-studies/linkedin-meetings.jpg";
import aiAgentEcosystem from "../assets/case-studies/ai-agent-ecosystem.jpg";

const CaseStudy6 = () => {
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
            <div className="max-w-6xl mx-auto text-center">
              <div className="space-y-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white max-w-5xl mx-auto">
                  How we transformed <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">Yamasoft's Go-to-market</span>
                </h1>
                
                <div className="relative inline-block">
                  <p className="text-xl sm:text-2xl lg:text-3xl text-accent font-semibold relative z-10">
                    growth partner case study
                  </p>
                  {/* Subtle background highlight */}
                  <div 
                    className="absolute inset-0 bg-accent/10 rounded-lg blur-sm -z-10"
                    style={{
                      top: '-2px',
                      left: '-4px',
                      right: '-4px',
                      bottom: '-2px'
                    }}
                  ></div>
                </div>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                  Learn how we partner with B2B companies and transform them into faster, leaner, more profitable organizations.
                </p>
              </div>
            </div>
            
            {/* Client Details - Centered below */}
            <div className="flex justify-center mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <h3 className="text-lg font-semibold text-white mb-2">Industry:</h3>
                  <p className="text-white">Software Development</p>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <h3 className="text-lg font-semibold text-white mb-2">Headcount:</h3>
                  <p className="text-white">11-50</p>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <h3 className="text-lg font-semibold text-white mb-2">Location:</h3>
                  <p className="text-white">Bulgaria</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the Client Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                About the client:
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Yamasoft is one of the leading companies in eastern europe for building custom, AI-driven software across multiple industries.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Yamasoft's team is full of industry veterans that have deep enterprise experience building large teams and delivering complex software for major clients.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When Yamasoft's founder and GTM Revenue's founder, Aleksandar Velev, explored partnering, they agreed this would require more than tactical fixes — it demanded a fundamental rethink of Yamasoft's go-to-market and how AI and modern tech can be integrated in their processes.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">We don't offer the usual "lead generation" playbook. Our work goes far beyond that</span> — we diagnose root causes, redesign GTM strategy, and implement the systems and AI needed to deliver real revenue outcomes. Typical agencies often jump straight to tactics and campaign execution, which overlooks the client's unique constraints and creates short-lived results. We start with the foundations instead.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">For Yamasoft we ran a deep GTM audit, joined sales call, interviewed the team, and identified the true bottlenecks.</span>
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Yamasoft had tried 3–5 other agencies and consultants and began the engagement understandably skeptical. By the end, <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">both founders told us GTM Revenue's strategic depth and executional expertise far exceeded every prior partner they'd worked with.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-card/50 to-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                Challenges
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Yamasoft knew something was wrong. They'd tried multiple fixes — internal efforts, outside consultants, and agencies — but nothing met expectations or fixed the root problems.
                </p>
                
                <p>
                  They could generate some sales meetings, but not consistently. <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">Marketing and outbound consumed too much time and money while closed clients remained comparatively low</span> — high effort, low ROI. Deals slipped away even when prospects initially showed interest: replies stopped, calls ghosted, and the team had no clear explanation.
                </p>
                
                <p>
                  They guessed at causes — poor messaging, weak online presence, wrong targeting, crowded market, or bland positioning — <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">but couldn't pinpoint which factor (or combination) was actually breaking the funnel.</span>
                </p>
                
                <p>
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">We diagnosed the truth.</span> We identified exactly what was happening, explained why it was happening, <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">and delivered the solution.</span>
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-8">
                Watch our client interview
              </h3>
              
              <div className="max-w-7xl mx-auto">
                <LuxuryVideoPlayer 
                  youtubeId="lh4jHsn5T9E"
                  autoplay={true}
                />
              </div>
              
              <div className="mt-8">
                <div className="relative p-[3px] bg-gradient-to-r from-primary to-accent rounded-2xl inline-block">
                  <p className="text-white text-lg font-bold px-6 py-3 bg-background rounded-xl">
                    Trusted by 75+ B2B companies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution & Process Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                Solution & Process
              </h2>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="bg-gradient-card rounded-3xl p-8 border border-accent/20 shadow-accent">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    1. Event targeting & preparation
                  </h3>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      Yamasoft attended many conferences to meet potential clients, but they weren't always targeting the best companies and their in-person approach and scripts were inconsistent.
                    </p>
                    <p>
                      GTM Revenue fixed that two ways:
                    </p>
                    
                    <div className="ml-6 space-y-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-3">
                          Event targeting & prep — automated
                        </h4>
                        <ul className="space-y-2">
                          <li>• We used AI and tooling to scrape attendee lists, enrich profiles, and score contacts against Yamasoft's ICP.</li>
                          <li>• The system surfaced the true decision-makers and ranked the best-fit prospects for each event.</li>
                          <li>• What used to take 30–40+ hours of manual research became an automated process that delivered prioritized lists and one-page intel for reps before the event.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-3">
                          Pitch & script — tactical playbook
                        </h4>
                        <ul className="space-y-2">
                          <li>• We rewrote their event script and created a detailed, rep-ready playbook.</li>
                          <li>• The playbook shows how to open with a pattern-disrupting line, position Yamasoft as an expert in the first 30 seconds, diagnose the prospect's real problem in discovery, and convert interest into a firm next-step meeting.</li>
                        </ul>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">
                      <span className="font-bold text-white">Result:</span> <span className="capitalize">reps walk into events focused on the right companies, armed with concise intel and a tested playbook — <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">far better meetings, less wasted effort, and faster follow-ups.</span></span>
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-gradient-card rounded-3xl p-8 border border-accent/20 shadow-accent">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    2. Sales conversion optimization
                  </h3>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      Yamasoft's conversion rate from meetings stayed low even when they booked more pipeline. <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">We joined their sales calls and evaluated every stage</span> — the opening, discovery, sales presentation, objection handling, and close — to see where conversations broke down.
                    </p>
                    <p>
                      From those calls we created two practical playbooks:
                    </p>
                    
                    <div className="ml-6 space-y-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-3">
                          Objection prevention
                        </h4>
                        <p>Concrete changes to qualification, opening lines, and early discovery to avoid predictable pushback before it starts.</p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-3">
                          Objection transformation
                        </h4>
                        <p>A framework that teaches reps how to translate a prospect's stated objection into the underlying concern, then respond with a targeted, outcome-focused reply that addresses the real problem.</p>
                      </div>
                    </div>
                    
                    <p>
                      We also rewrote their sales presentation and produced multiple presentation variants tailored to different market segments, so every demo speaks directly to the buyer's situation and priorities.
                    </p>
                    
                    <p className="text-muted-foreground">
                      <span className="font-bold text-white">Why this works:</span> <span className="capitalize">joined-call analysis exposed the real failure points; then we gave repeatable, tactical fixes (prevention + transformation + tailored decks) so reps stop guessing and start closing.</span>
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-gradient-card rounded-3xl p-8 border border-accent/20 shadow-accent">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    3. Strategic positioning & market differentiation
                  </h3>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      Yamasoft operates in a crowded market, so getting reliable GTM results is harder than in many verticals. They'd tried multiple approaches — internal efforts plus 3–5 external consultants and agencies — <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">but nothing fixed the underlying problems or met their expectations.</span> They knew something was wrong, but they didn't know exactly what.
                    </p>
                    <p>
                      The core issue wasn't capability. The two founders have deep enterprise experience building large teams and delivering complex software for major clients, but from the market's perspective Yamasoft read as "just another provider." That perception made every marketing and sales activity much less effective: lots of effort, high cost, and low ROI. Deals slipped away even when prospects initially showed interest, outreach underperformed, and the team couldn't explain why.
                    </p>
                    <p>
                      <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">We showed them the missing link: positioning.</span> Partnering with experts like GTM Revenue was the right move because generating predictable pipeline requires more than generic tactics — it requires a strategic repositioning grounded in the founders' real expertise and then translating that into every customer touchpoint.
                    </p>
                    <p>
                      So we reframed Yamasoft as an enterprise-caliber, founder-led software partner. We mapped the founders' experience into clear client value (what working with Yamasoft delivers that competitors don't) and updated every channel to reflect that position: website and company descriptions, outreach messaging, sales scripts, sales presentations, and public posts. Each asset emphasized unique outcomes, proof points, and founder-led credibility rather than generic service claims.
                    </p>
                    <p className="text-muted-foreground">
                      <span className="capitalize">This repositioning was the highest-leverage change. Once the market saw Yamasoft as a distinct expert partner rather than a commodity, <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">the ROI on every marketing and sales activity multiplied</span> — outreach performed better, meetings converted more often, and pipeline quality improved. <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">Most agencies miss this</span> because they apply the same playbook to every client; GTM Revenue fixes positioning first, then scales the right tactics.</span>
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-gradient-card rounded-3xl p-8 border border-accent/20 shadow-accent">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    4. Long-cycle engagement & follow-up systems
                  </h3>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      Long B2B sales cycles mean the initial meeting is only the beginning. When average deal timelines stretch 6–12 months (or longer), what you do during that window determines whether a lead converts or goes cold. For Yamasoft many deals were time-dependent: they could open many opportunities, but keeping them engaged for months without spamming prospects was nearly impossible.
                    </p>
                    <p>
                      Our objectives were twofold: position Yamasoft as the trusted expert buyers think of first, and maintain meaningful engagement without becoming noise.
                    </p>
                    
                    <div className="ml-6 space-y-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-3">
                          What we did
                        </h4>
                        <ul className="space-y-2">
                          <li>• Mapped the long-cycle journey and the moments that matter (decision triggers, evaluation milestones, common objections).</li>
                          <li>• Built a library of educational, sales-optimized assets targeted at prospects considering software development partners. Each asset was written to answer the prospect's real questions, address objections, and subtly guide the reader toward Yamasoft as the logical choice.</li>
                          <li>• Researched the top FAQs and objections and turned them into high-value content pieces (short guides, one-pagers, and email assets) that both educate and convert — copywritten to increase affinity and reduce friction.</li>
                          <li>• Created a follow-up framework and reusable templates: high-value follow-ups to re-engage interested prospects, and disqualification follow-ups to stop wasting time on non-buyers. Templates were matched to stage and signal so outreach stayed relevant.</li>
                          <li>• Automated the heavy lifting with AI and tooling: score leads, trigger the right asset, and run cadence logic while preserving manual, personalized outreach for priority deals and critical moments.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-3">
                          Outcome (process impact)
                        </h4>
                        <ul className="space-y-2">
                          <li>• Reps spent far less time on tedious tracking and manual research.</li>
                          <li>• Prospects received useful, timed content that built trust rather than annoyance.</li>
                          <li>• Yamasoft maintained top-of-mind presence across long decision cycles and increased conversion efficiency by turning noisy pipeline into a managed, high-quality funnel.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="bg-gradient-card rounded-3xl p-8 border border-accent/20 shadow-accent">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    5. Outreach optimization & channel strategy
                  </h3>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      Yamasoft had tried many outreach strategies with poor results. GTM Revenue stepped in and fixed the root causes: we overhauled their messaging, online presence, and positioning, and refocused targeting on the highest-converting market segment. We used their data plus real-time feedback from sales conversations to continuously tighten targeting — and combined with the other changes, every outreach attempt started producing higher reply and conversion rates.
                    </p>
                    <p>
                      Good outreach isn't spray-and-pray. Many agencies chase volume; we treat outreach as the outcome of strategy. <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">The improvements above (positioning, messaging, targeting, assets, and automation) are the primary drivers of predictable pipeline growth.</span>
                    </p>
                    <p>
                      We didn't force a single playbook. Instead we presented multiple channel and cost options with expected results and ROI, then helped Yamasoft pick the best strategic path. We also selected and implemented the right tools and automations to improve efficiency and cut costs.
                    </p>
                    <p>
                      <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">If you work with GTM Revenue, we handle all of this end-to-end</span> — improving performance, lowering costs, and reducing your time involvement while keeping you informed on expected ROI.
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="bg-gradient-card rounded-3xl p-8 border border-accent/20 shadow-accent">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    6. AI research & lead qualification
                  </h3>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      Yamasoft was manually researching every lead to be relevant on first contact — a process that became a full-time, highly inefficient task. We implemented an AI-driven stack to automatically research, qualify, and score leads, then surface concise intel to reps.
                    </p>
                    
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3">
                        Results and impact:
                      </h4>
                      <ul className="space-y-2">
                        <li>• Cut event prep from 40+ hours to minutes.</li>
                        <li>• Saved hundreds of hours across large outreach campaigns.</li>
                        <li>• Delivered the same (or better) context the team previously spent ~30 minutes finding — faster, cheaper, and at scale.</li>
                        <li>• Standardized output (one-page intel packs) pushed into reps' workflows so sellers focus on selling, not research.</li>
                      </ul>
                    </div>
                    
                    <p>
                      There's no reason this work should be manual anymore — AI + tooling replaces slow research while improving quality and cost efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section id="book-a-call">
          <CalendarSection />
        </section>

        {/* Internal Strategies - Full Width */}
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
                      <div className="text-muted-foreground text-xs sm:text-sm">CRO and Co-Founder</div>
                    </div>
                  </div>
                </div>

                {/* Video */}
                <div className="lg:w-[56%]">
                  <LuxuryVideoPlayer 
                    youtubeId="0W-50QdAop8"
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

        {/* Related Case Studies */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                  See all case studies
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <a href="/case-study-1" className="group relative bg-gradient-to-br from-card to-card/50 rounded-3xl p-6 sm:p-8 shadow-glow border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 flex flex-col h-full">
                  {/* Luxury corner accent */}
                  <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-accent opacity-20 rounded-bl-3xl"></div>
                  
                  {/* Content area - grows to fill available space */}
                  <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:bg-gradient-mixed group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative z-10">
                      $2.8M+ in lifetime value generated over 17 months
                    </h3>
                    <div className="aspect-[25/10] bg-gradient-to-br from-primary/20 via-background to-accent/20 rounded-2xl flex items-center justify-center border-2 border-primary/10 group-hover:border-primary/30 transition-colors relative overflow-hidden">
                      <img 
                        src={lifetimeValue} 
                        alt="$2.8M+ in lifetime value generated over 17 months"
                        className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'block';
                        }}
                      />
                      <span className="text-foreground" style={{ display: 'none' }}>picture</span>
                    </div>
                  </div>
                  
                  {/* Button - always at bottom */}
                  <div className="relative p-[2px] bg-gradient-to-r from-primary to-accent rounded-2xl hover:shadow-glow transition-shadow duration-300 group-hover:shadow-glow mt-4 sm:mt-6">
                    <div className="w-full px-4 py-2 rounded-2xl font-semibold text-sm sm:text-base hover:scale-105 transition-transform duration-300 hover:bg-background border-0 bg-background text-white flex items-center justify-center">
                      Discover More →
                    </div>
                  </div>
                </a>

                <a href="/case-study-2" className="group relative bg-gradient-to-br from-card to-card/50 rounded-3xl p-6 sm:p-8 shadow-glow border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 flex flex-col h-full">
                  {/* Luxury corner accent */}
                  <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-accent opacity-20 rounded-bl-3xl"></div>
                  
                  {/* Content area - grows to fill available space */}
                  <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:bg-gradient-mixed group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative z-10">
                      19 enterprise sales opportunities and $1,1M in contract value from 1 campaign
                    </h3>
                    <div className="aspect-[25/10] bg-gradient-to-br from-primary/20 via-background to-accent/20 rounded-2xl flex items-center justify-center border-2 border-primary/10 group-hover:border-primary/30 transition-colors relative overflow-hidden">
                      <img 
                        src={enterpriseSalesOpportunities} 
                        alt="19 enterprise sales opportunities and $1,1M in contract value from 1 campaign"
                        className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'block';
                        }}
                      />
                      <span className="text-foreground" style={{ display: 'none' }}>picture</span>
                    </div>
                  </div>
                  
                  {/* Button - always at bottom */}
                  <div className="relative p-[2px] bg-gradient-to-r from-primary to-accent rounded-2xl hover:shadow-glow transition-shadow duration-300 group-hover:shadow-glow mt-4 sm:mt-6">
                    <div className="w-full px-4 py-2 rounded-2xl font-semibold text-sm sm:text-base hover:scale-105 transition-transform duration-300 hover:bg-background border-0 bg-background text-white flex items-center justify-center">
                      Discover More →
                    </div>
                  </div>
                </a>

                <a href="/case-study-3" className="group relative bg-gradient-to-br from-card to-card/50 rounded-3xl p-6 sm:p-8 shadow-glow border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 flex flex-col h-full">
                  {/* Luxury corner accent */}
                  <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-accent opacity-20 rounded-bl-3xl"></div>
                  
                  {/* Content area - grows to fill available space */}
                  <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6">
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
                      <span className="text-foreground" style={{ display: 'none' }}>picture</span>
                    </div>
                  </div>
                  
                  {/* Button - always at bottom */}
                  <div className="relative p-[2px] bg-gradient-to-r from-primary to-accent rounded-2xl hover:shadow-glow transition-shadow duration-300 group-hover:shadow-glow mt-4 sm:mt-6">
                    <div className="w-full px-4 py-2 rounded-2xl font-semibold text-sm sm:text-base hover:scale-105 transition-transform duration-300 hover:bg-background border-0 bg-background text-white flex items-center justify-center">
                      Discover More →
                    </div>
                  </div>
                </a>

                <a href="/case-study-4" className="group relative bg-gradient-to-br from-card to-card/50 rounded-3xl p-6 sm:p-8 shadow-glow border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 flex flex-col h-full">
                  {/* Luxury corner accent */}
                  <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-accent opacity-20 rounded-bl-3xl"></div>
                  
                  {/* Content area - grows to fill available space */}
                  <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6">
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
                      <span className="text-foreground" style={{ display: 'none' }}>picture</span>
                    </div>
                  </div>
                  
                  {/* Button - always at bottom */}
                  <div className="relative p-[2px] bg-gradient-to-r from-primary to-accent rounded-2xl hover:shadow-glow transition-shadow duration-300 group-hover:shadow-glow mt-4 sm:mt-6">
                    <div className="w-full px-4 py-2 rounded-2xl font-semibold text-sm sm:text-base hover:scale-105 transition-transform duration-300 hover:bg-background border-0 bg-background text-white flex items-center justify-center">
                      Discover More →
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="relative p-[3px] bg-gradient-to-r from-primary to-accent rounded-2xl hover:shadow-glow transition-shadow duration-300 inline-block">
                <a
                  href="#book-a-call"
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl border-0 bg-background text-white hover:scale-105 transition-transform duration-300 hover:bg-background"
                >
                  Book a Call →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudy6;
