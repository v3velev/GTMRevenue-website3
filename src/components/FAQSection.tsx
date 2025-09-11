import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => (
  <div className="bg-gradient-card rounded-2xl border border-border overflow-hidden">
    <button
      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
      onClick={onClick}
    >
      <span className="text-lg font-semibold text-foreground pr-4">{question}</span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
      ) : (
        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
      )}
    </button>
    
    {isOpen && (
      <div className="px-6 pb-6">
        <p className="text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    )}
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes GTM Revenue different from other sales agencies?",
      answer: "We combine strategic go-to-market expertise with cutting-edge AI solutions to deliver measurable results. Unlike traditional agencies, we focus on building scalable systems that integrate seamlessly with your existing processes and provide immediate value from day one."
    },
    {
      question: "How quickly can we see results?",
      answer: "Most clients see initial results within the first few weeks of implementation. Our approach is designed for immediate value delivery, with measurable improvements in pipeline generation, lead quality, and conversion rates typically visible within 30-60 days."
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
            FAQ
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;