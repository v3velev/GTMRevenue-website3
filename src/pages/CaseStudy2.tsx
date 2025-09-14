import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import LuxuryVideoPlayer from "../components/LuxuryVideoPlayer";
import LuxuryCard from "../components/LuxuryCard";
import CalendarSection from "../components/CalendarSection";
import FAQSection from "../components/FAQSection";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

// Import images
import caseStudy2Hero from "../assets/case-studies/case-study-2-hero.jpg";
import oldWayCampaign from "../assets/case-studies/old-way-campaign.jpg";
import glassdoorAnalysis from "../assets/case-studies/glassdoor-analysis.jpg";
import caseStudy2MessageExample from "../assets/case-studies/case-study-2-message-example.jpg";
import caseStudy2ResultsDashboard from "../assets/case-studies/case-study-2-results-dashboard.jpg";
import caseStudy2ChatConversation from "../assets/case-studies/case-study-2-chat-conversation.jpg";
import caseStudy2Additional from "../assets/case-studies/case-study-2-additional.jpg";
import vesselinMalinovsky from "../assets/case-studies/vesselin-malinovsky.jpg";
import lifetimeValue from "../assets/case-studies/lifetime-value.jpg";
import linkedinMeetings from "../assets/case-studies/linkedin-meetings.jpg";
import aiAgentEcosystem from "../assets/case-studies/ai-agent-ecosystem.jpg";
import aiMeetings from "../assets/case-studies/ai-meetings.jpg";

const CaseStudy2 = () => {
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
                    <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">19 enterprise sales</span> opportunities and <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">$1,1M in contract value</span> from 1 campaign
                  </h1>
                  
                  <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                    Read this short case study to see how <span className="font-semibold text-primary">GTM Revenue</span> rebuilt this client's entire GTM playbook and how one of our very creative campaigns got them over $1.1M in contract value.
                  </p>
                </div>
              </div>
              
              {/* Right Side - Picture Holder */}
              <div className="flex justify-center lg:justify-end">
                <div className="aspect-[4/3] w-full max-w-2xl bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl border border-accent/20 shadow-accent flex items-center justify-center overflow-hidden">
                  <img
                    src={caseStudy2Hero}
                    alt="Case Study 2 Hero Image"
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
                Read the story of one of our clients and how we rebuilt their entire outbound sales playbook.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                And in the process, we also completely changed the way they think about acquiring new customers.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                They are a SaaS company helping large organizations with their field operations.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Their ideal customer is mid-market to enterprise companies with large field teams, in industries like telecom, utilities, managed services, manufacturing and construction.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When we started working together, they were trying to build an outbound sales team to bring in more predictable pipeline.
              </p>
              
              <div className="ml-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Baseline when we started:
                </h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shadow-glow"></div>
                    <span>4 sales reps who were all missing their quota.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shadow-glow"></div>
                    <span>Tested 3 different lead generation agencies, but got disappointed.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shadow-glow"></div>
                    <span>Internal confusion and lack of experience on how to use modern tools and AI in their sales process and outreach.</span>
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
                  The main reason their four salespeople missed quota and couldn't build a quality pipeline was that <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">they were disregarding their prospects</span>.
                </p>
                
                <p>
                  Each SDR received ~25 ZoomInfo leads per week, then manually researched every account and personalized outreach.
                </p>
                
                <p>
                  Many companies follow a nearly identical process — but <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">in today's market that approach actively sets teams up to fail</span>.
                </p>
                
                <p>
                  Beyond lacking modern tools and tactics, the client treated the market as one big group defined by broad criteria (headcount, location, industry). On the surface that segmentation isn't wrong, but to actually move the needle they needed to rethink their GTM and target specific company situations instead.
                </p>
              </div>

              {/* OLD WAY vs NEW WAY */}
              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                    OLD WAY:
                  </h3>
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border border-primary/20 p-4">
                    <img
                      src={oldWayCampaign}
                      alt="OLD WAY Campaign Process"
                      className="max-w-full max-h-96 object-contain rounded-2xl"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="flex items-center justify-center" style={{ display: 'none' }}>
                      <span className="text-xl font-medium text-muted-foreground">Picture Placeholder</span>
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  For optimal results, each industry, job title, and company situation requires its own tailored strategy.
                </p>
                
                <p>
                  If you know you should do this but don't know how, the quickest path to impact is partnering with an expert firm like GTM Revenue.
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
                  title="See how we transformed their GTM and generated $1,1M from 1 campaign" 
                  youtubeId="IeKGdPLPEsI"
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
                  We changed their thinking from "Hey, let's target people by industry and company size" …to "Let's look at our customers and find other companies that are in the same position our customers were when they converted."
                </p>
                
                <p>
                  We moved from broad-fit targeting (industry, headcount, location) to <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">targeting specific company situations</span>.
                </p>
                
                <p>
                  We needed a way to find companies that have problems with their field technicians' operations and management. We tested several signals:
                </p>
              </div>

              <ul className="space-y-3 text-lg text-muted-foreground mb-8 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                  <span>Monitoring job postings and analyzing company initiatives.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                  <span>Reading employee reviews to surface reported problems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                  <span>Scraping customer feedback for operational pain signals.</span>
                </li>
              </ul>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  The best-performing signal came from <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">Glassdoor.com</span> — the company-review site where employees rate current and past employers. We searched reviews from the past 9 months for keywords that indicate problems our product solves: working overtime / poor work–life balance, inadequate communication, and inability to do work properly due to broken processes.
                </p>
              </div>

              {/* Glassdoor Data Image Placeholder */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-8 flex items-center justify-center border border-primary/20 p-4">
                <img
                  src={glassdoorAnalysis}
                  alt="Glassdoor Data Analysis"
                  className="max-w-full max-h-96 object-contain rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="flex items-center justify-center" style={{ display: 'none' }}>
                  <span className="text-xl font-medium text-muted-foreground">Glassdoor Data Analysis Image</span>
                </div>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  We pulled reviews for many companies on our list and gained direct context about internal issues — the exact cues we needed to prioritize outreach and tailor messaging.
                </p>
                
                <p>
                  Each message we sent was completely different and made relevant according to:
                </p>
              </div>

              <ul className="space-y-3 text-lg text-muted-foreground mb-8 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                  <span>Job title we speak to</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                  <span>Company data & research</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                  <span>Glassdoor reviews</span>
                </li>
              </ul>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  Depending on the company and the issues we identified, we determined the best job titles to contact. That decision was driven by which KPIs were affected by the mentioned issues.
                </p>
                
                <p>
                  Then the message was further personalized to the company, and we included a case study that was dynamically pulled to match the company we were reaching out to.
                </p>
                
                <p>
                  Below I will share one such message we generated.
                </p>
              </div>

              {/* Message Example Section */}
              <div className="bg-gradient-card rounded-3xl p-8 border border-accent/20 shadow-accent mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                  Message example:
                </h3>
                
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-6 flex items-center justify-center border border-primary/20 p-4">
                  <img
                    src={caseStudy2MessageExample}
                    alt="Message Example"
                    className="max-w-full max-h-96 object-contain rounded-2xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="flex items-center justify-center" style={{ display: 'none' }}>
                    <span className="text-xl font-medium text-muted-foreground">Message Example Image</span>
                  </div>
                </div>

                <div className="space-y-4 text-lg text-muted-foreground">
                  <p><strong>Here's how our messaging looked in the end:</strong></p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>First line: personalized to the person.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>Second line: changes depending on available reviews and the problems mentioned (in this case — decreased technician productivity).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>Next: we swap in the case study most similar to the target company.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                      <span>Targeting principle: we link the negatively affected metric to the right person in each company — targeting by relevance, not by job title alone.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-card/50 to-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12 text-center">
                Results
              </h2>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <div className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                    1580
                  </div>
                  <div className="text-sm text-muted-foreground">leads</div>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <div className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                    176
                  </div>
                  <div className="text-sm text-muted-foreground">responses</div>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <div className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                    19
                  </div>
                  <div className="text-sm text-muted-foreground">qualified, sales opportunities</div>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <div className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                    4
                  </div>
                  <div className="text-sm text-muted-foreground">closed deals</div>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <div className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                    $1,1M
                  </div>
                  <div className="text-sm text-muted-foreground">in contract value</div>
                </div>
              </div>

              {/* Results Dashboard Image Placeholder */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-8 flex items-center justify-center border border-primary/20 p-4">
                <img
                  src={caseStudy2ResultsDashboard}
                  alt="Results Dashboard"
                  className="max-w-full max-h-96 object-contain rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="flex items-center justify-center" style={{ display: 'none' }}>
                  <span className="text-xl font-medium text-muted-foreground">Results Dashboard Image</span>
                </div>
              </div>

              {/* Chat Conversation Image Placeholder */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-8 flex items-center justify-center border border-primary/20 p-4">
                <img
                  src={caseStudy2ChatConversation}
                  alt="Chat Conversation"
                  className="max-w-full max-h-96 object-contain rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="flex items-center justify-center" style={{ display: 'none' }}>
                  <span className="text-xl font-medium text-muted-foreground">Chat Conversation Image</span>
                </div>
              </div>

              {/* Additional Image Placeholder */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-8 flex items-center justify-center border border-primary/20 p-4">
                <img
                  src={caseStudy2Additional}
                  alt="Additional Results"
                  className="max-w-full max-h-96 object-contain rounded-2xl"
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

                {/* Case Study 2: LinkedIn content + AI outreach */}
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

                {/* Case Study 3: AI Agent Ecosystem */}
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

export default CaseStudy2;
