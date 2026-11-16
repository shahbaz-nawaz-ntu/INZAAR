"use client";

import React, { useState } from "react";

const Overview = ({ checkMatchCourses }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const title = checkMatchCourses?.title || "Course Overview";
  const desc = checkMatchCourses?.desc || checkMatchCourses?.description || "";
  const overviewList = checkMatchCourses?.overviewList || [];

  const isLong = desc && desc.length > 280;

  return (
    <div
      className="rbt-course-feature-box overview-wrapper rbt-shadow-box mt--30"
      id="overview"
      style={{
        borderRadius: "14px",
        background: "#ffffff",
        padding: "30px",
        border: "1px solid #eef2f6",
        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
      }}
    >
      <div className="rbt-course-feature-inner">
        <div className="section-title mb--20">
          <h4
            className="rbt-title-style-3"
            style={{ fontSize: "20px", fontWeight: "700", color: "#1e293b" }}
          >
            {title}
          </h4>
        </div>

        <div style={{ position: "relative" }}>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.75",
              color: "#475569",
              margin: 0,
              whiteSpace: "pre-line",
              ...(isLong && !isExpanded
                ? {
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }
                : {}),
            }}
          >
            {desc}
          </p>

          {isLong && (
            <div style={{ marginTop: "14px" }}>
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "#9333ea",
                  fontWeight: "700",
                  fontSize: "14px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 0",
                }}
              >
                {isExpanded ? (
                  <>
                    View Less <i className="feather-chevron-up"></i>
                  </>
                ) : (
                  <>
                    View More <i className="feather-chevron-down"></i>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {overviewList && overviewList.length > 0 && (
          <div
            className="rbt-course-feature-box mt--30 pt--20"
            style={{ borderTop: "1px solid #f1f5f9" }}
          >
            <h5
              className="rbt-title-style-3 mb--15"
              style={{ fontSize: "16px", fontWeight: "700", color: "#1e293b" }}
            >
              What You Will Learn
            </h5>
            <ul className="rbt-list-style-1">
              {overviewList.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: "10px",
                    fontSize: "14px",
                    color: "#475569",
                  }}
                >
                  <i
                    className="feather-check"
                    style={{ color: "#9333ea", fontWeight: "bold" }}
                  ></i>
                  {typeof item === "string" ? item : item.listItem}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
