const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Company Nuances & Context",
      description: "A lead generation agency or an AI Agent cannot perform without understanding your company's and your market's nuances, that's why 80% fail.",
      details: "View us as your in-house team of GTM experts aligned with your reality. We gather data & human knowledge to base our strategies & AI on your real context and nuances.",
      highlight: "80% fail without proper context"
    },
    {
      number: "2", 
      title: "Data",
      description: "We aggregate 100+ public and private data sources and build a bespoke data system tailored to your market and GTM strategy.",
      details: "That system surfaces precise signals of buying intent, technical fit, and organizational context, then fuses them into a single, complete company profile. Result: higher-precision targeting, automatic disqualification of poor-fit accounts, and the contextual insights your team would gain from ~30 minutes of manual research - but delivered at scale by our AI research agents and private databases.",
      highlight: "100+ data sources"
    },
    {
      number: "3",
      title: "Story", 
      description: "Combining multiple data points across time creates a story about each company.",
      details: "The story is our understanding of them and their situation, which is crucial If we want to select the perfect companies in your market to talk to.",
      highlight: "Data-driven narratives"
    },
    {
      number: "4",
      title: "Insights",
      description: "An insight is a non-obvious, evidence-backed truth about your buyer, market, or prospect.",
      details: "It's the kind of knowledge that shifts how you act, setting you apart from competitors and helping you win more deals because you truly understand the buyer's real situation. Insights emerge by combining external data and research with private context.",
      highlight: "Evidence-backed truths"
    },
    {
      number: "5",
      title: "Powerful Messaging",
      description: "The highest-converting messaging doesn't come from brainstorming in a vacuum - it's defined by your insights.",
      details: "Our team of experts will craft your messaging using your data insights and our proven framework - built from results across 75+ clients and thousands of messaging tests.",
      highlight: "75+ clients tested"
    },
    {
      number: "6",
      title: "Prospects that trust you and want to buy from you",
      description: "Keep doing what you're doing and prospects will treat you the same as every competitor.",
      details: "The fastest way to earn a cold audience's trust is to share specific, expert insights about their company or market - observations, data points, or actionable ideas that prove you understand their situation. That credibility transforms your position: instead of a noisy spammer or advertiser, you become a trusted expert prospects want to work with.",
      highlight: "Trust through expertise"
    },
    {
      number: "7",
      title: "Replicate the success at scale and low costs",
      description: "To scale with AI rather than hire more people, you must onboard AI as you would a skilled employee: provide detailed context, repeatable processes, and ongoing feedback loops.",
      details: "A single page document won't cut it. After deploying AI sales systems for 75+ clients, we've developed a repeatable method to capture your company's nuances and train AI on our expert GTM playbooks so it reliably executes your go-to-market motion.",
      highlight: "75+ AI systems deployed"
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-accent/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20 mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">PROVEN METHODOLOGY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-8 leading-tight">
            Our process combines{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              go-to-market expertise
            </span>{" "}
            with AI to build scalable systems for revenue growth.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full shadow-glow"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="space-y-16 lg:space-y-20">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                  {/* Premium Step Number */}
                  <div className="flex-shrink-0 relative">
                    <div className="relative">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary via-primary-glow to-accent rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-accent transition-all duration-500 group-hover:scale-110">
                        <span className="text-3xl lg:text-4xl font-bold text-white">{step.number}</span>
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    </div>
                  </div>

                  {/* Premium Step Content */}
                  <div className="flex-1 space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-lg sm:text-xl text-foreground font-medium leading-relaxed">
                        {step.description}
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Premium Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-10 lg:left-12 top-24 lg:top-28 w-1 h-16 lg:h-20">
                    <div className="w-full h-full bg-gradient-to-b from-primary via-primary-glow to-accent rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full shadow-glow"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 lg:mt-24">
          <a href="#video-breakdown" className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-primary/15 to-accent/15 rounded-3xl border-2 border-primary/30 hover:border-primary/50 shadow-glow hover:shadow-accent transition-all duration-300 group cursor-pointer hover:scale-105">
            <span className="text-foreground font-semibold text-lg">
              Ready to see examples? - <span className="text-accent font-bold">video breakdown</span>
            </span>
            <div className="text-accent text-xl font-bold group-hover:translate-x-1 transition-transform duration-300">→</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;