"use client";
import Image from "next/image"
import img3 from "../../../../public/images/signup/Rectangle 13.png"
import img4 from "../../../../public/images/signup/Rectangle 14-1.png"
import img1 from "../../../../public/images/signup/Rectangle 14.png"
import img2 from "../../../../public/images/signup/Rectangle 15.png"
import img5 from "../../../../public/images/new/logo.png"
export default function Signin() {
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

        {/* Right Section */}
        <div className="d-flex flex-column justify-content-center align-items-center w-100 w-md-50 px-4">
          <div className="w-100 d-flex flex-column" style={{ maxWidth: '400px' }}>
            <h5 className="mb-3 fw-bold">Welcome to Inzaar.org LMS Portal</h5>
            <p className="text-muted mb-4">Create your account or sign in.</p>

            <form className="d-flex flex-column gap-3">
              <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <button className="gradient-background text-white py-3 radius border-0 btn-primary w-100 mb-3" type="submit">
                Sign in
              </button>
            </form>

            <div className="text-center text-muted my-2 mb-4">Or</div>

            <button className="btn btn-light py-4 radius border-0 w-100 mb-3">Continue As A Guest</button>

            <div className="text-center gap-4">
              No account? <a href="#" className="text-decoration-non textpurple my-2">Create one</a>
            </div>

            <div className="text-center gap-4 mt-2">
              <small className="text-muted">
                By continuing, you agree to our{' '}
                <a href="#" className="text-decoration-none">Terms</a> and{' '}
                <a href="#" className="text-decoration-none">Privacy Policy</a>.
              </small>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient {
          background: linear-gradient(135deg, #5a67d8,rgb(136, 105, 197));
          height: 100vh;
        }
      `}</style>
    </>
  );
}

