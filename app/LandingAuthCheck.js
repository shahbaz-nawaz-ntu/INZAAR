"use client";

import { useEffect, useState } from "react";

export default function LandingAuthCheck({ children }) {
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        window.location.replace("/app");
        return;
      }
    } catch (err) {
      console.error("Auth check error:", err);
    }
    setIsChecking(false);
  }, []);

  if (isChecking) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            border: "3px solid #e2e8f0",
            borderTopColor: "#3b82f6",
            borderRadius: "50%",
            animation: "authCheckSpin 0.8s linear infinite",
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `@keyframes authCheckSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`,
          }}
        />
      </div>
    );
  }

  return <>{children}</>;
}

