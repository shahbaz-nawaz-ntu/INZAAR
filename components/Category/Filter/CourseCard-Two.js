"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import sal from "sal.js";

const CourseCardTwo = ({ course = [], loading = false }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  // Reset pagination to 6 whenever filtered courses change
  useEffect(() => {
    setVisibleCount(6);
  }, [course]);

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, [course, visibleCount]);

  const handleEnroll = (e, courseId) => {
    e.stopPropagation();
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const targetUrl = `/courses?tab=new&courseId=${courseId}`;
    if (token) {
      window.location.href = `/app${targetUrl}`;
    } else {
      window.location.href = `/app/login?redirect=/courses&tab=new&courseId=${courseId}`;
    }
  };

  if (loading) {
    return (
      <>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div className="col-lg-4 col-md-6 col-12 mb-4" key={i}>
            <div
              className="rbt-card variation-01 rbt-hover d-flex flex-column h-100"
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid #eef2f6",
                background: "#ffffff",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.04)",
              }}
            >
              {/* Skeleton Thumbnail at top */}
              <div
                style={{
                  height: "220px",
                  width: "100%",
                  background: "#f1f5f9",
                }}
                className="animate-pulse"
              />
              {/* Skeleton Body below */}
              <div
                className="rbt-card-body d-flex flex-column flex-grow-1"
                style={{ padding: "20px 22px", gap: "12px" }}
              >
                <div
                  style={{
                    height: "14px",
                    width: "35%",
                    background: "#f1f5f9",
                    borderRadius: "4px",
                  }}
                  className="animate-pulse"
                />
                <div
                  style={{
                    height: "22px",
                    width: "80%",
                    background: "#f1f5f9",
                    borderRadius: "4px",
                  }}
                  className="animate-pulse"
                />
                <div
                  style={{
                    height: "14px",
                    width: "50%",
                    background: "#f1f5f9",
                    borderRadius: "4px",
                  }}
                  className="animate-pulse"
                />
                <div
                  style={{
                    height: "40px",
                    width: "100%",
                    background: "#f1f5f9",
                    borderRadius: "4px",
                    marginTop: "auto",
                  }}
                  className="animate-pulse"
                />
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }

  if (!course || course.length === 0) {
    return (
      <div className="col-12 text-center py-5">
        <h4 className="text-gray-500 font-medium">No courses found matching your criteria.</h4>
      </div>
    );
  }

  return (
    <>
      {course.slice(0, visibleCount).map((data, index) => {
        const courseId = data._id || data.id;
        const image = data.thumbnail || data.courseImg || "/images/course/default-course.png";
        const title = data.title || data.courseTitle;
        const categoryName = data.departmentId?.name || (data.courseFor ? data.courseFor.join(", ") : "IEP Course");
        const lectureCount = data.totalLectures || data.lesson || 0;
        const timeSpent = data.totalTime || data.duration || (data.days ? `${data.days} hours total` : "");
        const startDate = data.activeBatch?.startDate || data.releaseDate;
        const startDateFormatted = startDate ? new Date(startDate).toLocaleDateString("en-GB") : null;
        const desc = data.description || data.desc || "Learn Islam from the comfort of your home with our comprehensive online courses.";

        return (
          <div
            className="col-lg-4 col-md-6 col-12 mb-4"
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
            key={courseId || index}
          >
            <div
              className="rbt-card variation-01 rbt-hover d-flex flex-column h-100"
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                background: "#ffffff",
                boxShadow: "0 6px 24px rgba(0, 0, 0, 0.06)",
                border: "1px solid #eef2f6",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {/* TOP: Course Thumbnail Image */}
              <div
                className="rbt-card-img"
                style={{
                  width: "100%",
                  height: "220px",
                  overflow: "hidden",
                  position: "relative",
                  backgroundColor: "#f8fafc",
                }}
              >
                <Link
                  href={`/course-details/${courseId}`}
                  style={{ display: "block", width: "100%", height: "100%" }}
                >
                  <img
                    src={image}
                    alt={title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.4s ease",
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/course/default-course.png";
                    }}
                  />
                </Link>
              </div>

              {/* BOTTOM: Course Information */}
              <div
                className="rbt-card-body d-flex flex-column flex-grow-1"
                style={{ padding: "20px 22px 18px" }}
              >
                <div className="rbt-category mb-2">
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#9333ea",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {categoryName}
                  </span>
                </div>

                <h4
                  className="rbt-card-title mb-2"
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "1.4",
                    minHeight: "50px",
                  }}
                >
                  <Link
                    href={`/course-details/${courseId}`}
                    style={{
                      color: "#1e293b",
                      textDecoration: "none",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {title}
                  </Link>
                </h4>

                <div
                  className="lesson-number mb-2"
                  style={{ fontSize: "13px", color: "#64748b", fontWeight: "500" }}
                >
                  <i className="feather-book-open me-1" style={{ color: "#9333ea" }}></i>
                  {lectureCount} {lectureCount === 1 ? "lecture" : "lectures"}
                  {timeSpent && (
                    <span className="lesson-time ms-2">
                      <i className="feather-clock me-1 ms-1" style={{ color: "#9333ea" }}></i>
                      ({timeSpent})
                    </span>
                  )}
                </div>

                <p
                  className="rbt-card-text mb-3 flex-grow-1"
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.6",
                    color: "#64748b",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: "62px",
                  }}
                >
                  {desc}
                </p>

                <div
                  className="rbt-card-bottom d-flex align-items-center justify-content-between pt-3 mt-auto"
                  style={{
                    borderTop: "1px solid #f1f5f9",
                  }}
                >
                  {startDateFormatted ? (
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#64748b",
                        fontWeight: "600",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <i className="feather-calendar" style={{ color: "#9333ea" }}></i> Starts: {startDateFormatted}
                    </span>
                  ) : (
                    <span />
                  )}
                  <button
                    type="button"
                    onClick={(e) => handleEnroll(e, courseId)}
                    className="rbt-btn-link gradient-Registration"
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      fontWeight: "700",
                      fontSize: "14px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      marginLeft: "auto",
                      padding: 0,
                    }}
                  >
                    Enroll now <i className="feather-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {course.length > visibleCount && (
        <div className="col-12 my-4">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              width: "100%",
              maxWidth: "680px",
              margin: "25px auto 10px",
            }}
          >
            {/* Left horizontal line */}
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "linear-gradient(90deg, transparent, #cbd5e1)",
              }}
            />

            {/* Centered View More button */}
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 3)}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                cursor: "pointer",
                color: "#9333ea",
                fontWeight: "600",
                fontSize: "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 24px",
                borderRadius: "9999px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
                transition: "all 0.25s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.background = "linear-gradient(90deg, #9333ea, #a855f7)";
                e.currentTarget.style.borderColor = "#9333ea";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(147, 51, 234, 0.35)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#9333ea";
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.borderColor = "#e2e8f0";
                e.currentTarget.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.04)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>View More</span>
              <i className="feather-chevron-down" style={{ fontSize: "16px" }}></i>
            </button>

            {/* Right horizontal line */}
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "linear-gradient(90deg, #cbd5e1, transparent)",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CourseCardTwo;
