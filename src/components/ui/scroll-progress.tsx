import React, { useEffect, useState } from "react";

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = documentHeight > 0 ? scrollTop / documentHeight : 0;
      setProgress(Math.max(0, Math.min(1, ratio)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none">
      <div
        className="h-full origin-left bg-gradient-to-r from-primary via-cyan-300 to-accent transition-transform duration-150 ease-out shadow-[0_0_14px_hsl(var(--primary)/0.55)]"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};
