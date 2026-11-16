import Image from "next/image";
import Link from "next/link";
import React from "react";

const SimilarCourses = ({ checkMatchCourses }) => {
  if (!checkMatchCourses || checkMatchCourses.length === 0) {
    return null;
  }

  return (
    <>
      <div className="container">
        <div className="section-title mb--30">
          <span className="subtitle bg-primary-opacity">
            More Similar Courses
          </span>
          <h4 className="title">Related Courses</h4>
        </div>
        <div className="row g-5">
          {checkMatchCourses.map((item, innerIndex) => {
            const courseLink = item.link || `/course-details/${item.id}`;
            const courseTitle = item.title || item.courseTitle || "Course";
            const thumbnail = item.img || "/images/course/default-course.png";
            const desc = item.desc || "Learn Islam from the comfort of your home with our comprehensive online courses.";

            return (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 d-flex"
                key={item.id || innerIndex}
              >
                <div
                  className="rbt-card variation-01 rbt-hover w-100"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <div className="rbt-card-img" style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                    <Link href={courseLink} style={{ display: "block", width: "100%", height: "100%" }}>
                      <Image
                        src={thumbnail}
                        width={355}
                        height={200}
                        alt={courseTitle}
                        unoptimized={true}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      {item.discount > 0 ? (
                        <div className="rbt-badge-3 bg-white">
                          <span>-{item.discount}%</span>
                          <span>Off</span>
                        </div>
                      ) : null}
                    </Link>
                  </div>
                  <div
                    className="rbt-card-body"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                      padding: "20px",
                    }}
                  >
                    <div className="rbt-card-top mb-2">
                      <div className="rbt-review">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rating-count ms-1">
                          ({item.rating || 5} Reviews)
                        </span>
                      </div>
                      <div className="rbt-bookmark-btn">
                        <Link
                          className="rbt-round-btn"
                          title="Bookmark"
                          href="#"
                        >
                          <i className="feather-bookmark"></i>
                        </Link>
                      </div>
                    </div>

                    <h4
                      className="rbt-card-title mb-2"
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        minHeight: "48px",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        lineHeight: "1.35",
                      }}
                    >
                      <Link href={courseLink}>{courseTitle}</Link>
                    </h4>

                    <ul className="rbt-meta mb-3" style={{ fontSize: "13px" }}>
                      <li>
                        <i className="feather-book"></i>
                        {item.lesson || 0} Lessons
                      </li>
                      <li>
                        <i className="feather-users"></i>
                        {item.student || 50} Students
                      </li>
                    </ul>

                    {/* Clamped description with ellipsis so card height and grid are never affected */}
                    <p
                      className="rbt-card-text mb-3"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        minHeight: "42px",
                        lineHeight: "1.5",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      {desc}
                    </p>

                    <div
                      className="rbt-author-meta mb-3"
                      style={{
                        marginTop: "auto",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <div className="rbt-avater">
                        <Image
                          src={item.avatar || "/images/team/avatar.jpg"}
                          width={33}
                          height={33}
                          alt={item.author || "Instructor"}
                          unoptimized={true}
                          style={{ borderRadius: "50%", objectFit: "cover" }}
                        />
                      </div>
                      <div className="rbt-author-info">
                        By <span className="fw-bold">{item.author || "Abu Yahya"}</span>
                        {item.post && (
                          <>
                            {" "}In <span>{item.post}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div
                      className="rbt-card-bottom pt-3"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid #f1f5f9",
                      }}
                    >
                      <div className="rbt-price">
                        {Number(item.price) > 0 ? (
                          <>
                            <span className="current-price" style={{ fontWeight: "700" }}>
                              ${item.price}
                            </span>
                            {item.offPrice ? (
                              <span className="off-price text-muted ms-2">
                                ${item.offPrice}
                              </span>
                            ) : null}
                          </>
                        ) : (
                          <span
                            className="current-price"
                            style={{ color: "#10b981", fontWeight: "700" }}
                          >
                            Free
                          </span>
                        )}
                      </div>
                      <Link className="rbt-btn-link" href={courseLink}>
                        Learn More<i className="feather-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SimilarCourses;
