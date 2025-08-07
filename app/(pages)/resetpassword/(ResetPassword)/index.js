"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

import img3 from "../../../../public/images/signup/Rectangle 13.png";
import img4 from "../../../../public/images/signup/Rectangle 14-1.png";
import img1 from "../../../../public/images/signup/Rectangle 14.png";
import img2 from "../../../../public/images/signup/Rectangle 15.png";
import img5 from "../../../../public/images/new/logo.png";
import { Router } from "lucide-react";
import { useRouter } from "next/router";

export default function Reset() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromQuery = urlParams.get("token");
    if (tokenFromQuery) {
      setToken(tokenFromQuery);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://api-bea6zuy77q-uc.a.run.app/api/auth/reset-password",
        {
          token: token || "",
          newPassword,
        },
        {
          withCredentials: true,
        }
      );
      alert(response.data.message || "Password reset successful");
      router.push("/sign-in");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="d-flex vh-100">
      {/* Left Section */}
      <div className="d-none relative gradient-diagonal d-md-flex flex-column justify-content-center align-items-center p-5 w-75 h-100 text-white">
        <Image src={img1} width={59} height={59} alt="Author Images" className="img1" />
        <div className="img5">
          <Image src={img5} width={59} height={59} alt="Logo" className="img5-1" />
          <div className="img5-text">Inzaar.org</div>
        </div>
        <Image src={img2} width={59} height={59} alt="Author Images" className="img2" />
        <Image src={img3} width={59} height={59} alt="Author Images" className="img3" />
        <Image src={img4} width={59} height={59} alt="Author Images" className="img4" />
      </div>

      {/* Right Section */}
      <div className="col-md-6 d-flex p-4 align-items-center justify-content-center">
        <form onSubmit={handleSubmit} className="w-100 text-center" style={{ maxWidth: "400px" }}>
          <h4 className="fw-bold mb-4">Reset Your Password</h4>

          <div className="mb-4 text-start">
            <label htmlFor="newPassword" className="form-label text-black">New Password</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 text-start">
            <label htmlFor="confirmPassword" className="form-label text-black">Confirm New Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Enter new password again"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid mb-4">
            <button
              type="submit"
              className="btn text-white"
              style={{
                background: "linear-gradient(to right, #3b82f6, #9333ea)",
                padding: "12px",
                fontWeight: "500",
              }}
            >
              Reset Password
            </button>
          </div>

          <p className="mb-2">
            No account?{" "}
            <a href="#" className="text-decoration-none" style={{ color: "#9333ea" }}>
              Create one
            </a>
          </p>

          <small className="text-muted">
            By continuing, you agree to our{" "}
            <a href="#" className="text-decoration-none">Terms</a> and{" "}
            <a href="#" className="text-decoration-none">Privacy Policy</a>.
          </small>
        </form>
      </div>
    </div>
  );
}
