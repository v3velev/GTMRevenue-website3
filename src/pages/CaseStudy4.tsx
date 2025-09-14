import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import LuxuryVideoPlayer from "../components/LuxuryVideoPlayer";
import LuxuryCard from "../components/LuxuryCard";
import CalendarSection from "../components/CalendarSection";
import FAQSection from "../components/FAQSection";
import { Button } from "../components/ui/button";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CaseStudy4 = () => {
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side - Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white max-w-4xl">
                    <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">AI Agent Ecosystem</span> - 60-90 Sales Opportunities per month
                  </h1>
                  
                  <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                    Read this case study to see how we built an AI-agent ecosystem that generates 60–90 sales opportunities and outperforms the client's prior efforts by 10×.
                  </p>
                </div>
              </div>
              
              {/* Right Side - Picture Holder */}
              <div className="flex justify-center lg:justify-end">
                <div className="aspect-[4/3] w-full max-w-2xl bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl border border-accent/20 shadow-accent flex items-center justify-center overflow-hidden">
                  <img
                    src="/src/assets/case-studies/case-study-4-hero.jpg"
                    alt="Case Study 4 Hero Image"
                    className="w-full h-full object-cover rounded-3xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="flex items-center justify-center" style={{ display: 'none' }}>
                    <span className="text-xl font-medium text-muted-foreground">Picture</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Client Details - Centered below */}
            <div className="flex justify-center mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <h3 className="text-lg font-semibold text-white mb-2">Industry:</h3>
                  <p className="text-white">Marketing Agency</p>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <h3 className="text-lg font-semibold text-white mb-2">Headcount:</h3>
                  <p className="text-white">50-100</p>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <h3 className="text-lg font-semibold text-white mb-2">Location:</h3>
                  <p className="text-white">Florida, USA</p>
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
                Our client is a marketing agency serving B2C SaaS companies — they provide paid ads, SEO, and content strategy.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                They win most clients through referrals but wanted to scale and needed a way to reliably generate new sales pipeline.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                They had tried inbound (lead magnets and content) and ran outbound through three external agencies — with disappointing results.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When we first spoke, they told us every approach had fallen short of their expectations.
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
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  We don't force the same playbook on every client — <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">that's a core difference between GTM Revenue and a typical lead-generation agency</span>. For each engagement we deeply analyze the client's data and current processes, diagnose the distinct bottlenecks, and determine the highest-impact strategies tailored to their situation.
                </p>
                
                <p>
                  We lead with a deep understanding of the client, their market, and their customers, then build strategies that fit that context.
                </p>
                
                <p>
                  Here's what the problems we found out after analyzing the different processes of our client:
                </p>
              </div>

              <div className="space-y-8">
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Inbound</h3>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>Leads from ads and lead magnets were routed straight to sales reps with only basic company info.</span>
                    </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                        <span><span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">Reps entered conversations blind</span> — no context on role, pain, or company research — so every call became an uphill battle.</span>
                      </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>Conversion rates were low and CAC was too high to be profitable because reps spent time on unqualified contacts and long, unproductive conversations.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>Many contacts weren't decision-makers — they were whoever filled a form, not the buyer — so follow-ups wasted rep time and pipeline capacity.</span>
                    </li>
                  </ul>
                </div>

                <div className="ml-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Outbound</h3>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>Lacking data-driven insights, outbound sequences were generic and repetitive.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>Messages missed the recipient's situation and failed to open relevant conversations.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>As a result, both inbound and outbound workflows were inefficient and had a negative ROI.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>Low reply/meeting rates, poor pipeline quality, and rising acquisition costs.</span>
                    </li>
                  </ul>
                </div>

                <div className="ml-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Net effect</h3>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>Sales time was eaten by manual research and chasing low-fit leads.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>Marketing ROI collapsed: spend drove volume but not revenue.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>The business couldn't scale GTM activity profitably until lead qualification and context were fixed.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Video Section - Separate container for wide video */}
        <section id="video-breakdown" className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="max-w-7xl mx-auto">
                <LuxuryVideoPlayer 
                  title="See how built an entire AI agent ecosystem" 
                  youtubeId="raNNESvuE2I"
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
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  After our team analysed all of their processes and we conducted interviews with their sales reps and top clients, we built a set of different systems that all work together to solve all major bottlenecks.
                </p>
                
                <p>
                  The goal wasn't to just get better data.
                </p>
              </div>

              <div className="bg-gradient-card rounded-3xl p-8 border border-accent/20 shadow-accent mb-8 mx-4">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-4 text-xl font-semibold text-foreground w-full">
                    <span>Data Points</span>
                    <span className="text-accent">→</span>
                    <span>Story</span>
                    <span className="text-accent">→</span>
                    <span>Company Insights</span>
                    <span className="text-accent">→</span>
                    <span>Powerful Messaging</span>
                    <span className="text-accent">→</span>
                    <span>Prospects That Trust You and Want to Buy</span>
                  </div>
                </div>
              </div>

              {/* GTM Revenue Process */}
              <div className="space-y-16">
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
                  GTM Revenue Process
                </h3>

                {/* Process Flow */}
                <div className="relative">
                  {/* Connection Lines */}
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
                  
                  <div className="space-y-12">
                    {/* Step 1 */}
                    <div className="flex items-start gap-8">
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-glow">
                          <span className="text-2xl font-bold text-white">1</span>
                        </div>
                      </div>
                      <div className="flex-1 bg-gradient-card rounded-2xl p-8 border border-primary/20 shadow-card">
                        <h4 className="text-2xl font-bold text-foreground mb-4">
                          Insane value custom lead magnet generated by AI agents
                        </h4>
                        <div className="space-y-2 text-lg text-muted-foreground">
                          <p>• Prospect inputs their site URL → receives a full AI audit of social & SEO</p>
                          <p>• Outperformed all previous tactics by 10x in opt-ins due to real value</p>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start gap-8">
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-glow">
                          <span className="text-2xl font-bold text-white">2</span>
                        </div>
                      </div>
                      <div className="flex-1 bg-gradient-card rounded-2xl p-8 border border-accent/20 shadow-card">
                        <h4 className="text-2xl font-bold text-foreground mb-4">
                          Determine the prospect's exact issues without a call
                        </h4>
                        <div className="space-y-2 text-lg text-muted-foreground">
                          <p>• Aggregate all data from the AI audit agent</p>
                          <p>• Qualify on 7+ signals: team size, active Meta Ads, spend, hiring, funding, and more</p>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start gap-8">
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-glow">
                          <span className="text-2xl font-bold text-white">3</span>
                        </div>
                      </div>
                      <div className="flex-1 bg-gradient-card rounded-2xl p-8 border border-primary/20 shadow-card">
                        <h4 className="text-2xl font-bold text-foreground mb-4">
                          Outreach
                        </h4>
                        <div className="space-y-2 text-lg text-muted-foreground">
                          <p>• Inbound sequences tailored to each company's pain points</p>
                          <p>• LinkedIn Connection Requests: 800/month per account</p>
                          <p>• LinkedIn InMails: 800/month per account</p>
                          <p>• Cold email to qualified companies: 500/day (15,000/month)</p>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-start gap-8">
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-glow">
                          <span className="text-2xl font-bold text-white">4</span>
                        </div>
                      </div>
                      <div className="flex-1 bg-gradient-card rounded-2xl p-8 border border-accent/20 shadow-card">
                        <h4 className="text-2xl font-bold text-foreground mb-4">
                          Lead scoring & prioritisation
                        </h4>
                        <div className="space-y-2 text-lg text-muted-foreground">
                          <p>• AI agents inside the CRM score every lead in real time</p>
                          <p>• Leads with the highest score get prioritised and sales reps get notified within 3 minutes along with deep data and research about each lead.</p>
                        </div>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="flex items-start gap-8">
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-glow">
                          <span className="text-2xl font-bold text-white">5</span>
                        </div>
                      </div>
                      <div className="flex-1 bg-gradient-card rounded-2xl p-8 border border-primary/20 shadow-card">
                        <h4 className="text-2xl font-bold text-foreground mb-4">
                          Lead nurturing system
                        </h4>
                        <div className="space-y-2 text-lg text-muted-foreground">
                          <p>• All non-converted leads enter a weekly, personalized value stream</p>
                          <p>• Recover up to 15% of otherwise lost leads</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button outside the process flow */}
                <div className="text-center mt-12">
                  <a href="#video-breakdown" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent text-accent font-semibold rounded-2xl hover:scale-105 transition-transform duration-300 hover:bg-accent hover:text-white">
                    Want to see the full explanation? →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-card/50 to-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                Results:
              </h2>
              
              {/* Results Boxes - Right under title */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <h3 className="text-lg font-semibold text-white mb-2">Email Outreach Meetings</h3>
                  <p className="text-2xl font-bold text-white">71</p>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <h3 className="text-lg font-semibold text-white mb-2">LinkedIn Outreach Meetings</h3>
                  <p className="text-2xl font-bold text-white">166</p>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <h3 className="text-lg font-semibold text-white mb-2">Total Meetings</h3>
                  <p className="text-2xl font-bold text-white">237</p>
                </div>
              </div>
              
              <div className="space-y-4 text-xl font-bold text-foreground leading-relaxed mb-8">
                <p>
                  Results over the last 90 days
                </p>
                <p>
                  (mainly outbound, inbound results are separate)
                </p>
              </div>

              {/* Results Table Image Placeholder */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-8 flex items-center justify-center border border-primary/20 overflow-hidden">
                <img
                  src="/src/assets/case-studies/case-study-4-results-table.jpg"
                  alt="Results Table Screenshot"
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="flex items-center justify-center" style={{ display: 'none' }}>
                  <span className="text-xl font-medium text-muted-foreground">Results Table Screenshot</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                Key takeaways
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Use an AI-generated, high-value lead magnet to open doors.
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Give prospects a tangible deliverable (a full AI audit tied to their site or stack). That audit proved far more effective than generic lead magnets — it drove dramatically higher opt-ins because it delivered immediate, useful insight rather than vague content.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Diagnose prospects' problems before you talk to them.
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Aggregate AI audit outputs and other signals so you can state a concise problem diagnosis without a discovery call. Qualifying on multiple signals (team size, active paid channels, spend, hiring, funding, etc.) lets reps open conversations with authority instead of guessing.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Score and route in real time so reps move fast.
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    AI agents scored every lead inside the CRM and pushed top leads to reps within minutes with deep context. That speed + context turned signals into meetings — shortening time-to-first-touch and improving show and conversion rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Story */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
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
                          src="/src/assets/case-studies/vesselin-malinovsky.jpg" 
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
          </div>
        </section>

        {/* Calendar Section */}
        <section id="book-a-call">
          <CalendarSection />
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
                {/* Case Study 1: $2.8M+ in lifetime value */}
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
                        src="/src/assets/case-studies/lifetime-value.jpg" 
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

                {/* Case Study 2: 19 enterprise sales opportunities */}
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
                        src="/src/assets/case-studies/enterprise-sales-opportunities.jpg" 
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

                {/* Case Study 3: LinkedIn content + AI outreach */}
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
                        src="/src/assets/case-studies/linkedin-meetings.jpg" 
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

                {/* Case Study 4: GTM Revenue internal AI Agents */}
                <a href="/case-study-5" className="group relative bg-gradient-to-br from-card to-card/50 rounded-3xl p-6 sm:p-8 shadow-glow border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 flex flex-col h-full">
                  {/* Luxury corner accent */}
                  <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-accent opacity-20 rounded-bl-3xl"></div>
                  
                  {/* Content area - grows to fill available space */}
                  <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:bg-gradient-mixed group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative z-10">
                      How GTM Revenue gets 110+ meetings with 4 hours of work per month
                    </h3>
                    <div className="aspect-[25/10] bg-gradient-to-br from-primary/20 via-background to-accent/20 rounded-2xl flex items-center justify-center border-2 border-primary/10 group-hover:border-primary/30 transition-colors relative overflow-hidden">
                      <img 
                        src="/src/assets/case-studies/ai-meetings.jpg" 
                        alt="How GTM Revenue gets 110+ meetings with 4 hours of work per month"
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

        {/* FAQ Section */}
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudy4;
