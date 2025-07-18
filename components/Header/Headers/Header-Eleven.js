"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import logo from "../../../public/images/new/logo.png";
import logoLight from "../../../public/images/dark/logo/logo-light.png";
import { useAppContext } from "@/context/Context";

import Nav from "../Nav";

import HeaderRightThree from "../Header-Right/HeaderRight-Three";
import Search from "../Offcanvas/Search";

const HeaderEleven = ({
  gapSpaceBetween,
  transparent,
  navigationEnd,
  headerType,
  btnText,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const { isLightTheme } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 180) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`rbt-header-wrapper ${gapSpaceBetween} ${transparent} ${
          !headerType && isSticky ? "rbt-sticky" : ""
        }`}
      >
        <div className="container">
          <div className={`mainbar-row ${navigationEnd} align-items-center`}>
            <div className="header-left rbt-header-content">
              <div className="header-info">
                <div className="logo d-flex align-items-center gap-2">
                  <Link href="/">
                    {isLightTheme ? (
                      <Image
                        src={logo}
                        // width={152}
                        height={50}
                        priority={true}
                        alt="Education Logo Images"
                      />
                    ) : (
                      <Image
                        src={logoLight}
                        width={152}
                        height={50}
                        priority={true}
                        alt="Education Logo Images"
                      />
                    )}
                  </Link>
                  <div className="gradient-text fs-1 fw-semibold">Inzaar.org</div>
                </div>
              </div>
            </div>

            <div className="rbt-main-navigation d-none d-xl-block">
              <Nav />
            </div>
            <HeaderRightThree
              btnText={btnText}
              btnClass="rbt-switch-btn btn-gradient btn-sm hover-transform-none"
            />
          </div>
        </div>
        <Search />
      </div>
    </>
  );
};

export default HeaderEleven;
