"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import sal from "sal.js";
import Image from "next/image";

import AccordionData from "@/data/elements/accordion";
import faqShape from "@/public/images/shape/a-dubble-shape.png";
import faqImg from "@/public/images/others/faq-02.png";
import faqImg2 from "@/public/images/others/faq-01.png";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import VolunteerPage from "@/components/26-islamic-center/volunteer";


const AboutPage = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>

      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
          <BreadCrumb title="About" text="About" />

          <div className="rbt-feature-area rbt-section-gap3Top">
            <div className="container">
              <div className="row g-5">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="rbt-feature-card-two">
                    <div className="feature-body">
                      <div className="icon bg-color-primary">
                        <i class="fa fa-book"></i>
                      </div>
                      <h5 className="title w-300 mb--10 mt--15">
                        Learn at Your Own Pace                    </h5>
                      <p>
                        Learn anytime, progress at your pace.   </p>               </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="rbt-feature-card-two">
                    <div className="feature-body">
                      <div className="icon bg-color-secondary">
                        <i className="feather-book"></i>
                      </div>
                      <h5 className="title w-500 mb--10 mt--15">
                        Track Progress Easily                    </h5>
                      <p>
                        Clear progress tracking for instructors and students.                    </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="rbt-feature-card-two">
                    <div className="feature-body">
                      <div className="icon bg-color-pink">
                        <i className="feather-award"></i>
                      </div>
                      <h5 className="title w-500 mb--10 mt--15">
                        Stay Connected and Engaged                    </h5>
                      <p className="description">
                        Quizzes, videos, and feedback make learning interactive.                   </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

          <VolunteerPage />

          <div className="rbt-accordion-area bg-color-white rbt-section-gap">
                    <div className="container">
                      <div className="row row--30 mt_dec--30">
                        <div className="col-lg-6 mt--30">
                          <div className="section-title mb--50">
                            <span className="subtitle bg-primary-opacity">
                              FAQ'S
                            </span>
                            <h2 className="title w-600">
                              Have Questions? We've Got Answers {" "}
                            </h2>
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
                                      className={`accordion-button ${
                                        !item.expanded ? "collapsed" : ""
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
                                    className={`accordion-collapse collapse ${
                                      item.expanded ? "show" : ""
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
                                style={{borderTopLeftRadius:"50%", borderTopRightRadius:"50%"}}
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

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default AboutPage;
