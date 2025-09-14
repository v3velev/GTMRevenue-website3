import LuxuryCard from "./LuxuryCard";
import LuxuryVideoPlayer from "./LuxuryVideoPlayer";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

// Import images
import vesselinMalinovsky from "../assets/case-studies/vesselin-malinovsky.jpg";

const ClientStory = () => ( // Updated customer story
  <LuxuryCard id="client-interview" variant="premium" className="shadow-glow">
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Story Content */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <span className="bg-accent/20 text-accent px-4 py-2 rounded-2xl text-sm font-bold border border-accent/30">
            Customer Story
          </span>
          <span className="bg-gradient-accent text-accent-foreground px-4 py-2 rounded-xl text-sm font-bold shadow-accent">
            Yamasoft
          </span>
        </div>

        <blockquote className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground leading-tight">
          "GTM Revenue did what no one else could"
        </blockquote>

        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          We'd tried several agencies and been frustrated by surface-level fixes. GTM Revenue was different: they diagnosed root causes, rebuilt our go-to-market strategy, and delivered real, lasting improvements. <span className="text-accent font-semibold">Their depth of expertise and hands-on experience set them apart from every go-to-market partner we've worked with.</span>
        </p>


        <div className="flex items-center gap-3 sm:gap-4 bg-gradient-card p-3 sm:p-4 rounded-2xl border border-primary/10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl overflow-hidden shadow-glow">
            <img 
              src={vesselinMalinovsky} 
              alt="Vesselin Malinovsky"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to initials if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full bg-gradient-mixed rounded-2xl flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-glow" style={{ display: 'none' }}>
              VM
            </div>
          </div>
          <div>
            <div className="font-bold text-foreground text-base sm:text-lg">Vesselin Malinovsky</div>
            <div className="text-muted-foreground text-xs sm:text-sm">CEO and Co-Founder</div>
          </div>
        </div>

      </div>

      {/* Video */}
      <div>
        <LuxuryVideoPlayer 
          youtubeId="ecDrbaj0x5Y"
          autoplay={true}
        />
        <div className="mt-12">
          <Link to="/case-study-6" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="gradient-accent" className="w-full rounded-2xl font-semibold px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base hover:scale-105 transition-transform duration-300 shadow-accent">
              Read case study →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </LuxuryCard>
);

export default ClientStory;
