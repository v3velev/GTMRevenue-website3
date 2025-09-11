const ComparisonSection = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
            We are <span className="text-destructive font-extrabold">NOT</span> a SaaS or an Agency
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Traditional Options */}
          <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 border border-border shadow-card">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Because traditional options aren't cutting it:
            </h3>
            <ul className="space-y-6">
              {[
                "AI alone lacks the nuance and contextual understanding that human expertise brings.",
                "Software tools still require your team to do all the work",
                "In-house teams are expensive and often slowed down by internal processes.",
                "Agencies are expensive and often disconnected from your company's reality."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* GTM Revenue */}
          <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 border border-primary shadow-glow">
            <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-8">
              GTM Revenue
            </h3>
            <ul className="space-y-6">
              {[
                "Immediate value delivery in first weeks",
                "Fully managed outcomes",
                "Strategy handled for you",
                "Infinitely scalable",
                "Access to proprietary data",
                "Custom-built solutions aligned with your company",
                "Adapts to your needs"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;