"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import FooterOne from "@/components/Footer/Footer-One";

// import VolunteerPage from '@/components/26-islamic-center/volunteer';
import Volunteer1 from '@/app/volunteer1';
import HeaderStyleThirteen from '@/components/Header/HeaderStyle-Thirteen';
import BreadCrumb from '@/components/Common/BreadCrumb';

export default function BecomeAVolunteer() {
  return (
    <Provider store={Store}>
      <Context>
        <HeaderStyleThirteen headerSticky="rbt-sticky" headerType="" />
        <MobileMenu />
        <Cart />

        <div className=" min-vh-100 py-5">
          {/* Header */}
          {/* <div className="text-center mb-4">
            <h1 className="fw-bold">
              Become a <span className="gradient-Registration">Volunteer</span>
            </h1>
            <div className="text-secondary mt-2">
              <Link href="/" className="text-decoration-underline text-secondary">Home</Link> <span>›</span> Become a Volunteer
            </div>
          </div> */}

          {/* <BreadCrumb title="Become a Volunteer" text="Volunteer" /> */}
          <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 gradient1-background ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inner text-center">
              <h2 className="title">Become a <span className='gradient-text'>Volunteer</span></h2>
              <ul className="page-list">
                <li className="rbt-breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <div className="icon-right">
                    <i className="feather-chevron-right"></i>
                  </div>
                </li>
                <li className="rbt-breadcrumb-item active">Volunteer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

          {/* Application Section */}
          <div className="container bg-white rounded  p-4">
            <div className="text-center mb-4">
              <button className="btn btn-sm mb-2 dimension-btn fs-4">
                <span className='gradient-text'>Join Our Team</span></button>
              <h2 className="fw-bold fs-7">
                Apply As <span className="gradient-Registration">Volunteer</span>
              </h2>
              <p className="text-muted mt-2 two">
                You can be part of the team and voluntarily assist us in Dawah
                Activities by providing your valuable time and skills.
              </p>
            </div>

            <div className="row mt-4 g-4">
              {/* Left Image */}
              <div className="col-md-6">
                <Image
                  src="/images/about/volunteer.jpg"
                  width={500}
                  height={900}
                  className="img-fluid rounded volunteer"
                  alt="Volunteer"
                />
              </div>

              {/* Right Form */}
              <div className="col-md-6">
                <h3 className="fw-semibold mb-3">
                  Volunteer <span className="gradient-Registration">Registration</span>
                </h3>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" placeholder="Full Name" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <select className="form-select fs-4 hw">
                        <option>Volunteer Field</option>
                        <option>Teaching</option>
                        <option>Event Organizing</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <input type="text" placeholder="User Name" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Phone Number" className="form-control" />
                    </div>

                    <div className="col-md-6">
                      <input type="email" placeholder="Email" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <input type="password" placeholder="Password" className="form-control" />
                    </div>

                    <div className="col-md-6">
                      <select className="form-select fs-4 hw">
                        <option>Position Preference</option>
                        <option>Leader</option>
                        <option>Assistant</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select className="form-select fs-4 hw">
                        <option>Skill Level</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Expert</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Resume (File Upload)</label>

                      <div
                        className="d-flex align-items-center p-2"
                        style={{
                          border: "1px solid #e5e7eb",
                          borderRadius: "6px",
                        }}
                      >

                        <input
                          type="file"
                          id="resumeUpload"
                          className="d-none"
                        />


                        <label
                          htmlFor="resumeUpload"
                          className="btn text-white m-0"
                          style={{
                            background: "linear-gradient(to right, #3b82f6, #a855f7)",
                            borderRadius: "6px",
                            padding: "6px 14px",
                            cursor: "pointer",
                            fontWeight: 400,
                            fontSize: "14px",
                             }}
                        >
                          Resume (File Upload)
                        </label>
                      </div>
                    </div>


                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn w-100 text-white gradient-background fs-4"
                        style={{ height: '45px' }}
                      >
                        Become a Volunteer →
                      </button>

                    </div>
                  </div>
                </form>
              </div>


              <Volunteer1 />
            </div>
          </div>
        </div>
        <FooterOne />
      </Context>
    </Provider>
  );
}
