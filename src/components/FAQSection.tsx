import { useState } from 'react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What Problems do you solve?",
      answer: (
        <div className="space-y-6">
          <div>
            <strong>Weak Market Intelligence & Data Accuracy</strong>
            <ul className="ml-4 mt-2 space-y-1">
              <li>• No real-time alerts for key account events</li>
              <li>• Inability to aggregate intelligence from multiple sources into one view</li>
              <li>• Impossible to keep data enriched and accurate at scale</li>
              <li>• Reliance on stale CRM entries that never reflect real-time changes</li>
              <li>• No Deep Research at Scale, instead relying on basic data from tools like Apollo, Cognism, ZoomInfo, etc or inefficient manual research</li>
              <li>• Lost opportunities due to poor timing or shallow research</li>
            </ul>
          </div>
          <div>
            <strong>In-House Teams Have Low Efficiency & ROI</strong>
            <ul className="ml-4 mt-2 space-y-1">
              <li>• Inability to orchestrate sophisticated GTM campaigns at scale</li>
              <li>• Teams don't have access to ready good data and deep research</li>
              <li>• No system to prioritize high-intent accounts leads to wasted effort</li>
              <li>• Team spending more time managing data than building relationships</li>
            </ul>
          </div>
          <div>
            <strong>Lack of Strategy & Focus</strong>
            <ul className="ml-4 mt-2 space-y-1">
              <li>• Campaigns launched without a consistent GTM plan or direction</li>
              <li>• Creative ideas pile up, but none are delivered</li>
              <li>• Leadership wants results but lacks bandwidth to architect and own a cohesive GTM plan</li>
            </ul>
          </div>
          <div>
            <strong>Failed Outsourcing & Tool Investments</strong>
            <ul className="ml-4 mt-2 space-y-1">
              <li>• Agencies overpromise and underdeliver</li>
              <li>• Investments in software and outsourced teams show little real ROI</li>
              <li>• Agencies deliver generic blasts, not tailored, research-backed campaigns</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      question: "How does this work? / What's our business model?",
      answer: (
        <div className="space-y-4">
          <p>We have 3 different ways we work with clients:</p>
          <div className="space-y-3">
            <div>
              <strong>1. In-house system set-up</strong>
              <ul className="ml-4 mt-2 space-y-1">
                <li>• 1 time set-up cost</li>
                <li>• monthly maintenance and optimization cost</li>
              </ul>
            </div>
            <div>
              <strong>2. Done-for-you Service</strong>
              <ul className="ml-4 mt-2 space-y-1">
                <li>• We strategise, build, and manage GTM campaigns or Data Solutions all done-for-you</li>
                <li>• monthly cost</li>
              </ul>
            </div>
            <div>
              <strong>3. AI Growth Partner</strong>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "What's your pricing?",
      answer: "We have \"value-based\" pricing. All pricing is calculated based on the monetary value our solutions will bring, ensuring all our clients get a multiple return on their investment."
    },
    {
      question: "How long does it take to see results?",
      answer: "Clients can see results as early as 30 days, but typically best results come between the 90-120 day mark and beyond."
    },
    {
      question: "How do you balance AI automation with the human element?",
      answer: "Our AI workflows handle both repetitive tasks and complex research that typically takes significant time. While AI works faster and at scale, your team maintains control over relationships and strategic decisions. Think of it as amplifying your team's capabilities rather than replacing them."
    },
    {
      question: "How much of our team's time will this require?",
      answer: "You'll need one point of contact to help align stakeholders and coordinate resources. For this person, it's light project management - helping gather requirements through documentation or interviews, and reviewing/approving the scope. Once the scope is finalized, time requirements become very minimal. The rest of your team only needs to participate in brief training sessions to learn the workflows."
    },
    {
      question: "Do you have experience in our industry/use case?",
      answer: "We've built GTM workflows across various B2B scenarios. The core principles of good automation remain consistent - what changes is how we apply them to your specific context and goals."
    },
    {
      question: "Will this work with our existing tools?",
      answer: "Yes. We can integrate with any tools that have API endpoints. We'll assess your current stack and either build connections to your existing tools or recommend better alternatives based on our extensive knowledge of the GTM tool landscape."
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-mixed"></div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <div className="w-12 h-0.5 bg-gradient-mixed"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Frequently Asked <span className="bg-gradient-mixed bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our GTM solutions and how we can help scale your business
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`group relative bg-gradient-to-br from-card to-card/50 rounded-3xl border border-primary/20 overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-glow ${
                  openItems.includes(index) ? 'shadow-glow border-primary/40' : ''
                }`}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(158,64%,52%,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(15,58%,68%,0.03),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between relative z-10 group-hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Question number */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30 group-hover:border-primary/50 transition-colors duration-300">
                      <span className="text-sm font-bold text-primary group-hover:text-accent transition-colors duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    {/* Question text */}
                    <h3 className={`text-lg font-semibold text-foreground pr-4 group-hover:text-primary transition-colors duration-300 ${
                      index === 0 ? 'font-bold' : ''
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  
                  {/* Animated chevron */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                      <svg
                        className={`w-4 h-4 text-primary transition-all duration-300 ${
                          openItems.includes(index) ? 'rotate-180 text-accent' : 'group-hover:text-accent'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                
                {/* Answer content with smooth animation */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  openItems.includes(index) ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-8 relative z-10">
                    <div className="border-t border-primary/10 pt-6">
                      <div className="text-muted-foreground leading-relaxed space-y-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">
                Still have questions? 
                <a href="#book-a-call" className="text-primary hover:text-accent transition-colors duration-200 ml-1 font-semibold">
                  Book a call with our team
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;