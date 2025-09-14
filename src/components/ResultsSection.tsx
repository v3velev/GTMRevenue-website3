import { Button } from "@/components/ui/button";
import LuxuryVideoPlayer from "./LuxuryVideoPlayer";
import LuxuryCard from "./LuxuryCard";
import { Link } from "react-router-dom";

const CaseStudyCard = ({ title, onClick, href, image }: { title: string; onClick?: () => void; href?: string; image?: string }) => {
  const content = (
    <div className="p-6 sm:p-8 flex flex-col h-full relative">
      {/* Luxury corner accent */}
      <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-accent opacity-20 rounded-bl-3xl"></div>
      
      {/* Content area - grows to fill available space */}
      <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6">
        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:bg-gradient-mixed group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative z-10">
        {title}
      </h3>
      <div className="aspect-[25/10] bg-gradient-to-br from-primary/20 via-background to-accent/20 rounded-2xl flex items-center justify-center border-2 border-primary/10 group-hover:border-primary/30 transition-colors relative overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'block';
              }}
            />
          ) : null}
        {/* Luxury background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(158,64%,52%,0.1),transparent_60%)]" style={{ display: image ? 'none' : 'block' }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(15,58%,68%,0.08),transparent_60%)]" style={{ display: image ? 'none' : 'block' }}></div>
          <span className="text-sm sm:text-base text-muted-foreground font-medium relative z-10" style={{ display: image ? 'none' : 'block' }}>Premium Case Study</span>
        </div>
      </div>
      
      {/* Button - always at bottom */}
      <div className="relative p-[2px] bg-gradient-to-r from-primary to-accent rounded-2xl hover:shadow-glow transition-shadow duration-300 group-hover:shadow-glow mt-4 sm:mt-6">
        <div className="w-full px-4 py-2 rounded-2xl font-semibold text-sm sm:text-base hover:scale-105 transition-transform duration-300 hover:bg-background border-0 bg-background text-white flex items-center justify-center">
        Discover More →
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href}
        className="group cursor-pointer bg-gradient-card rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 hover:shadow-glow transition-all duration-500 hover:scale-105 block"
      >
        {content}
      </a>
    );
  }

  return (
    <div 
      className="group cursor-pointer bg-gradient-card rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 hover:shadow-glow transition-all duration-500 hover:scale-105"
      onClick={onClick}
    >
      {content}
  </div>
);
};

// Updated spacing between video and button
const ClientStory = () => (
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
);

const InternalStrategies = () => (
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
                Qualified sales meetings generated monthly
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
              src="/src/assets/case-studies/aleksandar-velev.jpg" 
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
);

const ResultsSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 space-y-24 relative z-10">
        {/* First Results Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-16 sm:mb-20">
            <span className="bg-gradient-mixed bg-clip-text text-transparent">Actual results</span>{" "}
            <span className="text-foreground">with real numbers.</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-mixed mx-auto rounded-full mb-16"></div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            <CaseStudyCard 
              title="$2.8M+ in lifetime value generated over 17 months" 
              href="/case-study-1"
              image="/src/assets/case-studies/lifetime-value.jpg"
            />
            <CaseStudyCard 
              title="19 enterprise sales opportunities and $1,1M in contract value from 1 campaign" 
              href="/case-study-2"
              image="/src/assets/case-studies/enterprise-sales-opportunities.jpg"
            />
          </div>
        </div>

        {/* Customer Story */}
        <ClientStory />

        {/* We are not a lead generation agency section */}
        <div className="max-w-6xl mx-auto text-center space-y-6 py-16">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            We are not a lead generation agency.
          </h3>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            We can generate high-converting sales leads - but our expertise goes far beyond that.
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            We excel at both the strategic and the technical levels, giving clients the full stack of expertise needed to fuel revenue growth.
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            Every engagement is tailored: rather than blasting generic cold emails, we step back, diagnose the actual constraints, and design the highest-performing strategies for your specific context.
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            The best proof is in real results - review the case studies on this page.
          </p>
        </div>

        {/* GTM Revenue Process section */}
        <div className="max-w-6xl mx-auto py-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center mb-12">
            GTM Revenue helps you identify the best segment in the market and build the systems to effectively convert them to sales opportunities at scale
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Today's Reality */}
            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 shadow-red-500/20 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-red-500 mb-4">Today's Reality</h4>
                <p className="text-foreground text-xl mb-6">Companies can no longer make the old way work</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                    <span className="text-foreground text-lg">You buy ZoomInfo to build account lists</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                    <span className="text-foreground text-lg">You write message by persona</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                    <span className="text-foreground text-lg">Your SDRs try to personalize 1 by 1</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                    <span className="text-foreground text-lg">Messages are personalized with no insight</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                    <span className="text-foreground text-lg">Scale by hiring, not with AI</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* GTM Revenue Process */}
            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/30 shadow-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-primary mb-4">GTM Revenue Process</h4>
                <p className="text-foreground text-xl mb-6">B2B companies need to transition to the new world, where</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span className="text-foreground text-lg">You identify the best performing market segment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span className="text-foreground text-lg">You get deep data to understand their story</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span className="text-foreground text-lg">You target companies with a similar data story</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span className="text-foreground text-lg">Your customer insights defines the message</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span className="text-foreground text-lg">AI understands your company context and nuances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span className="text-foreground text-lg">You can scale to all channels</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Second Results Section */}
        <div>
          <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            <CaseStudyCard 
              title="Booking 35+ qualified meetings per month with LinkedIn content + AI multi-channel outreach" 
              href="/case-study-3" 
              image="/src/assets/case-studies/linkedin-meetings.jpg"
            />
            <CaseStudyCard 
              title="AI Agent Ecosystem - 60-90 Sales Opportunities per month" 
              href="/case-study-4" 
              image="/src/assets/case-studies/ai-agent-ecosystem.jpg"
            />
          </div>
        </div>

        {/* Internal Strategies */}
        <InternalStrategies />
      </div>
    </section>
  );
};

export default ResultsSection;