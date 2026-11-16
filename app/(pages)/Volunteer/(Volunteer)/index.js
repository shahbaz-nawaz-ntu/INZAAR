"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import HeaderStyleThirteen from "@/components/Header/HeaderStyle-Thirteen";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import FooterOne from "@/components/Footer/Footer-One";

const DEPARTMENTS = [
  "Event Management",
  "Education & Learning",
  "IT & Website Management",
  "Video & Media Production",
  "Graphic Design",
  "Marketing & Promotion",
  "Research & Administration",
  "Other"
];

const SKILLS_BY_DEPARTMENT = {
  "Event Management": [
    "Event Coordination",
    "Registration Desk",
    "Participant Management",
    "Hospitality",
    "Logistics",
    "Other"
  ],
  "Education & Learning": [
    "Video Transcription",
    "Urdu Proofreading",
    "Quiz Generation",
    "Assignment Review",
    "Content Formatting",
    "Other"
  ],
  "IT & Website Management": [
    "WordPress",
    "Web Development",
    "LMS Management",
    "Technical Support",
    "Other"
  ],
  "Video & Media Production": [
    "Video Editing",
    "Audio Editing",
    "Podcast Editing",
    "Subtitles",
    "Other"
  ],
  "Graphic Design": [
    "Graphic Designing",
    "Canva",
    "Photoshop",
    "Illustrator",
    "Presentation Design",
    "Other"
  ],
  "Marketing & Promotion": [
    "SEO",
    "Social Media Management",
    "Content Writing",
    "Digital Marketing",
    "Other"
  ],
  "Research & Administration": [
    "Research",
    "Data Entry",
    "Documentation",
    "Report Writing",
    "Other"
  ],
  "Other": [
    "Community Outreach",
    "General Volunteer Support",
    "Other"
  ]
};

const EDUCATION_OPTIONS = [
  "Matric",
  "Intermediate",
  "Bachelor's",
  "Master's",
  "MPhil / PhD",
  "Other"
];

const PROFESSION_OPTIONS = [
  "Student",
  "Employed",
  "Freelancer",
  "Business Owner",
  "Homemaker",
  "Other"
];

const AVAILABILITY_OPTIONS = ["Weekdays", "Weekends", "Both"];

function VolunteerFormInner() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsappNumber: "",
    city: "",
    cityOther: "",
    education: "",
    educationOther: "",
    profession: "",
    professionOther: "",
    interestedDepartments: [],
    interestedDepartmentsOther: "",
    skills: [], // Scoped composite keys: `${dept}:::${skill}`
    skillsOther: "",
    availability: "",
    additionalInformation: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Scoped key helper to prevent cross-department key collisions for duplicate names (like "Other")
  const makeSkillKey = (dept, skill) => `${dept}:::${skill}`;

  // Compute available skills dynamically based on selected departments
  const availableSkillsBySelectedDept = useMemo(() => {
    if (!formData.interestedDepartments.length) return {};
    const grouped = {};
    formData.interestedDepartments.forEach((dept) => {
      grouped[dept] = SKILLS_BY_DEPARTMENT[dept] || ["Other"];
    });
    return grouped;
  }, [formData.interestedDepartments]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const toggleDepartment = (dept) => {
    setFormData((prev) => {
      const exists = prev.interestedDepartments.includes(dept);
      const updatedDepts = exists
        ? prev.interestedDepartments.filter((d) => d !== dept)
        : [...prev.interestedDepartments, dept];

      // If removed department, also prune skills belonging strictly to it
      let updatedSkills = prev.skills;
      if (exists) {
        updatedSkills = prev.skills.filter((key) => {
          const [d] = key.split(":::");
          return d !== dept;
        });
      }

      return {
        ...prev,
        interestedDepartments: updatedDepts,
        skills: updatedSkills
      };
    });
    if (errorMessage) setErrorMessage("");
  };

  const toggleSkill = (dept, skill) => {
    const key = makeSkillKey(dept, skill);
    setFormData((prev) => {
      const exists = prev.skills.includes(key);
      return {
        ...prev,
        skills: exists
          ? prev.skills.filter((k) => k !== key)
          : [...prev.skills, key]
      };
    });
    if (errorMessage) setErrorMessage("");
  };

  const handleSelectAvailability = (avail) => {
    setFormData((prev) => ({
      ...prev,
      availability: prev.availability === avail ? "" : avail
    }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Client-side validations
    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your Full Name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid Email Address.");
      return;
    }
    if (!formData.whatsappNumber.trim()) {
      setErrorMessage("Please enter your WhatsApp Number.");
      return;
    }
    if (!formData.city.trim()) {
      setErrorMessage("Please enter your City.");
      return;
    }
    if (!formData.education) {
      setErrorMessage("Please select your Education / Qualification.");
      return;
    }
    if (formData.education === "Other" && !formData.educationOther.trim()) {
      setErrorMessage("Please specify your qualification.");
      return;
    }
    if (!formData.profession) {
      setErrorMessage("Please select your Profession.");
      return;
    }
    if (formData.profession === "Other" && !formData.professionOther.trim()) {
      setErrorMessage("Please specify your profession.");
      return;
    }
    if (formData.interestedDepartments.length === 0) {
      setErrorMessage("Please select at least one Interested Department.");
      return;
    }
    if (
      formData.interestedDepartments.includes("Other") &&
      !formData.interestedDepartmentsOther.trim()
    ) {
      setErrorMessage("Please specify your other department.");
      return;
    }
    if (formData.skills.length === 0 && !formData.skillsOther.trim()) {
      setErrorMessage("Please select at least one Skill / Area of Interest.");
      return;
    }
    if (!formData.availability) {
      setErrorMessage("Please select your Availability.");
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

      // Transform scoped composite skill keys into clean readable skill labels
      const transformedSkills = formData.skills.map((key) => {
        if (key.includes(":::")) {
          const [dept, skill] = key.split(":::");
          if (skill === "Other") {
            return `${dept} (Other)`;
          }
          return skill;
        }
        return key;
      });

      const finalSkills = Array.from(new Set(transformedSkills));
      if (formData.skillsOther.trim() && !finalSkills.includes(formData.skillsOther.trim())) {
        finalSkills.push(formData.skillsOther.trim());
      }

      const payload = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        whatsappNumber: formData.whatsappNumber.trim(),
        city: formData.city.trim(),
        cityOther: formData.cityOther?.trim() || "",
        education: formData.education,
        educationOther: formData.educationOther?.trim() || "",
        profession: formData.profession,
        professionOther: formData.professionOther?.trim() || "",
        interestedDepartments: formData.interestedDepartments,
        interestedDepartmentsOther: formData.interestedDepartmentsOther?.trim() || "",
        skills: finalSkills,
        skillsOther: formData.skillsOther?.trim() || "",
        availability: [formData.availability],
        additionalInformation: formData.additionalInformation?.trim() || ""
      };

      const res = await fetch(`${apiUrl}/volunteers/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit volunteer registration. Please try again.");
      }

      setIsSuccess(true);
    } catch (err) {
      console.error("Volunteer registration error:", err);
      setErrorMessage(err.message || "Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      whatsappNumber: "",
      city: "",
      cityOther: "",
      education: "",
      educationOther: "",
      profession: "",
      professionOther: "",
      interestedDepartments: [],
      interestedDepartmentsOther: "",
      skills: [],
      skillsOther: "",
      availability: "",
      additionalInformation: ""
    });
    setIsSuccess(false);
    setErrorMessage("");
  };

  // Reusable input and select styles for consistent, clear sizing
  const inputStyle = {
    fontSize: "15px",
    height: "48px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    padding: "10px 14px",
    color: "#1f2937",
    backgroundColor: "#ffffff",
    boxShadow: "none"
  };

  const selectStyle = {
    fontSize: "15px",
    height: "48px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    padding: "10px 36px 10px 14px",
    color: "#1f2937",
    backgroundColor: "#ffffff",
    cursor: "pointer",
    boxShadow: "none"
  };

  const labelStyle = {
    fontSize: "14.5px",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "6px",
    display: "block"
  };

  return (
    <div className="container bg-white rounded p-4 p-md-5 shadow-sm">
      <div className="text-center mb-4">
        <h2 className="fw-bold">
          Join Our <span className="gradient-Registration">Team</span>
        </h2>
        <p className="text-muted mt-2 two" style={{ maxWidth: "700px", margin: "0 auto" }}>
          Volunteer with Inzaar and contribute your time and skills to educational,
          technical, creative, and community activities.
        </p>
      </div>

      <div className="row mt-4 g-4 align-items-start">
        {/* Left Column: Inspiring Image & Highlights */}
        <div className="col-lg-5 d-none d-lg-block">
          <div className="sticky-top" style={{ top: "110px" }}>
            <div className="overflow-hidden rounded-4 shadow-sm mb-4">
              <Image
                src="/images/about/volunteer.jpg"
                width={550}
                height={650}
                className="img-fluid w-100"
                alt="Inzaar Volunteers"
                style={{ objectFit: "cover", maxHeight: "460px" }}
              />
            </div>

            <div
              className="p-4 rounded-4"
              style={{
                background: "linear-gradient(135deg, #f8faff 0%, #f3e8ff 100%)",
                border: "1px solid #e9d5ff"
              }}
            >
              <h5 className="fw-bold mb-2" style={{ color: "#7e22ce" }}>
                Why Volunteer with Inzaar?
              </h5>
              <ul className="list-unstyled mb-0" style={{ fontSize: "14px", color: "#4b5563" }}>
                <li className="mb-2 d-flex align-items-center">
                  <i className="feather-check-circle me-2 text-success"></i>
                  Direct contribution to genuine Islamic education & Dawah
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="feather-check-circle me-2 text-success"></i>
                  Flexible participation (Weekdays or Weekends)
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="feather-check-circle me-2 text-success"></i>
                  Collaborate in event management, IT, media, or research
                </li>
                <li className="d-flex align-items-center">
                  <i className="feather-check-circle me-2 text-success"></i>
                  Certificate of volunteer appreciation & community impact
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="col-lg-7">
          <div className="p-3 p-md-4 rounded-4" style={{ backgroundColor: "#fafafa", border: "1px solid #f1f5f9" }}>
            <div className="mb-4">
              <h3 className="fw-bold mb-1">
                Volunteer <span className="gradient-Registration">Registration</span>
              </h3>
              <p className="text-muted" style={{ fontSize: "14px" }}>
                Please fill in the form below with your current details and areas of interest.
              </p>
            </div>

            {isSuccess ? (
              <div
                className="p-4 rounded-4 text-center my-4"
                style={{
                  background: "linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%)",
                  border: "1px solid #86efac"
                }}
              >
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "70px", height: "70px", backgroundColor: "#22c55e", color: "white" }}
                >
                  <i className="feather-check" style={{ fontSize: "36px" }}></i>
                </div>
                <h3 className="fw-bold text-success mb-2">JazakAllah Khair!</h3>
                <h5 className="fw-semibold text-dark mb-3">
                  Your Volunteer Application Has Been Submitted Successfully
                </h5>
                <p className="text-secondary mx-auto mb-4" style={{ maxWidth: "480px", fontSize: "15px" }}>
                  Thank you, <strong>{formData.fullName}</strong>. Our team will review your application and
                  reach out to you on WhatsApp (<strong>{formData.whatsappNumber}</strong>) or Email.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <button
                    onClick={handleReset}
                    className="btn btn-outline-secondary px-4 py-2"
                    style={{ borderRadius: "8px" }}
                  >
                    Submit Another Application
                  </button>
                  <Link
                    href="/"
                    className="btn text-white px-4 py-2"
                    style={{
                      background: "linear-gradient(to right, #3b82f6, #a855f7)",
                      borderRadius: "8px"
                    }}
                  >
                    Back to Home →
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errorMessage && (
                  <div
                    className="alert alert-danger d-flex align-items-center mb-3 py-2 px-3"
                    role="alert"
                    style={{ borderRadius: "8px", fontSize: "14px" }}
                  >
                    <i className="feather-alert-triangle me-2"></i>
                    <div>{errorMessage}</div>
                  </div>
                )}

                <div className="row g-3">
                  {/* 1. Full Name */}
                  <div className="col-md-6">
                    <label className="form-label" style={labelStyle}>
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Muhammad Ahmad"
                      className="form-control"
                      style={inputStyle}
                      required
                    />
                  </div>

                  {/* 2. Email Address */}
                  <div className="col-md-6">
                    <label className="form-label" style={labelStyle}>
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. ahmad@gmail.com"
                      className="form-control"
                      style={inputStyle}
                      required
                    />
                  </div>

                  {/* 3. WhatsApp Number */}
                  <div className="col-md-6">
                    <label className="form-label" style={labelStyle}>
                      WhatsApp Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. +92 300 1234567"
                      className="form-control"
                      style={inputStyle}
                      required
                    />
                  </div>

                  {/* 4. City */}
                  <div className="col-md-6">
                    <label className="form-label" style={labelStyle}>
                      City <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Karachi, Lahore, Islamabad..."
                      className="form-control"
                      style={inputStyle}
                      required
                    />
                  </div>

                  {/* 5. Education / Qualification */}
                  <div className="col-md-6">
                    <label className="form-label" style={labelStyle}>
                      Education / Qualification <span className="text-danger">*</span>
                    </label>
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      className="form-select"
                      style={selectStyle}
                      required
                    >
                      <option value="" style={{ fontSize: "15px", color: "#6b7280" }}>
                        Select Qualification
                      </option>
                      {EDUCATION_OPTIONS.map((edu) => (
                        <option key={edu} value={edu} style={{ fontSize: "15px", color: "#1f2937" }}>
                          {edu}
                        </option>
                      ))}
                    </select>

                    {formData.education === "Other" && (
                      <input
                        type="text"
                        name="educationOther"
                        value={formData.educationOther}
                        onChange={handleInputChange}
                        placeholder="Please specify qualification *"
                        className="form-control mt-2"
                        style={inputStyle}
                        required
                      />
                    )}
                  </div>

                  {/* 6. Profession */}
                  <div className="col-md-6">
                    <label className="form-label" style={labelStyle}>
                      Profession <span className="text-danger">*</span>
                    </label>
                    <select
                      name="profession"
                      value={formData.profession}
                      onChange={handleInputChange}
                      className="form-select"
                      style={selectStyle}
                      required
                    >
                      <option value="" style={{ fontSize: "15px", color: "#6b7280" }}>
                        Select Profession
                      </option>
                      {PROFESSION_OPTIONS.map((prof) => (
                        <option key={prof} value={prof} style={{ fontSize: "15px", color: "#1f2937" }}>
                          {prof}
                        </option>
                      ))}
                    </select>

                    {formData.profession === "Other" && (
                      <input
                        type="text"
                        name="professionOther"
                        value={formData.professionOther}
                        onChange={handleInputChange}
                        placeholder="Please specify profession *"
                        className="form-control mt-2"
                        style={inputStyle}
                        required
                      />
                    )}
                  </div>

                  {/* 7. Interested Department (Multi-Select) */}
                  <div className="col-12 mt-4">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <label className="form-label mb-0" style={{ ...labelStyle, fontSize: "15px" }}>
                        Interested Department (Multi-select) <span className="text-danger">*</span>
                      </label>
                      <span
                        className="badge bg-light text-secondary border"
                        style={{ fontSize: "12px", padding: "4px 8px" }}
                      >
                        {formData.interestedDepartments.length} Selected
                      </span>
                    </div>
                    <p className="text-muted mb-2" style={{ fontSize: "13px" }}>
                      Select one or more departments where you would like to contribute:
                    </p>

                    <div className="d-flex flex-wrap gap-2">
                      {DEPARTMENTS.map((dept) => {
                        const isSelected = formData.interestedDepartments.includes(dept);
                        return (
                          <button
                            type="button"
                            key={dept}
                            onClick={() => toggleDepartment(dept)}
                            className="btn btn-sm d-flex align-items-center transition-all"
                            style={{
                              borderRadius: "20px",
                              padding: "7px 16px",
                              fontSize: "13.5px",
                              fontWeight: isSelected ? "600" : "500",
                              background: isSelected
                                ? "linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)"
                                : "#ffffff",
                              color: isSelected ? "#ffffff" : "#4b5563",
                              border: isSelected ? "1px solid transparent" : "1px solid #d1d5db",
                              boxShadow: isSelected ? "0 2px 6px rgba(168, 85, 247, 0.3)" : "none",
                              cursor: "pointer"
                            }}
                          >
                            <i
                              className={`feather-${isSelected ? "check-circle" : "plus"} me-1`}
                              style={{ fontSize: "13px" }}
                            ></i>
                            {dept}
                          </button>
                        );
                      })}
                    </div>

                    {formData.interestedDepartments.includes("Other") && (
                      <input
                        type="text"
                        name="interestedDepartmentsOther"
                        value={formData.interestedDepartmentsOther}
                        onChange={handleInputChange}
                        placeholder="Please specify other department *"
                        className="form-control mt-2"
                        style={inputStyle}
                        required
                      />
                    )}
                  </div>

                  {/* 8. Skills / Areas of Interest (Dynamic Multi-Select) */}
                  <div className="col-12 mt-4">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <label className="form-label mb-0" style={{ ...labelStyle, fontSize: "15px" }}>
                        Skills / Areas of Interest (Multi-select) <span className="text-danger">*</span>
                      </label>
                      <span
                        className="badge bg-light text-secondary border"
                        style={{ fontSize: "12px", padding: "4px 8px" }}
                      >
                        {formData.skills.length} Selected
                      </span>
                    </div>

                    {formData.interestedDepartments.length === 0 ? (
                      <div
                        className="p-3 rounded-3 text-center my-2"
                        style={{ backgroundColor: "#f3f4f6", border: "1px dashed #cbd5e1" }}
                      >
                        <i className="feather-info text-muted me-1"></i>
                        <span className="text-muted" style={{ fontSize: "13px" }}>
                          Please select one or more departments above to display corresponding skills.
                        </span>
                      </div>
                    ) : (
                      <div className="mt-2 p-3 rounded-3 bg-white border">
                        {Object.entries(availableSkillsBySelectedDept).map(([dept, skillsList]) => (
                          <div key={dept} className="mb-3">
                            <div className="fw-semibold text-primary mb-2" style={{ fontSize: "13.5px" }}>
                              {dept} Skills:
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                              {skillsList.map((skill) => {
                                const key = makeSkillKey(dept, skill);
                                const isSelected = formData.skills.includes(key);
                                return (
                                  <button
                                    type="button"
                                    key={`${dept}-${skill}`}
                                    onClick={() => toggleSkill(dept, skill)}
                                    className="btn btn-sm d-flex align-items-center"
                                    style={{
                                      borderRadius: "16px",
                                      padding: "6px 14px",
                                      fontSize: "13px",
                                      fontWeight: isSelected ? "600" : "500",
                                      background: isSelected ? "#9333ea" : "#f9fafb",
                                      color: isSelected ? "#ffffff" : "#374151",
                                      border: isSelected ? "1px solid #9333ea" : "1px solid #d1d5db",
                                      boxShadow: isSelected ? "0 2px 4px rgba(147, 51, 234, 0.25)" : "none",
                                      cursor: "pointer"
                                    }}
                                  >
                                    <i
                                      className={`feather-${isSelected ? "check" : "circle"} me-1.5`}
                                      style={{ fontSize: "12px" }}
                                    ></i>
                                    {skill}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}

                        <div className="mt-3 pt-3 border-top">
                          <label className="form-label text-muted mb-1" style={{ fontSize: "13px" }}>
                            Additional / Other Skills (Optional):
                          </label>
                          <input
                            type="text"
                            name="skillsOther"
                            value={formData.skillsOther}
                            onChange={handleInputChange}
                            placeholder="e.g. React, Flutter, Event Photography, Translation..."
                            className="form-control"
                            style={{ ...inputStyle, height: "42px", fontSize: "14px" }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 9. Availability (Single-Select) */}
                  <div className="col-12 mt-4">
                    <label className="form-label mb-1" style={{ ...labelStyle, fontSize: "15px" }}>
                      Availability <span className="text-danger">*</span>
                    </label>
                    <p className="text-muted mb-2" style={{ fontSize: "13px" }}>
                      When are you available to volunteer? (Select 1 option)
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      {AVAILABILITY_OPTIONS.map((avail) => {
                        const isSelected = formData.availability === avail;
                        return (
                          <button
                            type="button"
                            key={avail}
                            onClick={() => handleSelectAvailability(avail)}
                            className="btn btn-sm d-flex align-items-center"
                            style={{
                              borderRadius: "20px",
                              padding: "7px 20px",
                              fontSize: "13.5px",
                              fontWeight: isSelected ? "600" : "500",
                              background: isSelected
                                ? "linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)"
                                : "#ffffff",
                              color: isSelected ? "#ffffff" : "#4b5563",
                              border: isSelected ? "1px solid transparent" : "1px solid #d1d5db",
                              boxShadow: isSelected ? "0 2px 6px rgba(168, 85, 247, 0.25)" : "none",
                              cursor: "pointer"
                            }}
                          >
                            <i
                              className={`feather-${isSelected ? "check-circle" : "circle"} me-1.5`}
                              style={{ fontSize: "13px" }}
                            ></i>
                            {avail}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 10. Additional Information / Previous Experience (Optional) */}
                  <div className="col-12 mt-4">
                    <label className="form-label" style={labelStyle}>
                      Additional Information / Previous Experience <span className="text-muted fw-normal">(Optional)</span>
                    </label>
                    <textarea
                      name="additionalInformation"
                      value={formData.additionalInformation}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Briefly mention any relevant volunteer experience, tools you can use, or anything else you would like Inzaar to know..."
                      className="form-control"
                      style={{
                        fontSize: "14.5px",
                        borderRadius: "8px",
                        border: "1px solid #d1d5db",
                        padding: "10px 14px",
                        color: "#1f2937",
                        backgroundColor: "#ffffff",
                        boxShadow: "none"
                      }}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn w-100 text-white gradient-background fs-5 d-flex align-items-center justify-content-center"
                      style={{ height: "48px", borderRadius: "8px", fontWeight: "600" }}
                    >
                      {isSubmitting ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Submitting Registration...
                        </>
                      ) : (
                        <>Become a Volunteer →</>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BecomeAVolunteer() {
  return (
    <Provider store={Store}>
      <Context>
        <HeaderStyleThirteen headerSticky="rbt-sticky" headerType="" />
        <MobileMenu />
        <Cart />

        {/* Breadcrumb - Placed directly under navbar with 0 top margin */}
        <div className="rbt-breadcrumb-default ptb--60 ptb_md--40 ptb_sm--30 gradient1-background m-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h2 className="title">
                    Become a <span className="gradient-text">Volunteer</span>
                  </h2>
                  <ul className="page-list justify-content-center d-flex align-items-center gap-2">
                    <li className="rbt-breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <i className="feather-chevron-right text-muted"></i>
                    </li>
                    <li className="rbt-breadcrumb-item active text-primary">Volunteer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="py-5" style={{ backgroundColor: "#ffffff" }}>
          <VolunteerFormInner />
        </div>

        <FooterOne islamic="footer-islamic" />
      </Context>
    </Provider>
  );
}
