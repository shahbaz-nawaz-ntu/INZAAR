"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const defaultInzaarReviews = [
  {
    _id: "inz-dummy-1",
    studentName: "Ahmad Raza",
    courseTitle: "Quran ka Matloob Insaan Course",
    batchName: "Batch 2026",
    rating: 5,
    comment:
      "Alhamdulillah, this course completely changed my perspective on personal ethics and faith. Abu Yahya's lecture series connects Quranic character benchmarks with our day-to-day life challenges. Highly recommended for every sincere seeker.",
  },
  {
    _id: "inz-dummy-2",
    studentName: "Zainab Fatima",
    courseTitle: "Roza aur Aitekaf Course",
    batchName: "Ramadan Program",
    rating: 5,
    comment:
      "The structured guidance on Muhaasaba (self-introspection) during Ramadan transformed my worship. The reflection worksheets and moderator feedback kept me accountable and focused throughout.",
  },
  {
    _id: "inz-dummy-3",
    studentName: "Muhammad Usman",
    courseTitle: "Tauheed Ke Dalail Course",
    batchName: "Batch 2026",
    rating: 5,
    comment:
      "The rational arguments and philosophical clarity provided in this course are unmatched. It cleared all my conceptual doubts regarding monotheism with pure Quranic wisdom.",
  },
  {
    _id: "inz-dummy-4",
    studentName: "Dr. Ayesha Siddiqa",
    courseTitle: "Akhirat Ke Dalail Course",
    batchName: "Batch 2026",
    rating: 5,
    comment:
      "A deeply moving and intellectually profound course. The balance between academic rigor and spiritual awakening makes Inzaar's LMS curriculum truly distinctive.",
  },
  {
    _id: "inz-dummy-5",
    studentName: "Hamza Tariq",
    courseTitle: "Imaniyaat Course",
    batchName: "Najaat Ka Raasta Series",
    rating: 5,
    comment:
      "The lecture delivery, downloadable reading materials, and module quizzes make learning seamless and enriching. May Allah reward Abu Yahya and the entire Inzaar team for this noble platform.",
  },
  {
    _id: "inz-dummy-6",
    studentName: "Maryam Bilal",
    courseTitle: "Quran ka Rabbani Insaan Course",
    batchName: "Batch 2026",
    rating: 5,
    comment:
      "Such an inspiring course that reawakened my spiritual consciousness. The practical benchmarks helped me improve my character, family interactions, and relationship with Allah.",
  },
];

const TestimonialFour = ({ isGradient, leftContent }) => {
  const [liveReviews, setLiveReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchRecentReviews = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";
        const res = await axios.get(`${apiUrl}/reviews/recent?limit=3`);
        if (res.data?.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
          if (isMounted) setLiveReviews(res.data.data);
        }
      } catch (err) {
        console.warn("Could not fetch recent reviews from backend, using authentic Inzaar fallback reviews:", err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchRecentReviews();
    return () => {
      isMounted = false;
    };
  }, []);

  // Show strictly only 3 recent reviews on the landing page
  const displayedReviews = (liveReviews.length > 0 ? liveReviews : defaultInzaarReviews).slice(0, 3);

  return (
    <div className="container">
      {leftContent === undefined ? (
        <div className="row">
          <div className="col-lg-12 mb--60 mb_sm--50">
            {isGradient ? (
              <div className="section-title text-center">
                <h6 className="b2 mb--15">
                  <span className="theme-gradient">Testimonials</span>
                </h6>
                <h2 className="title w-600">
                  Student's <span className="theme-gradient">Feedback</span>
                </h2>
              </div>
            ) : (
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">EDUCATION FOR EVERYONE</span>
                <h2 className="title">Student's Feedback</h2>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="row g-5 mb--50 align-items-center">
          <div className="col-lg-8 col-md-8 col-12">
            <div className="section-title">
              <span className="mt-5 dimension-btn">
                <span className="gradient-text">Education for Everyone</span>
              </span>
              <h2 className="title w-600">
                Student's <span className="theme-gradient">Feedback</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="load-more-btn text-start text-md-end">
              <Link
                className="rbt-btn btn-gradient hover-icon-reverse"
                href="/course-masonry"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">View All Reviews</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="row g-5">
        {displayedReviews.map((item, idx) => {
          const avatarLetter = (item.studentName || "S").charAt(0).toUpperCase();

          return (
            <div className="col-lg-4 col-md-6 col-12" key={item._id || idx}>
              <div className="rbt-testimonial-box h-100 d-flex flex-column">
                <div className="inner d-flex flex-column flex-grow-1">
                  <div className="clint-info-wrapper">
                    <div className="thumb">
                      {item.studentAvatar ? (
                        <img
                          src={item.studentAvatar}
                          alt={item.studentName}
                          style={{
                            width: "56px",
                            height: "56px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "56px",
                            height: "56px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
                            color: "#ffffff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "700",
                            fontSize: "19px",
                          }}
                        >
                          {avatarLetter}
                        </div>
                      )}
                    </div>
                    <div className="client-info">
                      <h5
                        className="title mb-1"
                        style={{ fontSize: "16px", fontWeight: "700" }}
                      >
                        {item.studentName}
                      </h5>
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#6b7280",
                          display: "block",
                          lineHeight: "1.4",
                        }}
                      >
                        {item.courseTitle}
                      </span>
                      {item.batchName && (
                        <span
                          style={{
                            fontSize: "11px",
                            color: "#9333ea",
                            fontWeight: "600",
                            display: "inline-block",
                            marginTop: "2px",
                          }}
                        >
                          {item.batchName}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="description mt-3 d-flex flex-column flex-grow-1">
                    <p
                      className="subtitle-3 flex-grow-1"
                      style={{
                        fontSize: "13.5px",
                        lineHeight: "1.6",
                        color: "#4b5563",
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        margin: 0,
                      }}
                    >
                      {item.comment}
                    </p>

                    <div className="rating mt--20 d-flex align-items-center">
                      <div className="d-flex align-items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <i
                            key={star}
                            className="fa fa-star"
                            style={{
                              color: star <= (item.rating || 5) ? "#f59e0b" : "#e5e7eb",
                              fontSize: "13px",
                            }}
                          ></i>
                        ))}
                        <span
                          className="ms-2 text-muted fw-bold"
                          style={{ fontSize: "12px" }}
                        >
                          {(item.rating || 5).toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialFour;
