import { Play } from "lucide-react";

interface LuxuryVideoPlayerProps {
  title?: string;
  className?: string;
}

const LuxuryVideoPlayer = ({ title, className = "" }: LuxuryVideoPlayerProps) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
          {title}
        </h2>
      )}
      
      <div className="relative bg-gradient-card rounded-3xl overflow-hidden shadow-premium border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 group">
        {/* Video Container */}
        <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center relative overflow-hidden">
          
          {/* Luxury Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(158,64%,52%,0.1),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(15,58%,68%,0.08),transparent_60%)]"></div>
          
          {/* Play Button Overlay */}
          <button className="relative z-10 w-24 h-24 bg-gradient-mixed rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-all duration-300 group-hover:shadow-accent">
            <Play className="w-10 h-10 text-white ml-1" />
            
            {/* Pulse Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-ping" style={{ animationDelay: '1s' }}></div>
          </button>
          
          {/* Video Brand */}
          <div className="absolute bottom-6 left-6 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-mixed rounded-lg flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-sm">VSL</span>
            </div>
            <span className="text-foreground/80 text-sm font-medium">Premium Content</span>
          </div>
          
          {/* Luxury Corner Accents */}
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent/30"></div>
        </div>
        
        {/* Premium Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-mixed opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default LuxuryVideoPlayer;