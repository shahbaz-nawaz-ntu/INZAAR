"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import Contact from "@/components/Contacts/Contact";
import ContactForm from "@/components/Contacts/Contact-Form";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleThirteen from "@/components/Header/HeaderStyle-Thirteen";
import { Link } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleThirteen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />

          <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 gradient1-background ">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb-5">
                    <span className="subtitle bg-secondary-opacity">
                      Contact Us
                    </span>
                    <h2 className="">
                      We're Here to <span className="gradient-text">Help!</span>
                    </h2>
                    <ul className="page-list">
                      <li className="rbt-breadcrumb-item">
                        <div>Home</div>
                      </li>
                      <li>
                        <div className="icon-right">
                          <i className="feather-chevron-right"></i>
                        </div>
                      </li>
                      <li className="rbt-breadcrumb-item active">Contact</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Contact />
            </div>
          </div>
          {/* <Cart /> */}

          {/* <div className="rbt-conatct-area bg-gradient-11 rbt-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--60">
                    <span className="subtitle bg-secondary-opacity">
                      Contact Us
                    </span>
                    <h2 className="title">
                      We're Here to{" "}
                      <span className="gradient-Registration">Help!</span>
                    </h2>
                  </div>
                </div>
              </div>
              <Contact />
            </div>
          </div> */}
          <div className="p-5">
          <ContactForm />
          </div>
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default ContactPage;
