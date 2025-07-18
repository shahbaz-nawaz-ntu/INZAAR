"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Overview = ({ checkMatchCourses }) => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const { title, desc, descTwo, overviewList } = checkMatchCourses;

  const addClass = ["/course-detail-8"].some((path) =>
    pathname.startsWith(path)
  );
  return (
    <>
      <div
        className={`rbt-course-feature-box overview-wrapper rbt-shadow-box ${
          addClass ? "rbt-border-with-box" : "mt--30"
        } has-show-more ${toggle ? "active" : ""}`}
        id="overview"
      >
        <div className="rbt-course-feature-inner has-show-more-inner-content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">{title}</h4>
          </div>
          <p>{desc}</p>
          {/* <p>{descTwo}</p> */}
        </div>
        {/* <div
          className={`rbt-show-more-btn ${toggle ? "active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          
        </div> */}
      </div>
    </>
  );
};

export default Overview;
