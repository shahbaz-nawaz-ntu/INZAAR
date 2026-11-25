"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const languages = [
  { code: "EN", name: "English", flag: "/images/flags/us.svg" },
  { code: "Ur", name: "Urdu", flag: "/images/flags/pk.svg" },
  { code: "Ar", name: "Arabic", flag: "/images/flags/sa.svg" },
];

export default function LanguageSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className="position-relative d-none d-lg-inline-flex align-items-center self-center"
      style={{ position: "relative", alignItems: "center", alignSelf: "center" }}
    >
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center gap-2 self-center leading-none rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition lang-select-trigger"
        style={{
          height: "45px",
          padding: "0 14px",
          borderRadius: "8px",
          border: "1px solid #e2e8f0",
          backgroundColor: "#ffffff",
          color: "#1e293b",
          fontSize: "14px",
          fontWeight: 500,
          cursor: "pointer",
          outline: "none",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          lineHeight: 1,
          transition: "all 0.2s ease",
          boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          boxSizing: "border-box",
        }}
        aria-expanded={isOpen}
      >
        <img
          src={selectedLang.flag}
          alt={selectedLang.name}
          style={{
            width: "20px",
            height: "15px",
            objectFit: "cover",
            borderRadius: "2px",
            boxShadow: "0 0 1px rgba(0,0,0,0.2)",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        <span style={{ fontWeight: 500, fontSize: "14px", lineHeight: "1", display: "inline-block" }}>
          {selectedLang.code}
        </span>
        <ChevronDown
          size={14}
          style={{
            color: "#64748b",
            transition: "transform 0.2s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            flexShrink: 0,
            display: "inline-block",
          }}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="rounded-xl shadow-lg border border-slate-100 p-1.5 lang-select-dropdown"
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            zIndex: 1050,
            minWidth: "150px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            border: "1px solid #f1f5f9",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
            padding: "6px",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          {languages.map((lang) => {
            const isSelected = selectedLang.code === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang)}
                className={`d-flex align-items-center gap-2 w-100 text-start border-0 rounded-lg cursor-pointer hover:bg-purple-50 hover:text-purple-600 lang-select-item ${
                  isSelected ? "active" : ""
                }`}
                style={{
                  padding: "8px 12px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: isSelected ? 600 : 400,
                  backgroundColor: isSelected ? "#f8f5ff" : "transparent",
                  color: isSelected ? "#7c3aed" : "#334155",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  border: "none",
                  textAlign: "left",
                }}
              >
                <img
                  src={lang.flag}
                  alt={lang.name}
                  style={{
                    width: "20px",
                    height: "15px",
                    objectFit: "cover",
                    borderRadius: "2px",
                    boxShadow: "0 0 1px rgba(0,0,0,0.2)",
                  }}
                />
                <span style={{ flex: 1 }}>{lang.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

