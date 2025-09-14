const GTMProcessSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </section>
  );
};

export default GTMProcessSection;
