import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import LuxuryVideoPlayer from "../components/LuxuryVideoPlayer";
import LuxuryCard from "../components/LuxuryCard";
import CalendarSection from "../components/CalendarSection";
import FAQSection from "../components/FAQSection";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

// Import images
import vesselinMalinovsky from "../assets/case-studies/vesselin-malinovsky.jpg";
import lifetimeValue from "../assets/case-studies/lifetime-value.jpg";
import enterpriseSalesOpportunities from "../assets/case-studies/enterprise-sales-opportunities.jpg";
import linkedinMeetings from "../assets/case-studies/linkedin-meetings.jpg";
import aiAgentEcosystem from "../assets/case-studies/ai-agent-ecosystem.jpg";

const CaseStudy5 = () => {
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
                  How GTM Revenue generates <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">110+ meetings per month</span> with just 4 hours of monthly work — and stands out in a crowded market.
                </h1>
                
                <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                  See how we created GTM Revenue's proprietary GTM playbook, build immediate trust with cold prospects at scale, and position ourselves distinctly in a crowded market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center">
                <div className="max-w-7xl mx-auto">
                  <LuxuryVideoPlayer 
                    youtubeId="ecDrbaj0x5Y"
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

              {/* Customer Story - Right after heading */}
              <div className="mb-16">
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

export default CaseStudy5;
