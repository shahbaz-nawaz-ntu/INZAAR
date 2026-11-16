"use client";

import React, { useEffect, useState, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const ProgressBarContent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const progressIntervalRef = useRef(null);
  const finishTimeoutRef = useRef(null);
  const safetyTimeoutRef = useRef(null);

  const clearAllTimers = () => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    if (finishTimeoutRef.current) clearTimeout(finishTimeoutRef.current);
    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
  };

  const start = () => {
    clearAllTimers();
    setVisible(true);
    setProgress(20);

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < 40) return prev + 15;
        if (prev < 70) return prev + 8;
        if (prev < 85) return prev + 3;
        if (prev < 95) return prev + 0.8;
        return prev;
      });
    }, 150);

    // Safety timeout: auto-hide after 8s if navigation gets stuck or cancelled
    safetyTimeoutRef.current = setTimeout(() => {
      complete();
    }, 8000);
  };

  const complete = () => {
    clearAllTimers();
    setProgress(100);

    finishTimeoutRef.current = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setProgress(0);
      }, 300);
    }, 250);
  };

  // Complete progress on route change
  useEffect(() => {
    complete();
  }, [pathname, searchParams]);

  // Global click listener to start progress on any internal page navigation link
  useEffect(() => {
    const handleAnchorClick = (e) => {
      // Ignore modified clicks (new tab, etc.)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore hash links, tel, mailto, javascript, external target
      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:") ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      try {
        const targetUrl = new URL(anchor.href, window.location.href);
        const currentUrl = new URL(window.location.href);

        // Check if external link
        if (targetUrl.origin !== currentUrl.origin) return;

        // Check if exact same route & query
        if (
          targetUrl.pathname === currentUrl.pathname &&
          targetUrl.search === currentUrl.search
        ) {
          return;
        }

        // Trigger immediate loading
        start();
      } catch (err) {
        // Ignore URL parsing errors
      }
    };

    const handleCustomStart = () => start();
    const handleCustomEnd = () => complete();

    document.addEventListener("click", handleAnchorClick, true);
    window.addEventListener("app:nav-start", handleCustomStart);
    window.addEventListener("app:nav-end", handleCustomEnd);

    return () => {
      clearAllTimers();
      document.removeEventListener("click", handleAnchorClick, true);
      window.removeEventListener("app:nav-start", handleCustomStart);
      window.removeEventListener("app:nav-end", handleCustomEnd);
    };
  }, []);

  if (!visible && progress === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3.5px",
        zIndex: 9999999,
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.25s ease",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #6366f1 0%, #9333ea 50%, #ec4899 100%)",
          boxShadow: "0 0 10px rgba(147, 51, 234, 0.7), 0 0 6px rgba(236, 72, 153, 0.5)",
          transition: progress === 100 ? "width 0.15s ease-out" : "width 0.25s ease-out",
          borderRadius: "0 3px 3px 0",
        }}
      />
    </div>
  );
};

const NavigationProgressBar = () => {
  return (
    <Suspense fallback={null}>
      <ProgressBarContent />
    </Suspense>
  );
};

export default NavigationProgressBar;

