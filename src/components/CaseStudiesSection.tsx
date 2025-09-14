const CaseStudyCard = ({ title, onClick, href, image }: { title: string; onClick?: () => void; href?: string; image?: string }) => {
  const content = (
    <div className="p-6 sm:p-8 flex flex-col h-full relative">
      {/* Luxury corner accent */}
      <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-accent opacity-20 rounded-bl-3xl"></div>
      
      {/* Content area - grows to fill available space */}
      <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6">
        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:bg-gradient-mixed group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative z-10">
          {title}
        </h3>
        <div className="aspect-[25/10] bg-gradient-to-br from-primary/20 via-background to-accent/20 rounded-2xl flex items-center justify-center border-2 border-primary/10 group-hover:border-primary/30 transition-colors relative overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'block';
              }}
            />
          ) : null}
          {/* Luxury background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(158,64%,52%,0.1),transparent_60%)]" style={{ display: image ? 'none' : 'block' }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(15,58%,68%,0.08),transparent_60%)]" style={{ display: image ? 'none' : 'block' }}></div>
          <span className="text-sm sm:text-base text-muted-foreground font-medium relative z-10" style={{ display: image ? 'none' : 'block' }}>Premium Case Study</span>
        </div>
      </div>
      
      {/* Button - always at bottom */}
      <div className="relative p-[2px] bg-gradient-to-r from-primary to-accent rounded-2xl hover:shadow-glow transition-shadow duration-300 group-hover:shadow-glow mt-4 sm:mt-6">
        <div className="w-full px-4 py-2 rounded-2xl font-semibold text-sm sm:text-base hover:scale-105 transition-transform duration-300 hover:bg-background border-0 bg-background text-white flex items-center justify-center">
          Discover More →
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className="group relative bg-gradient-to-br from-card to-card/50 rounded-3xl shadow-glow border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 flex flex-col h-full"
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <div 
      className="group relative bg-gradient-to-br from-card to-card/50 rounded-3xl shadow-glow border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 flex flex-col h-full cursor-pointer"
      onClick={onClick}
    >
      {content}
    </div>
  );
};

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-16 sm:mb-20">
            <span className="bg-gradient-mixed bg-clip-text text-transparent">Actual results</span>{" "}
            <span className="text-foreground">with real numbers.</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-mixed mx-auto rounded-full mb-16"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <CaseStudyCard 
            title="$2.8M+ in lifetime value generated over 17 months" 
            href="/case-study-1"
            image="/src/assets/case-studies/lifetime-value.jpg"
          />
          <CaseStudyCard 
            title="19 enterprise sales opportunities and $1,1M in contract value from 1 campaign" 
            href="/case-study-2"
            image="/src/assets/case-studies/enterprise-sales-opportunities.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
