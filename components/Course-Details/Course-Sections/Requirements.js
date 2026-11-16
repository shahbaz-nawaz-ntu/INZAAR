import React from "react";

const Requirements = ({ checkMatchCourses }) => {
  const list = checkMatchCourses?.detailsList || [];
  return (
    <>
      <div className="col-lg-6">
        <div className="section-title">
          <h4 className="rbt-title-style-3 mb--20">{checkMatchCourses?.title || "Requirements"}</h4>
        </div>
        <ul className="rbt-list-style-1">
          {list.map((item, innerIndex) => (
            <li key={innerIndex}>
              <i className="feather-check"></i>
              {typeof item === "string" ? item : item?.listItem}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Requirements;
