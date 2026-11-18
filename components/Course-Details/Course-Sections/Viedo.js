"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from 'react-hot-toast';

import "venobox/dist/venobox.min.css";

import { useDispatch, useSelector } from "react-redux";
import { useAppContext } from "@/context/Context";
import { addToCartAction } from "@/redux/action/CartAction";

const Viedo = ({ checkMatchCourses }) => {
  const pathname = usePathname();
  const { cartToggle, setCart } = useAppContext();
  const [toggle, setToggle] = useState(false);

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
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleEnroll = (e) => {
    e.preventDefault();
    if (isRedirecting) return;
    setIsRedirecting(true);
    const courseId = checkMatchCourses._id || checkMatchCourses.id;
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const targetUrl = `/courses?tab=new&courseId=${courseId}`;
    if (token) {
      window.location.href = `/app${targetUrl}`;
    } else {
      window.location.href = `/app/login?redirect=/courses&tab=new&courseId=${courseId}`;
    }
  };

  const addToCartFun = (id, amount, product) => {
    // dispatch(addToCartAction(id, amount, product));
    // setCart(!cartToggle);
    toast('Feature under development', {
      duration: 3000,
      position: 'top-center',
      icon: <img src="/images/icons/development-icon.png" alt="Development" style={{ width: '24px', height: '24px' }} />,
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
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
  }, []);

  return (
    <>
      <div className="content-item-content">
        {checkMatchCourses.courseImg && (
          <div style={{ borderRadius: "10px", overflow: "hidden", marginBottom: "15px" }}>
            <Image
              className="w-100 rbt-radius"
              src={checkMatchCourses.courseImg}
              width={355}
              height={220}
              style={{ objectFit: "cover", width: "100%", maxHeight: "240px" }}
              alt={checkMatchCourses.courseTitle || "Course Image"}
              unoptimized={true}
            />
          </div>
        )}

        <div className="add-to-card-button mt--15">
          <button
            type="button"
            className="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
            style={{ border: "none", cursor: isRedirecting ? "not-allowed" : "pointer", opacity: isRedirecting ? 0.75 : 1 }}
            onClick={handleEnroll}
            disabled={isRedirecting}
          >
            <span className="btn-text">{isRedirecting ? "Redirecting..." : "Enroll Now"}</span>
            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>
          </button>
        </div>

        <div className="buy-now-btn mt--15 text-center">
          <span className="btn-text" style={{ fontSize: "14px", fontWeight: "600", color: "#10b981" }}>
            ✓ All courses are 100% free of cost
          </span>
        </div>

        <div
          className={`rbt-widget-details has-show-more ${toggle ? "active" : ""
            }`}
        >
          <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
            {checkMatchCourses &&
              (checkMatchCourses.roadmap || []).map((item, innerIndex) => (
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
