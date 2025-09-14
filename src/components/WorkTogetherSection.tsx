const WorkTogetherSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            How we can work together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Option 1 */}
          <div className="bg-gradient-to-br from-card to-card/50 rounded-3xl p-8 lg:p-12 shadow-gradient border border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Get a fully built In-house System
              </h3>
            </div>
            
            <div className="space-y-4 mb-8 flex-1">
              <p className="text-muted-foreground text-base">Get your own in-house system built by our team of experts:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-base">Have complete ownership of your system</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-base">Every detail tailored to your company specifics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-base">Retain higher profit margins</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-base">Managing time required → 2 to 5 hours a week</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-base">Get full support from our team of experts who ensure system uptime and resolution of problems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-base">Get detailed training and step-by-step guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-base">Monthly strategic advisory and system optimisation by our team</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20 mt-auto">
              <p className="text-foreground font-semibold mb-2">Good for →</p>
              <p className="text-muted-foreground text-base">
                Teams that want to own their GTM system — we build it, enable it, and assist at every step, but final ownership, execution, and KPI accountability remain with the client.
              </p>
            </div>
          </div>

          {/* Option 2 */}
          <div className="bg-gradient-to-br from-card to-card/50 rounded-3xl p-8 lg:p-12 shadow-gradient border border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                GTM Revenue builds and manages your system
              </h3>
            </div>
            
            <div className="space-y-4 mb-8 flex-1">
              <p className="text-muted-foreground text-base">Get a team of go-to-market experts to build and manage your system:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-base">Fully managed outcomes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-base">Increase in sales pipeline within 6 weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-base">Less time investment needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-base">Fully integrated with your sales team processes and handoff</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-base">Weekly/monthly improvements handled by our team based on the market feedback & data</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20 mt-auto">
              <p className="text-foreground font-semibold mb-2">Good for →</p>
              <p className="text-muted-foreground text-base">
                Companies that need a team of GTM (go-to-market) experts who will deliver a fully managed, end-to-end solution and assume responsibility for implementation and results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogetherSection;
