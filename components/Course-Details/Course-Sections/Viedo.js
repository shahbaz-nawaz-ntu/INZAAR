"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "venobox/dist/venobox.min.css";

import { useDispatch, useSelector } from "react-redux";
import { useAppContext } from "@/context/Context";
import { addToCartAction } from "@/redux/action/CartAction";

const Viedo = ({ checkMatchCourses }) => {
  const pathname = usePathname();
  const { cartToggle, setCart } = useAppContext();
  const [toggle, setToggle] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);

  const disableVideo = [
    "/course-detail-2",
    "/course-detail-3",
    "/course-detail-4",
    "/course-detail-5",
    "/course-detail-6",
    "/course-detail-7",
    "/course-detail-8",
  ].some((path) => pathname.startsWith(path));

  const isVideo = ["/course-detail-6"].some((path) =>
    pathname.startsWith(path)
  );

  // =====> Start ADD-To-Cart
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartReducer);

  const [amount, setAmount] = useState(1);

  const addToCartFun = (id, amount, product) => {
    dispatch(addToCartAction(id, amount, product));
    setCart(!cartToggle);
  };

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
    localStorage.setItem("hiStudy", JSON.stringify(cart));
  }, [cart]);

  // =====> For video PopUp
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isHide = currentScrollPos > 200;

      setHideOnScroll(isHide);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!disableVideo ? (
        <Link
          className={`video-popup-with-text video-popup-wrapper text-center popup-video sidebar-video-hidden mb--15 ${
            hideOnScroll ? "d-none" : ""
          }`}
          data-vbtype="video"
          href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
        >
          <div className="video-content">
            {checkMatchCourses.courseImg && (
              <Image
                className="w-100 rbt-radius"
                src={checkMatchCourses.courseImg}
                width={355}
                height={255}
                alt="Video Images"
              />
            )}
            <div className="position-to-top">
              <span className="rbt-btn rounded-player-2 with-animation">
                <span className="play-icon"></span>
              </span>
            </div>
            <span className="play-view-text d-block color-white">
              <i className="feather-eye"></i> Preview this course
            </span>
          </div>
        </Link>
      ) : (
        ""
      )}
      {isVideo ? (
        <div
          className={`radius-6 overflow-hidden sidebar-video-hidden mb--30 ${
            hideOnScroll ? "d-none" : ""
          }`}
        >
          <div className="plyr__video-embed rbtplayer">
            <iframe
              className="radius-6 overflow-hidden"
              src="https://www.youtube.com/embed/DR9lxZ8kPYQ?autoplay=0&controls=0&disablekb=1&playsinline=0&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=http%3A%2F%2Flocalhost%3A3001%2Fcourse-details-3.html&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&customControls=true&noCookie=false&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3001&widgetid=1"
              allowFullScreen
              width={355}
              height={200}
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      ) : (
        ""
      )}
      
       <div className="content-item-content">
       {checkMatchCourses.courseImg && (
              <Image
                className="w-100 rbt-radius"
                src={checkMatchCourses.courseImg}
                width={255}
                height={155}
                alt="Video Images"
              />
            )}

        <div className="add-to-card-button mt--15">
          <Link
            className="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
            href="#"
            onClick={() =>
              addToCartFun(checkMatchCourses.id, amount, checkMatchCourses)
            }
          >
            <span className="btn-text">Enroll Now</span>
            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>
          </Link>
        </div>

        <div className="buy-now-btn mt--15 ml--40">
          
            <span className="btn-text">All courses are free of cost</span>
           
        </div>
       
        <div
          className={`rbt-widget-details has-show-more ${
            toggle ? "active" : ""
          }`}
        >
          <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
            {checkMatchCourses &&
              checkMatchCourses.roadmap.map((item, innerIndex) => (
                <li key={innerIndex}>
                  <span>{item.text}</span>
                  <span className="rbt-feature-value rbt-badge-5">
                    {item.desc}
                  </span>
                </li>
              ))}
          </ul>
         
        </div>

        <div className="social-share-wrapper mt--30 text-center">
          <div className="rbt-post-share d-flex align-items-center justify-content-center">
            <ul className="social-icon social-default transparent-with-border justify-content-center">
              <li>
                <Link href="https://www.facebook.com/">
                  <i className="feather-facebook"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.twitter.com">
                  <i className="feather-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/">
                  <i className="feather-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkdin.com/">
                  <i className="feather-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
          <hr className="mt--20" />
          <div className="contact-with-us text-center">
            <p>For details about the course</p>
            <p className="rbt-badge-2 mt--10 justify-content-center w-100">
              <i className="feather-phone mr--5"></i> Call Us:
              <Link href="#">
                <strong>+92 334 1112 454</strong>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viedo;
