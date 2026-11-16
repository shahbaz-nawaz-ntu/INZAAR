"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import React, { useState, useEffect } from "react";

const CourseActionBottom = ({ checkMatchCourses }) => {
  const path = usePathname();
  const [hideOnScroll, setHideOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ScrollPosition = window.pageYOffset;
      let isHide;
      if (path === "/course-detail-2/[courseId]") {
        isHide = ScrollPosition > 4365 && ScrollPosition < 5609;
      } else {
        isHide = ScrollPosition > 4365;
      }

      setHideOnScroll(isHide);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [path]);
  const handleEnroll = (e) => {
    e.preventDefault();
    const courseId = checkMatchCourses._id || checkMatchCourses.id;
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const targetUrl = `/courses?tab=new&courseId=${courseId}`;
    if (token) {
      window.location.href = `/app${targetUrl}`;
    } else {
      window.location.href = `/app/login?redirect=/courses&tab=new&courseId=${courseId}`;
    }
  };

  return (
    <>
      <div
        className={`rbt-course-action-bottom ${
          hideOnScroll ? "rbt-course-action-active" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="section-title text-center text-md-start">
                <h5 className="title mb--0">{checkMatchCourses.courseTitle || checkMatchCourses.title}</h5>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mt_sm--15">
              <div className="course-action-bottom-right rbt-single-group">
                <div className="rbt-single-list rbt-price large-size justify-content-center">
                  <span className="current-price color-primary" style={{ fontWeight: "700" }}>
                    Free
                  </span>
                </div>
                <div className="rbt-single-list action-btn">
                  <button
                    type="button"
                    onClick={handleEnroll}
                    className="rbt-btn btn-gradient hover-icon-reverse btn-md"
                    style={{ border: "none", cursor: "pointer" }}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Enroll Now</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseActionBottom;
