import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LuxuryVideoPlayer from "@/components/LuxuryVideoPlayer";
import SolutionsSection from "@/components/SolutionsSection";
import ComparisonSection from "@/components/ComparisonSection";
import ResultsSection from "@/components/ResultsSection";
import ExplanationSection from "@/components/ExplanationSection";
import ProcessSection from "@/components/ProcessSection";
import CalendarSection from "@/components/CalendarSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Video Sales Letter */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <LuxuryVideoPlayer title="See how our team can help you unlock new revenue growth." />
        </div>
      </section>

      {/* Solutions Section */}
      <SolutionsSection />

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Results Section */}
      <ResultsSection />

      {/* Explanation Section */}
      <ExplanationSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Calendar Section */}
      <CalendarSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;