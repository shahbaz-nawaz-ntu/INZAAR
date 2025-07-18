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

const ContactPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />

          <div className="rbt-conatct-area bg-gradient-11 rbt-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--60">
                    <span className="subtitle bg-secondary-opacity">
                      Contact Us
                    </span>
                    <h2 className="title">
                      We're Here to <span className="gradient-Registration">Help!</span> 
                    </h2>
                  </div>
                </div>
              </div>
              <Contact />
            </div>
          </div>

          <ContactForm />
            <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default ContactPage;
