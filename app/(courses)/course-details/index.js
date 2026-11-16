"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import sal from "sal.js";
import CourseData from "../../../data/course-details/courseData.json";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleThirteen from "@/components/Header/HeaderStyle-Thirteen";
import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import CourseHead from "@/components/Course-Details/Course-Sections/course-head";
import CourseDetailsOne from "@/components/Course-Details/CourseDetails-One";
import CourseActionBottom from "@/components/Course-Details/Course-Sections/Course-Action-Bottom";
import SimilarCourses from "@/components/Course-Details/Course-Sections/SimilarCourses";
import Link from "next/link";

const SingleCourse = ({ getParams }) => {
  const router = useRouter();
  const rawId = getParams?.courseId;
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [similarCourses, setSimilarCourses] = useState([]);

  // Fallback finder from static json
  const localMatch = useMemo(() => {
    const all = [
      ...(CourseData.courseDetails || []),
      ...(CourseData.courseTab || []),
    ];
    const numId = parseInt(rawId, 10);
    return all.find(
      (c) =>
        String(c.id) === String(rawId) ||
        (numId && c.id === numId) ||
        c.courseId === rawId ||
        c._id === rawId
    );
  }, [rawId]);

  useEffect(() => {
    let isMounted = true;

    const fetchCourseDetails = async () => {
      setLoading(true);
      try {
        const apiUrl =
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

        // Try fetching live course from backend
        let liveCourse = null;
        try {
          const res = await axios.get(`${apiUrl}/courses/${rawId}`);
          if (res.data?.success && res.data.data) {
            liveCourse = res.data.data;
          }
        } catch (fetchErr) {
          // Fall back to localMatch if API 404s or is unreachable
          console.warn("Could not fetch course by id from backend, checking fallback:", fetchErr.message);
        }

        const targetData = liveCourse || localMatch;

        if (targetData && isMounted) {
          const courseId = targetData._id || targetData.id || rawId;
          const title = targetData.title || targetData.courseTitle || "Course Details";
          const thumbnail =
            targetData.thumbnail ||
            targetData.courseImg ||
            "/images/course/default-course.png";
          const category =
            targetData.departmentId?.name ||
            (targetData.courseFor && targetData.courseFor.length > 0
              ? targetData.courseFor.join(", ")
              : targetData.category || "IEP Course");
          const desc =
            targetData.description ||
            targetData.desc ||
            "Learn Islam from the comfort of your home with our comprehensive online courses.";
          const totalLecs =
            targetData.totalLectures ||
            (targetData.lectures ? targetData.lectures.length : 0) ||
            targetData.lesson ||
            0;
          const duration =
            targetData.totalTime || targetData.duration || (targetData.days ? `${targetData.days} Weeks` : "N/A");
          const instructor = targetData.instructor || targetData.userName || "Abu Yahya";
          const activeBatch = targetData.activeBatch || null;

          const formatted = {
            id: courseId,
            _id: courseId,
            courseTitle: title,
            title: title,
            category: category,
            courseImg: thumbnail,
            thumbnail: thumbnail,
            desc: desc,
            description: desc,
            lesson: totalLecs,
            student: targetData.batchStrength ? `${targetData.batchStrength} per batch` : "50",
            studentNumber: targetData.batchStrength || 50,
            userName: instructor,
            userCategory: "Islamic Studies & Research",
            userImg: targetData.userImg || "/images/team/avatar.jpg",
            awardImg: targetData.awardImg || "/images/icons/card-icon-1.png",
            sellsType: "Verified",
            star: 5,
            ratingNumber: "(15 reviews)",
            price: targetData.price || 0,
            offPrice: targetData.offPrice || 0,
            days: duration,
            language: "Urdu / English",
            courseAward: targetData.certificateFile ? "Certified Course" : "Completion Certificate",
            date: targetData.createdAt
              ? new Date(targetData.createdAt).toLocaleDateString("en-GB")
              : targetData.date || "12/2026",
            roadmap: [
              { text: "Instructor", desc: instructor },
              { text: "Lectures", desc: `${totalLecs} Lessons` },
              { text: "Duration", desc: duration },
              { text: "Active Batch", desc: activeBatch?.name || "Open Batch" },
              {
                text: "Batch Starts",
                desc: activeBatch?.startDate
                  ? new Date(activeBatch.startDate).toLocaleDateString("en-GB")
                  : "Upcoming",
              },
              {
                text: "Enrollment Ends",
                desc: activeBatch?.enrollmentEndDate
                  ? new Date(activeBatch.enrollmentEndDate).toLocaleDateString("en-GB")
                  : "Open",
              },
              {
                text: "Passing Criteria",
                desc: `${targetData.certificateCriteria || 70}% Required`,
              },
              { text: "Certificate", desc: "Yes (Verified)" },
            ],
            courseOverview: targetData.courseOverview && targetData.courseOverview.length > 0
              ? targetData.courseOverview
              : [
                  {
                    title: "Course Overview",
                    desc: desc,
                    descTwo: "",
                    overviewList:
                      targetData.sections && targetData.sections.length > 0
                        ? targetData.sections.map((s) => ({
                            listItem: typeof s === "string" ? s : s.title || s.name,
                          }))
                        : [
                            {
                              listItem:
                                "Character building and spiritual introspection based directly on the Holy Quran",
                            },
                            {
                              listItem:
                                "Structured guidance for personal morality, family life, and social ethics",
                            },
                            {
                              listItem:
                                "Assignments and knowledge check quizzes evaluated by dedicated moderators",
                            },
                            {
                              listItem:
                                "Official completion certificate unlocked upon achieving 70%+ score",
                            },
                          ],
                  },
                ],
            courseContent:
              targetData.courseContent && targetData.courseContent.length > 0
                ? targetData.courseContent
                : [
                    {
                      title: `Course Curriculum (${totalLecs} Lessons)`,
                      contentList:
                        targetData.lectures && targetData.lectures.length > 0
                          ? targetData.lectures.map((lec, idx) => ({
                              title: `Lecture ${lec.lectureNo || idx + 1}: ${lec.title}`,
                              time: lec.duration ? `${lec.duration} min` : "Lesson",
                              collapsed: idx !== 0,
                              isShow: idx === 0,
                              expand: idx === 0,
                              listItem: [
                                {
                                  text: `Video: ${lec.title}`,
                                  time: lec.duration ? `${lec.duration} mins` : "",
                                  status: true,
                                  playIcon: true,
                                },
                                ...(lec.assignments && lec.assignments.length > 0
                                  ? lec.assignments.map((a) => ({
                                      text: `Assignment: ${a.title || "Task"}`,
                                      time: "",
                                      status: false,
                                      playIcon: false,
                                    }))
                                  : []),
                                ...(lec.quizzes && lec.quizzes.length > 0
                                  ? lec.quizzes.map((q) => ({
                                      text: `Quiz: ${q.title || "Quiz"}`,
                                      time: "",
                                      status: false,
                                      playIcon: false,
                                    }))
                                  : []),
                              ],
                            }))
                          : [
                              {
                                title: "Structured Video Lectures & Assessments",
                                time: duration,
                                collapsed: false,
                                isShow: true,
                                expand: true,
                                listItem: [
                                  {
                                    text: "In-depth video lessons covering foundational spiritual principles",
                                    time: "",
                                    status: true,
                                    playIcon: true,
                                  },
                                  {
                                    text: "Muhaasaba (self-introspection) reflection worksheets",
                                    time: "",
                                    status: false,
                                    playIcon: false,
                                  },
                                  {
                                    text: "End of module assessments and certificate verification",
                                    time: "",
                                    status: false,
                                    playIcon: false,
                                  },
                                ],
                              },
                            ],
                    },
                  ],
            courseRequirement: targetData.courseRequirement && targetData.courseRequirement.length > 0
              ? targetData.courseRequirement
              : [
                  {
                    title: "Requirements",
                    detailsList: [
                      {
                        listItem:
                          "Open to all students and seekers of Islamic knowledge worldwide.",
                      },
                      {
                        listItem:
                          "A stable internet connection and a smartphone, tablet, or PC.",
                      },
                      {
                        listItem:
                          "A sincere intention to learn, introspect, and apply Quranic character benchmarks in daily life.",
                      },
                    ],
                  },
                ],
            courseInstructor: targetData.courseInstructor && targetData.courseInstructor.length > 0
              ? targetData.courseInstructor
              : [
                  {
                    title: "About The Instructor",
                    body: [
                      {
                        id: 1,
                        name: instructor,
                        role: "Author & Renowned Islamic Scholar",
                        desc: "Abu Yahya is a distinguished author, novelist, and Islamic scholar who holds a Master's degree in Islamic Studies and Computer Sciences, and a PhD in Islamic Studies.",
                        img: "/images/team/avatar.jpg",
                        social: [
                          { link: "https://www.facebook.com/", icon: "facebook" },
                          { link: "https://twitter.com/", icon: "twitter" }
                        ]
                      }
                    ]
                  }
                ],
            featuredReview: targetData.featuredReview || [],
            relatedCourse: targetData.relatedCourse || [],
            similarCourse: [],
          };

          setCourse(formatted);

          // Fetch similar courses
          try {
            const relRes = await axios.get(`${apiUrl}/courses/public?limit=4`);
            if (relRes.data?.success && Array.isArray(relRes.data.data)) {
              const relList = relRes.data.data
                .filter((c) => String(c._id) !== String(courseId))
                .slice(0, 3)
                .map((rc) => ({
                  id: rc._id,
                  link: `/course-details/${rc._id}`,
                  img: rc.thumbnail || "/images/course/default-course.png",
                  title: rc.title,
                  courseTitle: rc.title,
                  lesson: rc.totalLectures || 0,
                  student: rc.batchStrength || 50,
                  rating: 5,
                  price: rc.price || 0,
                  offPrice: rc.offPrice || 0,
                  desc: rc.description || "",
                  avatar: "/images/team/avatar.jpg",
                  author: rc.instructor?.name || "Abu Yahya",
                  post: "Islamic Studies",
                }));
              setSimilarCourses(relList);
            }
          } catch (simErr) {
            // Ignore similar course error
          }
        }
      } catch (err) {
        console.error("Error loading course details:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchCourseDetails();

    return () => {
      isMounted = false;
    };
  }, [rawId, localMatch]);

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, [course]);

  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleThirteen headerSticky="rbt-sticky" headerType="" />
          <Cart />

          {loading ? (
            <div className="rbt-course-details-area ptb--60">
              <div className="container">
                {/* Top Breadcrumb & Title Skeleton */}
                <div style={{ marginBottom: "35px" }}>
                  <div
                    style={{
                      height: "16px",
                      width: "180px",
                      background: "#e2e8f0",
                      borderRadius: "4px",
                      marginBottom: "14px",
                    }}
                    className="animate-pulse"
                  />
                  <div
                    style={{
                      height: "38px",
                      width: "60%",
                      background: "#e2e8f0",
                      borderRadius: "8px",
                      marginBottom: "16px",
                    }}
                    className="animate-pulse"
                  />
                  <div
                    style={{
                      height: "16px",
                      width: "45%",
                      background: "#f1f5f9",
                      borderRadius: "4px",
                    }}
                    className="animate-pulse"
                  />
                </div>

                <div className="row g-5">
                  {/* Left Column Skeleton */}
                  <div className="col-lg-8">
                    {/* Big Course Banner Skeleton */}
                    <div
                      style={{
                        height: "400px",
                        width: "100%",
                        background: "#e2e8f0",
                        borderRadius: "14px",
                        marginBottom: "30px",
                      }}
                      className="animate-pulse"
                    />

                    {/* Nav Tabs Skeleton */}
                    <div style={{ display: "flex", gap: "10px", marginBottom: "30px" }}>
                      <div
                        style={{
                          height: "42px",
                          width: "115px",
                          background: "#e2e8f0",
                          borderRadius: "8px",
                        }}
                        className="animate-pulse"
                      />
                      <div
                        style={{
                          height: "42px",
                          width: "115px",
                          background: "#f1f5f9",
                          borderRadius: "8px",
                        }}
                        className="animate-pulse"
                      />
                      <div
                        style={{
                          height: "42px",
                          width: "115px",
                          background: "#f1f5f9",
                          borderRadius: "8px",
                        }}
                        className="animate-pulse"
                      />
                    </div>

                    {/* Overview Box Skeleton */}
                    <div
                      style={{
                        background: "#ffffff",
                        borderRadius: "14px",
                        padding: "30px",
                        border: "1px solid #eef2f6",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                      }}
                    >
                      <div
                        style={{
                          height: "24px",
                          width: "220px",
                          background: "#e2e8f0",
                          borderRadius: "4px",
                          marginBottom: "20px",
                        }}
                        className="animate-pulse"
                      />
                      <div
                        style={{
                          height: "14px",
                          width: "100%",
                          background: "#f1f5f9",
                          borderRadius: "4px",
                          marginBottom: "12px",
                        }}
                        className="animate-pulse"
                      />
                      <div
                        style={{
                          height: "14px",
                          width: "95%",
                          background: "#f1f5f9",
                          borderRadius: "4px",
                          marginBottom: "12px",
                        }}
                        className="animate-pulse"
                      />
                      <div
                        style={{
                          height: "14px",
                          width: "85%",
                          background: "#f1f5f9",
                          borderRadius: "4px",
                          marginBottom: "12px",
                        }}
                        className="animate-pulse"
                      />
                      <div
                        style={{
                          height: "14px",
                          width: "60%",
                          background: "#f1f5f9",
                          borderRadius: "4px",
                        }}
                        className="animate-pulse"
                      />
                    </div>
                  </div>

                  {/* Right Column / Sticky Sidebar Skeleton */}
                  <div className="col-lg-4">
                    <div
                      style={{
                        background: "#ffffff",
                        borderRadius: "14px",
                        padding: "24px",
                        border: "1px solid #eef2f6",
                        boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
                      }}
                    >
                      {/* Video/Image Skeleton */}
                      <div
                        style={{
                          height: "220px",
                          width: "100%",
                          background: "#e2e8f0",
                          borderRadius: "10px",
                          marginBottom: "20px",
                        }}
                        className="animate-pulse"
                      />

                      {/* Enroll Button Skeleton */}
                      <div
                        style={{
                          height: "48px",
                          width: "100%",
                          background: "#e2e8f0",
                          borderRadius: "8px",
                          marginBottom: "16px",
                        }}
                        className="animate-pulse"
                      />

                      {/* Free Note Skeleton */}
                      <div
                        style={{
                          height: "16px",
                          width: "65%",
                          background: "#f1f5f9",
                          borderRadius: "4px",
                          margin: "0 auto 25px",
                        }}
                        className="animate-pulse"
                      />

                      {/* Info Rows Skeleton */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        {[1, 2, 3, 4, 5, 6].map((idx) => (
                          <div
                            key={idx}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              borderBottom: "1px solid #f8fafc",
                              paddingBottom: "10px",
                            }}
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
                                height: "14px",
                                width: "40%",
                                background: "#e2e8f0",
                                borderRadius: "4px",
                              }}
                              className="animate-pulse"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : course ? (
            <>
              <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
                <CourseHead checkMatch={course} />
              </div>

              <div className="rbt-course-details-area ptb--60">
                <div className="container">
                  <div className="row g-5">
                    <CourseDetailsOne checkMatchCourses={course} />
                  </div>
                </div>
              </div>

              <CourseActionBottom checkMatchCourses={course} />

              {similarCourses && similarCourses.length > 0 && (
                <div className="rbt-related-course-area bg-color-white pt--60 rbt-section-gapBottom">
                  <SimilarCourses checkMatchCourses={similarCourses} />
                </div>
              )}
            </>
          ) : (
            <div className="container py-5 my-5 text-center">
              <h2 className="text-gray-700 mb-3">Course Not Found</h2>
              <p className="text-muted mb-4">
                The course you are looking for may have been updated or moved.
              </p>
              <Link
                href="/course-masonry"
                className="rbt-btn btn-gradient radius-round btn-md"
              >
                Browse All Courses
              </Link>
            </div>
          )}

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default SingleCourse;
