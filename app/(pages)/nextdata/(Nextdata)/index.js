"use client";
import Image from "next/image"
import img3 from "../../../../public/images/signup/Rectangle 13.png"
import img4 from "../../../../public/images/signup/Rectangle 14-1.png"
import img1 from "../../../../public/images/signup/Rectangle 14.png"
import img2 from "../../../../public/images/signup/Rectangle 15.png"
import img5 from "../../../../public/images/new/logo.png"
export default function NextData() {
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
                    <form className="w-100" style={{ maxWidth: "500px" }}>
                        <h4 className="mb-4 fw-bold">Create New Account</h4>

                        {/* Gender and Age */}
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="gender" className="form-label text-black">Gender</label>
                                <select className="form-select" id="gender">
                                    <option>Choose</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="age" className="form-label text-black">Age</label>
                                <input type="number" className="form-control" id="age" placeholder="Enter your age" />
                            </div>
                        </div>

                        {/* Educational Qualification */}
                        <div className="mb-3">
                            <label htmlFor="education" className="form-label text-black">Educational Qualification</label>
                            <input type="text" className="form-control" id="education" placeholder="Enter your Educational Qualification" />
                        </div>

                        {/* Nationality */}
                        <div className="mb-3">
                            <label htmlFor="nationality" className="form-label text-black">Nationality</label>
                            <input type="text" className="form-control" id="nationality" placeholder="Enter your nationality" />
                        </div>

                        {/* Permanent Address */}
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label text-black">Permanent Address</label>
                            <input type="text" className="form-control" id="address" placeholder="Enter your Permanent Address" />
                        </div>

                        {/* Religious Course Details */}
                        <div className="mb-3">
                            <label htmlFor="courseDetails" className="form-label text-black">Already Attended a Religious Course, give details if any:</label>
                            <textarea className="form-control" id="courseDetails" rows="2" placeholder="Enter details"></textarea>
                        </div>

                        {/* Source of Information */}
                        <div className="mb-3">
                            <label htmlFor="source" className="form-label text-black">How Did You Come To Know About Inzaar/Course:</label>
                            <textarea className="form-control" id="source" rows="2" placeholder="Enter feedback"></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="d-grid mb-3">
                            <button className="gradient-background text-white py-3 radius border-0 btn-primary w-100 mb-3" type="submit">
                                Completed
                            </button>
                        </div>

                        <p className="text-center">
                            Already have an Account? <a href="#" className="text-decoration-non textpurple my-2">Login</a>
                        </p>
                    </form>
                </div>


            </div>

        </>
    )
}