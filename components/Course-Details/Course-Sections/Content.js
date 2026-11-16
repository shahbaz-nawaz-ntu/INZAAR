import Link from "next/link";
import React from "react";

const Content = ({ checkMatchCourses }) => {
  const contentList = checkMatchCourses?.contentList || [];
  return (
    <>
      <div className="rbt-course-feature-inner">
        <div className="section-title">
          <h4 className="rbt-title-style-3">{checkMatchCourses?.title || "Curriculum"}</h4>
        </div>
        <div className="rbt-accordion-style rbt-accordion-02 accordion">
          <div className="accordion" id="accordionExampleb2">
            {contentList.map((item, innerIndex) => (
              <div className="accordion-item card" key={innerIndex}>
                <h2
                  className="accordion-header card-header"
                  id={`headingTwo${innerIndex}`}
                >
                  <button
                    className={`accordion-button ${
                      !item.collapsed ? "collapsed" : ""
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseTwo${innerIndex + 1}`}
                    aria-expanded={item.expand}
                    aria-controls={`collapseTwo${innerIndex + 1}`}
                  >
                    {item.title}
                    {item.time && (
                      <span className="rbt-badge-5 ml--10">{item.time}</span>
                    )}
                  </button>
                </h2>
                <div
                  id={`collapseTwo${innerIndex + 1}`}
                  className={`accordion-collapse collapse ${
                    item.isShow ? "show" : ""
                  }`}
                  aria-labelledby={`headingTwo${innerIndex}`}
                  data-bs-parent="#accordionExampleb2"
                >
                  <div className="accordion-body card-body pr--0">
                    <ul className="rbt-course-main-content liststyle">
                      {(item.listItem || []).map((list, subIndex) => (
                        <li key={subIndex}>
                          <span style={{ display: "inline-flex", alignItems: "center" }}>
                            <div className="course-content-left">
                              {list.playIcon ? (
                                <i className="feather-play-circle"></i>
                              ) : (
                                <i className="feather-file-text"></i>
                              )}
                              <span className="text">{list.text}</span>
                            </div>
                            {list.time && (
                              <div className="course-content-right">
                                <span className="min-lable">{list.time}</span>
                              </div>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
