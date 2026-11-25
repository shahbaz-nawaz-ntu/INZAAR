import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

import BlogGrid from "../Blogs/BlogGrid";
import TestimonialFour from "../Testimonials/Testimonial-Four";

import TeamData from "../../data/elements/team.json";
import AccordionData from "../../data/elements/accordion.json";
import CourseDetails from "../../data/course-details/courseData.json";

// import brand1 from "../../public/images/brand/partner-5.webp";
// import brand2 from "../../public/images/brand/partner-1.webp";
// import brand3 from "../../public/images/brand/partner-6.webp";
// import brand4 from "../../public/images/brand/partner-3.webp";
import faqMoon from "../../public/images/shape/faq-moon.png";
import faqShape from "../../public/images/shape/a-dubble-shape.png";
import faqImg from "../../public/images/others/faq-02.png";
import faqImg2 from "../../public/images/others/faq-01.png";
import lightShape from "../../public/images/shape/a-light-shape.png";
import star from "../../public/images/shape/a-all-star.png";
import arabianImg from "../../public/images/others/arabian.png";
import readQuranImg from "../../public/images/others/read-quran.png";
import IslamicCenterBanner from "./IslamicCenter-Banner";
import VolunteerPage from "../26-islamic-center/volunteer";
import DonatePage from "./Donation";
import imgPati from "../../public/images/Pati.png"
// import VolunteerPage from "../../components/26-islamic-center/vounteer";
// import donationImage from "../../public/images/banner/donations.png";



const IslamicCenter = ({ blogdata }) => {
  let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseDetails));
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchFeatured = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";
        const res = await axios.get(`${apiUrl}/courses/public?limit=3`);
        if (isMounted && res.data?.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
          setFeaturedCourses(res.data.data);
        }
      } catch (err) {
        console.warn("Could not fetch featured courses, using fallback:", err.message);
      } finally {
        if (isMounted) setLoadingCourses(false);
      }
    };
    fetchFeatured();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleEnroll = (courseId) => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const targetUrl = `/courses?tab=new&courseId=${courseId}`;
    if (token) {
      window.location.href = `/app${targetUrl}`;
    } else {
      window.location.href = `/app/login?redirect=/courses&tab=new&courseId=${courseId}`;
    }
  };

  const displayedCourses = featuredCourses.length > 0 ? featuredCourses : getAllCourse.slice(30, 33);
  return (
    <>
      <main className="rbt-main-wrapper">
        <IslamicCenterBanner />
        <div className="rbt-feature-area rbt-section-gap3Top py-5">
          <div className="container">
            <div className="row g-5 ">
              <div className="col-lg-4 col-md-6 col-12 ">
                <div className="rbt-feature-card-two">
                  <div className="feature-body ">
                    <div className="icon bg-color-primary">
                      <img
                        src="/images/Group.png"
                        alt="Book Icon"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </div>
                    <h5 className="title w-500 mb--10 mt--15">
                      Learn at Your Own Pace                    </h5>
                    <p className="description" style={{ fontSize: "12px" }}>
                      Learn anytime, progress at your pace.   </p>               </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">

                <div className="rbt-feature-card-two">
                  <div className="feature-body">
                    <div className="icon bg-color-secondary">
                      <img
                        src="/images/Group 339.png"
                        alt="Book Icon"
                        style={{ width: "36px", height: "36px" }}
                      />
                    </div>

                    <h5 className="title w-500 mb--10 mt--15">
                      Track Progress Easily                    </h5>
                    <p className="description" style={{ fontSize: "12px" }}>
                      Clear progress tracking for instructors and students.                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="rbt-feature-card-two">
                  <div className="feature-body">
                    <div className="icon bg-color-pink">
                      <img
                        src="/images/Group(1).png"
                        alt="Book Icon"
                        style={{ width: "36px", height: "36px" }}
                      />                    </div>
                    <h5 className="title w-500 mb--10 mt--15">
                      Stay Connected and Engaged                    </h5>
                    <p className="description" style={{ fontSize: "12px" }}>
                      Quizzes, videos, and feedback make learning interactive.                   </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rbt-about-area rbt-section-gap3Top rbt-section-gapBottom">
          <div className="about-style-4 version-03">
            <div className="light-shadow">
              <Image src={lightShape} width={305} height={578} alt="Shape" />
            </div>
            <div className="dubble-shape">
              <Image src={faqShape} width={108} height={118} alt="Shape" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-12">
                  <div className="about-thumb">
                    <div className="stars">
                      <Image src={star} width={31} height={32} alt="image" />
                    </div>
                    <div className="thumb-1 d-md-block d-none">
                      <Image
                        style={{ marginLeft: "0px" }}
                        data-parallax='{"x": 0, "y": -30}'
                        src={arabianImg}
                        width={372}
                        height={410}
                        alt="Feature"
                      />
                    </div>
                    <div className="thumb-2">
                      <Image
                        data-parallax='{"x": 0, "y": 30}'
                        src={imgPati}
                        width={372}
                        height={410}
                        alt="Feature"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-12">
                  <div className="content">
                    <div className="section-title">
                      <span className="dimension-btn">
                        <span className="gradient-text">About Us </span>
                      </span>
                      <h2 className="title w-600">
                        Fostering{" "}
                        <span className="gradient-text-about">
                          Faith and Knowledge
                        </span>{" "}

                      </h2>
                      <p className="mt--15">
                        We are dedicated to fostering spiritual growth and academic
                        excellence through accessible online learning.
                      </p>
                      <ul className="mt--30 mb--50">
                        <li>
                          <span className="icon bg-primary-opacity">
                            <img src="/images/Group 25.png" alt="Course Automation" width="20" height="20" />
                          </span>
                          <span className="text">Course Automation</span>
                        </li>
                        <li>
                          <span className="icon bg-secondary-opacity">
                            <img src="/images/Group 26.png" alt="Complaint Desk" width="20" height="20" />
                          </span>
                          <span className="text">Complaint Desk</span>
                        </li>
                        <li>
                          <span className="icon bg-primary-opacity">
                            <img src="/images/Group 27.png" alt="Free Islamic Learning" width="20" height="20" />
                          </span>
                          <span className="text">Free Islamic Learning</span>
                        </li>
                        <li>
                          <span className="icon bg-secondary-opacity">
                            <img src="/images/Group 24.png" alt="Completion Certificate" width="20" height="20" />
                          </span>
                          <span className="text">Completion Certificate</span>
                        </li>
                      </ul>

                      <Link
                        className="rbt-btn btn-gradient hover-icon-reverse"
                        href="/about"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Learn More</span>
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
              </div>
            </div>
          </div>
        </div>

        <div className="rbt-course-area inzaar-learn-courses-section rbt-sec-cir-shadow-1 bg-color-extra2 rbt-section-gap">
          <div className="gradient-shape-top"></div>
          <div className="gradient-shape-bottom"></div>
          <div className="container">
            <div className="row mb--45 mb_sm--30">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h2 className="title w-600">
                    Learn From <span className="gradient-Registration">Us</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="row g-3 g-sm-4 g-xl-5 justify-content-center">
              {displayedCourses.map((data, index) => {
                const courseId = data._id || data.id;
                const image = data.thumbnail || data.courseImg || "/images/course/default-course.png";
                const title = data.title || data.courseTitle;
                const lectureCount = data.totalLectures || data.lesson || 0;
                const timeSpent = data.totalTime || data.duration || (data.days ? `${data.days} hours total` : "");
                const desc = data.description || data.desc || "Learn Islam from the comfort of your home with our comprehensive online courses.";

                return (
                  <div className="col-lg-4 col-md-6 col-12 d-flex" key={courseId || index}>
                    <div className="rbt-card variation-04 rbt-hover w-100 inzaar-course-card">
                      <div className="rbt-card-img inzaar-course-card-img">
                        <Link href={`/course-details/${courseId}`}>
                          <img
                            src={image}
                            alt={title}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/images/course/default-course.png";
                            }}
                          />
                        </Link>
                      </div>
                      <div className="rbt-card-body inzaar-course-card-body">
                        <ul className="rbt-meta inzaar-course-meta">
                          <li>
                            <i className="feather-book"></i>
                            <span>{lectureCount} {lectureCount === 1 ? "Lesson" : "Lessons"}</span>
                          </li>
                          {timeSpent && (
                            <li>
                              <i className="feather-clock"></i>
                              <span>{timeSpent}</span>
                            </li>
                          )}
                        </ul>

                        <h4 className="rbt-card-title inzaar-course-title">
                          <Link href={`/course-details/${courseId}`}>
                            {title}
                          </Link>
                        </h4>

                        <div className="width-fix flex-grow-1">
                          <p className="rbt-card-text inzaar-course-desc">
                            {desc}
                          </p>
                        </div>

                        <div className="inzaar-course-footer">
                          <button
                            type="button"
                            onClick={() => handleEnroll(courseId)}
                            className="rbt-btn-link inzaar-enroll-btn"
                          >
                            <span>Enroll Course</span>
                            <i className="feather-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="row inzaar-courses-cta">
              <div className="col-lg-12">
                <div className="load-more-btn text-center">
                  <Link
                    className="rbt-btn btn-gradient btn-lg btn-mobile hover-icon-reverse"
                    href="/course-masonry"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">View All Course</span>
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
          </div>
        </div>

        <div className="rbt-accordion-area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row row--30 mt_dec--30">
              <div className="col-lg-6 mt--30">
                <div className="section-title mb--50">
                  <h2 className="title w-600">FAQ&apos;S</h2>
                </div>
                <div className="rbt-accordion-style rbt-accordion-01 accordion">
                  <div className="accordion" id="accordionExample">
                    {AccordionData.accordionFive.map((item, index) => (
                      <div key={index} className="accordion-item card">
                        <h2
                          className="accordion-header card-header"
                          id={item.headingId}
                        >
                          <button
                            className={`accordion-button ${!item.expanded ? "collapsed" : ""
                              }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${item.id}`}
                            aria-expanded={item.expanded}
                            aria-controls={item.id}
                          >
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={item.id}
                          className={`accordion-collapse collapse ${item.expanded ? "show" : ""
                            }`}
                          aria-labelledby={item.headingId}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body card-body">
                            {item.answer.map((paragraph, idx) => (
                              <p key={idx} className="mb--15">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt--30">
                <div className="accordion-thumbnail">
                  <div className="moon">
                    <Image src={faqMoon} width={64} height={67} alt="Moon" />
                  </div>
                  <div className="shape">
                    <Image
                      src={faqShape}
                      width={108}
                      height={118}
                      alt="Shape"
                    />
                  </div>
                  <div className="thumb-1 img-fluid rounded-top">
                    <Image
                      style={{ borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}
                      data-parallax='{"x": 0, "y": -30}'
                      src={faqImg}
                      width={390}
                      height={430}
                      unoptimized={true}
                      alt="Thumbnail"
                    />
                  </div>
                  <div className="thumb-2">
                    <Image
                      data-parallax='{"x": 0, "y": 30}'
                      src={faqImg2}
                      width={300}
                      height={340}
                      unoptimized={true}
                      alt="Thumbnail"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* <div className="rbt-team-area bg-color-extra2 rbt-section-gap rbt-sec-cir-shadow-1">
          <div className="gradient-shape-top version-03"></div>
          <div className="gradient-shape-bottom version-03"></div>
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    Team Members
                  </span>
                  <h2 className="title w-600">Our Expert Instructors</h2>
                </div>
              </div>
            </div>
            <div className="row row--15 mt_dec--30">
              {TeamData &&
                TeamData.teamTwo.map((data, index) => (
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30"
                    key={index}
                  >
                    {data.details.map((item, innerIndex) => (
                      <div className="team" key={innerIndex}>
                        <div className="thumbnail">
                          <Image
                            src={item.img}
                            width={415}
                            height={555}
                            priority
                            alt="Blog Images"
                          />
                        </div>
                        <div className="content">
                          <h4 className="title">{item.name}</h4>
                          <p className="designation">{item.type}</p>
                        </div>
                        <ul className="social-icon">
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ))}

                  </div>
                ))}
            </div>
          </div>
        
        </div> */}
        <VolunteerPage />

        {/* <div className="rbt-testimonial-area bg-color-white rbt-section-gap">
          <TestimonialFour leftContent={true} />
          <DonatePage/>
          <div className="container">
            <div className="mt--80">
              <div className="rbt-brand-title-wrap">
                <h5 className="rbt-brand-title w-600 text-center mb-0">
                  Making
                  <span className="theme-gradient ms-2">
                    sensitive
                  </span>{" "}
                  more valuable for{" "}
                  <span className="theme-gradient me-2">companies</span>
                  like
                </h5>
              </div>
              <ul className="brand-list brand-style-3 justify-content-start justify-content-lg-between mt--30">
                <li>
                  <a href="#">
                    <Image
                      src={brand1}
                      width={120}
                      height={135}
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src={brand2}
                      width={120}
                      height={135}
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src={brand1}
                      width={120}
                      height={135}
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src={brand3}
                      width={120}
                      height={135}
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src={brand4}
                      width={120}
                      height={135}
                      alt="Brand Image"
                    />
                  </a>
                </li>{" "}
                <li>
                  <a href="#">
                    <Image
                      src={brand2}
                      width={120}
                      height={135}
                      alt="Brand Image"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* <div className="rbt-blog-area rbt-sec-cir-shadow-1 rbt-section-gap bg-color-extra2 rbt-section-box">
          <div className="gradient-shape-top version-02"></div>
          <div className="gradient-shape-bottom version-02"></div>
          <div className="container">
            <div className="row mb--60 mb_sm--50 g-5 align-items-end">
              <div className="col-lg-8 col-md-8 col-12">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">
                    News &amp; Blog
                  </span>
                  <h2 className="title w-600">
                    Have a Look on{" "}
                    <span className="theme-gradient">Our Update</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="load-more-btn text-start text-md-end">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    href="/blog-list"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">View All Posts</span>
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
            <BlogGrid
              isPagination={false}
              top={false}
              start={6}
              end={9}
              blogdata={blogdata}
            />
          </div>
        </div> */}

        <TestimonialFour leftContent={true} />

        <DonatePage />

      </main>
    </>
  );
};

export default IslamicCenter;