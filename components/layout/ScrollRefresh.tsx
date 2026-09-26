"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsap";

/**
 * next/font minimizes layout shift from web fonts swapping in, but doesn't
 * guarantee zero shift — especially for a large display font used at
 * viewport-relative sizes (the hero headline, the Material Journey stage
 * numbers). ScrollTrigger measures every section's start/end once, at
 * mount; if anything above a section resizes afterward without a `resize`
 * event (a font swap doesn't fire one), every trigger below it is now
 * measured against stale positions — sections start pinning or revealing
 * at the wrong scroll offset. This component's only job is to tell
 * ScrollTrigger to remeasure once fonts are actually ready, and once more
 * on full load (covers any other late layout shift, e.g. from images).
 */
export function ScrollRefresh() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(refresh);
    }

    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  return null;
}
