"use client";

import Link from "next/link";

import { useSelector } from "react-redux";

import { useAppContext } from "@/context/Context";
import LanguageSelect from "./LanguageSelect";

const HeaderRightThree = ({ btnClass, btnText }) => {
  const { mobile, setMobile, search, setSearch, cartToggle, setCart } =
    useAppContext();

  const { total_items } = useSelector((state) => state.CartReducer);

  return (
    <div
      className="header-right d-flex align-items-center gap-3"
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      <ul className="quick-access m-0 p-0 d-flex align-items-center">
        <li className="access-icon rbt-mini-cart m-0 d-flex align-items-center">
          <Link
            className="rbt-cart-sidenav-activation rbt-round-btn d-flex align-items-center justify-content-center"
            href="/app/login"
          // onClick={() => setCart(!cartToggle)}
          >
            Login
            {/* <i className="feather-shopping-cart"></i> */}
            {/* <span className="rbt-cart-count">{total_items}</span> */}
          </Link>
        </li>

        {/* <li className="access-icon">
          <Link
            className={`search-trigger-active rbt-round-btn ${
              search ? "" : "open"
            }`}
            href="#"
            onClick={() => setSearch(!search)}
          >
            <i className="feather-search"></i>
          </Link>
        </li> */}
      </ul>

      <div className="rbt-btn-wrapper d-none d-xl-flex align-items-center m-0">
        <Link className={`rbt-btn ${btnClass}`} href="/app/signup">
          {/* <span data-text={`${btnText}`}>{btnText}</span> */}
          Signup for Free
        </Link>
      </div>

      <LanguageSelect />


      <div className="mobile-menu-bar d-block d-xl-none">
        <div className="hamberger">
          <button
            className="hamberger-button rbt-round-btn"
            onClick={() => setMobile(!mobile)}
          >
            <i className="feather-menu"></i>
          </button>
        </div>
      </div>


    </div>
  );
};

export default HeaderRightThree;
