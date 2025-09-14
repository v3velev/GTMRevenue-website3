import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LuxuryVideoPlayer from "@/components/LuxuryVideoPlayer";
import SolutionsSection from "@/components/SolutionsSection";
import ComparisonSection from "@/components/ComparisonSection";
import ResultsSection from "@/components/ResultsSection";
import ExplanationSection from "@/components/ExplanationSection";
import CalendarSection from "@/components/CalendarSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Show video breakdown button on pages that have the section
    const videoBreakdownNav = document.getElementById('video-breakdown-nav');
    if (videoBreakdownNav) {
      videoBreakdownNav.classList.remove('hidden');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Video Sales Letter */}
      <section id="video-breakdown" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <LuxuryVideoPlayer 
            title="See how our team can help you unlock new revenue growth." 
            youtubeId="lh4jHsn5T9E"
            autoplay={true}
          />
        </div>
      </section>

      {/* Solutions Section */}
      <SolutionsSection />

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Results Section */}
      <section id="case-studies">
        <ResultsSection />
      </section>

      {/* Explanation Section */}
      <ExplanationSection />


      {/* Calendar Section */}
      <section id="book-a-call">
        <CalendarSection />
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;