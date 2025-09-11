const ComparisonSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
            We are <span className="text-destructive font-extrabold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">NOT</span> a SaaS or an Agency
          </h2>
          <div className="w-32 h-1 bg-gradient-mixed mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Traditional Options */}
          <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 border-2 border-red-500/20 shadow-card relative group">
            {/* Red accent corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-red-500/20 to-transparent rounded-bl-3xl"></div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 relative z-10">
              Because traditional options aren't cutting it:
            </h3>
            <ul className="space-y-6 relative z-10">
              {[
                "AI alone lacks the nuance and contextual understanding that human expertise brings.",
                "Software tools still require your team to do all the work",
                "In-house teams are expensive and often slowed down by internal processes.",
                "Agencies are expensive and often disconnected from your company's reality."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mt-2 flex-shrink-0 shadow-lg"></div>
                  <span className="text-muted-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* GTM Revenue */}
          <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 border-2 border-primary/40 shadow-glow relative group hover:shadow-accent transition-all duration-500">
            {/* Luxury accent corners */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-mixed opacity-20 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-accent opacity-20 rounded-tr-3xl"></div>
            
            <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-mixed bg-clip-text text-transparent mb-8 relative z-10">
              GTM Revenue
            </h3>
            <ul className="space-y-6 relative z-10">
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
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0 shadow-glow"></div>
                  <span className="text-muted-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
            
            {/* Premium glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-mixed opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;