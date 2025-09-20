import React from "react";
import { cn } from "@/lib/utils";

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute w-1 h-1 bg-blue-500/40 rounded-full",
              "animate-pulse"
            )}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Neural network lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <g stroke="url(#lineGradient)" strokeWidth="2" fill="none">
            <path d="M100 200 Q600 100 1100 300" className="animate-network-flow" />
            <path d="M200 500 Q700 300 1000 600" className="animate-network-flow" style={{ animationDelay: '1s' }} />
            <path d="M50 600 Q500 400 900 200" className="animate-network-flow" style={{ animationDelay: '2s' }} />
            <path d="M300 100 Q800 200 1200 400" className="animate-network-flow" style={{ animationDelay: '0.5s' }} />
            <path d="M0 300 Q400 500 800 100" className="animate-network-flow" style={{ animationDelay: '1.5s' }} />
            <path d="M400 700 Q900 500 1200 600" className="animate-network-flow" style={{ animationDelay: '2.5s' }} />
          </g>
          
          {/* Network nodes */}
          {[
            { x: 100, y: 200 }, { x: 600, y: 100 }, { x: 1100, y: 300 },
            { x: 200, y: 500 }, { x: 700, y: 300 }, { x: 1000, y: 600 },
            { x: 50, y: 600 }, { x: 500, y: 400 }, { x: 900, y: 200 },
            { x: 300, y: 100 }, { x: 800, y: 200 }, { x: 1200, y: 400 },
            { x: 0, y: 300 }, { x: 400, y: 500 }, { x: 800, y: 100 },
            { x: 400, y: 700 }, { x: 900, y: 500 }, { x: 1200, y: 600 }
          ].map((node, i) => (
            <circle
              key={i}
              cx={node.x}
              cy={node.y}
              r="3"
              fill="#3b82f6"
              fillOpacity="0.4"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};
