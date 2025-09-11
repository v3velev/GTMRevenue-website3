import { Play } from "lucide-react";

interface VideoPlayerProps {
  title?: string;
  className?: string;
}

const VideoPlayer = ({ title, className = "" }: VideoPlayerProps) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          {title}
        </h2>
      )}
      
      <div className="relative bg-gradient-card rounded-2xl overflow-hidden shadow-card border border-border">
        {/* Video Container */}
        <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center relative">
          {/* Play Button Overlay */}
          <button className="relative z-10 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-white ml-1" />
          </button>
          
          {/* Video Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
          
          {/* Video Brand */}
          <div className="absolute bottom-4 left-4 text-white/60 text-sm font-medium">
            New VSL
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;