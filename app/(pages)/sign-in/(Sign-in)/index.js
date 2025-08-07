"use client";

import Image from "next/image";
import img3 from "../../../../public/images/signup/Rectangle 13.png";
import img4 from "../../../../public/images/signup/Rectangle 14-1.png";
import img1 from "../../../../public/images/signup/Rectangle 14.png";
import img2 from "../../../../public/images/signup/Rectangle 15.png";
import img5 from "../../../../public/images/new/logo.png";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Import router

export default function Signin() {
  const router = useRouter(); // ✅ Initialize router

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 🔐 Toggle password visibility

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "https://api-bea6zuy77q-uc.a.run.app/api/auth/login",
  //       {
  //         email,
  //         password,
  //       },
  //       {
  //         withCredentials: true,
  //       }
  //     );

  //     // ✅ Show success message and then redirect
  //     alert("Login successful");
  //     router.push("/"); // ✅ Redirect to home page

  //   } catch (error) {
  //     alert(error?.response?.data?.message || "Login failed");
  //   }
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api-bea6zuy77q-uc.a.run.app/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      alert("Login successful");
      router.push("/homepage");

    } catch (error) {
      const message = error?.response?.data?.message;

      if (message === "Invalid email") {
        alert("Email address not found. Please check and try again.");
      } else if (message === "Invalid password") {
        alert("Incorrect password. Please try again.");
      } else {
        alert(message || "Login failed. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="d-flex vh-100">
        {/* Left Section */}
        <div className="d-none relative gradient-diagonal d-md-flex flex-column justify-content-center align-items-center p-5 w-75 h-100 text-white">
          <Image src={img1} width={59} height={59} alt="Author Images" className="img1" />
          <div className="img5">
            <Image src={img5} width={59} height={59} alt="Author Images" className="img5-1" />
            <div className="img5-text">Inzaar.org</div>
          </div>
          <Image src={img2} width={59} height={59} alt="Author Images" className="img2" />
          <Image src={img3} width={59} height={59} alt="Author Images" className="img3" />
          <Image src={img4} width={59} height={59} alt="Author Images" className="img4" />
        </div>

        {/* Right Section */}
        <div className="d-flex flex-column justify-content-center align-items-center w-100 w-md-50 px-4">
          <div className="w-100 d-flex flex-column" style={{ maxWidth: '400px' }}>
            <h5 className="mb-3 fw-bold">Welcome to Inzaar.org LMS Portal</h5>
            <p className="text-muted mb-4">Create your account or sign in.</p>

            <form className="d-flex flex-column gap-3" onSubmit={handleLogin}>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control "
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                    className="input-group-text"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      // Eye-slash SVG for "hide"
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                        <path d="M13.359 11.238a10.4 10.4 0 0 0 2.406-3.356.5.5 0 0 0-.894-.448 9.4 9.4 0 0 1-2.178 3.033l.666.77zm1.334 3.124L2.638 1.383l-.708.708 2.224 2.223C2.421 5.34 1.347 6.798.548 8a.5.5 0 0 0 0 .5c.945 1.446 2.367 3.086 4.266 4.108 1.899 1.021 4.127 1.394 6.186.966l2.076 2.076.707-.707zM11.354 12.23a8.49 8.49 0 0 1-5.7-.854A8.2 8.2 0 0 1 1.6 8c.635-.93 1.504-1.922 2.555-2.79L6.8 7.855a2.5 2.5 0 0 0 3.345 3.345l1.21 1.21zm-2.125-2.125a1.5 1.5 0 0 1-2.06-2.06l2.06 2.06z" />
                        <path d="M9.46 8.598l-2.058-2.058A1.5 1.5 0 0 1 9.46 8.598z" />
                        <path d="M10.477 7.58a2.5 2.5 0 0 0-3.055-3.055l-.96-.96a8.487 8.487 0 0 1 8.007 2.435c.633.677 1.186 1.49 1.66 2.387a.5.5 0 0 1 0 .5c-.397.734-.888 1.46-1.453 2.145L10.477 7.58z" />
                      </svg>
                    ) : (
                      // Eye SVG for "show"
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zm-8 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                        <path d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                      </svg>
                    )}
                  </span>
                </div>
              </div>

              <div>
                <a href="/forgotPassword">Forgot Password?</a>
              </div>

              <button type="submit" className="btn w-100 mb-3 text-white rounded py-3 gradient-background border-0 fs-3">
                Sign in
              </button>


            </form>

            <div className="text-center text-muted my-2 mb-4">Or</div>

            <a href="/" className="btn btn-light py-4 radius border-0 w-100 mb-3 fs-3">
              Continue As A Guest
            </a>

            <div className="text-center gap-4">
              No account?{" "}
              <a href="/sign-up" className="text-decoration-non textpurple my-2">
                Create one
              </a>
            </div>

            <div className="text-center gap-4 mt-2">
              <small className="text-muted">
                By continuing, you agree to our{" "}
                <a href="#" className="text-decoration-none">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-decoration-none">
                  Privacy Policy
                </a>
                .
              </small>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient {
          background: linear-gradient(135deg, #5a67d8, rgb(136, 105, 197));
          height: 100vh;
        }
      `}</style>
    </>
  );
}
