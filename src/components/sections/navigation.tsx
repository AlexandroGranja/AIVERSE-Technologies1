import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import aiverseLogo from "@/assets/aiverse-logo.png";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out group",
      isScrolled 
        ? "opacity-10 hover:opacity-100 focus-within:opacity-100 bg-background/20 backdrop-blur-xl shadow-[0_18px_45px_-34px_hsl(var(--primary)/0.22)]" 
        : "opacity-100 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-20 items-center justify-start">
          <div className="group flex items-center">
            <div className="relative">
              <img 
                src={aiverseLogo} 
                alt="AIVERSE Technologies" 
                className={cn(
                  "relative z-10 h-14 w-auto transition-all duration-300",
                  "group-hover:scale-105 group-active:scale-95",
                  "filter brightness-[2.9] contrast-[2.9]",
                  isScrolled 
                    ? "drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]" 
                    : "drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                )}
              />
              
              {/* Efeito de borda sutil */}
              <div className={cn(
                "absolute inset-0 rounded-full transition-all duration-300",
                "border border-transparent",
                "group-hover:border-primary/30",
                isScrolled && "border-primary/20"
              )} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navigation };