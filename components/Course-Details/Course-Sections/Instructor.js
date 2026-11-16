import Image from "next/image";
import React from "react";

const Instructor = ({ checkMatchCourses }) => {
  const teacherList =
    checkMatchCourses?.body ||
    (checkMatchCourses?.name ? [checkMatchCourses] : []);

  return (
    <>
      <div className="about-author border-0 pb--0 pt--0">
        <div className="section-title mb--30">
          <h4 className="rbt-title-style-3">
            {checkMatchCourses?.title || "About The Instructor"}
          </h4>
        </div>
        {teacherList.map((teacher, innerIndex) => (
          <div className="media align-items-center" key={innerIndex}>
            <div
              className="thumbnail"
              style={{
                minWidth: "250px",
                maxWidth: "250px",
                height: "250px",
                marginRight: "30px",
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src={teacher.img || "/images/team/avatar.jpg"}
                width={250}
                height={250}
                alt={teacher.name || "Instructor"}
                unoptimized={true}
                style={{
                  width: "100%",
                  height: "100%",
                  minWidth: "250px",
                  maxHeight: "250px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <div className="media-body">
              <div className="author-info">
                <h5
                  className="title mb-1"
                  style={{
                    color: "#1e293b",
                    fontWeight: "700",
                    fontSize: "22px",
                  }}
                >
                  {teacher.name}
                </h5>
                {teacher.role && (
                  <span
                    className="b3 subtitle"
                    style={{
                      color: "#9333ea",
                      fontWeight: "600",
                      display: "block",
                      marginTop: "4px",
                    }}
                  >
                    {teacher.role}
                  </span>
                )}
              </div>
              <div className="content mt-3">
                <p className="description mb-0">{teacher.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Instructor;
