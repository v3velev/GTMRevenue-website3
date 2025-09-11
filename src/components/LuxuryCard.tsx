import { ReactNode } from "react";

interface LuxuryCardProps {
  number?: number;
  title?: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'premium' | 'accent';
}

const LuxuryCard = ({ 
  number, 
  title, 
  children, 
  className = "", 
  variant = 'default' 
}: LuxuryCardProps) => {
  const variantStyles = {
    default: "bg-gradient-card border-border hover:border-primary/30 shadow-card hover:shadow-glow",
    premium: "bg-gradient-card border-primary/30 shadow-premium hover:shadow-glow",
    accent: "bg-gradient-card border-accent/30 shadow-accent hover:shadow-accent"
  };

  return (
    <div className={`relative ${variantStyles[variant]} rounded-3xl p-8 lg:p-12 border-2 hover:scale-[1.02] transition-all duration-500 group ${className}`}>
      {/* Luxury Number Badge */}
      {number && (
        <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-border p-1 shadow-glow">
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <span className="text-2xl font-bold bg-gradient-mixed bg-clip-text text-transparent">
              {number}
            </span>
          </div>
        </div>
      )}
      
      {/* Premium Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-mixed opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
      
      <div className="relative z-10 space-y-6">
        {title && (
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {title}
          </h3>
        )}
        {children}
      </div>
    </div>
  );
};

export default LuxuryCard;