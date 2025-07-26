"use client";
import Image from "next/image"
import img3 from "../../../../public/images/signup/Rectangle 13.png"
import img4 from "../../../../public/images/signup/Rectangle 14-1.png"
import img1 from "../../../../public/images/signup/Rectangle 14.png"
import img2 from "../../../../public/images/signup/Rectangle 15.png"
import img5 from "../../../../public/images/new/logo.png"
export default function Reset() {
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

                <div className="col-md-6 d-flex p-4 align-items-center justify-content-center">
  <form className="w-100 text-center" style={{ maxWidth: "400px" }}>
    
    {/* Title */}
    <h4 className="fw-bold mb-4">Reset Your Password</h4>

    {/* New Password Field */}
    <div className="mb-4 text-start">
      <label htmlFor="newPassword" className="form-label text-black">New Password</label>
      <input
        type="password"
        className="form-control"
        id="newPassword"
        placeholder="Enter new password"
      />
    </div>

    {/* Confirm Password Field */}
    <div className="mb-4 text-start">
      <label htmlFor="confirmPassword" className="form-label text-black">Confirm New Password</label>
      <input
        type="password"
        className="form-control"
        id="confirmPassword"
        placeholder="Enter new password again"
      />
    </div>

    {/* Submit Button */}
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

    {/* Account Link */}
    <p className="mb-2">
      No account? <a href="#" className="text-decoration-none" style={{ color: "#9333ea" }}>Create one</a>
    </p>

    {/* Terms and Policy */}
    <small className="text-muted">
      By continuing, you agree to our{" "}
      <a href="#" className="text-decoration-none">Terms</a> and{" "}
      <a href="#" className="text-decoration-none">Privacy Policy</a>.
    </small>
  </form>
</div>




            </div>

        </>
    )
}