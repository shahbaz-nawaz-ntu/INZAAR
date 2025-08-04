"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import img3 from "../../../../public/images/signup/Rectangle 13.png";
import img4 from "../../../../public/images/signup/Rectangle 14-1.png";
import img1 from "../../../../public/images/signup/Rectangle 14.png";
import img2 from "../../../../public/images/signup/Rectangle 15.png";
import img5 from "../../../../public/images/new/logo.png";

export default function MultiStepSignup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    cityTtown: "",
    gender: "",
    age: "",
    educationQualification: "",
    nationality: "",
    permanentAddress: "",
    attendedReligiousCourseDetails: "",
    referralSource: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://api-bea6zuy77q-uc.a.run.app/api/auth/register",
        formData,
        {
          withCredentials: true, 
        }
      ); 
      alert("Registration successful");
      window.location.href = "/";
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Registration failed");
    }
  };

  return (
    <div className="d-flex vh-100">
      {/* Left Section */}
      <div className="d-none relative gradient-diagonal d-md-flex flex-column justify-content-center align-items-center p-5 w-75 h-100 text-white">
        <Image src={img1} width={59} height={59} alt="img1" className="img1" />
        <div className="img5">
          <Image src={img5} width={59} height={59} alt="logo" className="img5-1" />
          <div className="img5-text">Inzaar.org</div>
        </div>
        <Image src={img2} width={59} height={59} alt="img2" className="img2" />
        <Image src={img3} width={59} height={59} alt="img3" className="img3" />
        <Image src={img4} width={59} height={59} alt="img4" className="img4" />
      </div>

      {/* Right Section */}
      <div className="col-md-6 d-flex gap-0 align-items-center justify-content-center">
        <form className="w-75">
          <h4 className="mb-4 fw-bold">Create New Account</h4>

          {step === 1 && (
            <>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="firstname" className="form-label text-black">First name</label>
                  <input type="text" className="form-control" id="firstname" placeholder="Enter first name" value={formData.firstname} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastname" className="form-label text-black">Last name</label>
                  <input type="text" className="form-control" id="lastname" placeholder="Enter last name" value={formData.lastname} onChange={handleChange} />
                </div>
              </div>

              <div>
                <label htmlFor="username" className="form-label text-black">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter username" value={formData.username} onChange={handleChange} />
              </div>

              <div>
                <label htmlFor="email" className="form-label text-black">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email address" value={formData.email} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label text-black">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter 8 digit password" value={formData.password} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label text-black">Phone number</label>
                <div className="input-group">
                  <span className="input-group-text">🇺🇸 +1</span>
                  <input type="text" className="form-control" id="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="cityTtown" className="form-label text-black">City town</label>
                <input type="text" className="form-control" id="cityTtown" placeholder="Enter your city" value={formData.cityTtown} onChange={handleChange} />
              </div>

              <div className="d-grid mb-3">
                <button type="button" className="gradient-background text-white py-3 radius border-0 btn-primary w-100 mb-3" onClick={() => setStep(2)}>
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
            </>
          )}

          {step === 2 && (
            <>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="gender" className="form-label text-black">Gender</label>
                  <select className="form-select" id="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">Choose</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="age" className="form-label text-black">Age</label>
                  <input type="number" className="form-control" id="age" placeholder="Enter your age" value={formData.age} onChange={handleChange} />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="educationQualification" className="form-label text-black">Educational Qualification</label>
                <input type="text" className="form-control" id="educationQualification" placeholder="Enter your qualification" value={formData.educationQualification} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="nationality" className="form-label text-black">Nationality</label>
                <input type="text" className="form-control" id="nationality" placeholder="Enter your nationality" value={formData.nationality} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="permanentAddress" className="form-label text-black">Permanent Address</label>
                <input type="text" className="form-control" id="permanentAddress" placeholder="Enter address" value={formData.permanentAddress} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="attendedReligiousCourseDetails" className="form-label text-black">Already Attended a Religious Course (if any)</label>
                <textarea className="form-control" id="attendedReligiousCourseDetails" rows="2" value={formData.attendedReligiousCourseDetails} onChange={handleChange}></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="referralSource" className="form-label text-black">How did you come to know about Inzaar?</label>
                <textarea className="form-control" id="referralSource" rows="2" value={formData.referralSource} onChange={handleChange}></textarea>
              </div>

              <div className="d-grid mb-3">
                <button type="button" onClick={handleSubmit} className="btn w-100 mb-3 text-white rounded py-3 gradient-background border-0">
                  Completed
                </button>
              </div>

              <p className="text-center">
                Already have an Account? <a href="/sign-in" className="textpurple">Login</a>
              </p>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
