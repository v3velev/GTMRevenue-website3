import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import LuxuryVideoPlayer from "../components/LuxuryVideoPlayer";
import LuxuryCard from "../components/LuxuryCard";
import CalendarSection from "../components/CalendarSection";
import FAQSection from "../components/FAQSection";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

// Import images
import caseStudy1Hero from "../assets/case-studies/case-study-1-hero.jpg";
import beforeCampaign from "../assets/case-studies/before-campaign.jpg";
import aiTargeting from "../assets/case-studies/ai-targeting.jpg";
import resultsDashboard from "../assets/case-studies/results-dashboard.jpg";
import vesselinMalinovsky from "../assets/case-studies/vesselin-malinovsky.jpg";
import enterpriseSalesOpportunities from "../assets/case-studies/enterprise-sales-opportunities.jpg";
import linkedinMeetings from "../assets/case-studies/linkedin-meetings.jpg";
import aiAgentEcosystem from "../assets/case-studies/ai-agent-ecosystem.jpg";
import aiMeetings from "../assets/case-studies/ai-meetings.jpg";

const CaseStudy1 = () => {
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
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                      $2.8M+ in lifetime value generated
                    </span>
                    <br />
                    <span className="text-white">
                      over 17 months
                    </span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                    Read this short case study to see how <span className="font-semibold text-primary">GTM Revenue</span> outperformed a team of 6 salespeople and 3x their go-to-market performance with better market intelligence & data.
                  </p>
                </div>
              </div>
              
              {/* Right Side - Picture Holder */}
              <div className="flex justify-center lg:justify-end">
                <div className="aspect-[4/3] w-full max-w-2xl bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl border border-accent/20 shadow-accent flex items-center justify-center overflow-hidden">
                  <img 
                    src={caseStudy1Hero} 
                    alt="Case Study 1 Hero Image"
                    className="w-full h-full object-cover rounded-3xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="flex items-center justify-center" style={{ display: 'none' }}>
                    <span className="text-xl font-medium text-muted-foreground">Picture Holder</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Client Details - Centered below */}
            <div className="flex justify-center mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <h3 className="text-lg font-semibold text-white mb-2">Industry:</h3>
                  <p className="text-white">B2B SaaS</p>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <h3 className="text-lg font-semibold text-white mb-2">Headcount:</h3>
                  <p className="text-white">100-200</p>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <h3 className="text-lg font-semibold text-white mb-2">Location:</h3>
                  <p className="text-white">California, USA</p>
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
                This client is a B2B SaaS with a product that addresses common demand-generation and marketing operations issues for mid-market and enterprise companies.
              </p>
              
              <div className="ml-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Baseline when we started:
                </h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shadow-glow"></div>
                    <span>Sales team: 6 reps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shadow-glow"></div>
                    <span>Meeting generated from sales team: ~47 meetings / month total</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shadow-glow"></div>
                    <span>Attributed closed deals: 3–4 deals per month (after a full sales cycle)</span>
                  </li>
                </ul>
              </div>
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
                  When we began, their six-person sales team was booking about <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">47 meetings per month and closing only 3–4 deals after a full sales cycle</span>.
                </p>
                
                <p>
                  Because traditional filters like company size and industry weren't precise enough to identify their ideal customers, <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">40% of the leads in their CRM were unqualified</span> — despite appearing qualified on the surface.
                </p>
                
                <p>
                  This is a common blind spot: companies underestimate how much unqualified leads reduce revenue.
                </p>
                
                <p>
                  Targeting and only talking to better-fit prospects who actually need your product - can significantly increase sales without changing anything else in your process.
                </p>
                
                <p>
                  The way to do this reliably consists of using AI and data data from 10+ sources to paint a complete picture of each prospect and make sure they are a fit before even considering reaching out to them.
                </p>
                
                <p>
                  Teams often understand the idea but lack the know-how, which is why working with an experienced partner like GTM Revenue is the fastest path to results.
                </p>
                
                <p>
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">For this client, the problem was invisible until we dug into their data</span>: we diagnosed a hidden issue and fixed it in a way they hadn't considered possible.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Video Section - Separate container for wide video */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="max-w-7xl mx-auto">
                <LuxuryVideoPlayer 
                  title="See the strategies responsible for generating $2.8M+ in LTV" 
                  youtubeId="v-WnS31pSFI"
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
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
                <p>
                  We don't force the same playbook on every client — <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">that's a core difference between GTM Revenue and a typical lead-generation agency</span>. For each engagement we deeply analyze the client's data and current processes, diagnose the distinct bottlenecks, and determine the highest-impact strategies tailored to their situation. We lead with a rigorous understanding of the client, their market, and their customers, then build conversion-first tactics that fit that context.
                </p>
                
                <p>
                  With this client we uncovered a clear messaging leak. Rather than jumping straight to new copy (the common, surface-level fix), <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">we identified the true root cause</span>: the team couldn't write relevant messaging because they lacked real context about prospects' situations. The information you have about a potential customer changes how you position and pitch; without it you're just another irrelevant sender.
                </p>
                
                <p>
                  So our first move was to qualify every prospect at intake to understand their situation, pain points, and intent. Those prospect insights were then used to drive messaging, score and prioritize leads, and automate routing - <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">so reps engage the right buyers with the right message, at the right time</span>.
                </p>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
                <p>
                  We built a custom AI to evaluate every company, identify which ones truly matched the client's ideal-customer profile, and enrich each lead with deeper, actionable context. We analyzed companies using signals such as:
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                    <span>Marketing team structure and size</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                    <span>Marketing tech stack</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                    <span>Primary marketing channels and focus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                    <span>Finance team size</span>
                  </li>
                </ul>
                
                <p>
                  We used all of that new data about each company to target better leads and write more relevant messaging that <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">3x their reply rate from 1.5% to 4.7%</span>
                </p>
              </div>

              {/* Campaign Comparison */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                  Their campaigns before:
                </h3>
                <div className="mb-8 -mx-4 sm:-mx-6 lg:-mx-8">
                  <img 
                    src={beforeCampaign} 
                    alt="Their campaigns before"
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="flex items-center justify-center" style={{ display: 'none' }}>
                    <span className="text-xl font-medium text-muted-foreground">Image Placeholder</span>
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                  Campaign with GTM Revenue:
                </h3>
                <ul className="space-y-3 text-lg text-muted-foreground mb-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                    <span>new messaging written by our experts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                    <span>better targeting empowered by our custom AI</span>
                  </li>
                </ul>
                <div className="-mx-4 sm:-mx-6 lg:-mx-8">
                  <img 
                    src={aiTargeting} 
                    alt="Better targeting empowered by our custom AI"
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="flex items-center justify-center" style={{ display: 'none' }}>
                    <span className="text-xl font-medium text-muted-foreground">Image Placeholder</span>
                  </div>
                </div>
              </div>

              {/* Detailed Strategies */}
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                  We didn't just fix their already existing campaigns, here's some of the additional strategies we implemented
                </h2>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Social Listening</h3>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>Picked high-activity LinkedIn accounts with audiences that match their ICP — (targets for prioritized outreach).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>Monitor key accounts and trigger alerts for all relevant social activity — (posts, comments, shares, mentions).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>Keyword engagement — build lists of people who engage with target keywords in posts — (warm micro-segments for context-led outreach).</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Intent Data</h3>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>Third-party intent feeds — (topic-level buying signals to raise outbound priority).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>Website visitors — (map visitors to accounts/contacts and surface warm targets).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>Custom intent signals (hiring activity, executive changes, company news) — (proprietary cues we use to time outreach).</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Custom Lists</h3>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>LinkedIn followers of competitors — (people already interested in similar solutions).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>Industry-event attendees — (pre/post-event outreach and high-intent segments).</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mt-8 leading-relaxed">
                We aggregate and refresh all these lists, push the signals into our enrichment/qualification layer, and run the full outbound strategy (trigger → personalize → sequence → route) so <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">reps only engage prioritized, context-rich prospects</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-card/50 to-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12 text-center">
                Results over 17 months
              </h2>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <div className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                    814
                  </div>
                  <div className="text-sm text-muted-foreground">Meetings Booked</div>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <div className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                    100+
                  </div>
                  <div className="text-sm text-muted-foreground">closed deals</div>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <div className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                    $160K
                  </div>
                  <div className="text-sm text-muted-foreground">LTV per month</div>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="mb-12 -mx-4 sm:-mx-6 lg:-mx-8">
                <img 
                  src={resultsDashboard} 
                  alt="Results Dashboard"
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="flex items-center justify-center" style={{ display: 'none' }}>
                  <span className="text-xl font-medium text-muted-foreground">Image Placeholder</span>
                </div>
              </div>

              <div className="text-left mb-8 -mt-4">
                <p className="text-lg text-muted-foreground">
                  Jan 1.1.2024 - Jun 10th 2025 (still ongoing)
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                  Avg. results across 17 months of working together:
                </h3>
                
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1 shadow-glow"></div>
                    <span><span className="font-semibold text-foreground">~48 meetings per month</span> (sales team of 6 was generating ~47)</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1 shadow-glow"></div>
                    <span><span className="font-semibold text-foreground">~6-10 closed deals after a full sales cycle</span> (previously 3-4 for the same number of meetings)</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1 shadow-accent"></div>
                    <span>For context: <span className="font-semibold text-foreground">LTV (lifetime value of a customer) ~$15,000-$25,000</span></span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1 shadow-accent"></div>
                    <span><span className="font-semibold text-foreground">8 Customers x $20,000 LTV = $160,000 LTV per month</span></span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1 shadow-accent"></div>
                    <span><span className="font-bold text-foreground">$2,8M+ lifetime value generated by GTM Revenue during our collaboration</span></span>
                  </div>
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
                        alt="19 enterprise sales opportunities"
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
                        alt="Booking 35+ qualified meetings"
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
                        alt="AI Agent Ecosystem"
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
                        src={aiMeetings} 
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

export default CaseStudy1;
