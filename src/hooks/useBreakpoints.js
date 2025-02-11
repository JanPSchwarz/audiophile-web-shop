import { useState, useEffect } from "react";

export default function useBreakpoints() {
  const [breakpoints, setBreakpoints] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    // Define media queries objects
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");
    const tabletMediaQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 1023px)",
    );
    const desktopMediaQuery = window.matchMedia("(min-width: 1024px)");

    // Update breakpoints when media queries change
    const updateBreakpoints = () => {
      setBreakpoints({
        isMobile: mobileMediaQuery.matches,
        isTablet: tabletMediaQuery.matches,
        isDesktop: desktopMediaQuery.matches,
      });
    };

    updateBreakpoints();

    // Add event listeners
    mobileMediaQuery.addEventListener("change", updateBreakpoints);
    tabletMediaQuery.addEventListener("change", updateBreakpoints);
    desktopMediaQuery.addEventListener("change", updateBreakpoints);

    // Cleanup event listeners
    return () => {
      mobileMediaQuery.removeEventListener("change", updateBreakpoints);
      tabletMediaQuery.removeEventListener("change", updateBreakpoints);
      desktopMediaQuery.removeEventListener("change", updateBreakpoints);
    };
  }, []);

  return breakpoints;
}
