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

export default function BecomeAVolunteer() {
  return (
    <Provider store={Store}>
      <Context>
        <HeaderStyleThirteen headerSticky="rbt-sticky" headerType="" />
        <MobileMenu />
        <Cart />

        <div className="bg-light min-vh-100 py-5 gradient1-background">
          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="fw-bold">
              Become a <span className="gradient-Registration">Volunteer</span>
            </h1>
            <div className="text-secondary mt-2">
              <Link href="/" className="text-decoration-underline text-secondary">Home</Link> <span>›</span> Become a Volunteer
            </div>
          </div>

          {/* Application Section */}
          <div className="container bg-white rounded shadow-sm p-4">
            <div className="text-center mb-4">
              <button className="btn btn-sm mb-2 gradient-Registration">Join Our Team</button>
              <h2 className="fw-bold fs-4">
                Apply As <span className="gradient-Registration">Volunteer</span>
              </h2>
              <p className="text-muted mt-2">
                You can be part of the team and voluntarily assist us in Dawah Activities by providing your valuable time and skills.
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
                      <input type="file" className="form-control pt-3" />
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn w-100 text-white gradient-background"
                        style={{ height: '34px' }}
                      >
                        Become a Volunteer →
                      </button>

                    </div>
                  </div>
                </form>
              </div>

              {/* Volunteer Info Cards */}
              <Volunteer1 />
            </div>
          </div>
        </div>

        <FooterOne />
      </Context>
    </Provider>
  );
}
