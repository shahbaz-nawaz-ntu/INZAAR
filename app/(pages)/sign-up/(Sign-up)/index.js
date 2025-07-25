"use client";
import Image from "next/image"
import img3 from "../../../../public/images/signup/Rectangle 13.png"
import img4 from "../../../../public/images/signup/Rectangle 14-1.png"
import img1 from "../../../../public/images/signup/Rectangle 14.png"
import img2 from "../../../../public/images/signup/Rectangle 15.png"
import img5 from "../../../../public/images/new/logo.png"
export default function Signup() {
  return (
    <>
      <div className="d-flex  vh-100">
        {/* Left Section */}
        <div className="d-none relative gradient-diagonal d-md-flex flex-column  justify-content-center align-items-center p-5 w-75 h-100 text-white">
          <Image
            src={img1}
            width={59}
            height={59}
            alt="Author Images"
            className="img1"
          />
          <div className="img5">
            <Image
              src={img5}
              width={59}
              height={59}
              alt="Author Images"
              className="img5-1"
            />
            <div className="img5-text">Inzaar.org</div>
          </div>
          <Image
            src={img2}
            width={59}
            height={59}
            alt="Author Images"
            className="img2"
          />
          <Image
            src={img3}
            width={59}
            height={59}
            alt="Author Images"
            className="img3"
          />
          <Image
            src={img4}
            width={59}
            height={59}
            alt="Author Images"
            className="img4"
          />
        </div>

        <div className="col-md-6 d-flex p-4 gap-0 align-items-center justify-content-center">
          <form className="w-75">
            <h4 className="mb-4 fw-bold">Create New Account</h4>

            <div className="row">
              <div className="col-md-6 ">
                <label htmlFor="firstName" className="form-label text-black">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="Enter first name" />
              </div>
              <div className="col-md-6 ">
                <label htmlFor="lastName" className="form-label text-black">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="Enter last name" />
              </div>
            </div>

            <div className="">
              <label htmlFor="username" className="form-label text-black">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username" />
            </div>

            <div className="">
              <label htmlFor="email" className="form-label text-black">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email address" />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label text-black">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter 8 digit password" />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label text-black">Phone number</label>
              <div className="input-group">
                <span className="input-group-text">🇺🇸 +1</span>
                <input type="text" className="form-control" id="phone" placeholder="Phone number" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="city" className="form-label text-black">City town</label>
              <input type="text" className="form-control" id="city" placeholder="Enter your city" />
            </div>

            <div className="d-grid mb-3">
              <button className="gradient-background text-white py-3 radius border-0 btn-primary w-100 mb-3" type="submit">
                Next
              </button>
            </div>

            <div className="form-check mb-2">
              <input type="checkbox" className="form-check-input" id="terms" checked readOnly />
              <label className="form-check-label" htmlFor="terms">
                By creating an account, I agree to our <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>
              </label>
            </div>

            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="consent" checked readOnly />
              <label className="form-check-label" htmlFor="consent">
                I am also consenting to receive updates and promotions.
              </label>
            </div>
          </form>
        </div>

      </div>
    </>
  );
}