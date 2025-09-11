const ProcessSection = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-foreground">
            GTM Revenue helps you identify the best segment in the market and build the systems to effectively convert them to sales opportunities at scale
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Today's Reality */}
            <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 border border-border shadow-card">
              <h3 className="text-2xl lg:text-3xl font-bold text-destructive mb-8">
                Today's Reality
              </h3>
              
              <p className="text-muted-foreground text-lg mb-6">
                Companies can no longer make the old way work
              </p>

              <ul className="space-y-4">
                {[
                  "You buy ZoomInfo to build account lists",
                  "You write message by persona",
                  "Your SDRs try to personalize 1 by 1",
                  "Messages are personalized with no insight",
                  "Scale by hiring, not with AI"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* GTM Revenue Process */}
            <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 border border-primary shadow-glow">
              <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-8">
                GTM Revenue Process
              </h3>
              
              <p className="text-muted-foreground text-lg mb-6">
                B2B companies need to transition to the new world, where
              </p>

              <ul className="space-y-4">
                {[
                  "You identify the best performing market segment",
                  "You get deep data to understand their story",
                  "You target companies with a similar data story",
                  "Your customer insights defines the message",
                  "AI understands your company context and nuances",
                  "You can scale to all channels"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;