import { Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";


interface LuxuryVideoPlayerProps {
  title?: string;
  className?: string;
  youtubeId?: string;
  autoplay?: boolean;
}

const LuxuryVideoPlayer = ({ title, className = "", youtubeId, autoplay = false }: LuxuryVideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && autoplay) {
          setIsInView(true);
          setIsPlaying(true);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [autoplay]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleUnmute = () => {
    if (iframeRef.current) {
      // Use postMessage to communicate with the iframe
      iframeRef.current.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', '*');
      setIsMuted(false);
    } else {
      // Fallback: update state and let iframe recreate
      setIsMuted(false);
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {title.includes("3x") ? (
            <span>
              See how our team can help you{" "}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                3x your go-to-market performance
              </span>
            </span>
          ) : title.includes("unlock new revenue growth") ? (
            <span>
              See how our team can help you{" "}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                unlock new revenue growth
              </span>
              .
            </span>
          ) : (
            <span className="text-foreground">{title}</span>
          )}
        </h2>
      )}
      
      {/* COMPLETELY MINIMAL CONTAINER - NO STYLING INTERFERENCE */}
      <div 
        ref={videoRef} 
        className="relative rounded-3xl overflow-hidden"
        style={{
          width: '100%',
          height: '0',
          paddingBottom: '56.25%', // 16:9 aspect ratio
          position: 'relative'
        }}
      >
        {/* Video Container - ABSOLUTELY MINIMAL */}
        <div 
          className="absolute inset-0"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        >
          {youtubeId && (isPlaying || (autoplay && isInView)) ? (
            /* YouTube Video - ZERO INTERFERENCE */
            <iframe
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=1&rel=0&enablejsapi=1&origin=${window.location.origin}`}
              title={title || "Video"}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                zIndex: 1
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            /* Play Button - MINIMAL STYLING */
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(158,64%,52%,0.1), rgba(15,58%,68%,0.1))'
              }}
            >
              <button 
                onClick={handlePlay}
                className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Play className="w-10 h-10 text-white ml-1" />
              </button>
            </div>
          )}
          
          {/* Unmute Button - NO BOX, STRONG SHADOWS */}
          {youtubeId && (isPlaying || (autoplay && isInView)) && isMuted && (
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{ zIndex: 9999 }}
            >
              <div 
                onClick={handleUnmute}
                className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4 animate-grow-pulse border-4 border-white/60 hover:border-white/80 transition-all duration-300 relative"
                  style={{
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <svg 
                    className="w-8 h-8 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 16px rgba(0, 0, 0, 0.6))'
                    }}
                  >
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                  </svg>
                  {/* Muted line */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="w-12 h-1 bg-red-500 rotate-45 rounded-full"
                      style={{
                        boxShadow: '0 0 12px rgba(255, 0, 0, 0.9), 0 0 24px rgba(255, 0, 0, 0.7), 0 0 36px rgba(255, 0, 0, 0.5)'
                      }}
                    ></div>
                  </div>
                </div>
                <div className="relative">
                  <span 
                    className="font-bold text-2xl text-center text-white relative z-10"
                    style={{
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.6)'
                    }}
                  >
                    Tap to Unmute
                  </span>
                  {/* Background highlight for better readability */}
                  <div 
                    className="absolute inset-0 bg-black/30 rounded-lg blur-sm -z-10"
                    style={{
                      top: '-4px',
                      left: '-8px',
                      right: '-8px',
                      bottom: '-4px'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LuxuryVideoPlayer;