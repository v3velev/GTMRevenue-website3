import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import LuxuryVideoPlayer from "../components/LuxuryVideoPlayer";
import LuxuryCard from "../components/LuxuryCard";
import CalendarSection from "../components/CalendarSection";
import FAQSection from "../components/FAQSection";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const CaseStudy3 = () => {
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
                    Booking <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">35+ qualified meetings</span> per month with LinkedIn content + AI multi-channel outreach
                  </h1>
                  
                  <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                    Read this short case study to learn how we attract hyper-qualified prospects who buy faster and spend more.
                  </p>
                </div>
              </div>
              
              {/* Right Side - Picture Holder */}
              <div className="flex justify-center lg:justify-end">
                <div className="aspect-[4/3] w-full max-w-2xl bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl border border-accent/20 shadow-accent flex items-center justify-center overflow-hidden">
                  <img
                    src="/src/assets/case-studies/case-study-3-hero.jpg"
                    alt="Case Study 3 Hero Image"
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
                  <p className="text-white">B2B IT Services</p>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-2xl border border-accent/20 shadow-accent">
                  <h3 className="text-lg font-semibold text-white mb-2">Headcount:</h3>
                  <p className="text-white">50-100</p>
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
                We developed this playbook for a B2B IT Services company, but also use it for many of our other clients.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We've worked with close to 100 different companies and this is one of our favourites.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                People argue if you should post on LinkedIn or if you should do outreach.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                In this case study you will see how we combine both of them and <span className="bg-accent/20 text-accent px-2 py-1 rounded font-bold">outperform tradition outreach by 3-5x</span>.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                (This work especially well if your audience/ICP is on LinkedIn)
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
                  Our client was struggling to make outbound work because their industry is highly saturated, and basic outbound tactics everyone else uses weren't producing results.
                </p>
                
                <p>
                  The outbound leads they did get weren't high quality, and close rates were significantly lower than other channels.
                </p>
                
                <p>
                  They had tried multiple lead-gen agencies and internal teams, but nothing worked — even when they secured meetings, those meetings didn't convert to sales.
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
                  title="See our LinkedIn content + AI outreach playbook" 
                  youtubeId="oyGWcZgxQVQ"
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
                  This playbook treats LinkedIn as the primary source of high-intent prospects, then targets those prospects across channels with highly relevant messaging.
                </p>
                
                <p>
                  If you already publish content on LinkedIn, you'll see faster results.
                </p>
                
                <p>
                  If you don't, you can target a top industry content creator who targets your ICP and capture everyone who engages with their posts.
                </p>
              </div>

              <div className="bg-gradient-card rounded-3xl p-8 border border-accent/20 shadow-accent mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-8">
                  How it works
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      1. Collect engagement signals — build lists of people who:
                    </h4>
                    <ul className="space-y-3 text-lg text-muted-foreground ml-6">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                        <span>like, share, or comment on your posts</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                        <span>view your profile, or company profile</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                        <span>engage with competitors' content that has a large ICP audience</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      2. Filter for ICP fit — keep only people who meet your criteria:
                    </h4>
                    <ul className="space-y-3 text-lg text-muted-foreground ml-6">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                        <span>industry and job title</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                        <span>product / company fit</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-accent"></div>
                        <span>signals of intent (e.g., hiring for new/remote roles)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      3. <span className="text-white">Enrich & qualify</span> — <span className="text-muted-foreground">append firmographic and role context, score prospects, and prioritize (hot / warm / monitor).</span>
                    </h4>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      4. <span className="text-white">Orchestrate outbound</span> — <span className="text-muted-foreground">run short, trigger-led cadences across LinkedIn and email with messaging tied to the exact engagement signal.</span>
                    </h4>
                  </div>
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
                Results our client got:
              </h2>
              
              <div className="space-y-6 text-lg text-white font-bold leading-relaxed mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shadow-glow"></div>
                    <span>Reply rates up to 23% (majority positive).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shadow-glow"></div>
                    <span>Sales cycles shortened from months → weeks because prospects are already aware/trusting from content engagement.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shadow-glow"></div>
                    <span>35+ meetings / month on average using this playbook.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shadow-glow"></div>
                    <span>As the client's LinkedIn following grows, results compound.</span>
                  </li>
                </ul>
              </div>

              <div className="text-center mb-8">
                <p className="text-lg text-muted-foreground">
                  (results over the last 60 days)
                </p>
              </div>

              {/* Results Screenshot Image Placeholder */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-8 flex items-center justify-center border border-primary/20 overflow-hidden">
                <img
                  src="/src/assets/case-studies/case-study-3-results.jpg"
                  alt="Results Screenshot"
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="flex items-center justify-center" style={{ display: 'none' }}>
                  <span className="text-xl font-medium text-muted-foreground">Results Screenshot Image</span>
                </div>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Short summary:
                </h3>
                <p>
                  Source the people who already signaled interest on LinkedIn, filter for real ICP fit, and hit them with context-led, multi-channel outreach — higher reply rates, shorter cycles, and predictable meeting volume.
                </p>
                <p>
                  And because our client's LinkedIn account grows over time, we are going to be getting more and more compounding results.
                </p>
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
                {/* Case Study 1: AI Agent Ecosystem */}
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
                        src="/src/assets/case-studies/ai-agent-ecosystem.jpg" 
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

                {/* Case Study 2: $2.8M+ in lifetime value */}
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

                {/* Case Study 3: 19 enterprise sales opportunities */}
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

export default CaseStudy3;
