"use client";

import { useEffect, useState, useMemo } from "react";
import axios from "axios";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import CategoryHead from "@/components/Category/CategoryHead";
import FooterOne from "@/components/Footer/Footer-One";

import CourseDetails from "../../../data/course-details/courseData.json";
import Separator from "@/components/Common/Separator";
import CourseCardTwo from "@/components/Category/Filter/CourseCard-Two";
import HeaderStyleThirteen from "@/components/Header/HeaderStyle-Thirteen";

const CourseMasonryLayout = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState("All Course");
  const [searchQuery, setSearchQuery] = useState("");

  const fallbackCourses = useMemo(() => {
    return JSON.parse(JSON.stringify(CourseDetails.courseTab || []));
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";
        const res = await axios.get(`${apiUrl}/courses/public`);
        if (res.data?.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
          setAllCourses(res.data.data);
        } else {
          setAllCourses(fallbackCourses);
        }
      } catch (err) {
        console.warn("Could not fetch public courses from backend, using fallback data:", err.message);
        setAllCourses(fallbackCourses);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [fallbackCourses]);

  const filteredCourses = useMemo(() => {
    let result = allCourses;

    if (selectedType === "Latest") {
      result = result.filter(
        (c) => c.isNewCourse || (c.activeBatch && (new Date(c.activeBatch.startDate) - new Date()) / (1000 * 60 * 60 * 24) <= 30)
      );
    } else if (selectedType !== "All Course") {
      result = result.filter((c) => {
        const dept = (c.departmentId?.name || c.category || c.courseType || "").toLowerCase();
        const title = (c.title || c.courseTitle || "").toLowerCase();
        return dept.includes(selectedType.toLowerCase()) || title.includes(selectedType.toLowerCase());
      });
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((c) => {
        const title = (c.title || c.courseTitle || "").toLowerCase();
        const desc = (c.description || c.desc || "").toLowerCase();
        return title.includes(q) || desc.includes(q);
      });
    }

    return result;
  }, [allCourses, selectedType, searchQuery]);

  return (
    <>
      <Provider store={Store}>
        <Context>
          {/* <HeaderStyleTen headerSticky="rbt-sticky" headerType={true} /> */}
          <HeaderStyleThirteen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />

          <CategoryHead
            category={allCourses}
            courseFilter={filteredCourses}
            filterItem={(type) => setSelectedType(type)}
            searchQuery={searchQuery}
            onSearchChange={(q) => setSearchQuery(q)}
          />
          <div className="rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <div className="row g-5">
                <CourseCardTwo course={filteredCourses} loading={loading} />
              </div>
            </div>
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default CourseMasonryLayout;
